# ContractLens · Build Report

Date: 2026-11-25 (KST). Final submission deadline: 2026-12-01 07:00 KST.
Status: **app built, verified locally in a real browser run. Cloud review is
code-complete but blocked on the not-yet-issued Sprint 3 Firebase project.
Real Gemini Nano output quality is blocked on this VM's Chromium shipping an
echo stub instead of the model (details below).**

## What was built

A Vite + TypeScript web app (no framework) implementing the fixed concept:

- **Step 1 · Mask on-device.** Three detection layers, each finding labelled
  in the UI by the layer that caught it:
  - `src/pii/regexLayer.ts` "Safety-net rules": structured patterns (email,
    Korean RRN, phone, card, account-like digit groups, KR/US road
    addresses).
  - Same file, "Form-field rules": label-anchored values (`대표자:`, `수급자):`,
    `계좌번호:`, `Customer:`, `Billing address:`, `주소:` line, ...).
  - `src/ai/onDevice.ts` "Gemini Nano (on-device)": Chrome Prompt API
    (`window.LanguageModel`), ~1000-char paragraph chunks, JSON-array
    response, and every returned value verified as an exact substring before
    it is trusted.
  - `src/pii/mask.ts` merges layers, resolves overlaps by type specificity,
    and replaces values with stable tokens (`[NAME_1]`, `[ACCOUNT_1]`, ...).
- **Step 2 · Review, hybrid.** `src/ai/cloud.ts` sends ONLY the masked text
  through the Firebase AI Logic SDK (`firebase` 12.19.0, `getAI` +
  `GoogleAIBackend`, `getGenerativeModel` with
  `InferenceMode.PREFER_IN_CLOUD`, JSON response) and parses a structured
  clause review. When offline or unconfigured, `src/ai/localReview.ts` runs
  a deterministic KO+EN clause-pattern scan on-device (7 risk categories),
  optionally topped with a Gemini Nano plain-language summary. The UI states
  which review ran and why the other did not.
- **Step 3 · Proof surface.** Panel 4 shows the exact payload that was (or
  would be) sent to the cloud. A mode banner (driven by `navigator.onLine`,
  `online`/`offline` events, and a "Simulate offline" toggle) always shows
  ON-DEVICE ONLY vs HYBRID. Status chips show the real
  `LanguageModel.availability()`, network state, and cloud configuration.
- **Samples** (`src/samples.ts`): one Korean freelance 용역 계약서 with 10
  planted PII items and 5 planted one-sided clauses; one English SaaS terms
  text with 5 planted PII items and 5 planted one-sided clauses. All names
  and numbers are invented.

Architecture note: Firebase AI Logic's web on-device path is itself built on
Chrome's Prompt API, but the SDK can only initialise with a Firebase app,
which does not exist yet. Masking therefore calls the Prompt API directly
(same model, same path), which is what makes the core demo work with zero
configuration and zero network. The Firebase AI Logic SDK carries the cloud
deep review, exactly as the hackathon intends.

## Verified, with evidence (all checks run by me on 2026-11-25)

1. **Unit tests: 25/25 pass** (`npm test`, vitest). For both samples: every
   planted PII item is absent from the masked text; names are attributed to
   the form-field layer; ordinary content is NOT over-masked (amounts like
   `5,000,000원`, `50%`, dates, company name, clause wording all survive);
   the local review flags the planted clauses and its quotes come from the
   masked text.
2. **Production build passes** (`tsc --noEmit && vite build`), bundle
   110.5 kB JS (29.4 kB gzip).
3. **Real browser runs** (headless Chromium 158, `vite preview`, scripted
   with Playwright; screenshots in `verification-shots/`):
   - Korean sample, online: **10 findings, 0 planted values in the masked
     text, 0 in the cloud-payload panel**, 5 clause cards (one-sided
     termination HIGH, excessive penalty HIGH at 50%, blanket rights waiver
     HIGH, auto-renewal MEDIUM, non-compete MEDIUM), negotiation summary
     rendered, 0 page errors.
   - Korean sample, **real offline** (Chromium offline emulation,
     `navigator.onLine === false`): banner switched to ON-DEVICE ONLY,
     **10 findings, 0 leaks**, local review ran, UI stated the cloud review
     was not attempted.
   - English sample: **5 findings, 0 leaks**, 5 clause cards.
4. **Prompt API probed directly in this VM.** `window.LanguageModel` exists
   and `availability()` / `create()` / `prompt()` all execute, BUT the model
   is an echo stub. Verbatim probe output: *"On-device model is not
   available in Chromium, this API is just echoing back the input"*. So the
   real Gemini Nano is **not available in this VM** and model output quality
   could not be verified here. What was verified instead: the full model
   code path runs end-to-end against the stub (session create, chunked
   prompts, JSON extraction, substring verification, merge) and correctly
   added **0** candidates, because the stub's echoed example value `"..."`
   failed substring verification. The guard works; the rules carried the
   masking; nothing leaked.
5. **Bug found by verification and fixed:** the first Nano run failed with
   "The input is too large." at ~3000-char chunks. Chunks are now ~1000
   chars with split-and-retry on window overflow and per-chunk error
   isolation. Rebuilt and re-verified (tests + all browser runs green).

## Blocked, and on what

- **Cloud deep review not runnable yet.** No Firebase project exists: the
  Sprint 3 Google account/quota has not been issued (identity verification
  was completed by the user minutes before this build started). The app
  therefore runs in on-device-only mode and says so in the UI; no cloud call
  is attempted and nothing fails silently. To unblock: on the issued
  account, create a Firebase project, enable AI Logic (Gemini Developer API
  provider), copy `.env.example` to `.env.local` with the web config, and
  rebuild. Heads-up from the Firebase docs: the AI Logic console setup
  enforces App Check, so local development needs the App Check debug
  provider registered.
- **Real Gemini Nano quality must be checked in the user's own Chrome**
  (desktop Chrome 139+): open the app, click "Enable on-device model" if
  the chip says "not downloaded yet", load Sample 1, run Mask & review, and
  confirm (a) findings rows labelled "Gemini Nano (on-device)" appear for
  anything the rules miss, and (b) the green Nano plain-language summary box
  appears under the review. Nothing about the Nano layer can be confirmed
  beyond the code path until then.

## Deliberate exclusions (honest scope)

- Contract amounts are not masked by design: penalties are expressed as
  amounts/percentages, and masking them would break the risk review. The
  concept's "fees" are treated as clause content, not identity data.
- Company names are not personal data; their representatives and contacts
  are masked.
- The local review is a pattern scan and is labelled as such in the UI; it
  never presents itself as the cloud review or as legal advice.

## File layout

```
index.html                  UI shell (4 panels + status chips + mode banner)
src/main.ts                 wiring: status, analyze flow, rendering
src/styles.css              styling
src/config.ts               env-first Firebase config + cloudConfigured flag
src/firebase-config.ts      file-based config fallback (empty placeholders)
src/samples.ts              Korean + English sample contracts (invented data)
src/pii/types.ts            Finding / Layer / PiiType types
src/pii/regexLayer.ts       deterministic safety-net + form-field rules
src/pii/mask.ts             merge, overlap resolution, token replacement
src/ai/onDevice.ts          Prompt API: availability, download, detect, summarize
src/ai/localReview.ts       deterministic on-device clause scan (KO + EN)
src/ai/cloud.ts             Firebase AI Logic cloud deep review (masked text only)
src/ai/reviewTypes.ts       shared review result types
tests/mask.test.ts          25 unit tests (masking + local review)
verification-shots/         screenshots from the verification runs
.env.example                config template for after account issuance
```

## Remaining for deployment and the Devpost submission

1. Sprint 3 account issuance → Firebase project + AI Logic enablement →
   `.env.local` → rebuild → verify the cloud deep review end-to-end
   (including App Check debug provider for localhost).
2. Verify the Gemini Nano layer in real desktop Chrome (see above).
3. Deploy (Firebase Hosting fits the stack; any static host works).
4. Record the demo in the proven order: network OFF masking first, then the
   masked-only cloud payload, then the hybrid mode switch.
5. Finish the Devpost project (details, additional info, submit) before
   2026-12-01 07:00 KST.

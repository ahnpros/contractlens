# ContractLens

**Upload the contract. Never your identity.**

Paste a contract. Personal data (names, resident registration numbers, phone
numbers, emails, bank account numbers, addresses) is detected and masked **on
your device**. Only the masked text can be sent to cloud Gemini for a deep,
clause-by-clause risk review: risky clauses, a plain-language explanation of
each, and a counter-proposal you can take into the negotiation. Offline, the
on-device path still answers instantly with a basic local review.

Built for **#BuildHybridAI 2026** (Google · Firebase) with Firebase AI Logic
hybrid inference.

## How it works

Masking runs in three layers, and the UI says which layer caught each item:

1. **Safety-net rules** (deterministic patterns): emails, Korean resident
   registration numbers, phone numbers, card numbers, bank-account-like digit
   groups, road addresses. Instant, offline, no model involved.
2. **Form-field rules** (label-anchored): values introduced by contract
   labels such as `대표자:`, `계좌번호:`, `Customer:`, `Billing address:`.
3. **Gemini Nano on-device** (Chrome Prompt API, `window.LanguageModel`):
   catches what rules cannot, e.g. names written in prose. Every value the
   model returns is verified to be an exact substring of your text before it
   is trusted. This is the same on-device path Firebase AI Logic uses for web
   hybrid inference; calling the Prompt API directly is what lets masking work
   with **no Firebase project and no network at all**.

Review then runs hybrid:

- **Online + Firebase configured**: the masked text, and only the masked
  text, goes to cloud Gemini through the Firebase AI Logic SDK
  (`firebase/ai`, `InferenceMode.PREFER_IN_CLOUD`) for a deep clause review
  with counter-proposal wording.
- **Offline or unconfigured**: a deterministic on-device clause-pattern scan
  (one-sided termination, excessive penalties, rights waivers, auto-renewal
  traps, unilateral changes, liability waivers, non-competes) plus an
  optional Gemini Nano plain-language summary. The UI always shows which
  review actually ran, and panel 4 shows the exact payload that leaves, or
  would leave, the device.

The current mode (on-device only / hybrid) is shown in a banner at all times,
driven by the real network state plus a "Simulate offline" toggle for demos.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # masking + local review unit tests (25 tests)
npm run build      # production build into dist/
npm run preview    # serve the production build
```

For the on-device model layer, open the app in **Chrome 139+ on desktop**.
If the status chip says "not downloaded yet", click **Enable on-device
model** once to download Gemini Nano.

## Configure the cloud review (after the Sprint 3 account is issued)

1. Create a Firebase project and enable **AI Logic** (Firebase console →
   AI Services → AI Logic → Get started, Gemini Developer API provider).
2. Copy `.env.example` to `.env.local` and fill in the web config values
   (or edit `src/firebase-config.ts`). No secrets are committed.
3. Rebuild. The status chip flips to "configured" and reviews go hybrid.

Note: the AI Logic console setup enforces Firebase App Check. For local
development, configure the App Check debug provider as described in the
Firebase AI Logic web docs.

## Deliberate scope choices

- Contract **amounts are not masked**: penalty clauses are expressed in
  amounts and percentages, and masking them would break the risk review.
  Masking targets data that identifies a person.
- Company names are not treated as personal data; the people acting for them
  (representatives, contacts) are.
- ContractLens gives general information about contract wording, not legal
  advice.

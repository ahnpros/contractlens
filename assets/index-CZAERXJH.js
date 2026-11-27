(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const cn=`프리랜서 용역 계약서

갑(위탁자): 주식회사 한빛소프트
대표자: 이서연
담당자 연락처: 010-9876-5432
이메일: seoyeon.lee@hanbitsoft.example.com
주소: 서울특별시 강남구 테헤란로 123, 4층

을(수급자): 김민준
주민등록번호: 900423-2123456
연락처: 010-1234-5678
이메일: minjun.kim@example.com
주소: 경기도 성남시 분당구 판교로 45, 301호
계좌번호: 국민은행 123456-78-901234

제1조 (목적)
본 계약은 갑이 을에게 웹사이트 유지보수 용역을 위탁하고, 을이 이를 수행함에 있어 필요한 사항을 정함을 목적으로 한다.

제2조 (계약금액)
갑은 을에게 용역 대가로 금 5,000,000원(부가세 별도)을 매월 말일에 을의 위 계좌로 지급한다.

제3조 (계약기간)
계약기간은 2026년 1월 5일부터 2026년 6월 30일까지로 한다.

제4조 (해지)
갑은 7일 전에 서면으로 통보함으로써 언제든지 본 계약을 해지할 수 있다. 을은 갑의 사전 서면 동의 없이는 본 계약을 해지할 수 없다.

제5조 (위약금)
을이 계약을 중도 해지하거나 계약상 의무를 위반한 경우, 을은 계약금액의 50%에 해당하는 위약금을 갑에게 지급하여야 하며, 갑은 이를 초과하는 손해에 대해서도 별도로 배상을 청구할 수 있다.

제6조 (권리 귀속 및 포기)
을은 본 용역의 결과물에 대한 저작권, 특허권 등 일체의 권리를 갑에게 양도하며, 향후 어떠한 권리도 주장하지 않을 것을 확약하고 모든 권리를 포기한다.

제7조 (자동 갱신)
계약기간 만료 90일 전까지 을이 서면으로 해지 의사를 통보하지 아니한 경우, 본 계약은 동일한 조건으로 1년씩 자동으로 갱신된다.

제8조 (비밀유지)
을은 본 계약과 관련하여 알게 된 갑의 영업비밀을 계약 종료 후에도 제3자에게 누설하여서는 아니 된다.

제9조 (경업금지)
을은 계약 종료 후 2년간 갑과 동종 업계의 업무를 수행하거나 동종 업체에 취업할 수 없다.
`,ln=`MASTER SUBSCRIPTION AND SERVICES AGREEMENT

Customer: Jane Cooper
Email: jane.cooper@example.com
Phone: +1-415-555-0132
Billing address: 4820 Mission Street, San Francisco, CA 94112
Payment account: 001122334455

1. Services. Provider will supply the hosted analytics platform described in the order form, and Customer will pay the subscription fees set out in that order form.

2. Term and Auto-Renewal. This Agreement automatically renews for successive 12-month terms unless Customer gives written notice of non-renewal at least 90 days before the end of the then-current term. Provider may increase fees by up to 20% at each renewal without further notice.

3. Changes to Terms. Provider may change these terms, including pricing, at any time in its sole discretion, effective immediately upon posting the revised terms. Continued use of the service constitutes acceptance of the changed terms.

4. Termination. Provider may terminate this Agreement at any time for convenience, for any reason or no reason, upon 5 days' notice. Customer may not terminate this Agreement before the end of the current term for any reason.

5. Liability and Waiver. Provider shall not be liable for any indirect, incidental, or consequential damages, even if advised of the possibility of such damages. Customer waives any right to participate in a class action and agrees that all disputes will be resolved exclusively by binding arbitration.

6. Governing Law. This Agreement is governed by the laws of the State of California.
`,dn=[{id:"ko",label:"Sample 1 · Korean freelance contract (한국어 용역 계약서)",text:cn},{id:"en",label:"Sample 2 · English SaaS terms",text:ln}],un={VITE_FIREBASE_API_KEY:"AIzaSyASPSRSQe6TDzcg98Ill4-ACuToQIJRkNk",VITE_FIREBASE_APP_ID:"1:811980457939:web:089a5d43161ce4595a5126",VITE_FIREBASE_AUTH_DOMAIN:"fb-ailogic26vrt-3287.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"811980457939",VITE_FIREBASE_PROJECT_ID:"fb-ailogic26vrt-3287",VITE_GEMINI_CLOUD_MODEL:"gemini-2.5-flash",VITE_RECAPTCHA_SITE_KEY:"6LdLLDUuAAAAAG-s1ijT--pUBOtzZVSeAlbgc18e"},x=un,Y={apiKey:x.VITE_FIREBASE_API_KEY,authDomain:x.VITE_FIREBASE_AUTH_DOMAIN,projectId:x.VITE_FIREBASE_PROJECT_ID,appId:x.VITE_FIREBASE_APP_ID,messagingSenderId:x.VITE_FIREBASE_MESSAGING_SENDER_ID},j=!!(Y.apiKey&&Y.authDomain&&Y.projectId&&Y.appId),Me=x.VITE_GEMINI_CLOUD_MODEL,hn=x.VITE_RECAPTCHA_SITE_KEY;function A(t,e,n,s=0,o){const r=[];e.lastIndex=0;let a;for(;(a=e.exec(t))!==null;){const i=a[s];if(!i||o&&!o(i))continue;const c=s===0?a.index:a.index+a[0].indexOf(i);r.push({type:n,value:i,start:c,end:c+i.length}),a[0].length===0&&e.lastIndex++}return r}const Ot=t=>t.replace(/\D/g,"").length;function fn(t){const e=[];return e.push(...A(t,/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g,"EMAIL")),e.push(...A(t,/\b\d{6}-[1-4]\d{6}\b/g,"RRN")),e.push(...A(t,/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g,"CARD")),e.push(...A(t,/\b01[016789]-\d{3,4}-\d{4}\b/g,"PHONE"),...A(t,/\b0\d{1,2}-\d{3,4}-\d{4}\b/g,"PHONE"),...A(t,/\b01[016789]\d{7,8}\b/g,"PHONE")),e.push(...A(t,/\+\d{1,3}-\d{3}-\d{3,4}-\d{4}\b/g,"PHONE")),e.push(...A(t,/\b\d{2,6}-\d{2,6}(?:-\d{2,7})?\b/g,"ACCOUNT",0,n=>{const s=Ot(n);return s>=10&&s<=16})),e.push(...A(t,/(?:서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시)\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,"ADDRESS"),...A(t,/(?:경기도|강원특별자치도|강원도|충청북도|충청남도|전북특별자치도|전라북도|전라남도|경상북도|경상남도|제주특별자치도)\s+[가-힣]{1,}시\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,"ADDRESS")),e.push(...A(t,/\b\d{1,6}\s+[A-Z][A-Za-z.]*(?:\s+[A-Z][A-Za-z.]*)*\s+(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Lane|Ln\.|Drive|Dr\.)(?:\s*,\s*[A-Za-z .]+,\s*[A-Z]{2}\s+\d{5})?/g,"ADDRESS")),e.map(n=>({...n,layer:"regex"}))}function pn(t){const e=[];return e.push(...A(t,/(?:대표자|담당자|성명|이름|수급자|계약자)\s*\)?\s*[:：]\s*([가-힣]{2,4})(?![가-힣])/g,"NAME",1)),e.push(...A(t,/(?:Full name|Customer|Client|Contractor|Account holder|Name)\s*[:：]\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})/g,"NAME",1)),e.push(...A(t,/(?:계좌번호|계좌|Account(?:\s*number)?|Payment account)\s*[:：]?\s*(?:[가-힣]{2,6}은행\s*)?(\d[\d-]{8,18}\d)/g,"ACCOUNT",1,n=>{const s=Ot(n);return s>=10&&s<=16})),e.push(...A(t,/(?:주소|Address|Billing address)\s*[:：]\s*([^\n]{6,80})/g,"ADDRESS",1,n=>/\d/.test(n))),e.map(n=>({...n,layer:"field"}))}function gn(t){return[...fn(t),...pn(t)]}const tt={EMAIL:0,RRN:1,CARD:2,PHONE:3,ACCOUNT:4,ADDRESS:5,NAME:6};function mn(t){const e=[...t].sort((s,o)=>{if(s.start!==o.start)return s.start-o.start;const r=tt[s.type]-tt[o.type];return r!==0?r:o.end-o.start-(s.end-s.start)}),n=[];for(const s of e){if(s.end<=s.start||!s.value)continue;n.some(r=>s.start<r.end&&r.start<s.end)||n.push(s)}return n.sort((s,o)=>s.start-o.start)}function En(t,e){const n=new Map,s=e.map(a=>{const i=(n.get(a.type)??0)+1;return n.set(a.type,i),{...a,token:`[${a.type}_${i}]`}});let o="",r=0;for(const a of s)o+=t.slice(r,a.start)+a.token,r=a.end;return o+=t.slice(r),{maskedText:o,items:s}}function yn(t,e){return En(t,mn(e))}function ie(){return typeof window<"u"&&"LanguageModel"in window}async function Rt(){if(!ie())return"unsupported";try{const t=await window.LanguageModel.availability();return t==="available"||t==="downloadable"||t==="downloading"||t==="unavailable"?t:"unavailable"}catch{return"unavailable"}}async function bn(t){if(!ie())throw new Error("Prompt API not supported");(await window.LanguageModel.create({monitor(n){n.addEventListener("downloadprogress",s=>t==null?void 0:t(s.loaded))}})).destroy()}const wn=["You are a privacy filter running locally on the user's device.","Find every piece of personal data in the contract excerpt the user gives you:","person names, resident registration / national ID numbers, phone numbers,","email addresses, bank account numbers, card numbers, and postal addresses.",'Reply with ONLY a JSON array like [{"type":"NAME","value":"..."}].',"Use types NAME, RRN, PHONE, EMAIL, ACCOUNT, CARD, ADDRESS.","Every value must be an exact substring of the excerpt. If there is none, reply []."].join(" "),_n=["NAME","RRN","PHONE","EMAIL","ACCOUNT","ADDRESS","CARD"];function An(t,e=1e3){const n=[];let s=0;for(;s<t.length;){let o=Math.min(t.length,s+e);if(o<t.length){const r=t.lastIndexOf(`
`,o);r>s+500&&(o=r)}n.push({start:s,text:t.slice(s,o)}),s=o}return n}async function In(t){if(!ie())return[];const e=[],n=await window.LanguageModel.create({initialPrompts:[{role:"system",content:wn}]}),s=async o=>{try{return await n.prompt(`Contract excerpt:
"""
${o.text}
"""
JSON array only:`)}catch(r){if(o.text.length>240&&/too large|context|quota/i.test(r.message)){const a=Math.floor(o.text.length/2),i=await s({start:o.start,text:o.text.slice(0,a)}),c=await s({start:o.start+a,text:o.text.slice(a)});return`${i}
${c}`}throw r}};try{for(const o of An(t)){let r;try{r=await s(o)}catch{continue}const a=r.slice(r.indexOf("["),r.lastIndexOf("]")+1);if(!a)continue;let i;try{i=JSON.parse(a)}catch{continue}if(Array.isArray(i))for(const c of i){const l=c;if(!l.value||!l.type)continue;const f=l.type.toUpperCase();if(!_n.includes(f))continue;let u=o.text.indexOf(l.value);for(;u!==-1;)e.push({type:f,value:l.value,start:o.start+u,end:o.start+u+l.value.length,layer:"model"}),u=o.text.indexOf(l.value,u+l.value.length)}}}finally{n.destroy()}return e}async function Tn(t,e){if(!ie()||await Rt()!=="available")return null;const s=await window.LanguageModel.create({initialPrompts:[{role:"system",content:"You explain contract risks in plain, friendly language in 3 short sentences. The contract text contains placeholders like [NAME_1]; never invent real names or numbers."}]});try{const o=t.slice(0,1400);return(await s.prompt(`Risky clauses found: ${e.join("; ")||"none"}.
Masked contract excerpt:
"""
${o}
"""
Write a 3-sentence plain-language summary of what the signer should watch out for.`)).trim()||null}catch{return null}finally{s.destroy()}}const Cn=()=>{};var nt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},vn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const r=t[n++];e[s++]=String.fromCharCode((o&31)<<6|r&63)}else if(o>239&&o<365){const r=t[n++],a=t[n++],i=t[n++],c=((o&7)<<18|(r&63)<<12|(a&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],a=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const r=t[o],a=o+1<t.length,i=a?t[o+1]:0,c=o+2<t.length,l=c?t[o+2]:0,f=r>>2,u=(r&3)<<4|i>>4;let E=(i&15)<<2|l>>6,p=l&63;c||(p=64,a||(E=64)),s.push(n[f],n[u],n[E],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const r=n[t.charAt(o++)],i=o<t.length?n[t.charAt(o)]:0;++o;const l=o<t.length?n[t.charAt(o)]:64;++o;const u=o<t.length?n[t.charAt(o)]:64;if(++o,r==null||i==null||l==null||u==null)throw new Sn;const E=r<<2|i>>4;if(s.push(E),l!==64){const p=i<<4&240|l>>2;if(s.push(p),u!==64){const w=l<<6&192|u;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const On=function(t){const e=Dt(t);return Le.encodeByteArray(e,!0)},kt=function(t){return On(t).replace(/\./g,"")},Rn=function(t){try{return Le.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=()=>xe().__FIREBASE_DEFAULTS__,kn=()=>{if(typeof process>"u"||typeof nt>"u")return;const t=nt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rn(t[1]);return e&&JSON.parse(e)},Pn=()=>{try{return Cn()||Dn()||kn()||Nn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nt=()=>{var t;return(t=Pn())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function $e(){try{return typeof indexedDB=="object"}catch{return!1}}function Mn(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var r;e(((r=o.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirebaseError";class K extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ln,Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,r=this.errors[e],a=r?xn(r,s):"Error",i=`${this.serviceName}: ${a} (${o}).`;return new K(o,i,s)}}function xn(t,e){try{let n=0,s="";for(;n<t.length;){const o=t.indexOf("{$",n);if(o===-1){s+=t.substring(n);break}const r=t.indexOf("}",o+2);if(r===-1){s+=t.substring(n);break}const a=t.substring(o+2,r),i=e[a];s+=t.substring(n,o)+(i!=null?String(i):`<${a}?>`),n=r+1}return s}catch{return t}}function Ae(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const r=t[o],a=e[o];if(st(r)&&st(a)){if(!Ae(r,a))return!1}else if(r!==a)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function st(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1e3,Bn=2,Fn=14400*1e3,Un=.5;function Hn(t,e=$n,n=Bn){const s=e*Math.pow(n,t),o=Math.round(Un*s*(Math.random()-.5)*2);return Math.min(Fn,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class U{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Z;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jn(e))try{this.getOrInitializeService({instanceIdentifier:M})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:o});s.resolve(r)}catch{}}}}clearInstance(e=M){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=M){return this.instances.has(e)}getOptions(e=M){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);s===i&&a.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const r=this.instances.get(s);return r&&e(r,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vn(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=M){return this.component?this.component.multipleInstances?e:M:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vn(t){return t===M?void 0:t}function jn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(g||(g={}));const qn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Kn=g.INFO,Wn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Yn=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=Wn[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fe{constructor(e){this.name=e,this._logLevel=Kn,this._logHandler=Yn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Jn=(t,e)=>e.some(n=>t instanceof n);let ot,rt;function Xn(){return ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zn(){return rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mt=new WeakMap,Ie=new WeakMap,Lt=new WeakMap,de=new WeakMap,Ue=new WeakMap;function Qn(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{n(P(t.result)),o()},a=()=>{s(t.error),o()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Mt.set(n,t)}).catch(()=>{}),Ue.set(e,t),e}function es(t){if(Ie.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{n(),o()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});Ie.set(t,e)}let Te={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ie.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return P(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ts(t){Te=t(Te)}function ns(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ue(this),e,...n);return Lt.set(s,e.sort?e.sort():[e]),P(s)}:Zn().includes(t)?function(...e){return t.apply(ue(this),e),P(Mt.get(this))}:function(...e){return P(t.apply(ue(this),e))}}function ss(t){return typeof t=="function"?ns(t):(t instanceof IDBTransaction&&es(t),Jn(t,Xn())?new Proxy(t,Te):t)}function P(t){if(t instanceof IDBRequest)return Qn(t);if(de.has(t))return de.get(t);const e=ss(t);return e!==t&&(de.set(t,e),Ue.set(e,t)),e}const ue=t=>Ue.get(t);function os(t,e,{blocked:n,upgrade:s,blocking:o,terminated:r}={}){const a=indexedDB.open(t,e),i=P(a);return s&&a.addEventListener("upgradeneeded",c=>{s(P(a.result),c.oldVersion,c.newVersion,P(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{r&&c.addEventListener("close",()=>r()),o&&c.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const rs=["get","getKey","getAll","getAllKeys","count"],as=["put","add","delete","clear"],he=new Map;function at(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(he.get(e))return he.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=as.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rs.includes(n)))return;const r=async function(a,...i){const c=this.transaction(a,o?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&c.done]))[0]};return he.set(e,r),r}ts(t=>({...t,get:(e,n,s)=>at(e,n)||t.get(e,n,s),has:(e,n)=>!!at(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cs(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ce="@firebase/app",it="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new Fe("@firebase/app"),ls="@firebase/app-compat",ds="@firebase/analytics-compat",us="@firebase/analytics",hs="@firebase/app-check-compat",fs="@firebase/app-check",ps="@firebase/auth",gs="@firebase/auth-compat",ms="@firebase/database",Es="@firebase/data-connect",ys="@firebase/database-compat",bs="@firebase/functions",ws="@firebase/functions-compat",_s="@firebase/installations",As="@firebase/installations-compat",Is="@firebase/messaging",Ts="@firebase/messaging-compat",Cs="@firebase/performance",vs="@firebase/performance-compat",Ss="@firebase/remote-config",Os="@firebase/remote-config-compat",Rs="@firebase/storage",Ds="@firebase/storage-compat",ks="@firebase/firestore",Ns="@firebase/ai",Ps="@firebase/firestore-compat",Ms="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="[DEFAULT]",Ls={[Ce]:"fire-core",[ls]:"fire-core-compat",[us]:"fire-analytics",[ds]:"fire-analytics-compat",[fs]:"fire-app-check",[hs]:"fire-app-check-compat",[ps]:"fire-auth",[gs]:"fire-auth-compat",[ms]:"fire-rtdb",[Es]:"fire-data-connect",[ys]:"fire-rtdb-compat",[bs]:"fire-fn",[ws]:"fire-fn-compat",[_s]:"fire-iid",[As]:"fire-iid-compat",[Is]:"fire-fcm",[Ts]:"fire-fcm-compat",[Cs]:"fire-perf",[vs]:"fire-perf-compat",[Ss]:"fire-rc",[Os]:"fire-rc-compat",[Rs]:"fire-gcs",[Ds]:"fire-gcs-compat",[ks]:"fire-fst",[Ps]:"fire-fst-compat",[Ns]:"fire-vertex","fire-js":"fire-js",[Ms]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map,xs=new Map,Se=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if(Se.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;Se.set(e,t);for(const n of re.values())ct(n,t);for(const n of xs.values())ct(n,t);return!0}function He(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $s(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},R=new Be("app","Firebase",Bs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new U("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}function xt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:ve,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw R.create("bad-app-name",{appName:String(o)});if(n||(n=Nt()),!n)throw R.create("no-options");const r=re.get(o);if(r)if(Ae(n,r.options)){if(Ae(s,r.config))return r;throw R.create("duplicate-app",{appName:o,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw R.create("duplicate-app",{appName:o,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(n)});const a=new zn(o);for(const c of Se.values())a.addComponent(c);const i=new Fs(n,s,a);return re.set(o,i),i}function $t(t=ve){const e=re.get(t);if(!e&&t===ve&&Nt())return xt();if(!e)throw R.create("no-app",{appName:t});return e}function B(t,e,n){let s=Ls[t]??t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),D.warn(a.join(" "));return}z(new U(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="firebase-heartbeat-database",Hs=1,Q="firebase-heartbeat-store";let fe=null;function Bt(){return fe||(fe=os(Us,Hs,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Q)}catch(n){console.warn(n)}}}}).catch(t=>{throw R.create("idb-open",{originalErrorMessage:t.message})})),fe}async function Gs(t){try{const n=(await Bt()).transaction(Q),s=await n.objectStore(Q).get(Ft(t));return await n.done,s}catch(e){if(e instanceof K)D.warn(e.message);else{const n=R.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});D.warn(n.message)}}}async function lt(t,e){try{const s=(await Bt()).transaction(Q,"readwrite");await s.objectStore(Q).put(e,Ft(t)),await s.done}catch(n){if(n instanceof K)D.warn(n.message);else{const s=R.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});D.warn(s.message)}}}function Ft(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=1024,js=30;class zs{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ks(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dt();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:o}),this._heartbeatsCache.heartbeats.length>js){const a=Ws(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){D.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dt(),{heartbeatsToSend:s,unsentEntries:o}=qs(this._heartbeatsCache.heartbeats),r=kt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return D.warn(n),""}}}function dt(){return new Date().toISOString().substring(0,10)}function qs(t,e=Vs){const n=[];let s=t.slice();for(const o of t){const r=n.find(a=>a.agent===o.agent);if(r){if(r.dates.push(o.date),ut(n)>e){r.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ut(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ks{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $e()?Mn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ut(t){return kt(JSON.stringify({version:2,heartbeats:t})).length}function Ws(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){z(new U("platform-logger",e=>new is(e),"PRIVATE")),z(new U("heartbeat",e=>new zs(e),"PRIVATE")),B(Ce,it,t),B(Ce,it,"esm2020"),B("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ys("");var Js="firebase",Xs="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B(Js,Xs,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Map,Ut={activated:!1,tokenObservers:[]},Zs={initialized:!1,enabled:!1};function b(t){return Oe.get(t)||{...Ut}}function Qs(t,e){return Oe.set(t,e),Oe.get(t)}function ce(){return Zs}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="https://content-firebaseappcheck.googleapis.com/v1",eo="exchangeRecaptchaEnterpriseToken",to="exchangeDebugToken",ht={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},no=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,s,o,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=o,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=o,o>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Z,this.pending.promise.catch(n=>{}),await oo(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Z,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function oo(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},I=new Be("appCheck","AppCheck",ro);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t=!1){var e;return t?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Ge(t){if(!b(t).activated)throw I.create("use-before-activation",{appName:t.name})}function Gt(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),o=Math.floor((e-n*3600*24-s*3600)/60),r=e-n*3600*24-s*3600-o*60;let a="";return n&&(a+=te(n)+"d:"),s&&(a+=te(s)+"h:"),a+=te(o)+"m:"+te(r)+"s",a}function te(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve({url:t,body:e},n){const s={"Content-Type":"application/json"},o=n.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&(s["X-Firebase-Client"]=u)}const r={method:"POST",body:JSON.stringify(e),headers:s};let a;try{a=await fetch(t,r)}catch(u){throw I.create("fetch-network-error",{originalErrorMessage:u==null?void 0:u.message})}if(a.status!==200)throw I.create("fetch-status-error",{httpStatus:a.status});let i;try{i=await a.json()}catch(u){throw I.create("fetch-parse-error",{originalErrorMessage:u==null?void 0:u.message})}const c=i.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw I.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${i.ttl}`});const l=Number(c[1])*1e3,f=Date.now();return{token:i.token,expireTimeMillis:f+l,issuedAtTimeMillis:f}}function ao(t,e){const{projectId:n,appId:s,apiKey:o}=t.options;return{url:`${Ht}/projects/${n}/apps/${s}:${eo}?key=${o}`,body:{recaptcha_enterprise_token:e}}}function Vt(t,e){const{projectId:n,appId:s,apiKey:o}=t.options;return{url:`${Ht}/projects/${n}/apps/${s}:${to}?key=${o}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="firebase-app-check-database",co=1,ee="firebase-app-check-store",jt="debug-token";let ne=null;function zt(){return ne||(ne=new Promise((t,e)=>{try{const n=indexedDB.open(io,co);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var o;e(I.create("storage-open",{originalErrorMessage:(o=s.target.error)==null?void 0:o.message}))},n.onupgradeneeded=s=>{const o=s.target.result;switch(s.oldVersion){case 0:o.createObjectStore(ee,{keyPath:"compositeKey"})}}}catch(n){e(I.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ne)}function lo(t){return Kt(Wt(t))}function uo(t,e){return qt(Wt(t),e)}function ho(t){return qt(jt,t)}function fo(){return Kt(jt)}async function qt(t,e){const s=(await zt()).transaction(ee,"readwrite"),r=s.objectStore(ee).put({compositeKey:t,value:e});return new Promise((a,i)=>{r.onsuccess=c=>{a()},s.onerror=c=>{var l;i(I.create("storage-set",{originalErrorMessage:(l=c.target.error)==null?void 0:l.message}))}})}async function Kt(t){const n=(await zt()).transaction(ee,"readonly"),o=n.objectStore(ee).get(t);return new Promise((r,a)=>{o.onsuccess=i=>{const c=i.target.result;r(c?c.value:void 0)},n.onerror=i=>{var c;a(I.create("storage-get",{originalErrorMessage:(c=i.target.error)==null?void 0:c.message}))}})}function Wt(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Fe("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){if($e()){let e;try{e=await lo(t)}catch(n){N.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function pe(t,e){return $e()?uo(t,e).catch(n=>{N.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function go(t){let e;try{e=await fo()}catch{}if(e)return e;{const n=crypto.randomUUID();let s=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${n}

`;const o=t==null?void 0:t.options.appId,r=t==null?void 0:t.options.projectId;return r&&o?s+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${r}/appcheck/apps?selectedAppId=${o}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${n} --project ${r} --app ${o}

`:s+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,s+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(s),ho(n).catch(a=>N.warn(`Failed to persist debug token to IndexedDB. Error: ${a}`)),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return ce().enabled}async function ze(){const t=ce();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function mo(t){const e=xe(),n=ce();if(n.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;n.enabled=!0;const s=new Z;n.token=s,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?s.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):s.resolve(go(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={error:"UNKNOWN_ERROR"};function yo(t){return Le.encodeString(JSON.stringify(t),!1)}async function Re(t,e=!1,n=!1){const s=t.app;Ge(s);const o=b(s);let r=o.token,a;if(r&&!G(r)&&(o.token=void 0,r=void 0),!r){const l=await o.cachedTokenPromise;l&&(G(l)?r=l:await pe(s,void 0))}if(!e&&r&&G(r))return{token:r.token};let i=!1;if(je())try{const l=await ze();o.exchangeTokenPromise||(o.exchangeTokenPromise=Ve(Vt(s,l),t.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),i=!0);const f=await o.exchangeTokenPromise;return await pe(s,f),o.token=f,{token:f.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?N.warn(l.message):n&&N.error(l),ge(l)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),i=!0),r=await b(s).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?N.warn(l.message):n&&N.error(l),a=l}let c;return r?a?G(r)?c={token:r.token,internalError:a}:c=ge(a):(c={token:r.token},o.token=r,await pe(s,r)):c=ge(a),i&&Xt(s,c),c}async function bo(t){const e=t.app;Ge(e);const{provider:n}=b(e);if(je()){const s=await ze(),o=Vt(e,s);o.body.limited_use=!0;const{token:r}=await Ve(o,t.heartbeatServiceProvider);return{token:r}}else{const{token:s}=await n.getToken(!0);return{token:s}}}function Yt(t,e,n,s){const{app:o}=t,r=b(o),a={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,a],r.token&&G(r.token)){const i=r.token;Promise.resolve().then(()=>{n({token:i.token}),pt(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>pt(t))}function Jt(t,e){const n=b(t),s=n.tokenObservers.filter(o=>o.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function pt(t){const{app:e}=t,n=b(e);let s=n.tokenRefresher;s||(s=wo(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function wo(t){const{app:e}=t;return new so(async()=>{const n=b(e);let s;if(n.token?s=await Re(t,!0):s=await Re(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=b(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const o=n.token.expireTimeMillis-300*1e3;return s=Math.min(s,o),Math.max(0,s-Date.now())}else return 0},ht.RETRIAL_MIN_WAIT,ht.RETRIAL_MAX_WAIT)}function Xt(t,e){const n=b(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function G(t){return t.expireTimeMillis-Date.now()>0}function ge(t){return{token:yo(Eo),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=b(this.app);for(const n of e)Jt(this.app,n.next);return Promise.resolve()}}function Ao(t,e){return new _o(t,e)}function Io(t){return{getToken:e=>Re(t,e),getLimitedUseToken:()=>bo(t),addTokenListener:e=>Yt(t,"INTERNAL",e),removeTokenListener:e=>Jt(t.app,e)}}const To="@firebase/app-check",Co="0.13.1",vo="https://www.google.com/recaptcha/enterprise.js";function So(t,e){const n=new Z,s=b(t);s.reCAPTCHAState={initialized:n};const o=Oo(t),r=ft(!0);return r?gt(t,e,r,o,n):ko(()=>{const a=ft(!0);if(!a)throw new Error("no recaptcha");gt(t,e,a,o,n)}),n.promise}function gt(t,e,n,s,o){n.ready(()=>{Do(t,e,n,s),o.resolve(n)})}function Oo(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Ro(t){Ge(t);const n=await b(t).reCAPTCHAState.initialized.promise;return new Promise((s,o)=>{const r=b(t).reCAPTCHAState;n.ready(()=>{s(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function Do(t,e,n,s){const o=n.render(s,{sitekey:e,size:"invisible",callback:()=>{b(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{b(t).reCAPTCHAState.succeeded=!1}}),r=b(t);r.reCAPTCHAState={...r.reCAPTCHAState,widgetId:o}}function ko(t){const e=document.createElement("script");e.src=vo+"?render=explicit",e.onload=t,document.head.appendChild(e)}class qe{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var o,r,a;Po(this._throttleData);const n=await Ro(this._app).catch(i=>{throw I.create("recaptcha-error")});if(!((o=b(this._app).reCAPTCHAState)!=null&&o.succeeded))throw I.create("recaptcha-error");let s;try{const i=ao(this._app,n);e&&(i.body.limited_use=!0),s=await Ve(i,this._heartbeatServiceProvider)}catch(i){throw(r=i.code)!=null&&r.includes("fetch-status-error")?(this._throttleData=No(Number((a=i.customData)==null?void 0:a.httpStatus),this._throttleData),I.create("initial-throttle",{time:Gt(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=He(e,"heartbeat"),So(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof qe?this._siteKey===e._siteKey:!1}}function No(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+no,httpStatus:t};{const n=e?e.backoffCount:0,s=Hn(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function Po(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw I.create("throttled",{time:Gt(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t=$t(),e){var o;t=Pt(t);const n=He(t,"app-check");if(ce().initialized||mo(t),je()&&ze().then(r=>{console.log(`Firebase App Check debug token: ${r}`)}),n.isInitialized()){const r=n.getImmediate(),a=n.getOptions();if(a&&!!a.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((o=a.provider)!=null&&o.isEqual(e.provider)))return r;throw I.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return Lo(t,e.provider,e.isTokenAutoRefreshEnabled),b(t).isTokenAutoRefreshEnabled&&Yt(s,"INTERNAL",()=>{}),s}function Lo(t,e,n=!1){const s=Qs(t,{...Ut});s.activated=!0,s.provider=e,s.cachedTokenPromise=po(t).then(o=>(o&&G(o)&&(s.token=o,Xt(t,{token:o.token})),o)),s.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&N.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),s.provider.initialize(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="app-check",mt="app-check-internal";function $o(){z(new U(xo,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ao(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(mt).initialize()})),z(new U(mt,t=>{const e=t.getProvider("app-check").getImmediate();return Io(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),B(To,Co)}$o();var Et="@firebase/ai",De="2.16.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="AI",Bo="us-central1",Fo="global",Uo="firebasevertexai.googleapis.com",q="v1beta",yt=De,Ho="gl-js",Go="hybrid",Vo=180*1e3,jo="gemini-2.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends K{constructor(e,n,s){const o=F,r=`${o}/${e}`,a=`${o}: ${n} (${r})`;super(e,a),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,h),Object.setPrototypeOf(this,h.prototype),this.toString=()=>a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=["user","model","function","system"],Zt={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},_={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},T={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},k={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={AGENT_PLATFORM:"AGENT_PLATFORM",VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.backendType=e}}class le extends Ke{constructor(){super(S.GOOGLE_AI)}_getModelPath(e,n){return`/${q}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${q}/projects/${e}/templates/${n}`}}class We extends Ke{constructor(e){super(S.VERTEX_AI),this.location=Bo,e&&(this.location=e)}_getModelPath(e,n){return`/${q}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${q}/projects/${e}/locations/${this.location}/templates/${n}`}}class Ye extends Ke{constructor(e){super(S.AGENT_PLATFORM),this.location=Fo,e&&(this.location=e)}_getModelPath(e,n){return`/${q}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${q}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){if(t instanceof le)return`${F}/googleai`;if(t instanceof We)return`${F}/vertexai/${t.location}`;if(t instanceof Ye)return`${F}/agentplatform/${t.location}`;throw new h(d.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function qo(t){const e=t.split("/");if(e[0]!==F)throw new h(d.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new h(d.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new We(s);case"agentplatform":const o=e[2];if(!o)throw new h(d.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new Ye(o);case"googleai":return new le;default:throw new h(d.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Fe("@firebase/vertexai");var O;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(O||(O={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={type:"text",languages:["en"]},me=[Qt,{type:"image"}],Ee=[Qt];class C{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:me,expectedOutputs:Ee}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=me),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=Ee)):this.onDeviceParams.createOptions={expectedInputs:me,expectedOutputs:Ee})}async isAvailable(e){var s;if(!this.mode)return y.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===T.ONLY_IN_CLOUD)return y.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===T.ONLY_ON_DEVICE){if(n===O.UNAVAILABLE)throw new h(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===O.DOWNLOADABLE||n===O.DOWNLOADING){y.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(o){throw new h(d.ERROR,o.message)}return!0}return!0}return n!==O.AVAILABLE?(y.debug(`On-device inference unavailable because availability is "${n}".`),!1):C.isOnDeviceRequest(e)?!0:(y.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(C.toLanguageModelMessage)),o=await n.prompt(s,this.onDeviceParams.promptOptions);return C.toResponse(o)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(C.toLanguageModelMessage)),o=n.promptStreaming(s,this.onDeviceParams.promptOptions);return C.toStreamResponse(o)}async countTokens(e){throw new h(d.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return y.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return y.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if(s.inlineData&&C.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return y.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===O.DOWNLOADABLE||n===O.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=o=>{o.addEventListener("downloadprogress",r=>{e(r.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(C.toLanguageModelMessageContent));return{role:C.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new h(d.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new h(d.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,o){const r=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});o.enqueue(n.encode(`data: ${r}

`))}}))}}}C.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Ko(t,e,n){const o=(e||xe()).LanguageModel;if(o&&t)return new C(o,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,s,o,r){this.app=e,this.backend=n,this.chromeAdapterFactory=r;const a=o==null?void 0:o.getImmediate({optional:!0}),i=s==null?void 0:s.getImmediate({optional:!0});this.auth=i||null,this.appCheck=a||null,n instanceof We||n instanceof Ye?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,{instanceIdentifier:e}){if(!e)throw new h(d.ERROR,"AIService instance identifier is undefined.");const n=qo(e),s=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Wo(s,n,o,r,Ko)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){var n,s,o,r,a,i,c;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((r=(o=t.app)==null?void 0:o.options)!=null&&r.projectId){if(!((i=(a=t.app)==null?void 0:a.options)!=null&&i.appId))throw new h(d.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new h(d.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new h(d.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if($s(t.app)&&t.app.settings.appCheckToken){const l=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:l})}else t.appCheck&&((c=t.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this._apiSettings=Jo(e),this.model=X.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===S.GOOGLE_AI?X.normalizeGoogleAIModelName(e):X.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="Timeout has expired.",ye="AbortError";class Zo{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${Uo}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function Qo(t){const e=[];return e.push(`${Ho}/${yt}`),e.push(`fire/${yt}`),(t.params.apiSettings.inferenceMode===T.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===T.PREFER_IN_CLOUD)&&e.push(Go),e.join(" ")}async function er(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Qo(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&y.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Je(t,e){var l,f;const n=new Zo(t);let s;const o=(l=t.singleRequestOptions)==null?void 0:l.signal,r=((f=t.singleRequestOptions)==null?void 0:f.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:Vo,a=new AbortController,i=setTimeout(()=>{a.abort(new DOMException(Xo,ye)),y.debug(`Aborting request to ${n} due to timeout (${r}ms)`)},r),c=AbortSignal.any(o?[o,a.signal]:[a.signal]);if(o&&o.aborted)throw clearTimeout(i),new DOMException(o.reason??"Aborted externally before fetch",ye);try{const u={method:"POST",headers:await er(n),signal:c,body:e};if(s=await fetch(n.toString(),u),!s.ok){let E="",p;try{const w=await s.json();E=w.error.message,w.error.details&&(E+=` ${JSON.stringify(w.error.details)}`,p=w.error.details)}catch{}throw s.status===403&&p&&p.some(w=>w.reason==="SERVICE_DISABLED")&&p.some(w=>{var Qe,et;return(et=(Qe=w.links)==null?void 0:Qe[0])==null?void 0:et.description.includes("Google developers console API activation")})?new h(d.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:p}):new h(d.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${E}`,{status:s.status,statusText:s.statusText,errorDetails:p})}}catch(u){let E=u;throw u.code!==d.FETCH_ERROR&&u.code!==d.API_NOT_ENABLED&&u instanceof Error&&u.name!==ye&&(E=new h(d.ERROR,`Error fetching from ${n.toString()}: ${u.message}`),E.stack=u.stack),E}finally{clearTimeout(i)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&y.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),tn(t.candidates[0]))throw new h(d.RESPONSE_ERROR,`Response error: ${$(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function ae(t,e=k.IN_CLOUD){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=tr(t);return n.inferenceSource=e,n}function tr(t){return t.text=()=>{if(se(t))return wt(t,e=>!e.thought);if(t.promptFeedback)throw new h(d.RESPONSE_ERROR,`Text not available. ${$(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(se(t)){const e=wt(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new h(d.RESPONSE_ERROR,`Thought summary not available. ${$(t)}`,{response:t})},t.inlineDataParts=()=>{if(se(t))return nr(t);if(t.promptFeedback)throw new h(d.RESPONSE_ERROR,`Data not available. ${$(t)}`,{response:t})},t.functionCalls=()=>{if(se(t))return en(t);if(t.promptFeedback)throw new h(d.RESPONSE_ERROR,`Function call not available. ${$(t)}`,{response:t})},t}function wt(t,e){var s,o,r,a;const n=[];if((o=(s=t.candidates)==null?void 0:s[0].content)!=null&&o.parts)for(const i of(a=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:a.parts)i.text&&e(i)&&n.push(i.text);return n.length>0?n.join(""):""}function en(t){var n,s,o,r;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(r=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:r.parts)a.functionCall&&e.push(a.functionCall);if(e.length>0)return e}function nr(t){var n,s,o,r;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(r=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:r.parts)a.inlineData&&e.push(a);if(e.length>0)return e}const sr=[_.RECITATION,_.SAFETY,_.BLOCKLIST,_.PROHIBITED_CONTENT,_.SPII,_.MALFORMED_FUNCTION_CALL,_.IMAGE_SAFETY,_.IMAGE_PROHIBITED_CONTENT,_.IMAGE_OTHER,_.NO_IMAGE,_.IMAGE_RECITATION,_.LANGUAGE,_.UNEXPECTED_TOOL_CALL,_.TOO_MANY_TOOL_CALLS,_.MISSING_THOUGHT_SIGNATURE,_.MALFORMED_RESPONSE];function tn(t){return!!t.finishReason&&sr.some(e=>e===t.finishReason)}function $(t){var n,s,o;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((o=t.candidates)!=null&&o[0]){const r=t.candidates[0];tn(r)&&(e+=`Candidate was blocked due to ${r.finishReason}`,r.finishMessage&&(e+=`: ${r.finishMessage}`))}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new h(d.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(y.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function Xe(t){return{candidates:t.candidates?rr(t.candidates):void 0,prompt:t.promptFeedback?ar(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function or(t,e){return{generateContentRequest:{model:e,...t}}}function rr(t){const e=[];let n;return e&&t.forEach(s=>{var a,i;let o;if(s.citationMetadata&&(o={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>({...c,severity:c.severity??Zt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(i=(a=s.content)==null?void 0:a.parts)!=null&&i.some(c=>c==null?void 0:c.videoMetadata))throw new h(d.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const r={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:o,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(r)}),e}function ar(t){const e=[];return t.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??Zt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function ir(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),o=ur(s),[r,a]=o.tee(),{response:i,firstValue:c}=await cr(a,e,n);return{stream:dr(r,e,n),response:i,firstValue:c}}async function cr(t,e,n){const[s,o]=t.tee(),r=s.getReader(),{value:a}=await r.read();return{firstValue:a,response:lr(o,e,n)}}async function lr(t,e,n){const s=[],o=t.getReader();for(;;){const{done:r,value:a}=await o.read();if(r){let i=hr(s);return e.backend.backendType===S.GOOGLE_AI&&(i=Xe(i)),ae(i,n)}s.push(a)}}async function*dr(t,e,n){var o,r;const s=t.getReader();for(;;){const{value:a,done:i}=await s.read();if(i)break;let c;e.backend.backendType===S.GOOGLE_AI?c=ae(Xe(a),n):c=ae(a,n);const l=(o=c.candidates)==null?void 0:o[0];!((r=l==null?void 0:l.content)!=null&&r.parts)&&!(l!=null&&l.finishReason)&&!(l!=null&&l.citationMetadata)&&!(l!=null&&l.urlContextMetadata)||(yield c)}}function ur(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return r();function r(){return e.read().then(({value:a,done:i})=>{if(i){if(o.trim()){s.error(new h(d.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}o+=a;let c=o.match(_t),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new h(d.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(l),o=o.substring(c[0].length),c=o.match(_t)}return r()})}}})}function hr(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const r=o.index||0;n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:o.index}),n.candidates[r].citationMetadata=o.citationMetadata,n.candidates[r].finishReason=o.finishReason,n.candidates[r].finishMessage=o.finishMessage,n.candidates[r].safetyRatings=o.safetyRatings,n.candidates[r].groundingMetadata=o.groundingMetadata;const a=o.urlContextMetadata;if(typeof a=="object"&&a!==null&&Object.keys(a).length>0&&(n.candidates[r].urlContextMetadata=a),o.content){if(!o.content.parts)continue;n.candidates[r].content||(n.candidates[r].content={role:o.content.role||"user",parts:[]});for(const i of o.content.parts){const c={...i};i.text!==""&&Object.keys(c).length>0&&n.candidates[r].content.parts.push(c)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=[d.FETCH_ERROR,d.ERROR,d.API_NOT_ENABLED];async function sn(t,e,n,s){if(!e)return{response:await s(),inferenceSource:k.IN_CLOUD};switch(e.mode){case T.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:k.ON_DEVICE};throw new h(d.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case T.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:k.IN_CLOUD};case T.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:k.IN_CLOUD}}catch(o){if(o instanceof h&&fr.includes(o.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:k.ON_DEVICE};throw o}case T.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:k.ON_DEVICE}:{response:await s(),inferenceSource:k.IN_CLOUD};default:throw new h(d.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e,n,s){return t.backend.backendType===S.GOOGLE_AI&&(n=nn(n)),Je({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function on(t,e,n,s,o){const r=await sn(n,s,()=>s.generateContentStream(n),()=>pr(t,e,n,o));return ir(r.response,t,r.inferenceSource)}async function gr(t,e,n,s){return t.backend.backendType===S.GOOGLE_AI&&(n=nn(n)),Je({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function rn(t,e,n,s,o){const r=await sn(n,s,()=>s.generateContent(n),()=>gr(t,e,n,o)),a=await mr(r.response,t);return{response:ae(a,r.inferenceSource)}}async function mr(t,e){const n=await t.json();return e.backend.backendType===S.GOOGLE_AI?Xe(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function J(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Er(e)}function Er(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const o of t)"functionResponse"in o?s=!0:n=!0,e.parts.push(o);if(n&&s)throw new h(d.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new h(d.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function be(t){let e;return t.contents?e=t:e={contents:[J(t)]},t.systemInstruction&&(e.systemInstruction=Ze(t.systemInstruction)),e}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="SILENT_ERROR",It=10;class yr{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,n){let s={};await this._sendPromise;const o=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,l,f;let r,a=0;const i=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??It;do{let u;if(r){a++;const w=await this._callFunctionsAsNeeded(r);u=J(w)}else u=J(e);const E=this._formatRequest(u,[...o]);o.push(u);const p=await this._callGenerateContent(E,n);if(p)if(s=p,r=this._getCallableFunctionCalls(p.response),p.response.candidates&&p.response.candidates.length>0){const w={parts:((l=p.response.candidates)==null?void 0:l[0].content.parts)||[],role:((f=p.response.candidates)==null?void 0:f[0].content.role)||"model"};o.push(w)}else{const w=$(p.response);w&&y.warn(`sendMessage() was unsuccessful. ${w}. Inspect response object for details.`)}else r=void 0}while(r&&a<i);r&&a>=i&&y.warn(`Automatic function calling exceeded the limit of ${i} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(o),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],r=(async()=>{var f;let a,i=0;const c=((f=this.requestOptions)==null?void 0:f.maxSequentialFunctionCalls)??It;let l;do{let u;if(a){i++;const p=await this._callFunctionsAsNeeded(a);u=J(p)}else u=J(e);const E=this._formatRequest(u,[...s]);if(s.push(u),l=await this._callGenerateContentStream(E,n),a=this._getCallableFunctionCalls(l.firstValue),a&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const p={...l.firstValue.candidates[0].content};p.role||(p.role="model"),s.push(p)}}while(a&&i<c);return a&&i>=c&&y.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>r).catch(a=>{throw new Error(At)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history=this._history.concat(s);const i={...a.candidates[0].content};i.role||(i.role="model"),this._history.push(i)}else{const i=$(a);i&&y.warn(`sendMessageStream() was unsuccessful. ${i}. Inspect response object for details.`)}}).catch(a=>{a.message!==At&&a.name!=="AbortError"&&y.error(a)}),r}_getCallableFunctionCalls(e){var o,r,a;const n=(r=(o=this.params)==null?void 0:o.tools)==null?void 0:r.find(i=>i.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=en(e);if(s){for(const i of s)if(!((a=n.functionDeclarations)==null?void 0:a.some(l=>l.name===i.name&&typeof l.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var r,a;const n=[],s=[],o=(a=(r=this.params)==null?void 0:r.tools)==null?void 0:a.find(i=>i.functionDeclarations);if(o&&o.functionDeclarations){for(const c of e){const l=o.functionDeclarations.find(f=>f.name===c.name);if(l!=null&&l.functionReference){const f=Promise.resolve(l.functionReference(c.args)).catch(u=>{const E=new h(d.ERROR,`Error in user-defined function "${l.name}": ${u.message}`);throw E.stack=u.stack,E});n.push({name:c.name,id:c.id,results:f}),s.push(f)}}await Promise.all(s);const i=[];for(const{name:c,id:l,results:f}of n){const u={name:c,response:await f};l&&(u.id=l),i.push({functionResponse:u})}return i}else throw new h(d.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],br={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Ct={user:["model"],function:["model"],model:["user","function"],system:[]};function wr(t){let e=null;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new h(d.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!bt.includes(s))throw new h(d.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(bt)}`);if(!Array.isArray(o))throw new h(d.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(o.length===0)throw new h(d.INVALID_CONTENT,"Each Content should have at least one part");const r={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const i of o)for(const c of Tt)c in i&&(r[c]+=1);const a=br[s];for(const i of Tt)if(!a.includes(i)&&r[i]>0)throw new h(d.INVALID_CONTENT,`Content with role '${s}' can't contain '${i}' part`);if(e&&!Ct[s].includes(e.role))throw new h(d.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Ct)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends yr{constructor(e,n,s,o,r){var a;super(e,o,r),this.model=n,this.chromeAdapter=s,this.params=o,this.requestOptions=r,o!=null&&o.history&&(wr(o.history),this._history=o.history),((a=this.params)==null?void 0:a.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:Ze(this.params.systemInstruction)})}_formatRequest(e,n){var s,o,r,a,i;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(r=this.params)==null?void 0:r.tools,toolConfig:(a=this.params)==null?void 0:a.toolConfig,systemInstruction:(i=this.params)==null?void 0:i.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return rn(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return on(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e,n,s){let o="";if(t.backend.backendType===S.GOOGLE_AI){const a=or(n,e);o=JSON.stringify(a)}else o=JSON.stringify(n);return(await Je({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},o)).json()}async function Ir(t,e,n,s,o){if((s==null?void 0:s.mode)===T.ONLY_ON_DEVICE)throw new h(d.UNSUPPORTED,"countTokens() is not supported for on-device models.");return Ar(t,e,n,o)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends X{constructor(e,n,s,o){super(e,n.model),this.chromeAdapter=o,this.generationConfig=n.generationConfig||{},Cr(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ze(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===T.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===O.UNAVAILABLE){const s=new h(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===T.ONLY_ON_DEVICE)throw s;y.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=be(e);return rn(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=be(e),{stream:o,response:r}=await on(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:o,response:r}}startChat(e){return new _r(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=be(e);return Ir(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function Cr(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new h(d.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new h(d.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new h(d.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t=$t(),e){t=Pt(t);const n=He(t,F),s=(e==null?void 0:e.backend)??new le,o={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},r=zo(s),a=n.getImmediate({identifier:r});return a.options=o,a}const Sr=["mode","onDeviceParams","inCloudParams"];function Or(t,e,n){var i;const s=e;let o;if(s.mode){for(const c of Object.keys(e))Sr.includes(c)||y.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);o=s.inCloudParams||{model:jo}}else o=e;if(!o.model)throw new h(d.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const r=(i=t.chromeAdapterFactory)==null?void 0:i.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),a=new Tr(t,o,n,r);return a._apiSettings.inferenceMode=s.mode,a}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){z(new U(F,Yo,"PUBLIC").setMultipleInstances(!0)),B(Et,De),B(Et,De,"esm2020")}Rr();let we=null,oe=null;function Dr(){if(oe)return oe;if(!j)throw new Error("Firebase is not configured yet (Sprint 3 account pending).");we=xt(Y),Mo(we,{provider:new qe(hn),isTokenAutoRefreshEnabled:!0});const t=vr(we,{backend:new le});return oe=Or(t,{model:Me,mode:T.PREFER_IN_CLOUD,generationConfig:{responseMimeType:"application/json"}}),oe}const kr=`You are a contract risk reviewer. The user gives you a contract in which all personal data has ALREADY been replaced with placeholders like [NAME_1], [PHONE_1], [ACCOUNT_1]. Never ask for or invent the real values.

Read the contract clause by clause. Flag clauses that are one-sided or risky for the signing party, especially: unilateral termination rights, excessive penalties or liquidated damages, blanket rights waivers, auto-renewal traps with long notice windows, unilateral right to change terms or prices, broad liability exclusions, and over-broad non-competes.

Reply with ONLY a JSON object of this shape:
{
  "clauses": [
    {
      "category": "unilateral-termination | excessive-penalty | rights-waiver | auto-renewal | unilateral-change | liability-waiver | non-compete | other",
      "title": "short title",
      "risk": "high | medium | low",
      "quote": "exact quote from the contract text",
      "why": "plain-language explanation of why this is risky, 1-2 sentences",
      "counterProposal": "a concrete replacement wording the signer could propose"
    }
  ],
  "summary": "2-3 sentence overall assessment",
  "negotiationPoints": ["short negotiation ask", "..."]
}
Write explanations in the same language as the contract. Quotes must be copied exactly from the contract text. This is general information, not legal advice.`,Nr=["high","medium","low"];async function Pr(t){const s=(await Dr().generateContent(`${kr}

CONTRACT (personal data already masked):
"""
${t}
"""`)).response.text(),o=s.slice(s.indexOf("{"),s.lastIndexOf("}")+1),r=JSON.parse(o);return{source:"cloud",clauses:(r.clauses??[]).filter(i=>i&&typeof i.quote=="string"&&typeof i.why=="string").map(i=>({category:i.category??"other",title:i.title??"Clause to review",risk:Nr.includes(i.risk)?i.risk:"medium",quote:i.quote,why:i.why,counterProposal:i.counterProposal??""})),summary:r.summary??"",negotiationPoints:r.negotiationPoints??[]}}const Mr=[{category:"unilateral-termination",title:"One-sided termination right",risk:"high",re:/(언제든|언제든지)[^.\n]{0,40}해지할 수 있|일방적[^.\n]{0,20}해지|may terminate[^.\n]{0,60}for convenience|terminate this agreement at any time/i,why:"Only one side can end the contract early, at will. The other side is locked in even if the work or the relationship breaks down.",counterProposal:"Make termination mutual: either party may terminate with at least 30 days' written notice, and work already performed is paid in full."},{category:"excessive-penalty",title:"Excessive penalty clause",risk:"high",re:/계약금액의\s*(\d+)\s*%\s*에 해당하는 위약금|위약금[^.\n]{0,20}(\d+)\s*%|liquidated damages of\s*(\d+)\s*%/i,why:"The penalty is charged as a large fixed share of the whole contract value, on top of separate damages. Courts often reduce penalties that far exceed the actual loss, but you would have to fight for that reduction.",counterProposal:"Cap the penalty at 10% of the contract value, state that it is the full remedy for the breach, and remove the separate open-ended damages claim."},{category:"rights-waiver",title:"Blanket rights waiver",risk:"high",re:/모든 권리를 포기|일체의 권리[^.\n]{0,30}포기|waives? (any|all|the) right|waiver of[^.\n]{0,30}rights?/i,why:"A blanket waiver gives up rights you may not even know you have yet, including rights that cannot legally be waived in advance in many jurisdictions.",counterProposal:"Limit the transfer to the final deliverables listed in the contract, keep moral rights and pre-existing IP with the creator, and delete the blanket waiver."},{category:"auto-renewal",title:"Auto-renewal trap",risk:"medium",re:/자동으로 갱신|자동 갱신|automatically renews?|auto-?renew/i,why:"The contract renews by itself unless you object long before the deadline. Miss the notice window once and you are committed for another full term.",counterProposal:"Shorten the non-renewal notice window to 30 days, require a reminder from the other party 45 days before the deadline, and cap any price increase at renewal to 5%."},{category:"unilateral-change",title:"Terms can be changed unilaterally",risk:"high",re:/may (change|modify)[^.\n]{0,80}(at any time|sole discretion)|사전 통지 없이[^.\n]{0,20}변경|일방적[^.\n]{0,20}변경할 수 있/i,why:"The other side can rewrite the deal, including prices, at any moment, and your continued use counts as agreement. You could end up bound by terms you never negotiated.",counterProposal:"Changes require 30 days' written notice, price changes apply only from the next term, and you may terminate without penalty if you do not accept a change."},{category:"liability-waiver",title:"Broad liability waiver",risk:"medium",re:/shall not be liable|어떠한 손해[^.\n]{0,20}책임지지|책임지지 않/i,why:"The provider excludes liability even for serious losses, so if the service fails at a critical moment you may have no practical remedy.",counterProposal:"Cap liability at the fees paid in the last 12 months instead of excluding it, and carve out wilful misconduct, gross negligence and data breaches."},{category:"non-compete",title:"Non-compete restriction",risk:"medium",re:/경업금지|동종 업계[^.\n]{0,30}할 수 없|동종 업체[^.\n]{0,20}취업할 수 없|non-?compete/i,why:"A broad non-compete can block your livelihood after the contract ends. Long, industry-wide bans are frequently narrowed or struck down, but only after a dispute.",counterProposal:"Limit the non-compete to named direct competitors, shorten it to 6 months, and tie it to a paid restriction period."}];function Lr(t,e,n){const s=Math.max(t.lastIndexOf(`
`,e),t.lastIndexOf(". ",e),t.lastIndexOf("。",e));let o=t.indexOf(`
`,e+n);o===-1&&(o=t.length);const r=t.indexOf(". ",e+n);return r!==-1&&r<o&&(o=r+1),t.slice(s+1,o).trim().slice(0,300)}function vt(t){const e=[],n=new Set;for(const r of Mr){const a=r.re.exec(t);if(!a||n.has(r.category))continue;n.add(r.category);let i=r.risk,c=r.why;if(r.category==="excessive-penalty"){const l=Number(a[1]??a[2]??a[3]);Number.isFinite(l)&&(c=`The penalty is fixed at ${l}% of the contract value, on top of separate damages. Penalties far above the actual expected loss are often reduced by courts, but only after a dispute.`,i=l>=30?"high":l>=15?"medium":"low")}e.push({category:r.category,title:r.title,risk:i,quote:Lr(t,a.index,a[0].length),why:c,counterProposal:r.counterProposal})}const s=e.filter(r=>r.risk==="high").length,o=e.length===0?"The basic on-device scan found none of the common one-sided clause patterns. This is a pattern scan, not legal advice; the cloud review reads the full text more deeply.":`The basic on-device scan flagged ${e.length} clause${e.length>1?"s":""}`+(s>0?`, ${s} of them high risk`:"")+". This is a pattern scan of the masked text, not legal advice.";return{source:"on-device",clauses:e,summary:o,negotiationPoints:e.map(r=>`${r.title}: ${r.counterProposal}`)}}const m=t=>document.getElementById(t),ke=m("contract-input"),Ne=m("analyze"),L=m("download-model"),an=m("simulate-offline"),H=m("progress");let V="checking",xr="";const $r=()=>navigator.onLine&&!an.checked,Pe=()=>!$r();function v(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _e(t,e,n,s){const r=m(t).querySelector(".dot");r.className=`dot dot-${n}`,m(e).textContent=s}async function W(){const t=await Rt();V=t;const e={available:["ok","ready"],downloadable:["warn","not downloaded yet"],downloading:["warn","downloading…"],unavailable:["bad","unavailable on this device"],unsupported:["bad","not supported in this browser"]},[n,s]=e[t]??["unknown",t];_e("chip-device","device-status",n,s),L.classList.toggle("hidden",!(t==="downloadable"||t==="downloading"));const o=navigator.onLine;_e("chip-network","network-status",o?"ok":"warn",o?"online":"offline"),_e("chip-cloud","cloud-status",j?"ok":"warn",j?`configured (${Me})`:"not configured yet");const r=m("mode-banner");Pe()?(r.textContent="Mode: ON-DEVICE ONLY. The network is off (or simulated off). Masking and the basic review run entirely on this device; nothing is uploaded.",r.dataset.mode="device"):j?(r.textContent="Mode: HYBRID. Personal data is masked on this device first; only the masked text goes to the cloud for a deep review.",r.dataset.mode="hybrid"):(r.textContent="Mode: ON-DEVICE ONLY. Cloud review is not configured yet (waiting for the Sprint 3 Firebase project), so nothing is uploaded. Masking and the basic review run on this device.",r.dataset.mode="device")}const St={regex:"Safety-net rules",field:"Form-field rules",model:"Gemini Nano (on-device)"};function Br(t,e){const n=m("mask-summary");if(e.length===0)n.textContent="No personal data was found by the rule layers"+(V==="available"?" or by Gemini Nano.":". (Gemini Nano is not available in this browser, so only the rule layers ran.)");else{const r=new Map;for(const i of e)r.set(i.layer,(r.get(i.layer)??0)+1);const a=[...r.entries()].map(([i,c])=>`${c} by ${St[i]}`).join(", ");n.textContent=`${e.length} personal data item${e.length>1?"s":""} masked: ${a}.`}const s=m("findings-table"),o=m("findings-body");o.innerHTML="",s.classList.toggle("hidden",e.length===0),e.forEach((r,a)=>{const i=document.createElement("tr");i.innerHTML=`<td>${a+1}</td><td>${v(r.type)}</td><td class="value">${v(r.value)}</td><td>${v(St[r.layer])}</td><td><code>${v(r.token)}</code></td>`,o.appendChild(i)}),m("masked-output").innerHTML=v(t).replace(/\[([A-Z]+_\d+)\]/g,"<mark>[$1]</mark>")}function Fr(t,e){const n=m("review-source");n.textContent=t.source==="cloud"?`Deep review by cloud Gemini via Firebase AI Logic (${Me}), run on the masked text only.`:"Basic review computed on this device (deterministic clause-pattern scan of the masked text). No text left the device for this review.",e&&(n.textContent+=` ${e}`),n.dataset.source=t.source,m("review-summary").textContent=t.summary;const s=m("clause-list");s.innerHTML="",t.clauses.length===0&&(s.innerHTML='<p class="empty">No risky clause patterns were flagged.</p>');for(const r of t.clauses){const a=document.createElement("article");a.className=`clause risk-${r.risk}`,a.innerHTML=`<header><span class="risk-badge">${v(r.risk.toUpperCase())}</span><h4>${v(r.title)}</h4></header><blockquote>${v(r.quote)}</blockquote><p><strong>Why it matters.</strong> ${v(r.why)}</p><p><strong>Counter-proposal.</strong> ${v(r.counterProposal)}</p>`,s.appendChild(a)}const o=m("negotiation-list");o.innerHTML="",t.negotiationPoints.length===0&&(o.innerHTML='<li class="empty">Nothing to negotiate from this scan.</li>');for(const r of t.negotiationPoints){const a=document.createElement("li");a.textContent=r,o.appendChild(a)}}function Ur(t,e){m("payload-note").textContent=t?"This is the exact payload that was sent to the cloud for the deep review. Check it: no names, numbers or addresses, only placeholders.":"Nothing was sent anywhere for this analysis. If a cloud review runs, the payload will be exactly this masked text:",m("payload-output").textContent=e}async function Hr(){const t=ke.value;if(!t.trim()){H.textContent="Paste a contract or load a sample first.";return}Ne.disabled=!0;try{H.textContent="Step 1 of 2 · Masking personal data on this device…";const e=[...gn(t)];let n="";if(V==="available")try{const l=await In(t);e.push(...l),n=`Gemini Nano added ${l.length} candidate item(s); duplicates with the rule layers were merged.`}catch(l){n=`Gemini Nano pass failed (${l.message}); rule layers only.`}else V==="downloadable"||V==="downloading"?n="Gemini Nano is not downloaded yet, so this run used the rule layers only. Use the “Enable on-device model” button to download it.":n="Gemini Nano is not available in this browser, so this run used the rule layers only. Open this page in Chrome 139+ on desktop for the on-device model layer.";const{maskedText:s,items:o}=yn(t,e);xr=s,Br(s,o),H.textContent=n;let r,a=!1,i="";if(!Pe()&&j){H.textContent="Step 2 of 2 · Sending the MASKED text to cloud Gemini for a deep review…";try{r=await Pr(s),a=!0}catch(l){i=`Cloud review failed (${l.message}); fell back to the on-device basic review.`,r=vt(s)}}else H.textContent="Step 2 of 2 · Running the on-device basic review…",r=vt(s),Pe()?i="Offline: the cloud review was not attempted.":j||(i="Cloud review is not configured yet, so it was not attempted.");Fr(r,i),Ur(a,s);const c=m("nano-summary");if(c.classList.add("hidden"),c.textContent="",r.source==="on-device"&&V==="available"){const l=await Tn(s,r.clauses.map(f=>f.title));l&&(c.innerHTML=`<strong>Plain-language summary by Gemini Nano (on-device):</strong> ${v(l)}`,c.classList.remove("hidden"))}H.textContent=n}finally{Ne.disabled=!1}}function Gr(){const t=m("sample-row");for(const e of dn){const n=document.createElement("button");n.type="button",n.className="sample-btn",n.textContent=e.label,n.addEventListener("click",()=>{ke.value=e.text,ke.focus()}),t.appendChild(n)}Ne.addEventListener("click",()=>void Hr()),L.addEventListener("click",()=>{L.disabled=!0,L.textContent="Downloading on-device model… 0%",bn(e=>{L.textContent=`Downloading on-device model… ${Math.round(e*100)}%`}).then(()=>W()).finally(()=>{L.disabled=!1,L.textContent="Enable on-device model"})}),an.addEventListener("change",()=>void W()),window.addEventListener("online",()=>void W()),window.addEventListener("offline",()=>void W()),W()}Gr();

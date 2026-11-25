(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Ot=`프리랜서 용역 계약서

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
`,Ct=`MASTER SUBSCRIPTION AND SERVICES AGREEMENT

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
`,St=[{id:"ko",label:"Sample 1 · Korean freelance contract (한국어 용역 계약서)",text:Ot},{id:"en",label:"Sample 2 · English SaaS terms",text:Ct}],H={apiKey:"",authDomain:"",projectId:"",appId:"",messagingSenderId:""},vt={},x=vt,j={apiKey:x.VITE_FIREBASE_API_KEY||H.apiKey,authDomain:x.VITE_FIREBASE_AUTH_DOMAIN||H.authDomain,projectId:x.VITE_FIREBASE_PROJECT_ID||H.projectId,appId:x.VITE_FIREBASE_APP_ID||H.appId,messagingSenderId:x.VITE_FIREBASE_MESSAGING_SENDER_ID||H.messagingSenderId},B=!!(j.apiKey&&j.authDomain&&j.projectId&&j.appId),_e=x.VITE_GEMINI_CLOUD_MODEL||"gemini-2.5-flash";function _(t,e,n,s=0,a){const o=[];e.lastIndex=0;let i;for(;(i=e.exec(t))!==null;){const r=i[s];if(!r||a&&!a(r))continue;const c=s===0?i.index:i.index+i[0].indexOf(r);o.push({type:n,value:r,start:c,end:c+r.length}),i[0].length===0&&e.lastIndex++}return o}const et=t=>t.replace(/\D/g,"").length;function At(t){const e=[];return e.push(..._(t,/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g,"EMAIL")),e.push(..._(t,/\b\d{6}-[1-4]\d{6}\b/g,"RRN")),e.push(..._(t,/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g,"CARD")),e.push(..._(t,/\b01[016789]-\d{3,4}-\d{4}\b/g,"PHONE"),..._(t,/\b0\d{1,2}-\d{3,4}-\d{4}\b/g,"PHONE"),..._(t,/\b01[016789]\d{7,8}\b/g,"PHONE")),e.push(..._(t,/\+\d{1,3}-\d{3}-\d{3,4}-\d{4}\b/g,"PHONE")),e.push(..._(t,/\b\d{2,6}-\d{2,6}(?:-\d{2,7})?\b/g,"ACCOUNT",0,n=>{const s=et(n);return s>=10&&s<=16})),e.push(..._(t,/(?:서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시)\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,"ADDRESS"),..._(t,/(?:경기도|강원특별자치도|강원도|충청북도|충청남도|전북특별자치도|전라북도|전라남도|경상북도|경상남도|제주특별자치도)\s+[가-힣]{1,}시\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,"ADDRESS")),e.push(..._(t,/\b\d{1,6}\s+[A-Z][A-Za-z.]*(?:\s+[A-Z][A-Za-z.]*)*\s+(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Lane|Ln\.|Drive|Dr\.)(?:\s*,\s*[A-Za-z .]+,\s*[A-Z]{2}\s+\d{5})?/g,"ADDRESS")),e.map(n=>({...n,layer:"regex"}))}function Rt(t){const e=[];return e.push(..._(t,/(?:대표자|담당자|성명|이름|수급자|계약자)\s*\)?\s*[:：]\s*([가-힣]{2,4})(?![가-힣])/g,"NAME",1)),e.push(..._(t,/(?:Full name|Customer|Client|Contractor|Account holder|Name)\s*[:：]\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})/g,"NAME",1)),e.push(..._(t,/(?:계좌번호|계좌|Account(?:\s*number)?|Payment account)\s*[:：]?\s*(?:[가-힣]{2,6}은행\s*)?(\d[\d-]{8,18}\d)/g,"ACCOUNT",1,n=>{const s=et(n);return s>=10&&s<=16})),e.push(..._(t,/(?:주소|Address|Billing address)\s*[:：]\s*([^\n]{6,80})/g,"ADDRESS",1,n=>/\d/.test(n))),e.map(n=>({...n,layer:"field"}))}function Tt(t){return[...At(t),...Rt(t)]}const Ne={EMAIL:0,RRN:1,CARD:2,PHONE:3,ACCOUNT:4,ADDRESS:5,NAME:6};function Dt(t){const e=[...t].sort((s,a)=>{if(s.start!==a.start)return s.start-a.start;const o=Ne[s.type]-Ne[a.type];return o!==0?o:a.end-a.start-(s.end-s.start)}),n=[];for(const s of e){if(s.end<=s.start||!s.value)continue;n.some(o=>s.start<o.end&&o.start<s.end)||n.push(s)}return n.sort((s,a)=>s.start-a.start)}function Nt(t,e){const n=new Map,s=e.map(i=>{const r=(n.get(i.type)??0)+1;return n.set(i.type,r),{...i,token:`[${i.type}_${r}]`}});let a="",o=0;for(const i of s)a+=t.slice(o,i.start)+i.token,o=i.end;return a+=t.slice(o),{maskedText:a,items:s}}function Pt(t,e){return Nt(t,Dt(e))}function ee(){return typeof window<"u"&&"LanguageModel"in window}async function tt(){if(!ee())return"unsupported";try{const t=await window.LanguageModel.availability();return t==="available"||t==="downloadable"||t==="downloading"||t==="unavailable"?t:"unavailable"}catch{return"unavailable"}}async function Mt(t){if(!ee())throw new Error("Prompt API not supported");(await window.LanguageModel.create({monitor(n){n.addEventListener("downloadprogress",s=>t==null?void 0:t(s.loaded))}})).destroy()}const Lt=["You are a privacy filter running locally on the user's device.","Find every piece of personal data in the contract excerpt the user gives you:","person names, resident registration / national ID numbers, phone numbers,","email addresses, bank account numbers, card numbers, and postal addresses.",'Reply with ONLY a JSON array like [{"type":"NAME","value":"..."}].',"Use types NAME, RRN, PHONE, EMAIL, ACCOUNT, CARD, ADDRESS.","Every value must be an exact substring of the excerpt. If there is none, reply []."].join(" "),kt=["NAME","RRN","PHONE","EMAIL","ACCOUNT","ADDRESS","CARD"];function xt(t,e=1e3){const n=[];let s=0;for(;s<t.length;){let a=Math.min(t.length,s+e);if(a<t.length){const o=t.lastIndexOf(`
`,a);o>s+500&&(a=o)}n.push({start:s,text:t.slice(s,a)}),s=a}return n}async function $t(t){if(!ee())return[];const e=[],n=await window.LanguageModel.create({initialPrompts:[{role:"system",content:Lt}]}),s=async a=>{try{return await n.prompt(`Contract excerpt:
"""
${a.text}
"""
JSON array only:`)}catch(o){if(a.text.length>240&&/too large|context|quota/i.test(o.message)){const i=Math.floor(a.text.length/2),r=await s({start:a.start,text:a.text.slice(0,i)}),c=await s({start:a.start+i,text:a.text.slice(i)});return`${r}
${c}`}throw o}};try{for(const a of xt(t)){let o;try{o=await s(a)}catch{continue}const i=o.slice(o.indexOf("["),o.lastIndexOf("]")+1);if(!i)continue;let r;try{r=JSON.parse(i)}catch{continue}if(Array.isArray(r))for(const c of r){const l=c;if(!l.value||!l.type)continue;const m=l.type.toUpperCase();if(!kt.includes(m))continue;let h=a.text.indexOf(l.value);for(;h!==-1;)e.push({type:m,value:l.value,start:a.start+h,end:a.start+h+l.value.length,layer:"model"}),h=a.text.indexOf(l.value,h+l.value.length)}}}finally{n.destroy()}return e}async function Bt(t,e){if(!ee()||await tt()!=="available")return null;const s=await window.LanguageModel.create({initialPrompts:[{role:"system",content:"You explain contract risks in plain, friendly language in 3 short sentences. The contract text contains placeholders like [NAME_1]; never invent real names or numbers."}]});try{const a=t.slice(0,1400);return(await s.prompt(`Risky clauses found: ${e.join("; ")||"none"}.
Masked contract excerpt:
"""
${a}
"""
Write a 3-sentence plain-language summary of what the signer should watch out for.`)).trim()||null}catch{return null}finally{s.destroy()}}const Ft=()=>{};var Pe={};/**
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
 */const nt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let a=t.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ut=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const a=t[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[n++];e[s++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[n++],i=t[n++],r=t[n++],c=((a&7)<<18|(o&63)<<12|(i&63)<<6|r&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((a&15)<<12|(o&63)<<6|i&63)}}return e.join("")},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<t.length;a+=3){const o=t[a],i=a+1<t.length,r=i?t[a+1]:0,c=a+2<t.length,l=c?t[a+2]:0,m=o>>2,h=(o&3)<<4|r>>4;let y=(r&15)<<2|l>>6,f=l&63;c||(f=64,i||(y=64)),s.push(n[m],n[h],n[y],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ut(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<t.length;){const o=n[t.charAt(a++)],r=a<t.length?n[t.charAt(a)]:0;++a;const l=a<t.length?n[t.charAt(a)]:64;++a;const h=a<t.length?n[t.charAt(a)]:64;if(++a,o==null||r==null||l==null||h==null)throw new Gt;const y=o<<2|r>>4;if(s.push(y),l!==64){const f=r<<4&240|l>>2;if(s.push(f),h!==64){const b=l<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ht=function(t){const e=nt(t);return st.encodeByteArray(e,!0)},at=function(t){return Ht(t).replace(/\./g,"")},Vt=function(t){try{return st.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ot(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jt=()=>ot().__FIREBASE_DEFAULTS__,qt=()=>{if(typeof process>"u"||typeof Pe>"u")return;const t=Pe.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vt(t[1]);return e&&JSON.parse(e)},Yt=()=>{try{return Ft()||jt()||qt()||zt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},it=()=>{var t;return(t=Yt())==null?void 0:t.config};/**
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
 */class Wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function Jt(){try{return typeof indexedDB=="object"}catch{return!1}}function Kt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;e(((o=a.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zt="FirebaseError";class G extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zt,Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,o=this.errors[e],i=o?Xt(o,s):"Error",r=`${this.serviceName}: ${i} (${a}).`;return new G(a,r,s)}}function Xt(t,e){try{let n=0,s="";for(;n<t.length;){const a=t.indexOf("{$",n);if(a===-1){s+=t.substring(n);break}const o=t.indexOf("}",a+2);if(o===-1){s+=t.substring(n);break}const i=t.substring(a+2,o),r=e[i];s+=t.substring(n,a)+(r!=null?String(r):`<${i}?>`),n=o+1}return s}catch{return t}}function ue(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const o=t[a],i=e[a];if(Me(o)&&Me(i)){if(!ue(o,i))return!1}else if(o!==i)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Me(t){return t!==null&&typeof t=="object"}/**
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
 */function Qt(t){return t&&t._delegate?t._delegate:t}class Y{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const N="[DEFAULT]";/**
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
 */class en{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nn(e))try{this.getOrInitializeService({instanceIdentifier:N})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});s.resolve(o)}catch{}}}}clearInstance(e=N){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=N){return this.instances.has(e)}getOptions(e=N){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(o);s===r&&i.resolve(a)}return a}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const o=this.instances.get(s);return o&&e(o,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tn(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=N){return this.component?this.component.multipleInstances?e:N:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tn(t){return t===N?void 0:t}function nn(t){return t.instantiationMode==="EAGER"}/**
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
 */class sn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new en(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var p;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(p||(p={}));const an={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},on=p.INFO,rn={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},cn=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),a=rn[e];if(a)console[a](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ct{constructor(e){this.name=e,this._logLevel=on,this._logHandler=cn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?an[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const ln=(t,e)=>e.some(n=>t instanceof n);let Le,ke;function dn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function un(){return ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,he=new WeakMap,dt=new WeakMap,ne=new WeakMap,Ie=new WeakMap;function hn(t){const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(D(t.result)),a()},i=()=>{s(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&lt.set(n,t)}).catch(()=>{}),Ie.set(e,t),e}function fn(t){if(he.has(t))return;const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),a()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});he.set(t,e)}let fe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return he.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pn(t){fe=t(fe)}function mn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(se(this),e,...n);return dt.set(s,e.sort?e.sort():[e]),D(s)}:un().includes(t)?function(...e){return t.apply(se(this),e),D(lt.get(this))}:function(...e){return D(t.apply(se(this),e))}}function gn(t){return typeof t=="function"?mn(t):(t instanceof IDBTransaction&&fn(t),ln(t,dn())?new Proxy(t,fe):t)}function D(t){if(t instanceof IDBRequest)return hn(t);if(ne.has(t))return ne.get(t);const e=gn(t);return e!==t&&(ne.set(t,e),Ie.set(e,t)),e}const se=t=>Ie.get(t);function yn(t,e,{blocked:n,upgrade:s,blocking:a,terminated:o}={}){const i=indexedDB.open(t,e),r=D(i);return s&&i.addEventListener("upgradeneeded",c=>{s(D(i.result),c.oldVersion,c.newVersion,D(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),r.then(c=>{o&&c.addEventListener("close",()=>o()),a&&c.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),r}const En=["get","getKey","getAll","getAllKeys","count"],bn=["put","add","delete","clear"],ae=new Map;function xe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ae.get(e))return ae.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=bn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||En.includes(n)))return;const o=async function(i,...r){const c=this.transaction(i,a?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(r.shift())),(await Promise.all([l[n](...r),a&&c.done]))[0]};return ae.set(e,o),o}pn(t=>({...t,get:(e,n,s)=>xe(e,n)||t.get(e,n,s),has:(e,n)=>!!xe(e,n)||t.has(e,n)}));/**
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
 */class wn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_n(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _n(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pe="@firebase/app",$e="0.16.2";/**
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
 */const R=new ct("@firebase/app"),In="@firebase/app-compat",On="@firebase/analytics-compat",Cn="@firebase/analytics",Sn="@firebase/app-check-compat",vn="@firebase/app-check",An="@firebase/auth",Rn="@firebase/auth-compat",Tn="@firebase/database",Dn="@firebase/data-connect",Nn="@firebase/database-compat",Pn="@firebase/functions",Mn="@firebase/functions-compat",Ln="@firebase/installations",kn="@firebase/installations-compat",xn="@firebase/messaging",$n="@firebase/messaging-compat",Bn="@firebase/performance",Fn="@firebase/performance-compat",Un="@firebase/remote-config",Gn="@firebase/remote-config-compat",Hn="@firebase/storage",Vn="@firebase/storage-compat",jn="@firebase/firestore",qn="@firebase/ai",zn="@firebase/firestore-compat",Yn="firebase";/**
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
 */const me="[DEFAULT]",Wn={[pe]:"fire-core",[In]:"fire-core-compat",[Cn]:"fire-analytics",[On]:"fire-analytics-compat",[vn]:"fire-app-check",[Sn]:"fire-app-check-compat",[An]:"fire-auth",[Rn]:"fire-auth-compat",[Tn]:"fire-rtdb",[Dn]:"fire-data-connect",[Nn]:"fire-rtdb-compat",[Pn]:"fire-fn",[Mn]:"fire-fn-compat",[Ln]:"fire-iid",[kn]:"fire-iid-compat",[xn]:"fire-fcm",[$n]:"fire-fcm-compat",[Bn]:"fire-perf",[Fn]:"fire-perf-compat",[Un]:"fire-rc",[Gn]:"fire-rc-compat",[Hn]:"fire-gcs",[Vn]:"fire-gcs-compat",[jn]:"fire-fst",[zn]:"fire-fst-compat",[qn]:"fire-vertex","fire-js":"fire-js",[Yn]:"fire-js-all"};/**
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
 */const Z=new Map,Jn=new Map,ge=new Map;function Be(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function X(t){const e=t.name;if(ge.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ge.set(e,t);for(const n of Z.values())Be(n,t);for(const n of Jn.values())Be(n,t);return!0}function Kn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Xn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},A=new rt("app","Firebase",Xn);/**
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
 */class Qn{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}function ut(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:me,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw A.create("bad-app-name",{appName:String(a)});if(n||(n=it()),!n)throw A.create("no-options");const o=Z.get(a);if(o)if(ue(n,o.options)){if(ue(s,o.config))return o;throw A.create("duplicate-app",{appName:a,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(s)})}else throw A.create("duplicate-app",{appName:a,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(n)});const i=new sn(a);for(const c of ge.values())i.addComponent(c);const r=new Qn(n,s,i);return Z.set(a,r),r}function es(t=me){const e=Z.get(t);if(!e&&t===me&&it())return ut();if(!e)throw A.create("no-app",{appName:t});return e}function F(t,e,n){let s=Wn[t]??t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=e.match(/\s|\//);if(a||o){const i=[`Unable to register library "${s}" with version "${e}":`];a&&i.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&i.push("and"),o&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(i.join(" "));return}X(new Y(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ts="firebase-heartbeat-database",ns=1,W="firebase-heartbeat-store";let oe=null;function ht(){return oe||(oe=yn(ts,ns,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(W)}catch(n){console.warn(n)}}}}).catch(t=>{throw A.create("idb-open",{originalErrorMessage:t.message})})),oe}async function ss(t){try{const n=(await ht()).transaction(W),s=await n.objectStore(W).get(ft(t));return await n.done,s}catch(e){if(e instanceof G)R.warn(e.message);else{const n=A.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R.warn(n.message)}}}async function Fe(t,e){try{const s=(await ht()).transaction(W,"readwrite");await s.objectStore(W).put(e,ft(t)),await s.done}catch(n){if(n instanceof G)R.warn(n.message);else{const s=A.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});R.warn(s.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}/**
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
 */const as=1024,os=30;class is{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cs(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ue();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>os){const i=ls(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){R.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ue(),{heartbeatsToSend:s,unsentEntries:a}=rs(this._heartbeatsCache.heartbeats),o=at(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return R.warn(n),""}}}function Ue(){return new Date().toISOString().substring(0,10)}function rs(t,e=as){const n=[];let s=t.slice();for(const a of t){const o=n.find(i=>i.agent===a.agent);if(o){if(o.dates.push(a.date),Ge(n)>e){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ge(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jt()?Kt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ss(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ge(t){return at(JSON.stringify({version:2,heartbeats:t})).length}function ls(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function ds(t){X(new Y("platform-logger",e=>new wn(e),"PRIVATE")),X(new Y("heartbeat",e=>new is(e),"PRIVATE")),F(pe,$e,t),F(pe,$e,"esm2020"),F("fire-js","")}/**
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
 */ds("");var us="firebase",hs="12.19.0";/**
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
 */F(us,hs,"app");var He="@firebase/ai",ye="2.16.0";/**
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
 */const L="AI",fs="us-central1",ps="global",ms="firebasevertexai.googleapis.com",U="v1beta",Ve=ye,gs="gl-js",ys="hybrid",Es=180*1e3,bs="gemini-2.5-flash-lite";/**
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
 */class u extends G{constructor(e,n,s){const a=L,o=`${a}/${e}`,i=`${a}: ${n} (${o})`;super(e,i),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,u),Object.setPrototypeOf(this,u.prototype),this.toString=()=>i}}/**
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
 */const je=["user","model","function","system"],pt={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},w={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},I={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},T={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
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
 */class Oe{constructor(e){this.backendType=e}}class te extends Oe{constructor(){super(S.GOOGLE_AI)}_getModelPath(e,n){return`/${U}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${U}/projects/${e}/templates/${n}`}}class Ce extends Oe{constructor(e){super(S.VERTEX_AI),this.location=fs,e&&(this.location=e)}_getModelPath(e,n){return`/${U}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${U}/projects/${e}/locations/${this.location}/templates/${n}`}}class Se extends Oe{constructor(e){super(S.AGENT_PLATFORM),this.location=ps,e&&(this.location=e)}_getModelPath(e,n){return`/${U}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${U}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
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
 */function ws(t){if(t instanceof te)return`${L}/googleai`;if(t instanceof Ce)return`${L}/vertexai/${t.location}`;if(t instanceof Se)return`${L}/agentplatform/${t.location}`;throw new u(d.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function _s(t){const e=t.split("/");if(e[0]!==L)throw new u(d.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new u(d.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new Ce(s);case"agentplatform":const a=e[2];if(!a)throw new u(d.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new Se(a);case"googleai":return new te;default:throw new u(d.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
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
 */const E=new ct("@firebase/vertexai");var v;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(v||(v={}));/**
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
 */const mt={type:"text",languages:["en"]},ie=[mt,{type:"image"}],re=[mt];class O{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:ie,expectedOutputs:re}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=ie),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=re)):this.onDeviceParams.createOptions={expectedInputs:ie,expectedOutputs:re})}async isAvailable(e){var s;if(!this.mode)return E.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===I.ONLY_IN_CLOUD)return E.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===I.ONLY_ON_DEVICE){if(n===v.UNAVAILABLE)throw new u(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===v.DOWNLOADABLE||n===v.DOWNLOADING){E.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(a){throw new u(d.ERROR,a.message)}return!0}return!0}return n!==v.AVAILABLE?(E.debug(`On-device inference unavailable because availability is "${n}".`),!1):O.isOnDeviceRequest(e)?!0:(E.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(O.toLanguageModelMessage)),a=await n.prompt(s,this.onDeviceParams.promptOptions);return O.toResponse(a)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(O.toLanguageModelMessage)),a=n.promptStreaming(s,this.onDeviceParams.promptOptions);return O.toStreamResponse(a)}async countTokens(e){throw new u(d.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return E.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return E.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if(s.inlineData&&O.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return E.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===v.DOWNLOADABLE||n===v.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=a=>{a.addEventListener("downloadprogress",o=>{e(o.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(O.toLanguageModelMessageContent));return{role:O.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new u(d.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new u(d.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,a){const o=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});a.enqueue(n.encode(`data: ${o}

`))}}))}}}O.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Is(t,e,n){const a=(e||ot()).LanguageModel;if(a&&t)return new O(a,t,n)}/**
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
 */class Os{constructor(e,n,s,a,o){this.app=e,this.backend=n,this.chromeAdapterFactory=o;const i=a==null?void 0:a.getImmediate({optional:!0}),r=s==null?void 0:s.getImmediate({optional:!0});this.auth=r||null,this.appCheck=i||null,n instanceof Ce||n instanceof Se?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
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
 */function Cs(t,{instanceIdentifier:e}){if(!e)throw new u(d.ERROR,"AIService instance identifier is undefined.");const n=_s(e),s=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Os(s,n,a,o,Is)}/**
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
 */function Ss(t){var n,s,a,o,i,r,c;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((o=(a=t.app)==null?void 0:a.options)!=null&&o.projectId){if(!((r=(i=t.app)==null?void 0:i.options)!=null&&r.appId))throw new u(d.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new u(d.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new u(d.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if(Zn(t.app)&&t.app.settings.appCheckToken){const l=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:l})}else t.appCheck&&((c=t.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
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
 */class z{constructor(e,n){this._apiSettings=Ss(e),this.model=z.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===S.GOOGLE_AI?z.normalizeGoogleAIModelName(e):z.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
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
 */const vs="Timeout has expired.",ce="AbortError";class As{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${ms}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function Rs(t){const e=[];return e.push(`${gs}/${Ve}`),e.push(`fire/${Ve}`),(t.params.apiSettings.inferenceMode===I.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===I.PREFER_IN_CLOUD)&&e.push(ys),e.join(" ")}async function Ts(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Rs(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&E.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function ve(t,e){var l,m;const n=new As(t);let s;const a=(l=t.singleRequestOptions)==null?void 0:l.signal,o=((m=t.singleRequestOptions)==null?void 0:m.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:Es,i=new AbortController,r=setTimeout(()=>{i.abort(new DOMException(vs,ce)),E.debug(`Aborting request to ${n} due to timeout (${o}ms)`)},o),c=AbortSignal.any(a?[a,i.signal]:[i.signal]);if(a&&a.aborted)throw clearTimeout(r),new DOMException(a.reason??"Aborted externally before fetch",ce);try{const h={method:"POST",headers:await Ts(n),signal:c,body:e};if(s=await fetch(n.toString(),h),!s.ok){let y="",f;try{const b=await s.json();y=b.error.message,b.error.details&&(y+=` ${JSON.stringify(b.error.details)}`,f=b.error.details)}catch{}throw s.status===403&&f&&f.some(b=>b.reason==="SERVICE_DISABLED")&&f.some(b=>{var Te,De;return(De=(Te=b.links)==null?void 0:Te[0])==null?void 0:De.description.includes("Google developers console API activation")})?new u(d.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:f}):new u(d.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${y}`,{status:s.status,statusText:s.statusText,errorDetails:f})}}catch(h){let y=h;throw h.code!==d.FETCH_ERROR&&h.code!==d.API_NOT_ENABLED&&h instanceof Error&&h.name!==ce&&(y=new u(d.ERROR,`Error fetching from ${n.toString()}: ${h.message}`),y.stack=h.stack),y}finally{clearTimeout(r)}return s}/**
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
 */function J(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&E.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),yt(t.candidates[0]))throw new u(d.RESPONSE_ERROR,`Response error: ${M(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function Q(t,e=T.IN_CLOUD){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=Ds(t);return n.inferenceSource=e,n}function Ds(t){return t.text=()=>{if(J(t))return qe(t,e=>!e.thought);if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Text not available. ${M(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(J(t)){const e=qe(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Thought summary not available. ${M(t)}`,{response:t})},t.inlineDataParts=()=>{if(J(t))return Ns(t);if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Data not available. ${M(t)}`,{response:t})},t.functionCalls=()=>{if(J(t))return gt(t);if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Function call not available. ${M(t)}`,{response:t})},t}function qe(t,e){var s,a,o,i;const n=[];if((a=(s=t.candidates)==null?void 0:s[0].content)!=null&&a.parts)for(const r of(i=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:i.parts)r.text&&e(r)&&n.push(r.text);return n.length>0?n.join(""):""}function gt(t){var n,s,a,o;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const i of(o=(a=t.candidates)==null?void 0:a[0].content)==null?void 0:o.parts)i.functionCall&&e.push(i.functionCall);if(e.length>0)return e}function Ns(t){var n,s,a,o;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const i of(o=(a=t.candidates)==null?void 0:a[0].content)==null?void 0:o.parts)i.inlineData&&e.push(i);if(e.length>0)return e}const Ps=[w.RECITATION,w.SAFETY,w.BLOCKLIST,w.PROHIBITED_CONTENT,w.SPII,w.MALFORMED_FUNCTION_CALL,w.IMAGE_SAFETY,w.IMAGE_PROHIBITED_CONTENT,w.IMAGE_OTHER,w.NO_IMAGE,w.IMAGE_RECITATION,w.LANGUAGE,w.UNEXPECTED_TOOL_CALL,w.TOO_MANY_TOOL_CALLS,w.MISSING_THOUGHT_SIGNATURE,w.MALFORMED_RESPONSE];function yt(t){return!!t.finishReason&&Ps.some(e=>e===t.finishReason)}function M(t){var n,s,a;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((a=t.candidates)!=null&&a[0]){const o=t.candidates[0];yt(o)&&(e+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(e+=`: ${o.finishMessage}`))}return e}/**
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
 */function Et(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new u(d.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(E.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function Ae(t){return{candidates:t.candidates?Ls(t.candidates):void 0,prompt:t.promptFeedback?ks(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Ms(t,e){return{generateContentRequest:{model:e,...t}}}function Ls(t){const e=[];let n;return e&&t.forEach(s=>{var i,r;let a;if(s.citationMetadata&&(a={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>({...c,severity:c.severity??pt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(r=(i=s.content)==null?void 0:i.parts)!=null&&r.some(c=>c==null?void 0:c.videoMetadata))throw new u(d.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const o={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:a,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(o)}),e}function ks(t){const e=[];return t.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??pt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
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
 */const ze=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function xs(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),a=Us(s),[o,i]=a.tee(),{response:r,firstValue:c}=await $s(i,e,n);return{stream:Fs(o,e,n),response:r,firstValue:c}}async function $s(t,e,n){const[s,a]=t.tee(),o=s.getReader(),{value:i}=await o.read();return{firstValue:i,response:Bs(a,e,n)}}async function Bs(t,e,n){const s=[],a=t.getReader();for(;;){const{done:o,value:i}=await a.read();if(o){let r=Gs(s);return e.backend.backendType===S.GOOGLE_AI&&(r=Ae(r)),Q(r,n)}s.push(i)}}async function*Fs(t,e,n){var a,o;const s=t.getReader();for(;;){const{value:i,done:r}=await s.read();if(r)break;let c;e.backend.backendType===S.GOOGLE_AI?c=Q(Ae(i),n):c=Q(i,n);const l=(a=c.candidates)==null?void 0:a[0];!((o=l==null?void 0:l.content)!=null&&o.parts)&&!(l!=null&&l.finishReason)&&!(l!=null&&l.citationMetadata)&&!(l!=null&&l.urlContextMetadata)||(yield c)}}function Us(t){const e=t.getReader();return new ReadableStream({start(s){let a="";return o();function o(){return e.read().then(({value:i,done:r})=>{if(r){if(a.trim()){s.error(new u(d.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}a+=i;let c=a.match(ze),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new u(d.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(l),a=a.substring(c[0].length),c=a.match(ze)}return o()})}}})}function Gs(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const a of s.candidates){const o=a.index||0;n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:a.index}),n.candidates[o].citationMetadata=a.citationMetadata,n.candidates[o].finishReason=a.finishReason,n.candidates[o].finishMessage=a.finishMessage,n.candidates[o].safetyRatings=a.safetyRatings,n.candidates[o].groundingMetadata=a.groundingMetadata;const i=a.urlContextMetadata;if(typeof i=="object"&&i!==null&&Object.keys(i).length>0&&(n.candidates[o].urlContextMetadata=i),a.content){if(!a.content.parts)continue;n.candidates[o].content||(n.candidates[o].content={role:a.content.role||"user",parts:[]});for(const r of a.content.parts){const c={...r};r.text!==""&&Object.keys(c).length>0&&n.candidates[o].content.parts.push(c)}}}return n}/**
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
 */const Hs=[d.FETCH_ERROR,d.ERROR,d.API_NOT_ENABLED];async function bt(t,e,n,s){if(!e)return{response:await s(),inferenceSource:T.IN_CLOUD};switch(e.mode){case I.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:T.ON_DEVICE};throw new u(d.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case I.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:T.IN_CLOUD};case I.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:T.IN_CLOUD}}catch(a){if(a instanceof u&&Hs.includes(a.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:T.ON_DEVICE};throw a}case I.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:T.ON_DEVICE}:{response:await s(),inferenceSource:T.IN_CLOUD};default:throw new u(d.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
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
 */async function Vs(t,e,n,s){return t.backend.backendType===S.GOOGLE_AI&&(n=Et(n)),ve({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function wt(t,e,n,s,a){const o=await bt(n,s,()=>s.generateContentStream(n),()=>Vs(t,e,n,a));return xs(o.response,t,o.inferenceSource)}async function js(t,e,n,s){return t.backend.backendType===S.GOOGLE_AI&&(n=Et(n)),ve({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function _t(t,e,n,s,a){const o=await bt(n,s,()=>s.generateContent(n),()=>js(t,e,n,a)),i=await qs(o.response,t);return{response:Q(i,o.inferenceSource)}}async function qs(t,e){const n=await t.json();return e.backend.backendType===S.GOOGLE_AI?Ae(n):n}/**
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
 */function Re(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function q(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return zs(e)}function zs(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const a of t)"functionResponse"in a?s=!0:n=!0,e.parts.push(a);if(n&&s)throw new u(d.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new u(d.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function le(t){let e;return t.contents?e=t:e={contents:[q(t)]},t.systemInstruction&&(e.systemInstruction=Re(t.systemInstruction)),e}/**
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
 */const Ye="SILENT_ERROR",We=10;class Ys{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,n){let s={};await this._sendPromise;const a=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,l,m;let o,i=0;const r=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??We;do{let h;if(o){i++;const b=await this._callFunctionsAsNeeded(o);h=q(b)}else h=q(e);const y=this._formatRequest(h,[...a]);a.push(h);const f=await this._callGenerateContent(y,n);if(f)if(s=f,o=this._getCallableFunctionCalls(f.response),f.response.candidates&&f.response.candidates.length>0){const b={parts:((l=f.response.candidates)==null?void 0:l[0].content.parts)||[],role:((m=f.response.candidates)==null?void 0:m[0].content.role)||"model"};a.push(b)}else{const b=M(f.response);b&&E.warn(`sendMessage() was unsuccessful. ${b}. Inspect response object for details.`)}else o=void 0}while(o&&i<r);o&&i>=r&&E.warn(`Automatic function calling exceeded the limit of ${r} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(a),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],o=(async()=>{var m;let i,r=0;const c=((m=this.requestOptions)==null?void 0:m.maxSequentialFunctionCalls)??We;let l;do{let h;if(i){r++;const f=await this._callFunctionsAsNeeded(i);h=q(f)}else h=q(e);const y=this._formatRequest(h,[...s]);if(s.push(h),l=await this._callGenerateContentStream(y,n),i=this._getCallableFunctionCalls(l.firstValue),i&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const f={...l.firstValue.candidates[0].content};f.role||(f.role="model"),s.push(f)}}while(i&&r<c);return i&&r>=c&&E.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>o).catch(i=>{throw new Error(Ye)}).then(i=>i.response).then(i=>{if(i.candidates&&i.candidates.length>0){this._history=this._history.concat(s);const r={...i.candidates[0].content};r.role||(r.role="model"),this._history.push(r)}else{const r=M(i);r&&E.warn(`sendMessageStream() was unsuccessful. ${r}. Inspect response object for details.`)}}).catch(i=>{i.message!==Ye&&i.name!=="AbortError"&&E.error(i)}),o}_getCallableFunctionCalls(e){var a,o,i;const n=(o=(a=this.params)==null?void 0:a.tools)==null?void 0:o.find(r=>r.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=gt(e);if(s){for(const r of s)if(!((i=n.functionDeclarations)==null?void 0:i.some(l=>l.name===r.name&&typeof l.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var o,i;const n=[],s=[],a=(i=(o=this.params)==null?void 0:o.tools)==null?void 0:i.find(r=>r.functionDeclarations);if(a&&a.functionDeclarations){for(const c of e){const l=a.functionDeclarations.find(m=>m.name===c.name);if(l!=null&&l.functionReference){const m=Promise.resolve(l.functionReference(c.args)).catch(h=>{const y=new u(d.ERROR,`Error in user-defined function "${l.name}": ${h.message}`);throw y.stack=h.stack,y});n.push({name:c.name,id:c.id,results:m}),s.push(m)}}await Promise.all(s);const r=[];for(const{name:c,id:l,results:m}of n){const h={name:c,response:await m};l&&(h.id=l),r.push({functionResponse:h})}return r}else throw new u(d.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
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
 */const Je=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],Ws={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Ke={user:["model"],function:["model"],model:["user","function"],system:[]};function Js(t){let e=null;for(const n of t){const{role:s,parts:a}=n;if(!e&&s!=="user")throw new u(d.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!je.includes(s))throw new u(d.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(je)}`);if(!Array.isArray(a))throw new u(d.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(a.length===0)throw new u(d.INVALID_CONTENT,"Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const r of a)for(const c of Je)c in r&&(o[c]+=1);const i=Ws[s];for(const r of Je)if(!i.includes(r)&&o[r]>0)throw new u(d.INVALID_CONTENT,`Content with role '${s}' can't contain '${r}' part`);if(e&&!Ke[s].includes(e.role))throw new u(d.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Ke)}`);e=n}}/**
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
 */class Ks extends Ys{constructor(e,n,s,a,o){var i;super(e,a,o),this.model=n,this.chromeAdapter=s,this.params=a,this.requestOptions=o,a!=null&&a.history&&(Js(a.history),this._history=a.history),((i=this.params)==null?void 0:i.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:Re(this.params.systemInstruction)})}_formatRequest(e,n){var s,a,o,i,r;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(a=this.params)==null?void 0:a.generationConfig,tools:(o=this.params)==null?void 0:o.tools,toolConfig:(i=this.params)==null?void 0:i.toolConfig,systemInstruction:(r=this.params)==null?void 0:r.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return _t(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return wt(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
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
 */async function Zs(t,e,n,s){let a="";if(t.backend.backendType===S.GOOGLE_AI){const i=Ms(n,e);a=JSON.stringify(i)}else a=JSON.stringify(n);return(await ve({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},a)).json()}async function Xs(t,e,n,s,a){if((s==null?void 0:s.mode)===I.ONLY_ON_DEVICE)throw new u(d.UNSUPPORTED,"countTokens() is not supported for on-device models.");return Zs(t,e,n,a)}/**
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
 */class Qs extends z{constructor(e,n,s,a){super(e,n.model),this.chromeAdapter=a,this.generationConfig=n.generationConfig||{},ea(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Re(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===I.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===v.UNAVAILABLE){const s=new u(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===I.ONLY_ON_DEVICE)throw s;E.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=le(e);return _t(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=le(e),{stream:a,response:o}=await wt(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:a,response:o}}startChat(e){return new Ks(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=le(e);return Xs(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function ea(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new u(d.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new u(d.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new u(d.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
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
 */function ta(t=es(),e){t=Qt(t);const n=Kn(t,L),s=(e==null?void 0:e.backend)??new te,a={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},o=ws(s),i=n.getImmediate({identifier:o});return i.options=a,i}const na=["mode","onDeviceParams","inCloudParams"];function sa(t,e,n){var r;const s=e;let a;if(s.mode){for(const c of Object.keys(e))na.includes(c)||E.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);a=s.inCloudParams||{model:bs}}else a=e;if(!a.model)throw new u(d.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const o=(r=t.chromeAdapterFactory)==null?void 0:r.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),i=new Qs(t,a,n,o);return i._apiSettings.inferenceMode=s.mode,i}/**
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
 */function aa(){X(new Y(L,Cs,"PUBLIC").setMultipleInstances(!0)),F(He,ye),F(He,ye,"esm2020")}aa();let Ze=null,K=null;function oa(){if(K)return K;if(!B)throw new Error("Firebase is not configured yet (Sprint 3 account pending).");Ze=ut(j);const t=ta(Ze,{backend:new te});return K=sa(t,{model:_e,mode:I.PREFER_IN_CLOUD,generationConfig:{responseMimeType:"application/json"}}),K}const ia=`You are a contract risk reviewer. The user gives you a contract in which all personal data has ALREADY been replaced with placeholders like [NAME_1], [PHONE_1], [ACCOUNT_1]. Never ask for or invent the real values.

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
Write explanations in the same language as the contract. Quotes must be copied exactly from the contract text. This is general information, not legal advice.`,ra=["high","medium","low"];async function ca(t){const s=(await oa().generateContent(`${ia}

CONTRACT (personal data already masked):
"""
${t}
"""`)).response.text(),a=s.slice(s.indexOf("{"),s.lastIndexOf("}")+1),o=JSON.parse(a);return{source:"cloud",clauses:(o.clauses??[]).filter(r=>r&&typeof r.quote=="string"&&typeof r.why=="string").map(r=>({category:r.category??"other",title:r.title??"Clause to review",risk:ra.includes(r.risk)?r.risk:"medium",quote:r.quote,why:r.why,counterProposal:r.counterProposal??""})),summary:o.summary??"",negotiationPoints:o.negotiationPoints??[]}}const la=[{category:"unilateral-termination",title:"One-sided termination right",risk:"high",re:/(언제든|언제든지)[^.\n]{0,40}해지할 수 있|일방적[^.\n]{0,20}해지|may terminate[^.\n]{0,60}for convenience|terminate this agreement at any time/i,why:"Only one side can end the contract early, at will. The other side is locked in even if the work or the relationship breaks down.",counterProposal:"Make termination mutual: either party may terminate with at least 30 days' written notice, and work already performed is paid in full."},{category:"excessive-penalty",title:"Excessive penalty clause",risk:"high",re:/계약금액의\s*(\d+)\s*%\s*에 해당하는 위약금|위약금[^.\n]{0,20}(\d+)\s*%|liquidated damages of\s*(\d+)\s*%/i,why:"The penalty is charged as a large fixed share of the whole contract value, on top of separate damages. Courts often reduce penalties that far exceed the actual loss, but you would have to fight for that reduction.",counterProposal:"Cap the penalty at 10% of the contract value, state that it is the full remedy for the breach, and remove the separate open-ended damages claim."},{category:"rights-waiver",title:"Blanket rights waiver",risk:"high",re:/모든 권리를 포기|일체의 권리[^.\n]{0,30}포기|waives? (any|all|the) right|waiver of[^.\n]{0,30}rights?/i,why:"A blanket waiver gives up rights you may not even know you have yet, including rights that cannot legally be waived in advance in many jurisdictions.",counterProposal:"Limit the transfer to the final deliverables listed in the contract, keep moral rights and pre-existing IP with the creator, and delete the blanket waiver."},{category:"auto-renewal",title:"Auto-renewal trap",risk:"medium",re:/자동으로 갱신|자동 갱신|automatically renews?|auto-?renew/i,why:"The contract renews by itself unless you object long before the deadline. Miss the notice window once and you are committed for another full term.",counterProposal:"Shorten the non-renewal notice window to 30 days, require a reminder from the other party 45 days before the deadline, and cap any price increase at renewal to 5%."},{category:"unilateral-change",title:"Terms can be changed unilaterally",risk:"high",re:/may (change|modify)[^.\n]{0,80}(at any time|sole discretion)|사전 통지 없이[^.\n]{0,20}변경|일방적[^.\n]{0,20}변경할 수 있/i,why:"The other side can rewrite the deal, including prices, at any moment, and your continued use counts as agreement. You could end up bound by terms you never negotiated.",counterProposal:"Changes require 30 days' written notice, price changes apply only from the next term, and you may terminate without penalty if you do not accept a change."},{category:"liability-waiver",title:"Broad liability waiver",risk:"medium",re:/shall not be liable|어떠한 손해[^.\n]{0,20}책임지지|책임지지 않/i,why:"The provider excludes liability even for serious losses, so if the service fails at a critical moment you may have no practical remedy.",counterProposal:"Cap liability at the fees paid in the last 12 months instead of excluding it, and carve out wilful misconduct, gross negligence and data breaches."},{category:"non-compete",title:"Non-compete restriction",risk:"medium",re:/경업금지|동종 업계[^.\n]{0,30}할 수 없|동종 업체[^.\n]{0,20}취업할 수 없|non-?compete/i,why:"A broad non-compete can block your livelihood after the contract ends. Long, industry-wide bans are frequently narrowed or struck down, but only after a dispute.",counterProposal:"Limit the non-compete to named direct competitors, shorten it to 6 months, and tie it to a paid restriction period."}];function da(t,e,n){const s=Math.max(t.lastIndexOf(`
`,e),t.lastIndexOf(". ",e),t.lastIndexOf("。",e));let a=t.indexOf(`
`,e+n);a===-1&&(a=t.length);const o=t.indexOf(". ",e+n);return o!==-1&&o<a&&(a=o+1),t.slice(s+1,a).trim().slice(0,300)}function Xe(t){const e=[],n=new Set;for(const o of la){const i=o.re.exec(t);if(!i||n.has(o.category))continue;n.add(o.category);let r=o.risk,c=o.why;if(o.category==="excessive-penalty"){const l=Number(i[1]??i[2]??i[3]);Number.isFinite(l)&&(c=`The penalty is fixed at ${l}% of the contract value, on top of separate damages. Penalties far above the actual expected loss are often reduced by courts, but only after a dispute.`,r=l>=30?"high":l>=15?"medium":"low")}e.push({category:o.category,title:o.title,risk:r,quote:da(t,i.index,i[0].length),why:c,counterProposal:o.counterProposal})}const s=e.filter(o=>o.risk==="high").length,a=e.length===0?"The basic on-device scan found none of the common one-sided clause patterns. This is a pattern scan, not legal advice; the cloud review reads the full text more deeply.":`The basic on-device scan flagged ${e.length} clause${e.length>1?"s":""}`+(s>0?`, ${s} of them high risk`:"")+". This is a pattern scan of the masked text, not legal advice.";return{source:"on-device",clauses:e,summary:a,negotiationPoints:e.map(o=>`${o.title}: ${o.counterProposal}`)}}const g=t=>document.getElementById(t),Ee=g("contract-input"),be=g("analyze"),P=g("download-model"),It=g("simulate-offline"),k=g("progress");let $="checking",ua="";const ha=()=>navigator.onLine&&!It.checked,we=()=>!ha();function C(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function de(t,e,n,s){const o=g(t).querySelector(".dot");o.className=`dot dot-${n}`,g(e).textContent=s}async function V(){const t=await tt();$=t;const e={available:["ok","ready"],downloadable:["warn","not downloaded yet"],downloading:["warn","downloading…"],unavailable:["bad","unavailable on this device"],unsupported:["bad","not supported in this browser"]},[n,s]=e[t]??["unknown",t];de("chip-device","device-status",n,s),P.classList.toggle("hidden",!(t==="downloadable"||t==="downloading"));const a=navigator.onLine;de("chip-network","network-status",a?"ok":"warn",a?"online":"offline"),de("chip-cloud","cloud-status",B?"ok":"warn",B?`configured (${_e})`:"not configured yet");const o=g("mode-banner");we()?(o.textContent="Mode: ON-DEVICE ONLY. The network is off (or simulated off). Masking and the basic review run entirely on this device; nothing is uploaded.",o.dataset.mode="device"):B?(o.textContent="Mode: HYBRID. Personal data is masked on this device first; only the masked text goes to the cloud for a deep review.",o.dataset.mode="hybrid"):(o.textContent="Mode: ON-DEVICE ONLY. Cloud review is not configured yet (waiting for the Sprint 3 Firebase project), so nothing is uploaded. Masking and the basic review run on this device.",o.dataset.mode="device")}const Qe={regex:"Safety-net rules",field:"Form-field rules",model:"Gemini Nano (on-device)"};function fa(t,e){const n=g("mask-summary");if(e.length===0)n.textContent="No personal data was found by the rule layers"+($==="available"?" or by Gemini Nano.":". (Gemini Nano is not available in this browser, so only the rule layers ran.)");else{const o=new Map;for(const r of e)o.set(r.layer,(o.get(r.layer)??0)+1);const i=[...o.entries()].map(([r,c])=>`${c} by ${Qe[r]}`).join(", ");n.textContent=`${e.length} personal data item${e.length>1?"s":""} masked: ${i}.`}const s=g("findings-table"),a=g("findings-body");a.innerHTML="",s.classList.toggle("hidden",e.length===0),e.forEach((o,i)=>{const r=document.createElement("tr");r.innerHTML=`<td>${i+1}</td><td>${C(o.type)}</td><td class="value">${C(o.value)}</td><td>${C(Qe[o.layer])}</td><td><code>${C(o.token)}</code></td>`,a.appendChild(r)}),g("masked-output").innerHTML=C(t).replace(/\[([A-Z]+_\d+)\]/g,"<mark>[$1]</mark>")}function pa(t,e){const n=g("review-source");n.textContent=t.source==="cloud"?`Deep review by cloud Gemini via Firebase AI Logic (${_e}), run on the masked text only.`:"Basic review computed on this device (deterministic clause-pattern scan of the masked text). No text left the device for this review.",e&&(n.textContent+=` ${e}`),n.dataset.source=t.source,g("review-summary").textContent=t.summary;const s=g("clause-list");s.innerHTML="",t.clauses.length===0&&(s.innerHTML='<p class="empty">No risky clause patterns were flagged.</p>');for(const o of t.clauses){const i=document.createElement("article");i.className=`clause risk-${o.risk}`,i.innerHTML=`<header><span class="risk-badge">${C(o.risk.toUpperCase())}</span><h4>${C(o.title)}</h4></header><blockquote>${C(o.quote)}</blockquote><p><strong>Why it matters.</strong> ${C(o.why)}</p><p><strong>Counter-proposal.</strong> ${C(o.counterProposal)}</p>`,s.appendChild(i)}const a=g("negotiation-list");a.innerHTML="",t.negotiationPoints.length===0&&(a.innerHTML='<li class="empty">Nothing to negotiate from this scan.</li>');for(const o of t.negotiationPoints){const i=document.createElement("li");i.textContent=o,a.appendChild(i)}}function ma(t,e){g("payload-note").textContent=t?"This is the exact payload that was sent to the cloud for the deep review. Check it: no names, numbers or addresses, only placeholders.":"Nothing was sent anywhere for this analysis. If a cloud review runs, the payload will be exactly this masked text:",g("payload-output").textContent=e}async function ga(){const t=Ee.value;if(!t.trim()){k.textContent="Paste a contract or load a sample first.";return}be.disabled=!0;try{k.textContent="Step 1 of 2 · Masking personal data on this device…";const e=[...Tt(t)];let n="";if($==="available")try{const l=await $t(t);e.push(...l),n=`Gemini Nano added ${l.length} candidate item(s); duplicates with the rule layers were merged.`}catch(l){n=`Gemini Nano pass failed (${l.message}); rule layers only.`}else $==="downloadable"||$==="downloading"?n="Gemini Nano is not downloaded yet, so this run used the rule layers only. Use the “Enable on-device model” button to download it.":n="Gemini Nano is not available in this browser, so this run used the rule layers only. Open this page in Chrome 139+ on desktop for the on-device model layer.";const{maskedText:s,items:a}=Pt(t,e);ua=s,fa(s,a),k.textContent=n;let o,i=!1,r="";if(!we()&&B){k.textContent="Step 2 of 2 · Sending the MASKED text to cloud Gemini for a deep review…";try{o=await ca(s),i=!0}catch(l){r=`Cloud review failed (${l.message}); fell back to the on-device basic review.`,o=Xe(s)}}else k.textContent="Step 2 of 2 · Running the on-device basic review…",o=Xe(s),we()?r="Offline: the cloud review was not attempted.":B||(r="Cloud review is not configured yet, so it was not attempted.");pa(o,r),ma(i,s);const c=g("nano-summary");if(c.classList.add("hidden"),c.textContent="",o.source==="on-device"&&$==="available"){const l=await Bt(s,o.clauses.map(m=>m.title));l&&(c.innerHTML=`<strong>Plain-language summary by Gemini Nano (on-device):</strong> ${C(l)}`,c.classList.remove("hidden"))}k.textContent=n}finally{be.disabled=!1}}function ya(){const t=g("sample-row");for(const e of St){const n=document.createElement("button");n.type="button",n.className="sample-btn",n.textContent=e.label,n.addEventListener("click",()=>{Ee.value=e.text,Ee.focus()}),t.appendChild(n)}be.addEventListener("click",()=>void ga()),P.addEventListener("click",()=>{P.disabled=!0,P.textContent="Downloading on-device model… 0%",Mt(e=>{P.textContent=`Downloading on-device model… ${Math.round(e*100)}%`}).then(()=>V()).finally(()=>{P.disabled=!1,P.textContent="Enable on-device model"})}),It.addEventListener("change",()=>void V()),window.addEventListener("online",()=>void V()),window.addEventListener("offline",()=>void V()),V()}ya();

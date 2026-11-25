/**
 * Built-in sample contracts so a judge can try ContractLens in one click.
 * All names, numbers and addresses below are invented for this demo.
 * Each sample plants personal data plus one-sided clauses on purpose:
 * the Korean sample has a unilateral termination right, a 50% penalty,
 * a full rights waiver and a 90-day auto-renewal trap.
 */

export const SAMPLE_KO = `프리랜서 용역 계약서

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
`;

export const SAMPLE_EN = `MASTER SUBSCRIPTION AND SERVICES AGREEMENT

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
`;

export interface Sample {
  id: string;
  label: string;
  text: string;
}

export const SAMPLES: Sample[] = [
  { id: "ko", label: "Sample 1 · Korean freelance contract (한국어 용역 계약서)", text: SAMPLE_KO },
  { id: "en", label: "Sample 2 · English SaaS terms", text: SAMPLE_EN },
];

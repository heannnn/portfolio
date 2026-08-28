import { TECH_STACKS, PERSONAL_STACK } from "@/lib/data/tech-stack";

export default function About() {
  return (
    <div className="min-h-screen bg-base py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Frontend Developer · 금융권 5년+
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-fg mb-4">
            안하은
          </h1>
          <p className="text-fg-muted text-lg">
            오래 운영된 금융권 레거시 시스템을 분석해 React 기반 웹으로 전환하고,
            웹과 로컬 프로그램을 연동하는 작업을 해왔습니다.
          </p>
        </div>

        {/* 자기소개 */}
        <section className="py-24 border-t border-line">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">소개</h2>
          <p className="text-fg-muted mb-10">
            5년간의 금융권 프로젝트 경험을 바탕으로 합니다.
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-fg-body max-w-3xl">
            <p>
              프론트엔드 개발자로 근무하며 여러 금융 업무 시스템을 웹 환경으로
              구현하는 프로젝트에 참여했습니다. 단순히 화면을 구현하는 역할보다
              업무 흐름을 먼저 이해하고, 다단계 입력 구조·검증
              로직·임시저장·단계 이동 제어 등을 유지보수와 확장을 고려한 상태
              관리 구조로 설계하는 역할을 주로 수행해왔습니다.
            </p>
            <p>
              제주은행 집단대출 프로젝트에서는 태블릿 기반 대출 신청 업무를
              React로 구현하며 다단계 신청 프로세스를 화면 구조로 설계했습니다.
              신청자와 공동명의자가 동일한 7단계 흐름을 공유하는 구조였기
              때문에, 단계 구성을 재사용 가능하게 설계하고 명의자 구분값으로
              흐름을 제어하는 방식을 선택했습니다. 본인인증 완료 이후부터는 단계
              이동 시 자동 임시저장되는 구조로 설계했습니다. 화면 구조 설계와
              구현을 담당하는 과정에서, 화면 단위 구현보다 업무 단계와 상태
              흐름을 기준으로 구조를 먼저 정의하는 것이 중요하다는 것을 실무를
              통해 확인했습니다.
            </p>
            <p>
              하나증권 ODS 프로젝트에서는 설계 문서가 충분하지 않은 상황에서
              프로젝트 중도에 투입되었습니다. 기획 문서만으로는 업무 흐름 파악이
              어렵다고 판단해 기존 레거시 시스템을 직접 분석했고, 랩·신탁·투자운용
              상품 가입 절차를 역추적해 정리한 뒤 이를 기준으로 React 화면
              구조를 재설계했습니다. 책임자 승인 절차를 화면 흐름에 반영해 승인
              단계별 처리 로직을 구현했고, 실서비스 전환 단계에서는 빌드 설정과
              환경별 동작 차이로 발생한 이슈들을 직접 분석하고 해결하며 서비스
              오픈을 완료했습니다.
            </p>
            <p>
              NH농협생명 이미지시스템 재구축 프로젝트(~2026.08)에서는 약 80개의
              AS-IS 화면을 실제 화면과 기존 소스를 함께 확인하며 분석하는 단계부터
              참여했습니다. 이미지 뷰어와 웹-로컬 간 WebSocket 통신 공통 기능을
              설계·개발하고 개발 가이드를 작성했으며, 프론트엔드 개발자 3명의
              구현 방향과 공통 기준을 정리하고 코드 리뷰를 진행했습니다.
              운영환경 반영 단계에서는 개발환경과 다르게 동작하는 통신 이슈와
              외부 솔루션 연계 요소를 분석해 안정화까지 대응했습니다.
            </p>
            <p>
              여러 프로젝트를 거치며, 프론트엔드 개발에서 중요한 것은 화면을
              구현하는 것만이 아니라 기존 시스템과 업무 흐름을 먼저 이해하고
              복잡한 상태를 유지보수·확장이 가능한 구조로 정리하는 것이라는 점을
              반복해서 확인했습니다. 레거시 분석과 웹 전환, 공통 기능 설계,
              운영환경 반영까지 이어지는 과정을 직접 경험하며 실무 감각을
              쌓아왔습니다.
            </p>
          </div>
        </section>

        {/* 경력 타임라인 */}
        <section className="py-24 border-t border-line">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">경력</h2>
          <p className="text-fg-muted mb-10">금융권 중심의 5년+ 개발 이력</p>
          <div className="space-y-8">
            {[
              {
                year: "2025",
                title: "NH농협생명 이미지시스템 재구축",
                role: "프론트엔드 개발 / 공통 기능 설계·개발 (2025.11 ~ 2026.08)",
                description:
                  "약 80개 AS-IS 화면 분석부터 웹 전환, 이미지뷰어·WebSocket 통신 공통 기능 개발, 개발 가이드 작성, 운영환경 반영·안정화까지 수행",
              },
              {
                year: "2025",
                title: "제주은행 집단대출 ODS시스템 구축",
                role: "프론트엔드 개발 담당",
                description:
                  "태블릿 기반 7단계 대출 신청 프로세스 구현, 공동명의자 분기 구조 및 단계별 상태 관리 설계",
              },
              {
                year: "2025",
                title: "ABL생명 GA사전스캔 프로그램 개발",
                role: "클라이언트 개발 / WebSocket Agent 개발",
                description:
                  "C# 스캔 프로그램 및 WebSocket 기반 웹-로컬 통신 구조 구현, 자동 업데이트 로직 개발",
              },
              {
                year: "2024",
                title: "동양생명 이미지시스템 구축",
                role: "프론트엔드 개발 / 클라이언트 개발",
                description:
                  "OCX 뷰어를 HTML5 뷰어로 전환, React 기반 스캔·뷰어·관리 페이지 구현",
              },
              {
                year: "2023",
                title: "하나증권 ODS 시스템 구축 및 실서비스 전환",
                role: "프론트엔드 개발",
                description:
                  "레거시 분석 후 금융 상품 가입 프로세스 React 재설계, 실서비스 전환 오픈 완료",
              },
              {
                year: "2023",
                title: "한국투자증권 전자증명 수취 시스템",
                role: "클라이언트 개발",
                description:
                  "이미지 뷰어 연동 및 전자증명서·모바일 운전면허증 인증 내역 조회 화면 구현",
              },
              {
                year: "2022",
                title: "IBK투자증권 ODS 및 디지털창구",
                role: "클라이언트 개발",
                description:
                  "외근 영업 및 디지털 창구용 서류 스캔·등록 기능 개발",
              },
              {
                year: "2022",
                title: "새마을금고 / 기업은행 모바일운전면허증 프로그램",
                role: "클라이언트 개발",
                description:
                  "신분증 진위 확인 프로그램 개발, 신분증 유형별 확장 가능한 구조 설계",
              },
              {
                year: "2021",
                title: "우체국 차세대 금융시스템",
                role: "프론트엔드-클라이언트 연동 로직 개발",
                description:
                  "통합단말과 전자문서 뷰어 간 연동 비즈니스 로직 개발",
              },
            ].map((item, i, arr) => {
              const showYear = i === 0 || arr[i - 1].year !== item.year;
              return (
                <div key={i} className="flex gap-4 sm:gap-8">
                  <div className="w-20 shrink-0">
                    {showYear && (
                      <div className="font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 relative pb-12 border-l-2 border-line pl-10">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h3 className="font-semibold text-xl mb-1 text-fg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-fg-muted mb-2">{item.role}</p>
                    <p className="text-fg-body">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 기술 역량 */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fg">
            Technical Experience
          </h2>
          <p className="text-fg-muted mb-10">
            실무 프로젝트에서 사용한 기술을 중심으로 정리했습니다.
          </p>

          <h3 className="text-lg font-semibold text-fg mb-6">
            Professional Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {TECH_STACKS.map((stack) => (
              <div
                key={stack.title}
                className={`p-8 rounded-2xl border shadow-sm hover:shadow-lg transition ${stack.cardClass}`}
              >
                <h3
                  className={`font-semibold text-lg mb-4 ${stack.titleClass}`}
                >
                  {stack.title}
                </h3>
                <ul className="space-y-3 text-sm text-fg-body">
                  {stack.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-fg mt-12 mb-2">
            Personal Projects
          </h3>
          <p className="text-fg-muted text-sm mb-6">
            실무 경력과는 별개로, 최근 개인 프로젝트에서 직접 사용해본 기술입니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-fg-body"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-8">
            이 포트폴리오 사이트는 TypeScript · Next.js(App Router)로 제작했습니다.
          </p>
        </section>
      </div>
    </div>
  );
}

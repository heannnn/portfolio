import { TECH_STACKS, PERSONAL_STACK } from "@/lib/data/tech-stack";

// 섹션 공통 레이아웃: 왼쪽 제목 열 + 오른쪽 내용 (홈 하단과 동일)
const SECTION =
  "py-20 border-t border-line grid grid-cols-1 gap-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12";

export default function About() {
  return (
    <div className="min-h-screen bg-base pt-16 md:pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:pl-[calc(13rem+3rem)]">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-fg mb-4">
            안하은
          </h1>
          <p className="text-fg-body text-lg max-w-[38rem] leading-relaxed">
            프론트엔드 개발자 · ㈜인지소프트 개발팀 (2020.12 ~ 재직 중)
          </p>
        </div>

        {/* 자기소개 */}
        <section className={SECTION}>
          <h2 className="text-2xl font-semibold text-fg">소개</h2>
          <div className="space-y-6 text-lg leading-relaxed text-fg-body max-w-[40rem]">
            <p>
              React로 태블릿 신청 화면과 웹 업무 화면을 개발해 온 프론트엔드
              개발자입니다. 조건이 많은 단계형 흐름을 상태와 검증으로 정리하는
              일을 주로 했고, 필요할 때는 웹 화면과 연동되는 C# 클라이언트도
              개발했습니다.
            </p>
            <p>
              하나증권에서는 오픈 후 운영까지 맡았습니다. 앞으로는 프론트엔드
              개발자로서 하나의 서비스를 오래 맡아 개선하고 싶습니다.
            </p>
          </div>
        </section>

        {/* 경력 타임라인 */}
        <section className={SECTION}>
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="text-2xl font-semibold text-fg">경력</h2>
            <p className="mt-3 text-sm text-fg-muted">
              자세한 내용은 각 프로젝트 페이지에 있습니다.
            </p>
          </div>
          <div>
            {[
              {
                year: "2025",
                title: "NH농협생명 이미지시스템 재구축",
                role: "프론트엔드 개발 (2025.11 ~ 2026.08)",
                description:
                  "기존 화면 약 80개 분석, 이미지뷰어·Local Agent 연동 공통 API 구성, 메인·로그인·스캔 화면 개발, 개발 가이드·코드 리뷰, 오픈 후 안정화",
              },
              {
                year: "2025",
                title: "제주은행 태블릿 집단대출 신청",
                role: "프론트엔드 개발 (인수인계 후 이동)",
                description:
                  "단계형 신청 흐름, 공동명의자 분기, Context·Recoil 상태 관리, Zod 검증, Native 임시저장 연동",
              },
              {
                year: "2025",
                title: "ABL생명 GA 사전스캔 프로그램",
                role: "클라이언트 개발",
                description:
                  "C# 스캔 프로그램과 WebSocket Agent 개발, 서버-로컬 버전 비교 자동 업데이트",
              },
              {
                year: "2024",
                title: "동양생명 이미지시스템 재구축",
                role: "지원 인력 (프론트엔드 / 클라이언트)",
                description:
                  "React 스캔 화면과 조회 화면 일부 구현, C# 버전 비교 배포·기존 뷰어 주석 호환 기능 개발",
              },
              {
                year: "2023",
                title: "하나증권 ODS 태블릿 금융상품 가입",
                role: "프론트엔드 개발 · 2024.06 오픈 후 운영",
                description:
                  "랩·신탁·투자일임 가입 화면 React 구현, 녹취·책임자 승인 흐름, 오픈 후 운영 대응",
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
                  "신분증 스캔 프로그램에 모바일 운전면허증 QR 본인확인·진위확인 기능 추가",
              },
              {
                year: "2021",
                title: "우체국 차세대 금융시스템",
                role: "연동 로직 개발",
                description:
                  "통합단말 화면과 전자문서를 연동하는 JavaScript 로직 개발",
              },
            ].map((item, i, arr) => {
              const showYear = i === 0 || arr[i - 1].year !== item.year;
              return (
                <div key={i} className="flex gap-4 sm:gap-8">
                  <div className="w-12 sm:w-16 shrink-0">
                    {showYear && (
                      <div className="font-semibold text-fg tabular">
                        {item.year}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 relative pb-10 border-l border-line pl-6 sm:pl-8">
                    <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-accent rounded-full"></div>
                    <h3 className="font-semibold text-lg mb-1 text-fg">
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
        <section className={SECTION}>
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="text-2xl font-semibold text-fg">기술</h2>
            <p className="mt-3 text-sm text-fg-muted leading-relaxed">
              실무 프로젝트에서 사용한 기술을 중심으로 정리했습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-fg-muted mb-4">실무</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
              {TECH_STACKS.map((stack) => (
                <div key={stack.title} className="border-t border-line pt-5">
                  <h4 className="font-semibold text-lg mb-3 text-fg">
                    {stack.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-fg-body leading-relaxed list-disc pl-4">
                    {stack.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-fg-muted mt-14 mb-2">
              개인 프로젝트
            </h3>
            <p className="text-fg-body text-sm mb-4">
              실무 경력과는 별개로, 최근 개인 프로젝트에서 직접 사용해본 기술입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 bg-sunken rounded text-sm text-fg-body"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-fg-muted mt-10">
              이 포트폴리오 사이트는 TypeScript와 Next.js(App Router)로 제작했습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

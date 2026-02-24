import { FileDown } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { TECH_STACKS } from "@/lib/data/tech-stack";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header - Home 스타일과 통일 */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Frontend Developer · 5년 경력
          </div>
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white mb-4">
            안하은
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            금융 레거시를 구조화하고 React로 전환해 실서비스까지 연결해왔습니다.
          </p>
        </div>

        {/* 자기소개 */}
        <section className="py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            소개
          </h2>
          <p className="text-gray-500 mb-10">
            5년간의 금융권 프로젝트 경험을 바탕으로 합니다.
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
            <p>
              5년간 금융권 시스템 개발 프로젝트를 경험하며, 현재는 프론트엔드
              개발을 중심으로 업무를 수행해왔습니다. 여러 금융기관 프로젝트를
              통해 본인인증, 심사, 동의, 상품 가입 등 금융 서비스에서 공통적으로
              요구되는 업무 흐름을 실제 화면과 기능으로 구현해왔고, 업권별로
              달라지는 업무 구조와 제약 조건도 실무를 통해 익혔습니다.
            </p>
            <p>
              하나증권 ODS 프로젝트에는 설계 문제와 문서 부족으로 일정이 지연된
              상황에서 중도 투입되었습니다. 당시 기획 문서만으로는 실제 업무
              흐름을 파악하기 어려워 기존 시스템을 먼저 분석했고, 그 과정에서
              랩·신탁·투자운용 등 금융 상품 가입 절차를 정리했습니다. 이를
              바탕으로 React 기반 화면 구조를 설계해 구축 단계의 프로젝트를
              마무리했습니다.
            </p>
            <p>
              현재는 NH농협생명 프로젝트에서 장기간 운영된 이미지·업무 시스템을
              웹 환경으로 전환하는 작업을 진행하고 있으며, 프론트엔드 3명을
              리딩하고 있습니다. AS-IS 화면을 기능 단위로 분석해 전환 방식을
              정리하고, 공통 모듈과 개발 가이드를 기준으로 팀 내 구현 방향을
              맞추는 역할을 수행하고 있습니다.
            </p>
            <p>
              최근에는 대규모 프로젝트의 유지보수 효율과 코드 안정성을 높이기
              위해 TypeScript와 Next.js를 학습하며 실무 적용 방안을 검토하고
              있습니다.
            </p>
          </div>
        </section>

        {/* 경력 타임라인 */}
        <section className="py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            경력
          </h2>
          <p className="text-gray-500 mb-10">금융권 중심의 5년 개발 이력</p>
          <div className="space-y-8">
            {[
              {
                year: "2025",
                title: "NH농협생명 이미지시스템 재구축",
                role: "프론트엔드 리드",
                description: "20년 운영 시스템 웹 전환, 프론트엔드 3명 리딩",
              },
              {
                year: "2024",
                title: "하나증권 ODS 시스템",
                role: "프론트엔드 개발",
                description: "위기 상황 투입, 레거시 분석 후 React 구현",
              },
              {
                year: "2023",
                title: "한국투자증권, IBK투자증권",
                role: "클라이언트 개발",
                description: "전자증명, 모바일운전면허증 프로그램 개발",
              },
              {
                year: "2022",
                title: "새마을금고, 기업은행",
                role: "클라이언트 개발",
                description: "신분증 진위 확인 프로그램, 확장 가능한 구조 설계",
              },
              {
                year: "2021",
                title: "우체국 차세대 금융시스템",
                role: "비즈니스 로직 개발",
                description: "통합단말-전자문서 뷰어 연동",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="w-20 flex-shrink-0">
                  <div className="font-bold text-blue-600 dark:text-blue-400">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 relative pb-12 border-l-2 border-gray-200 dark:border-gray-800 pl-10">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h3 className="font-semibold text-xl mb-1 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 기술 역량 */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Technical Experience
          </h2>
          <p className="text-gray-500 mb-10">
            실무 프로젝트에서 사용하고 경험한 기술 역량입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {TECH_STACKS.map((stack) => (
              <div
                key={stack.title}
                className={`p-8 rounded-2xl border shadow-sm hover:shadow-lg transition ${stack.cardClass}`}
              >
                <h3 className={`font-semibold text-lg mb-4 ${stack.titleClass}`}>
                  {stack.title}
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  {stack.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 이력서 다운로드 */}
        <section>
          <a
            href={CONTACT.resume}
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-lg font-medium"
          >
            <FileDown size={20} />
            이력서 다운로드 (PDF)
          </a>
        </section>
      </div>
    </div>
  );
}

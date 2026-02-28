import { ArrowRight, FileDown, Mail } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { CONTACT } from "@/lib/config";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Frontend Developer · 5년 경력
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-fg">안하은</h1>

            <p className="text-2xl md:text-3xl text-fg leading-snug max-w-3xl mt-6 font-medium">
              금융권 업무 시스템을 중심으로 5년간 프론트엔드 개발을
              수행했습니다.
            </p>

            <p className="text-fg-muted mt-4 leading-relaxed">
              단계형 프로세스 설계, 상태 관리, 입력 데이터 검증 구조 구현을 통해
              <br />
              업무 흐름이 명확한 화면 구조를 만드는 데 집중해왔습니다.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
              >
                주요 프로젝트 보기
                <ArrowRight size={18} />
              </Link>

              <a
                href={CONTACT.emailUrl}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 transition-all dark:text-gray-300"
              >
                <Mail size={18} />
                이메일 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { number: "5년", label: "경력" },
              { number: "9개", label: "프로젝트" },
              { number: "10개", label: "금융기관" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-fg-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-fg">
            핵심 경험
          </h2>
          <p className="text-fg-muted text-center mb-14">
            최근 프로젝트에서 수행한 주요 구조 설계 및 구현 경험입니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "단계형 프로세스 구조 구성",
                desc: "Route 기반 신청 구조 설계 및 단계별 상태 전이 제어",
              },
              {
                title: "입력 데이터 검증 구조",
                desc: "Zod 기반 Step 단위 schema 설계 및 공통 validation 모듈화",
              },
              {
                title: "권한 기반 UI 제어",
                desc: "권한코드 기반 메뉴 동적 구성 및 부서코드 조건 분기 처리",
              },
              {
                title: "업무 시스템 연계 경험",
                desc: "WebView 환경 및 WebSocket 요청/응답 구조 기반 화면 구현",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 border border-line rounded-2xl
          hover:border-blue-500 hover:shadow-md
          transition-all duration-300
          bg-surface"
              >
                <h3 className="text-xl font-semibold mb-2 text-fg">
                  {item.title}
                </h3>
                <p className="text-fg-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 프로젝트 */}
      <section
        id="projects"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-fg">
            대표 프로젝트
          </h2>

          <div className="space-y-8">
            {/* 하나증권 - 강조 */}
            <div className="relative p-8 bg-surface rounded-2xl border border-line shadow-md hover:shadow-xl">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                  대표 프로젝트
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-fg pr-24">
                  {projects[0].title}
                </h3>
                <p className="text-fg-muted">{projects[0].period}</p>

                <p className="text-lg leading-relaxed text-fg-body">
                  {projects[0].summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-fg-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 나머지 프로젝트 */}
            <div className="grid md:grid-cols-2 gap-6">
              {projects.slice(1, 3).map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-surface rounded-xl border border-line hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-fg">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-fg-muted text-sm mb-3">{project.period}</p>

                  <p className="mb-4 text-fg-body">{project.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-fg-body"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-sm text-fg-muted">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium"
            >
              전체 프로젝트 보기 (9개)
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-28 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-fg">
            Tech & Experience
          </h2>
          <p className="text-fg-muted text-center mb-16">
            React 중심으로 업무 시스템을 구현해왔습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Frontend Architecture */}
            <div className="p-8 rounded-2xl border border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-lg transition bg-blue-50/40 dark:bg-blue-950/40">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Frontend Architecture
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• React 기반 SPA 구조 설계</li>
                <li>• Route 기반 단계형 프로세스 구성</li>
                <li>• Zod 기반 입력 데이터 검증 구조</li>
                <li>• Context 기반 상태 관리</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                실제 업무 시스템 환경 적용 경험
              </p>
            </div>

            {/* 2. Domain & System */}
            <div className="p-8 rounded-2xl border border-purple-100 dark:border-purple-900 shadow-sm hover:shadow-lg transition bg-purple-50/40 dark:bg-purple-950/40">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                Domain & System Experience
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• 금융 상품 가입 및 대출 프로세스 경험</li>
                <li>• WebSocket 기반 요청/응답 구조</li>
                <li>• Android WebView 환경 대응</li>
                <li>• 권한 코드 기반 UI 제어</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                금융 IT 업무 시스템 중심 개발 경험
              </p>
            </div>

            {/* 3. Background Stack */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Background Stack
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• Exbuilder6 기반 화면 개발</li>
                <li>• C# Winform / WPF 클라이언트 개발</li>
                <li>• SVN 형상관리 경험</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">레거시 시스템 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-lg text-fg-muted mb-8 max-w-2xl mx-auto">
            레거시 시스템 분석부터 React 전환까지,
            <br />
            5년간의 금융권 경험을 바탕으로 함께 성장하고 싶습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={CONTACT.emailUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all text-lg font-medium"
            >
              <Mail size={20} />
              이메일 보내기
            </a>
            <a
              href={CONTACT.resume}
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-lg font-medium"
            >
              <FileDown size={20} />
              이력서 다운로드
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

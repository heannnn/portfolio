import { ArrowRight, FileDown, Mail } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

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

            <h1 className="text-5xl md:text-7xl font-bold dark:text-white">
              안하은
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
              금융권에서
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                레거시 시스템을 분석
              </span>
              하고,
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                React로 전환
              </span>
              하는 개발자입니다.
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
                href="mailto:jse033101@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 transition-all dark:text-gray-300"
              >
                <Mail size={18} />
                이메일 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "5년", label: "경력" },
              { number: "9개", label: "프로젝트" },
              { number: "10개", label: "금융기관" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What I Build
          </h2>
          <p className="text-gray-500 text-center mb-14">
            금융 IT 환경에서 구조와 안정성을 고려한 프론트엔드 개발을
            해왔습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏗️",
                title: "레거시를 웹 구조로 전환",
                desc: "20년 운영 시스템 분석 후 기능 단위 재정의 및 웹 전환 전략 수립",
              },
              {
                icon: "📊",
                title: "복잡한 금융 도메인 구조화",
                desc: "랩·신탁·대출 등 단계형 프로세스 설계 및 상태 흐름 관리",
              },
              {
                icon: "🚀",
                title: "실서비스 오픈 경험",
                desc: "개발-운영 환경 차이 해결 및 빌드·배포 구조 정비",
              },
              {
                icon: "🧩",
                title: "공통 모듈 설계",
                desc: "이미지 뷰어 · WebSocket 통신 모듈 표준화",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 border border-gray-200 rounded-2xl 
           hover:border-blue-500 hover:shadow-xl 
           hover:-translate-y-1 hover:bg-blue-50
           transition-all duration-300 
           bg-white"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
            대표 프로젝트
          </h2>

          <div className="space-y-8">
            {/* 하나증권 - 강조 */}
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-500 shadow-xl">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                  대표 프로젝트
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold dark:text-white">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {projects[0].period}
                </p>

                {/* 요약으로 변경 */}
                <p className="text-lg leading-relaxed dark:text-gray-300">
                  {projects[0].summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
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
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold dark:text-white">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {project.period}
                  </p>

                  {/* 요약으로 변경 */}
                  <p className="mb-4 dark:text-gray-300">{project.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400">
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
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Tech & Experience
          </h2>
          <p className="text-gray-500 text-center mb-16">
            React 중심의 프론트엔드 개발자로, 금융 시스템 환경에서 실서비스를
            경험했습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Core */}
            <div className="p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition bg-blue-50/40 ">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Core Frontend
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• React 기반 SPA 구조 설계</li>
                <li>• TypeScript 타입 설계 경험</li>
                <li>• Next.js 환경 구성</li>
                <li>• Git 기반 협업</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                실서비스 오픈 및 운영 경험 보유
              </p>
            </div>

            {/* 2. Integration */}
            <div className="p-8 rounded-2xl border border-purple-100 shadow-sm hover:shadow-lg transition bg-purple-50/40">
              <h3 className="text-lg font-semibold text-purple-600 mb-4">
                Integration
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• REST API 통신 설계</li>
                <li>• WebSocket 기반 실시간 연동</li>
                <li>• Android WebView 환경 대응</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                웹-클라이언트 간 통신 구조 구현 경험
              </p>
            </div>

            {/* 3. Enterprise */}
            <div className="p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-lg transition bg-green-50/40">
              <h3 className="text-lg font-semibold text-green-600 mb-4">
                Enterprise Experience
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Exbuilder6 기반 화면 개발</li>
                <li>• C# Winform/WPF 클라이언트 개발</li>
                <li>• SVN 형상관리 경험</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                금융 레거시 시스템 분석 및 전환 경험
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            레거시 시스템 분석부터 React 전환까지,
            <br />
            5년간의 금융권 경험을 바탕으로 함께 성장하고 싶습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:jse033101@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
            >
              <Mail size={20} />
              이메일 보내기
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all text-lg font-medium"
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

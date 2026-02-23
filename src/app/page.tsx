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

      {/* 숫자로 보는 경력 */}
      <section className="py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5년", label: "경력" },
              { number: "9개", label: "프로젝트" },
              { number: "3곳", label: "금융권" },
              { number: "80개", label: "화면 분석" },
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

      {/* 핵심 역량 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            핵심 역량
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔍",
                title: "레거시 시스템 분석",
                desc: "20년 운영된 윈도우 시스템 80개 화면 분석 및 웹 전환 방식 정리",
              },
              {
                icon: "⚛️",
                title: "React 기반 웹 전환",
                desc: "C# 클라이언트를 React로 전환하여 실서비스 오픈",
              },
              {
                icon: "💼",
                title: "복잡한 금융 로직 구현",
                desc: "랩·신탁·투자운용 등 7단계 대출 프로세스 구현",
              },
              {
                icon: "👥",
                title: "프론트엔드 리딩",
                desc: "공통 모듈 설계, 개발 가이드 작성, 코드 리뷰",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 프로젝트 */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
                <p className="text-lg leading-relaxed dark:text-gray-300">
                  {projects[0].description}
                </p>

                {projects[0].highlights && (
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    {projects[0].highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg"
                      >
                        <div className="font-semibold dark:text-white">
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

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
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
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
                  <p className="mb-4 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all font-medium"
            >
              전체 프로젝트 보기 (9개)
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      {/* 기술 스택 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            기술 스택
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">Frontend</h3>
              <div className="space-y-2">
                {["React", "JavaScript (ES6+)", "TypeScript", "Next.js"].map(
                  (skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-purple-600">
                Integration
              </h3>
              <div className="space-y-2">
                {["REST API", "WebSocket", "Android WebView"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-green-600">Tools</h3>
              <div className="space-y-2">
                {["Git", "SVN", "C# (Winform/WPF)"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
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

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Github } from "lucide-react";
import {
  featuredProject,
  featuredSubProjects,
  personalProjects,
} from "@/lib/projects";
import { CONTACT } from "@/lib/config";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Frontend Developer · 금융권 5년+
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-fg">안하은</h1>

            <p className="text-2xl md:text-3xl text-fg leading-snug max-w-3xl mt-6 font-medium">
              보험·증권·은행 등 금융권 시스템을 5년 넘게 개발했으며, 현재는
              React와 JavaScript 기반 프론트엔드 개발을 중심으로 업무를 하고
              있습니다.
            </p>

            <p className="text-fg-muted mt-4 leading-relaxed">
              오래 운영된 레거시 시스템을 웹으로 전환하고, C# 클라이언트와
              WebSocket으로 웹과 로컬 프로그램을 연동하는 작업을 함께 해왔습니다.
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
              { number: "5년+", label: "경력" },
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
            여러 금융권 프로젝트를 거치며 쌓은 대표적인 경험입니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "레거시 시스템 분석 및 웹 전환",
                desc: "오래 운영된 Windows 기반 시스템의 화면·업무 흐름·연계 요소를 분석해 웹 환경으로 전환",
              },
              {
                title: "프론트엔드 공통 구조 설계",
                desc: "이미지 뷰어, WebSocket 통신처럼 여러 화면에서 함께 쓰는 기능을 공통화하고 구현 기준 정리",
              },
              {
                title: "웹 · 로컬 연동",
                desc: "WebSocket과 WebView 환경에서 웹 화면과 로컬·Native 프로그램을 연동",
              },
              {
                title: "운영환경 반영 및 안정화",
                desc: "개발환경과 운영환경의 차이에서 생긴 통신·외부 솔루션 문제를 분석하고 대응",
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
            {/* 대표 프로젝트 - 강조 */}
            <div className="relative p-8 bg-surface rounded-2xl border border-line shadow-md hover:shadow-xl">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                  대표 프로젝트
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-fg pr-24">
                  {featuredProject.title}
                </h3>
                <p className="text-fg-muted">{featuredProject.period}</p>

                <p className="text-lg leading-relaxed text-fg-body">
                  {featuredProject.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {featuredProject.tags.map((tag) => (
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
              {featuredSubProjects.slice(0, 2).map((project) => (
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
              전체 프로젝트 보기
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-fg">
            Personal Projects
          </h2>
          <p className="text-fg-muted text-center mb-14">
            React Native, Next.js, TypeScript, C#/WPF 등을 활용한 개인
            프로젝트입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="p-6 bg-surface rounded-xl border border-line hover:border-blue-500 dark:hover:border-blue-400 transition-all block"
              >
                <h3 className="text-lg font-bold text-fg mb-2">
                  {project.cardTitle ?? project.title}
                </h3>
                <p className="text-fg-body text-sm mb-4">
                  {project.cardSummary ?? project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.cardTags ?? project.tags).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-fg-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <span className="inline-flex items-center gap-1 mt-4 text-xs text-fg-muted">
                    <Github size={13} />
                    GitHub
                  </span>
                )}
              </Link>
            ))}
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
            실무에서 활용한 기술과 개인 프로젝트를 통해 확장한 기술 경험을 구분해
            정리했습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Frontend */}
            <div className="p-8 rounded-2xl border border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-lg transition bg-blue-50/40 dark:bg-blue-950/40">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• React 기반 화면 구조 설계 및 상태 관리</li>
                <li>• JavaScript(ES6+) 중심 개발</li>
                <li>• 여러 화면에서 공통으로 쓰는 기능 모듈화</li>
                <li>• Exbuilder6 기반 화면 개발</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">실무 중심 기술</p>
            </div>

            {/* 2. Integration & Client */}
            <div className="p-8 rounded-2xl border border-purple-100 dark:border-purple-900 shadow-sm hover:shadow-lg transition bg-purple-50/40 dark:bg-purple-950/40">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                Integration & Client
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• REST API 연동 기반 화면 구현</li>
                <li>• WebSocket 기반 웹-로컬 통신</li>
                <li>• C# WinForms / WPF 클라이언트 개발</li>
                <li>• Android WebView 환경 대응</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                웹과 로컬 프로그램 연동 경험
              </p>
            </div>

            {/* 3. Tooling */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Tooling
              </h3>
              <ul className="space-y-2 text-sm text-fg-body">
                <li>• Git, SVN 형상관리</li>
                <li>• REST API · WebSocket 연동</li>
              </ul>
              <p className="text-xs text-gray-400 mt-6">
                실무에서 함께 사용한 도구
              </p>
            </div>
          </div>

          <div className="mt-10 p-8 rounded-2xl border border-line bg-base">
            <h3 className="text-lg font-semibold text-fg mb-1">
              개인 프로젝트에서 사용한 기술
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              실무 경력과는 별개로, 최근 개인 프로젝트에서 직접 다뤄본 기술입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Next.js",
                "React Native",
                "Expo",
                "TanStack Query",
                "Zustand",
                "UDP",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-fg-body"
                >
                  {tech}
                </span>
              ))}
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
            레거시 시스템 분석부터 웹 전환, 웹-로컬 연동까지
            <br />
            5년 넘게 쌓은 금융권 프론트엔드 경험을 바탕으로 함께 일할 기회를
            찾고 있습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={CONTACT.emailUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all text-lg font-medium"
            >
              <Mail size={20} />
              이메일 보내기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

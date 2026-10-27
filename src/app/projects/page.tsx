"use client";

import { useState } from "react";
import { projects, personalProjects } from "@/lib/projects";
import type { Project } from "@/types";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type TypeFilter = "all" | "professional" | "personal";

// 섹션 공통 레이아웃: 왼쪽 제목 열 + 오른쪽 목록 (홈·About과 동일)
const SECTION =
  "py-12 border-t border-line grid grid-cols-1 gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block py-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
        <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
          {project.cardTitle ?? project.title}
        </h3>
        <p className="text-sm text-fg-muted tabular shrink-0">
          {project.period}
        </p>
      </div>
      <p className="text-sm text-fg-muted mt-1 mb-3">{project.role}</p>
      <p className="text-fg-body leading-relaxed mb-4 max-w-[42rem]">
        {project.cardSummary ?? project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {(project.cardTags ?? project.tags.slice(0, 4)).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-sunken rounded text-xs text-fg-body"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.github || project.demo) && (
        <div className="flex flex-wrap gap-3 mt-4 text-xs text-fg-muted">
          {project.github && (
            <span className="inline-flex items-center gap-1">
              <Github size={13} />
              GitHub
            </span>
          )}
          {project.demo && (
            <span className="inline-flex items-center gap-1">
              <ExternalLink size={13} />
              Demo
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<TypeFilter>("all");

  const showProfessional = filter === "all" || filter === "professional";
  const showPersonal = filter === "all" || filter === "personal";

  return (
    <div className="pt-16 md:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-fg">
            Projects
          </h1>
          <p className="text-fg-muted">
            실무 프로젝트 {projects.length}개와 개인 프로젝트{" "}
            {personalProjects.length}개
          </p>
        </div>

        <div className="flex gap-2 mb-6" role="group" aria-label="프로젝트 종류">
          {[
            { label: "All", value: "all" as const },
            { label: "Professional", value: "professional" as const },
            { label: "Personal", value: "personal" as const },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={`px-4 py-2 rounded-md text-sm transition ${
                filter === item.value
                  ? "bg-accent text-on-accent"
                  : "bg-sunken text-fg-body hover:text-fg"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {showProfessional && (
          <section className={SECTION}>
            <div className="md:sticky md:top-24 md:self-start">
              <h2 className="text-xl font-semibold text-fg">
                Professional Projects
              </h2>
              <p className="mt-2 text-fg-muted text-sm leading-relaxed">
                고객사 시스템 구축 프로젝트
              </p>
            </div>
            <div className="divide-y divide-line border-b border-line">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {showPersonal && (
          <section className={SECTION}>
            <div className="md:sticky md:top-24 md:self-start">
              <h2 className="text-xl font-semibold text-fg">Personal Projects</h2>
              <p className="mt-2 text-fg-muted text-sm leading-relaxed">
                React Native · Next.js · C#/WPF 등을 활용한 개인 프로젝트입니다.
              </p>
            </div>
            <div className="divide-y divide-line border-b border-line">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

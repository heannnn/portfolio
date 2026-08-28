"use client";

import { useState } from "react";
import { projects, personalProjects } from "@/lib/projects";
import type { Project } from "@/types";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type TypeFilter = "all" | "professional" | "personal";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition block"
    >
      <h3 className="text-xl font-semibold mb-2 text-fg">
        {project.cardTitle ?? project.title}
      </h3>
      <p className="text-sm text-fg-muted mb-1">{project.period}</p>
      <p className="text-sm text-fg-muted mb-3">{project.role}</p>
      <p className="text-fg-body mb-4">
        {project.cardSummary ?? project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {(project.cardTags ?? project.tags.slice(0, 4)).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-fg-body"
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
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-fg">
            Projects
          </h1>
          <p className="text-fg-muted">
            금융권 실무 프로젝트 {projects.length}개와 개인 프로젝트{" "}
            {personalProjects.length}개
          </p>
        </div>

        <div className="flex gap-4 mb-12">
          {[
            { label: "All", value: "all" as const },
            { label: "Professional", value: "professional" as const },
            { label: "Personal", value: "personal" as const },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 rounded-md text-sm transition ${
                filter === item.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {showProfessional && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-fg">
              Professional Projects
            </h2>
            <p className="text-fg-muted text-sm mb-6">
              보험 · 증권 · 은행 시스템 개발 실무 프로젝트
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {showPersonal && (
          <section>
            <h2 className="text-2xl font-bold mb-2 text-fg">Personal Projects</h2>
            <p className="text-fg-muted text-sm mb-6">
              React Native · Next.js · C#/WPF 등을 활용한 개인 프로젝트입니다.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
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

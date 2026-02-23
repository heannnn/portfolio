"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "react" | "c#">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "react") return project.tags.some((tag) => tag === "React");
    if (filter === "c#") return project.tags.some((tag) => tag === "C#");
    return true;
  });

  return (
    <>
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              프로젝트
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              총 {projects.length}개의 프로젝트
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { label: "All", value: "all" as const },
              { label: "React", value: "react" as const },
              { label: "C#", value: "c#" as const },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === item.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-6 rounded-xl border transition-all hover:shadow-lg cursor-pointer ${
                  i === 0
                    ? "bg-blue-50 dark:bg-blue-950 border-blue-500 border-2"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
                }`}
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
                  {i === 0 && !project.badge && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                      대표
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {project.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.role}
                </p>

                {/* 요약만 표시 */}
                <p className="mb-4 dark:text-gray-300">{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  자세히 보기 →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 모달 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

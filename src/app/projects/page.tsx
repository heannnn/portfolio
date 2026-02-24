"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types";

type FilterType = "all" | "architecture" | "process" | "client";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Architecture", value: "architecture" },
  { label: "Process Design", value: "process" },
  { label: "Client / Legacy", value: "client" },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const keyProjects = filteredProjects.filter((p) => p.isKey);
  const otherProjects = filteredProjects.filter((p) => !p.isKey);

  return (
    <>
      <div className="py-24 px-4 min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Projects
            </h1>
            <p className="text-gray-500">설계 중심의 주요 프로젝트 경험</p>
          </div>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {FILTERS.map((item) => (
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

          {/* 🔥 Key Projects */}
          {keyProjects.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Key Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-20">
                {keyProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="p-8 rounded-2xl border-2 border-blue-500 bg-blue-50 dark:bg-blue-950 hover:shadow-xl cursor-pointer transition-all"
                  >
                    <div className="mb-3 flex justify-between">
                      <h3 className="text-xl font-bold dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                        Key
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">
                      {project.period} · {project.role}
                    </p>

                    <p className="dark:text-gray-300 mb-4">{project.summary}</p>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.cardImpact}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Additional Experience
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all"
                  >
                    <h3 className="font-semibold mb-2 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-2">
                      {project.period}
                    </p>

                    <p className="text-sm dark:text-gray-300">
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

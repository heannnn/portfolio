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
    if (filter === "react") return project.tags.includes("React");
    if (filter === "c#") return project.tags.includes("C#");
    return true;
  });

  return (
    <>
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              총 {projects.length}개의 금융 IT 프로젝트 경험
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-4 mb-10">
            {[
              { label: "All", value: "all" as const },
              { label: "React", value: "react" as const },
              { label: "C#", value: "c#" as const },
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {project.period}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {project.role}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

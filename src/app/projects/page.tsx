"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "react" | "c#">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "react") return project.tags.includes("React");
    if (filter === "c#") return project.tags.includes("C#");
    return true;
  });

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-fg">
            Projects
          </h1>
          <p className="text-fg-muted">
            총 {projects.length}개의 금융 IT 프로젝트 경험
          </p>
        </div>

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

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition block"
            >
              <h3 className="text-xl font-semibold mb-2 text-fg">
                {project.title}
              </h3>
              <p className="text-sm text-fg-muted mb-1">{project.period}</p>
              <p className="text-sm text-fg-muted mb-3">{project.role}</p>
              <p className="text-fg-body mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-fg-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

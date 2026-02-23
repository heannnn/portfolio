"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "react" | "c#">("all");

  const allProjects = [
    ...projects,
    {
      id: "abl-life",
      title: "ABL생명 GA사전스캔",
      period: "2025.06 ~ 2025.08 (3개월)",
      role: "클라이언트 개발",
      description: "WebSocket 기반 웹-로컬 통신 구조 구현, 자동 배포 기능 추가",
      tags: ["C#", "WebSocket", "Winform"],
    },
    {
      id: "dongyang-life",
      title: "동양생명 이미지시스템",
      period: "2024.12 ~ 2025.05 (6개월)",
      role: "프론트엔드/클라이언트 개발",
      description: "보험 서류 이미지 관리 시스템, React 뷰어 및 WebSocket 연동",
      tags: ["React", "C#", "WebSocket"],
    },
    {
      id: "kiwoom",
      title: "한국투자증권 전자증명",
      period: "2023.05 ~ 2023.11 (7개월)",
      role: "클라이언트 개발",
      description: "PDF/TIFF 문서 뷰어, QR 코드 기반 인증 로직",
      tags: ["C#", "Winform"],
    },
    {
      id: "ibk",
      title: "IBK투자증권 ODS",
      period: "2022.11 ~ 2023.04 (6개월)",
      role: "클라이언트 개발",
      description: "외근 영업용 서류 스캔·등록 기능",
      tags: ["C#", "WPF"],
    },
    {
      id: "kfcc-ibk-bank",
      title: "새마을금고/기업은행",
      period: "2022.04 ~ 2022.11 (8개월)",
      role: "클라이언트 개발",
      description: "신분증 진위 확인, 확장 가능한 구조 설계",
      tags: ["C#", "Winform"],
    },
    {
      id: "post",
      title: "우체국 차세대 금융시스템",
      period: "2021.08 ~ 2022.03 (8개월)",
      role: "비즈니스 로직 개발",
      description: "통합단말-전자문서 뷰어 연동",
      tags: ["JavaScript"],
    },
  ];

  const filteredProjects = allProjects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "react") return project.tags.some((tag) => tag === "React");
    if (filter === "c#") return project.tags.some((tag) => tag === "C#");
    return true;
  });

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            프로젝트
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            총 {allProjects.length}개의 프로젝트
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
              className={`p-6 rounded-xl border transition-all hover:shadow-lg ${
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
              <p className="mb-4 dark:text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-gray-300"
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
  );
}

"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="sticky top-0 bg-surface border-b border-line p-6 flex justify-between items-start">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-fg">{project.title}</h2>
                {project.badge && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-fg-muted">{project.period}</p>
              <p className="text-sm text-fg-muted mt-1">{project.role}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="닫기"
            >
              <X size={24} className="text-fg" />
            </button>
          </div>

          <div className="space-y-8">
            {/* 설명 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                Overview
              </h4>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* 주요 포인트 */}
            {project.impact && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Key Points
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 스택 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

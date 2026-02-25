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
                <h2 className="text-2xl font-bold text-fg">
                  {project.title}
                </h2>
                {project.badge && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-fg-muted">
                {project.period}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {project.role}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="닫기"
            >
              <X size={24} className="text-fg" />
            </button>
          </div>

          {/* 내용 */}
          <div className="p-6 space-y-6">
            {/* 상세 내용 */}
            <div>
              <p className="text-fg-body leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* 주요 성과 */}
            {project.impact && project.impact.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-3 text-fg">
                  주요 성과
                </h3>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-fg-body"
                    >
                      <span className="text-blue-500 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 기술 스택 */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-fg">
                기술 스택
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
        </div>
      </div>
    </>
  );
}

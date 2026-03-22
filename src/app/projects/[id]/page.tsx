import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-fg-muted hover:text-fg mb-10 transition"
        >
          <ArrowLeft size={16} />
          전체 프로젝트
        </Link>

        {/* 전체를 하나의 카드로 */}
        <div className="p-8 md:p-10 rounded-2xl bg-surface border border-line">
          {/* 헤더 */}
          <div className="mb-8 pb-8 border-b border-line">
            <h1 className="text-3xl md:text-4xl font-bold text-fg mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                {project.period}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-fg-muted rounded-full text-sm">
                {project.role}
              </span>
            </div>
          </div>

          {/* 프로젝트 개요 */}
          <div className="mb-8 pb-8 border-b border-line">
            <h2 className="text-base font-semibold text-fg-muted uppercase tracking-wide mb-4">
              프로젝트 개요
            </h2>
            <div className="space-y-3">
              {project.description
                .split("\n")
                .filter(Boolean)
                .map((line, i) => (
                  <p key={i} className="text-fg-body leading-relaxed">
                    {line}
                  </p>
                ))}
            </div>
          </div>

          {/* 주요 성과 */}
          {project.impact && project.impact.length > 0 && (
            <div className="mb-8 pb-8 border-b border-line">
              <h2 className="text-base font-semibold text-fg-muted uppercase tracking-wide mb-4">
                주요 성과
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-fg-body">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술 스택 */}
          <div>
            <h2 className="text-base font-semibold text-fg-muted uppercase tracking-wide mb-4">
              기술 스택
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-fg-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

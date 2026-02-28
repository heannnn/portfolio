import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

interface PageProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 상단 헤더 */}
        <div className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-gray-500">{project.period}</p>
          <p className="text-sm text-gray-500 mt-1">{project.role}</p>
        </div>

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Overview
          </h2>
          <p className="leading-7 text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {project.description}
          </p>
        </section>

        {/* Key Points */}
        {project.impact && (
          <section className="mb-14">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-400 mb-4">
              Key Points
            </h2>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gray-400">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* 돌아가기 */}
        <div className="pt-10 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← 프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

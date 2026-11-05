import { Github, Mail } from "lucide-react";
import Link from "next/link";
import ApplyFlowDemo from "@/components/ApplyFlowDemo";
import { PROJECT_DIAGRAMS } from "@/components/diagrams";
import {
  featuredProject,
  featuredSubProjects,
  personalProjects,
} from "@/lib/projects";
import { CONTACT } from "@/lib/config";

export default function Home() {
  const featuredDiagram = PROJECT_DIAGRAMS[featuredProject.id];

  return (
    <div>
      <section className="px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] md:gap-16 md:items-start md:pt-6">
          <div>
            <h1 className="text-[2.25rem] leading-[1.25] md:text-[3.25rem] md:leading-[1.2] font-semibold tracking-[-0.02em] text-fg">
              안하은
              <br />
              프론트엔드 개발자
            </h1>

            <p className="mt-6 max-w-[34rem] text-lg text-fg-body leading-relaxed">
              경력 5년 10개월 · React · JavaScript
            </p>

            <div className="flex flex-wrap gap-3 pt-8">
              <Link
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-accent text-on-accent rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                주요 프로젝트 보기
              </Link>

              <a
                href={CONTACT.emailUrl}
                className="inline-flex items-center gap-2 px-6 py-3 border border-line text-fg rounded-lg hover:border-fg-muted transition-colors"
              >
                <Mail size={18} />
                이메일 보내기
              </a>
            </div>
          </div>

          <figure>
            <ApplyFlowDemo />
            <figcaption className="mt-4 text-sm text-fg-muted leading-relaxed">
              실무에서 만든 태블릿 대출 신청 흐름을 줄인 예시입니다. 검증을
              통과해야 다음 단계로 넘어가고, 공동명의를 고르면 공동명의자
              화면이 추가됩니다.
            </figcaption>
          </figure>
        </div>
      </section>

      <Section title="핵심 경험">
        <dl className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            {
              title: "단계형 화면과 상태 관리",
              desc: "조건에 따라 단계가 붙고 빠지는 신청 흐름을 React로 구현했습니다. Context·Recoil로 단계 간 입력 상태를 유지해 앞뒤로 이동해도 값이 남도록 했습니다.",
              basis: "하나증권 · 제주은행",
            },
            {
              title: "입력 검증과 예외 처리",
              desc: "Zod 스키마로 현재 조건에 필요한 항목만 검증하고 다음 단계 진입을 제어했습니다. 조건이 바뀌면 이전 진행 내용을 초기화하는 등 예외도 처리했습니다.",
              basis: "제주은행 · 하나증권",
            },
            {
              title: "공통 모듈과 구현 기준",
              desc: "여러 화면이 같은 방식으로 외부 기능을 호출하도록 공통 API를 만들고, 개발 가이드와 코드 리뷰로 구현 방식을 맞췄습니다.",
              basis: "NH농협생명",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-line pt-5">
              <dt className="text-lg font-semibold text-fg mb-2">
                {item.title}
              </dt>
              <dd className="text-fg-body leading-relaxed">{item.desc}</dd>
              <dd className="mt-3 text-sm text-fg-muted">{item.basis}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="projects" title="대표 프로젝트">
        {/* 대표 프로젝트: 구조도와 함께 사례로 보여줌 */}
        <article className="pb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 mb-3">
            <h3 className="text-xl font-semibold text-fg">
              {featuredProject.title}
            </h3>
            <p className="text-sm text-fg-muted tabular shrink-0">
              {featuredProject.period}
            </p>
          </div>
          <p className="max-w-[42rem] text-lg leading-relaxed text-fg-body">
            {featuredProject.summary}
          </p>

          {featuredDiagram && (
            <figure className="mt-10 p-5 sm:p-6 rounded-xl border border-line bg-surface">
              <featuredDiagram.Component />
              <figcaption className="mt-4 text-sm text-fg-muted leading-relaxed">
                {featuredDiagram.caption}
              </figcaption>
            </figure>
          )}

          {featuredProject.impact && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-fg-body list-disc pl-5 max-w-[48rem]">
              {featuredProject.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <Link
            href={`/projects/${featuredProject.id}`}
            className="inline-block mt-8 text-accent hover:underline font-medium"
          >
            {featuredProject.title} 자세히 보기
          </Link>
        </article>

        <ul className="border-b border-line">
          {featuredSubProjects.slice(0, 2).map((project) => (
            <li key={project.id} className="border-t border-line">
              <Link
                href={`/projects/${project.id}`}
                className="group block py-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 mb-3">
                  <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-fg-muted tabular shrink-0">
                    {project.period}
                  </p>
                </div>

                <p className="max-w-[42rem] leading-relaxed text-fg-body">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-sunken rounded text-sm text-fg-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="inline-block mt-8 text-accent hover:underline font-medium"
        >
          전체 프로젝트 보기
        </Link>
      </Section>

      <Section
        title="개인 프로젝트"
        desc="AI 코딩 도구로 만든 학습용 데모입니다. 결제·API는 모두 mock입니다."
      >
        <ul className="grid md:grid-cols-3 gap-x-8">
          {personalProjects.map((project) => (
            <li key={project.id} className="border-t border-line">
              <Link
                href={`/projects/${project.id}`}
                className="group block py-6"
              >
                <h3 className="text-lg font-semibold text-fg mb-2 group-hover:text-accent transition-colors">
                  {project.cardTitle ?? project.title}
                </h3>
                <p className="text-fg-body text-sm leading-relaxed mb-4">
                  {project.cardSummary ?? project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.cardTags ?? project.tags).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-sunken rounded text-xs text-fg-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <span className="inline-flex items-center gap-1 mt-4 text-xs text-fg-muted">
                    <Github size={13} />
                    GitHub
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="연락하기">
        <p className="text-lg text-fg-body leading-relaxed max-w-[38rem]">
          프론트엔드 포지션을 찾고 있습니다. 연락은 이메일로 부탁드립니다.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
          <a
            href={CONTACT.emailUrl}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-on-accent rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Mail size={18} />
            이메일 보내기
          </a>
          <span className="text-fg-muted">{CONTACT.email}</span>
        </div>
      </Section>
    </div>
  );
}

// 홈 하단 섹션 공통 레이아웃: 왼쪽 제목 열 + 오른쪽 내용
function Section({
  id,
  title,
  desc,
  children,
}: {
  id?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-20 border-t border-line scroll-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="text-2xl font-semibold text-fg">{title}</h2>
          {desc && (
            <p className="mt-3 text-sm text-fg-muted leading-relaxed">
              {desc}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

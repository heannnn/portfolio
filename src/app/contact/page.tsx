import { Mail } from "lucide-react";
import { CONTACT } from "@/lib/config";

export default function Contact() {
  return (
    <div className="pt-16 md:pt-24 pb-12 px-4 min-h-screen bg-base">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-fg">
          Contact
        </h1>

        <div>
          <p className="text-lg text-fg-body max-w-[38rem] leading-relaxed">
            프론트엔드 포지션을 찾고 있습니다. 업무 화면을 개발하고 오픈·운영까지
            맡아 온 경험을 바탕으로, 하나의 서비스를 오래 개선하는 일을 하고
            싶습니다.
          </p>

          <div className="mt-8">
            <a
              href={CONTACT.emailUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-on-accent rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mail size={18} />
              이메일 보내기
            </a>
            <p className="mt-3 text-sm text-fg-muted">
              이메일로 연락 주시면 빠르게 회신드리겠습니다.
            </p>
          </div>

          <dl className="mt-16 border-b border-line max-w-[38rem]">
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-4 border-t border-line">
              <dt className="text-fg-muted">이메일</dt>
              <dd>
                <a
                  href={CONTACT.emailUrl}
                  className="text-fg hover:text-accent transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-4 border-t border-line">
              <dt className="text-fg-muted">GitHub</dt>
              <dd>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg hover:text-accent transition-colors"
                >
                  {CONTACT.githubDisplay}
                </a>
                <p className="mt-1 text-sm text-fg-muted">
                  이 포트폴리오의{" "}
                  <a
                    href={CONTACT.portfolioRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent"
                  >
                    소스 코드
                  </a>
                  도 공개되어 있습니다.
                </p>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-4 border-t border-line">
              <dt className="text-fg-muted">위치</dt>
              <dd className="text-fg">서울</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

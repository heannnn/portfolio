import { Mail, Github, FileDown, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/config";

export default function Contact() {
  return (
    <div className="py-24 px-4 min-h-screen bg-base">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-fg">
            Contact
          </h1>
          <p className="text-lg text-fg-muted max-w-xl mx-auto leading-relaxed">
            프론트엔드 포지션을 중심으로 새로운 기회를 찾고 있습니다. 금융
            시스템 환경에서의 실무 경험을 바탕으로 구조 설계와 문제 해결에
            집중합니다.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <a
            href={CONTACT.emailUrl}
            className="p-8 border border-line rounded-2xl hover:shadow-lg transition group bg-surface"
          >
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              <h3 className="text-lg font-semibold text-fg">Email</h3>
            </div>
            <p className="text-fg-muted">{CONTACT.email}</p>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border border-line rounded-2xl hover:shadow-lg transition group bg-surface"
          >
            <div className="flex items-center gap-4 mb-4">
              <Github size={24} className="text-fg" />
              <h3 className="text-lg font-semibold text-fg">GitHub</h3>
            </div>
            <p className="text-fg-muted">{CONTACT.githubDisplay}</p>
            <p className="text-sm text-blue-500 dark:text-blue-400 mt-2">
              Portfolio source available →
            </p>
          </a>

          {/* Resume */}
          <a
            href={CONTACT.resume}
            download
            className="p-8 border border-line rounded-2xl hover:shadow-lg transition group bg-surface"
          >
            <div className="flex items-center gap-4 mb-4">
              <FileDown
                size={24}
                className="text-green-600 dark:text-green-400"
              />
              <h3 className="text-lg font-semibold text-fg">Resume</h3>
            </div>
            <p className="text-fg-muted">PDF 다운로드</p>
          </a>

          {/* Location */}
          <div className="p-8 border border-line rounded-2xl bg-surface">
            <div className="flex items-center gap-4 mb-4">
              <MapPin
                size={24}
                className="text-purple-600 dark:text-purple-400"
              />
              <h3 className="text-lg font-semibold text-fg">Location</h3>
            </div>
            <p className="text-fg-muted">Seoul, Republic of Korea</p>
          </div>
        </div>

        {/* Hiring CTA */}
        <div className="text-center p-12 bg-surface rounded-2xl border border-line">
          <h2 className="text-2xl font-semibold mb-4 text-fg">
            금융 시스템 기반 프론트엔드 포지션을 중심으로 새로운 기회를 찾고
            있습니다.
          </h2>
          <p className="text-fg-muted mb-6">
            프론트엔드 개발 포지션에 관심이 있다면 이메일로 연락 주시면 빠르게
            회신드리겠습니다.
          </p>
          <a
            href={CONTACT.emailUrl}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition font-medium"
          >
            <Mail size={18} />
            이메일 보내기
          </a>
        </div>
      </div>
    </div>
  );
}

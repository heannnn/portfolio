import { Mail, Github, FileDown, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            연락하기
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            함께 일하고 싶으시다면 언제든 연락주세요!
            <br />
            레거시 시스템 분석부터 React 전환까지,
            <br />
            5년간의 금융권 경험을 바탕으로 함께 성장하고 싶습니다.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:jse033101@gmail.com"
            className="p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group dark:bg-gray-900"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                <Mail size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">이메일</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              jse033101@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/heannnn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group dark:bg-gray-900"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
                <Github
                  size={24}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <h3 className="text-xl font-bold dark:text-white">GitHub</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              github.com/yourusername
            </p>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group dark:bg-gray-900"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900 transition-colors">
                <FileDown
                  size={24}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="text-xl font-bold dark:text-white">이력서</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">PDF 다운로드</p>
          </a>

          {/* Location */}
          <div className="p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl dark:bg-gray-900">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <MapPin
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold dark:text-white">위치</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">서울, 대한민국</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            프로젝트 문의 환영합니다
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            금융권 프론트엔드 개발, 레거시 시스템 전환,
            <br />
            React 프로젝트에 관심 있으시다면 연락주세요.
          </p>
          <a
            href="mailto:jse033101@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-lg font-medium"
          >
            <Mail size={20} />
            이메일 보내기
          </a>
        </div>
      </div>
    </div>
  );
}

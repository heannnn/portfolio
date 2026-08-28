export interface TechCategory {
  title: string;
  cardClass: string;
  titleClass: string;
  items: string[];
}

export const TECH_STACKS: TechCategory[] = [
  {
    title: "Core Frontend",
    cardClass:
      "border-blue-100 bg-blue-50/40 dark:bg-blue-950/40 dark:border-blue-900",
    titleClass: "text-blue-600 dark:text-blue-400",
    items: [
      "React 기반 화면 구조 설계 및 상태 흐름 관리",
      "JavaScript(ES6+) 중심 개발",
      "여러 화면에서 공통으로 쓰는 기능 모듈화",
      "Exbuilder6 기반 화면 개발",
    ],
  },
  {
    title: "Integration",
    cardClass:
      "border-purple-100 bg-purple-50/40 dark:bg-purple-950/40 dark:border-purple-900",
    titleClass: "text-purple-600 dark:text-purple-400",
    items: [
      "REST API 스펙 분석 기반 UI 흐름 설계",
      "WebSocket 기반 웹-로컬 프로그램 연동",
      "Android WebView 환경 대응 경험",
    ],
  },
  {
    title: "Client & Enterprise",
    cardClass:
      "border-green-100 bg-green-50/40 dark:bg-green-950/40 dark:border-green-900",
    titleClass: "text-green-600 dark:text-green-400",
    items: [
      "C# WinForms / WPF 클라이언트 개발 경험",
      "장기 운영 레거시 시스템 구조 분석 및 웹 전환 경험",
      "Git, SVN 기반 협업",
    ],
  },
];

/**
 * 개인 프로젝트에서 직접 사용한 기술. 실무 경력과 구분해서 표시한다.
 * (payflow / SmartRadar / bakery-pickup-demo repository에서 실제 사용 확인)
 */
export const PERSONAL_STACK: string[] = [
  "TypeScript",
  "Next.js",
  "React Native",
  "Expo",
  "TanStack Query",
  "Zustand",
  "UDP",
];

// 이 포트폴리오 사이트 자체는 TypeScript · Next.js(App Router)로 제작했습니다.

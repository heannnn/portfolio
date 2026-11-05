export interface TechCategory {
  title: string;
  cardClass: string;
  titleClass: string;
  items: string[];
}

export const TECH_STACKS: TechCategory[] = [
  {
    title: "Frontend",
    cardClass: "border-line bg-surface",
    titleClass: "text-fg",
    items: [
      "React · Recoil · React Router — 하나증권, 제주은행",
      "Context API · TanStack Query · Zod — 제주은행",
      "Ant Design · webpack — 하나증권",
      "JavaScript · exBuilder6 — NH농협생명, 우체국",
      "JSP (세션 처리, 로그인 화면) — NH농협생명",
    ],
  },
  {
    title: "Integration",
    cardClass: "border-line bg-surface",
    titleClass: "text-fg",
    items: [
      "WebSocket — NH농협생명, ABL생명",
      "Android WebView — 하나증권, 제주은행",
      "Native 임시저장 API 연동 — 제주은행",
      "외부 솔루션 연동 (녹취, SSO, 사설인증서) — 하나증권, NH농협생명",
    ],
  },
  {
    title: "Client",
    cardClass: "border-line bg-surface",
    titleClass: "text-fg",
    items: [
      "C# WinForms — ABL생명, 모바일신분증, 동양생명",
      "C# WPF — IBK투자증권",
      "Git · SVN",
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

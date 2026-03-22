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
      "TypeScript 도입 및 타입 안정성 고려 설계",
      "Git 기반 협업 및 브랜치 전략 운영",
    ],
  },
  {
    title: "Integration",
    cardClass:
      "border-purple-100 bg-purple-50/40 dark:bg-purple-950/40 dark:border-purple-900",
    titleClass: "text-purple-600 dark:text-purple-400",
    items: [
      "REST API 스펙 분석 기반 UI 흐름 설계",
      "WebSocket 기반 실시간 데이터 처리 경험",
      "Android WebView 환경 대응 경험",
    ],
  },
  {
    title: "Enterprise Experience",
    cardClass:
      "border-green-100 bg-green-50/40 dark:bg-green-950/40 dark:border-green-900",
    titleClass: "text-green-600 dark:text-green-400",
    items: [
      "C# Winform/WPF 클라이언트 개발 경험",
      "금융 도메인(본인인증, 심사, 가입 프로세스) 이해",
      "장기 운영 레거시 시스템 구조 분석 경험",
    ],
  },
];

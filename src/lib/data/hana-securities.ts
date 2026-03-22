import { Project } from "@/types";

export const hanaSecurities: Project = {
  id: "hana-securities",
  title: "하나증권 ODS 시스템 구축 및 실서비스 전환",
  period: "2023.12 ~ 2024.06 (7개월)",
  role: "Frontend Engineer",
  isKey: true,
  category: "architecture",
  summary:
    "설계 문서가 불충분한 상황에서 중도 투입되어 레거시 분석 후 React 기반으로 재설계하고 실서비스 오픈을 완료했습니다.",
  cardImpact: "✔ 레거시 분석 · React 재설계 · 실서비스 전환 완료",
  description: `설계 오류와 문서 부족으로 일정이 지연된 상황에서 중도 투입되었습니다.
기획 문서만으로는 업무 흐름 파악이 어렵다고 판단해 기존 레거시 시스템을 직접 분석했고, 랩·신탁·투자운용 등 금융 상품 가입 절차를 역추적해 정리한 뒤 이를 기준으로 React 화면 구조를 재설계했습니다.
실서비스 전환 단계에서는 빌드 설정과 환경별 동작 차이로 발생한 이슈들을 직접 분석하고 해결하며 서비스 오픈을 완료했습니다.`,
  impact: [
    "레거시 시스템 분석 및 업무 흐름 역추적",
    "React 기반 화면 구조 재설계",
    "빌드·환경 이슈 해결 및 실서비스 오픈 완료",
  ],
  tags: [
    "React",
    "TypeScript",
    "JavaScript ES6+",
    "Android WebView",
    "WebSocket",
    "Git",
  ],
};

import { Project } from "@/types";

export const hanaSecurities: Project = {
  id: "hana-securities",
  title: "하나증권 ODS 시스템 구축",
  period: "2023.12 ~ 2024.06",
  role: "Frontend Engineer",
  isKey: true,
  category: "architecture",
  summary:
    "지연된 프로젝트에 투입되어 레거시 분석 후 React 기반 재구현 및 실서비스 전환 완료",
  cardImpact: "✔ 위기 프로젝트 안정화 · 로직 구조화 · 실서비스 전환",
  description: `랩, 신탁, 투자일임, 채권 등 금융상품 가입 프로세스를 React 기반으로 구현했습니다.  
특히 외화 및 해외채권 상품의 경우 환율이 서버에서 계산되어 전달되었고, 화면에서는 이를 기준으로 수량·금액 계산 결과를 정합성 있게 표시해야 했습니다.  
개발 환경은 폐쇄망이었으며, 실제 서비스는 태블릿 WebView 환경에서 동작했습니다.  
중도 투입 이후 기존 구조를 분석하고 화면 상태 흐름을 재정리하여 실서비스 전환을 완료했습니다.`,
  impact: ["복잡한 금융 로직 재정의", "실서비스 안정적 오픈"],
  tags: ["React", "Architecture", "Production"],
};

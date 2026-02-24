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
  description: `
✔ 설계 문서 부족 상황에서 레거시 분석
✔ 금융 상품 가입 로직 구조화
✔ React 기반 재구현
✔ 빌드/형상관리 구조 재정비
✔ 운영 환경 이슈 해결
`,
  impact: ["복잡한 금융 로직 재정의", "실서비스 안정적 오픈"],
  tags: ["React", "Architecture", "Production"],
};

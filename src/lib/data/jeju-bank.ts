import { Project } from "@/types";

export const jejuBank: Project = {
  id: "jeju-bank",
  title: "제주은행 집단대출 ODS 시스템 구축",
  period: "2025.09 ~ 2025.11",
  role: "Frontend Engineer",
  isKey: true,
  category: "process",
  summary: "태블릿 기반 8단계 대출 신청 프로세스 설계 및 상태 관리 구조 구현",
  cardImpact: "✔ Route 기반 단계 설계 · Context 상태관리 · Zod 검증",
  description: `
✔ Route 기반 8단계 신청 프로세스 구조 설계
✔ Context 기반 전역 상태 관리
✔ session/localStorage 기반 이탈 복원
✔ URL 직접 접근 가드 및 조건 분기 처리
✔ Step 단위 Zod schema 설계 및 공통 validation 모듈화
`,
  impact: [
    "단계형 프로세스 설계 경험",
    "상태 관리 아키텍처 설계",
    "태블릿 UX 최적화",
  ],
  tags: ["React", "Context", "Zod", "Process Design"],
};

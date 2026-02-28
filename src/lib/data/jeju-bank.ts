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
  description: `태블릿 WebView 환경에서 집단대출 신청 프로세스를 React로 구현했습니다.  
Route 기반 8단계 구조로 분리했으며, 단계 간 이동 시 선행 조건 검증을 수행하도록 설계했습니다.  
Step마다 개별 Zod schema를 적용했고, 공통 validation 함수로 숫자·소수점 입력 검증 로직을 분리했습니다.  
인증 완료 후 Native 임시저장 API를 호출하여 태블릿 기기에 상태를 보관하도록 구성했으며, 일주일 내 저장 이력이 있을 경우 복구가 가능하도록 처리했습니다.  
공동명의자 여부에 따라 조건부 단계 분기를 구현했습니다.`,
  impact: [
    "단계형 프로세스 설계 경험",
    "상태 관리 아키텍처 설계",
    "태블릿 UX 최적화",
  ],
  tags: ["React", "Context", "Zod", "Process Design"],
};

import { Project } from "@/types";

export const jejuBank: Project = {
  id: "jeju-bank",
  title: "제주은행 집단대출 ODS 시스템 구축",
  period: "2025.09 ~ 2025.11",
  role: "Frontend Engineer",
  isKey: true,
  category: "process",
  summary:
    "태블릿 기반 7단계 대출 신청 프로세스를 프론트엔드 단독으로 설계하고 구현했습니다.",
  cardImpact: "✔ 단계 분기 구조 설계 · Zod 검증 · 단계별 임시저장",
  description: `태블릿 WebView 환경에서 집단대출 신청 프로세스를 React로 단독 개발했습니다.
고객 인증부터 증빙서류 촬영까지 7단계 대출 신청 프로세스를 구현했습니다.
신청자와 공동명의자가 동일한 7단계 흐름을 공유하는 구조였기 때문에, 단계 구성을 재사용 가능하게 설계하고 명의자 구분값으로 흐름을 제어하는 방식을 선택했습니다.
단계별 입력 검증은 Zod schema를 적용했고, 공통되는 검증 로직은 모듈화했습니다.
본인인증 완료 이후부터는 단계 이동 시 자동 임시저장되는 구조로 설계했습니다.`,
  impact: [
    "7단계 프로세스 단독 설계 및 구현",
    "공동명의자 분기 구조 설계",
    "Zod 기반 단계별 입력 검증 및 공통 로직 모듈화",
  ],
  tags: ["React", "Zod", "Android WebView", "RESTful API", "Git"],
};

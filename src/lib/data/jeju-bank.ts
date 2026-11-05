import { Project } from "@/types";

export const jejuBank: Project = {
  id: "jeju-bank",
  title: "제주은행 태블릿 집단대출 신청",
  period: "2025.09 ~ 2025.11",
  role: "Frontend Developer",
  isKey: true,
  category: "process",
  summary:
    "기존 프로젝트 환경에서 태블릿 집단대출 신청 기능의 프론트엔드 흐름을 맡아 구현하고, 프로젝트 이동 시 후속 개발자에게 인수인계했습니다.",
  cardImpact: "✔ 공동명의자 화면 분기 · Context·Recoil 상태 관리 · Zod 단계 검증 · Native 임시저장 연동",
  description: `은행 직원이 태블릿 WebView에서 고객의 집단대출 신청을 진행하는 서비스에서, 신청 기능의 프론트엔드 흐름을 React로 구현했습니다.
고객 인증부터 동의서·정보 입력·전자문서 작성·증빙서류 촬영까지 이어지는 단계형 신청 흐름을 구현했습니다.
공동명의자 여부에 따라 인증·동의·정보입력 화면을 추가로 분기하고, 단계 입력 데이터는 Context로, 고객·직원·업무 정보는 Recoil로 관리해 단계를 오가도 작성 정보가 유지되도록 했습니다.
Zod 스키마로 현재 조건에 필요한 항목만 검증하고, 검증을 통과해야 다음 단계로 넘어가도록 제어했습니다.
Native 임시저장 API를 연동해 중단한 신청을 이어서 진행할 수 있도록 했습니다.`,
  impact: [
    "고객 인증부터 증빙서류 촬영까지 단계형 신청 흐름 구현",
    "공동명의자 여부에 따른 화면 분기, Context·Recoil로 단계 간 상태 유지",
    "Zod 스키마로 조건별 필수 항목 검증 및 다음 단계 진입 제어",
    "Native 임시저장 API 연동으로 중단한 신청 이어서 진행",
  ],
  tags: ["React", "Recoil", "Zod", "Android WebView", "Context API", "TanStack Query", "REST API", "Git"],
};

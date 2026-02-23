import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hana-securities",
    title: "하나증권 ODS 시스템",
    period: "2023.12 ~ 2024.06 (7개월)",
    role: "프론트엔드 개발",
    description:
      "설계 오류와 문서 부족으로 지연된 프로젝트에 중도 투입. 레거시 시스템 분석 후 React로 복잡한 금융 상품 구현하고, 실서비스 전환 단계까지 완료.",
    highlights: ["위기 극복", "레거시 분석", "실서비스 전환"],
    tags: ["React", "WebSocket", "Android WebView", "Lazy Loading"],
  },
  {
    id: "nh-life",
    title: "NH농협생명 이미지시스템 재구축",
    period: "2025.11 ~ 현재",
    role: "프론트엔드 설계 및 개발",
    description: "20년 운영된 시스템을 웹으로 전환. 프론트엔드 3명 리딩 중.",
    tags: ["JavaScript", "WebSocket", "리딩"],
    badge: "진행중",
  },
  {
    id: "jeju-bank",
    title: "제주은행 집단대출 ODS",
    period: "2025.09 ~ 2025.11 (3개월)",
    role: "프론트엔드 개발",
    description: "7단계 대출 신청 프로세스 구현",
    tags: ["React", "Android WebView"],
  },
];

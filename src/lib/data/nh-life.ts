import { Project } from "@/types";

export const nhLife: Project = {
  id: "nh-life",
  title: "NH농협생명 이미지시스템 재구축",
  period: "2025.11 ~ 현재",
  role: "Frontend Lead",
  isKey: true,
  category: "architecture",
  summary:
    "20년 운영된 레거시 윈도우 시스템의 웹 전환 아키텍처 설계 및 프론트엔드 구조 정의",
  cardImpact: "✔ 레거시 전환 기준 수립 · 공통 모듈 설계 · 3인 리딩",
  description: `
✔ AS-IS 화면 구조 검토 후 기능 단위 재구성
✔ 화면 상태 흐름 정의 및 전환 기준 설계
✔ 이미지 뷰어 공통 모듈 설계 및 WebSocket 구조 표준화
✔ 구현 기준 정리 및 가이드 공유
✔ 프론트엔드 개발 방향 수립 및 코드 리뷰 리딩
`,
  impact: [
    "레거시 시스템 전환 기준 수립",
    "공통 모듈 기반 구조화",
    "프론트엔드 리드 경험",
  ],
  tags: ["Architecture", "WebSocket", "Module Design", "Exbuilder6"],
};

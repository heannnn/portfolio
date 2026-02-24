import { Project } from "@/types";

export const ablLife: Project = {
  id: "abl-life",
  title: "ABL생명 GA 사전스캔 및 WebSocket Agent 개발",
  period: "2025.06 ~ 2025.08 (3개월)",
  role: "Client Engineer",
  isKey: false,
  category: "client",
  summary: "웹-로컬 스캐너 연동 프로그램 개발 및 자동 배포 구조 구현",
  description: `
✔ WebSocket 기반 웹-로컬 통신 구조 구현
✔ 스캐너 제어 및 이미지 처리 안정화
✔ 서버-로컬 버전 비교 기반 자동 업데이트 로직 구현
✔ 수동 배포 제거 및 운영 효율성 개선
`,
  impact: ["자동 배포 구조 설계", "WebSocket 기반 실시간 통신 구현"],
  tags: ["C#", ".NET Framework", "Winform", "WebSocket", "이미지 처리", "Git"],
};

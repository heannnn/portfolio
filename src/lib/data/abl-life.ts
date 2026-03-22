import { Project } from "@/types";

export const ablLife: Project = {
  id: "abl-life",
  title: "ABL생명 GA 사전스캔 및 WebSocket Agent 개발",
  period: "2025.06 ~ 2025.08 (3개월)",
  role: "Client Engineer",
  isKey: false,
  category: "client",
  summary:
    "웹에서 로컬 스캐너를 제어하는 C# 스캔 프로그램과 WebSocket 기반 웹-로컬 통신 구조를 구현했습니다.",
  description: `웹에서 로컬 스캐너를 제어하는 C# 스캔 프로그램과 WebSocket 기반 웹-로컬 통신 구조를 구현했습니다.
스캔 및 이미지 처리 기능을 연동했으며, 서버 배포 버전과 로컬 파일 버전을 비교해 자동으로 최신 버전을 다운로드·적용하는 자동 업데이트 로직을 구현해 수동 배포를 제거했습니다.`,
  impact: [
    "WebSocket 기반 웹-로컬 통신 구조 구현",
    "서버-로컬 버전 비교 기반 자동 업데이트 로직 구현",
    "수동 배포 제거",
  ],
  tags: ["C#", ".NET Framework", "Winform", "WebSocket", "Git"],
};

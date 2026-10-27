import { Project } from "@/types";

export const ablLife: Project = {
  id: "abl-life",
  title: "ABL생명 GA 사전스캔 프로그램",
  period: "2025.06 ~ 2025.08 (3개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary:
    "웹 업무 화면에서 로컬 스캐너를 제어하는 C# 스캔 프로그램과 WebSocket Agent를 개발했습니다.",
  description: `웹 업무 화면에서 사용자 PC에 연결된 스캐너를 다뤄야 하는 GA 사전스캔 업무를 위해, C# 스캔 프로그램과 WebSocket Agent를 개발했습니다.
웹 업무 화면에서 로컬 스캐너를 제어해 이미지 스캔·전송·조회까지 처리하도록 연동했습니다.
서버 배포 버전과 사용자 PC 버전을 비교해 최신 파일을 받아 적용하는 자동 업데이트를 구현했습니다.`,
  impact: [
    "C# 스캔 프로그램과 WebSocket Agent 개발",
    "웹 화면에서 로컬 스캐너 제어 (스캔·전송·조회)",
    "서버-로컬 버전 비교 기반 자동 업데이트 구현",
  ],
  tags: ["C#", ".NET Framework", "WinForms", "WebSocket", "Git"],
};

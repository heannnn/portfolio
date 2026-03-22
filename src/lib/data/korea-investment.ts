import { Project } from "@/types";

export const koreaInvestment: Project = {
  id: "korea-investment",
  title: "한국투자증권 전자증명 수취 시스템 / 모바일 운전면허증",
  period: "2023.05 ~ 2023.11 (7개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary:
    "이미지 뷰어 연동 및 전자증명서·모바일 운전면허증 인증 내역 조회 화면을 구현했습니다.",
  description: `이미지 뷰어 연동 및 전자증명서·모바일 운전면허증 인증 내역 조회 화면을 구현했습니다.
서버에서 인증 내역을 조회해 화면에 표시하는 흐름을 구현했습니다.`,
  impact: [
    "이미지 뷰어 연동 구현",
    "전자증명서·모바일 운전면허증 인증 내역 조회 화면 구현",
  ],
  tags: ["C#", ".NET Framework", "Winform"],
};

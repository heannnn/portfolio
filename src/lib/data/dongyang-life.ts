import { Project } from "@/types";

export const dongyangLife: Project = {
  id: "dongyang-life",
  title: "동양생명 이미지시스템 구축",
  period: "2024.12 ~ 2025.05 (6개월)",
  role: "Frontend & Client Developer",
  isKey: false,
  category: "client",
  summary:
    "보험 서류 이미지 관리 시스템을 개발했습니다. OCX 기반 뷰어를 HTML5 뷰어로 전환했으며, React 기반 스캔·뷰어·관리 페이지를 구현했습니다.",
  description: `보험 서류 이미지 관리 시스템을 개발했습니다.
OCX 기반 뷰어를 HTML5 뷰어로 전환했으며, 스캔·뷰어·관리 페이지를 React로 구현했습니다.
웹-로컬 간 통신을 위한 C# Winform 기반 WebSocket Agent 프로그램 개발도 함께 담당했습니다.`,
  impact: [
    "OCX → HTML5 뷰어 전환",
    "React 기반 이미지 관리 화면 구현",
    "WebSocket Agent 프로그램 개발",
  ],
  tags: ["React", "C#", ".NET Framework", "Winform", "WebSocket", "SVN"],
};

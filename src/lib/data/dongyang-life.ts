import { Project } from "@/types";

export const dongyangLife: Project = {
  id: "dongyang-life",
  title: "동양생명 이미지시스템 재구축 (지원 인력)",
  period: "2024.12 ~ 2025.05 (6개월)",
  role: "Frontend & Client Developer",
  isKey: false,
  category: "client",
  summary:
    "통합테스트를 앞두고 지원 인력으로 투입되어 React 스캔·조회 화면 일부와 C# 클라이언트 개별 기능을 개발했습니다.",
  description: `통합테스트 일정을 앞두고 프론트와 클라이언트를 모두 맡을 수 있는 지원 인력으로 투입되었습니다.
React로 스캔 화면과 조회 화면 일부(페이지 인덱서, 조회 화면에서 여는 건 수정 팝업 등)를 구현했습니다.
C# 클라이언트에서는 버전 비교 방식 배포, 기존 타사 뷰어의 주석 호환 등 개별 기능 개발을 지원했습니다.`,
  impact: [
    "React 스캔 화면 및 조회 화면 일부 구현",
    "C# 클라이언트 버전 비교 배포, 기존 뷰어 주석 호환 기능 개발",
  ],
  tags: ["React", "C#", ".NET Framework", "WinForms"],
};

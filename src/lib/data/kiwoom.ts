import { Project } from "@/types";

export const kiwoom: Project = {
  id: "kiwoom",
  title: "한국투자증권 전자증명 수취 시스템 / 모바일 운전면허증",
  period: "2023.05 ~ 2023.11 (7개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary: "전자증명서 조회 및 모바일 운전면허증 진위 확인 프로그램 개발",
  description: `
✔ PDF/TIFF 문서 뷰어 기능 구현
✔ QR 코드 기반 인증 및 진위 확인 로직 개발
✔ 서버 통신 및 문서 처리 흐름 구현
`,
  impact: ["전자증명 시스템 구축 경험", "QR 인증 로직 구현"],
  tags: ["C#", ".NET Framework", "Winform", "이미지 처리"],
};

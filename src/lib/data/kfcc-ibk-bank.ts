import { Project } from "@/types";

export const kfccIbkBank: Project = {
  id: "kfcc-ibk-bank",
  title: "새마을금고 / 기업은행 모바일 운전면허증",
  period: "2022.04 ~ 2022.11 (8개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary: "신분증 진위 확인 프로그램 확장 구조 설계 및 구현",
  description: `
✔ 기존 실물 신분증 스캔 프로그램 분석
✔ 모바일 운전면허증 추가 및 확장 가능한 구조 설계
✔ QR 코드 기반 진위 확인 통신 로직 구현
`,
  impact: ["확장 가능한 인증 구조 설계", "모바일 신분증 도입 대응"],
  tags: ["C#", ".NET Framework", "Winform", "이미지 처리", "SVN"],
};

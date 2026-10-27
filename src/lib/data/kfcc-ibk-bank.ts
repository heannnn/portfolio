import { Project } from "@/types";

export const kfccIbkBank: Project = {
  id: "kfcc-ibk-bank",
  title: "새마을금고 / 기업은행 모바일 운전면허증",
  period: "2022.04 ~ 2022.11 (8개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary:
    "창구용 신분증 스캔 프로그램에 모바일 운전면허증 QR 본인확인·진위확인 기능을 추가했습니다.",
  description: `기존 실물 신분증 스캔 프로그램(C# WinForms)에 모바일 운전면허증 QR 본인확인·진위확인 기능을 추가했습니다.
서버와 통신해 진위를 확인하는 로직을 구현했습니다. 기업은행 건은 PC 클라이언트를 담당했습니다.`,
  impact: [
    "모바일 운전면허증 QR 본인확인 기능 추가",
    "서버 통신 기반 진위 확인 로직 구현",
  ],
  tags: ["C#", ".NET Framework", "WinForms", "SVN"],
};

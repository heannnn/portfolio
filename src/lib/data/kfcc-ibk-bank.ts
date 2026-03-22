import { Project } from "@/types";

export const kfccIbkBank: Project = {
  id: "kfcc-ibk-bank",
  title: "새마을금고 / 기업은행 모바일 운전면허증",
  period: "2022.04 ~ 2022.11 (8개월)",
  role: "Client Developer",
  isKey: false,
  category: "client",
  summary:
    "창구용 신분증 진위 확인 프로그램에 모바일 운전면허증을 추가하고 확장 가능한 구조로 설계했습니다.",
  description: `창구용 신분증 진위 확인 프로그램을 개발했습니다.
기존 실물 신분증 스캔 프로그램에 모바일 운전면허증을 추가했으며, 신분증 유형별 확장이 가능한 구조로 설계해 이후 모바일 주민등록증도 코드 추가만으로 도입할 수 있도록 했습니다.
서버 통신을 통한 진위 확인 로직을 구현했습니다.`,
  impact: [
    "신분증 유형별 확장 가능한 구조 설계",
    "모바일 운전면허증 진위 확인 로직 구현",
  ],
  tags: ["C#", ".NET Framework", "Winform", "SVN"],
};

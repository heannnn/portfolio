import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nh-life",
    title: "NH농협생명 이미지시스템 재구축",
    period: "2025.11 ~ 현재",
    role: "Frontend Lead",
    summary:
      "20년 운영된 레거시 윈도우 시스템을 웹으로 전환하며 프론트엔드 설계 및 공통 모듈 구조 수립",
    description: `
✔ 80개 AS-IS 화면 분석 후 기능 단위 재정의 및 웹 전환 전략 수립  
✔ 이미지 뷰어 공통 모듈 설계 및 WebSocket 통신 구조 표준화  
✔ 공통 모듈 기반 주요 업무 화면 구현  
✔ 프론트엔드 3인 개발 방향 조율 및 코드 리뷰 리딩  
✔ 개발 가이드 문서화로 팀 내 구현 일관성 확보
`,
    impact: [
      "레거시 구조 체계화 및 전환 기준 수립",
      "공통 모듈 설계로 중복 코드 최소화",
      "프론트엔드 리딩 경험",
    ],
    tags: ["JavaScript", "Exbuilder6", "WebSocket", "이미지 처리", "SVN"],
    badge: "진행중",
  },

  {
    id: "hana-securities",
    title: "하나증권 ODS 시스템 구축 및 실서비스 전환",
    period: "2023.12 ~ 2024.06 (7개월)",
    role: "Frontend Engineer",
    summary:
      "지연된 프로젝트에 중도 투입되어 레거시 분석 후 React 기반 재구현 및 실서비스 전환 완료",
    description: `
✔ 설계 문서 부족 및 일정 지연 상황에서 중도 합류  
✔ 랩·신탁·투자운용 등 복잡한 금융 상품 가입 로직 구조화  
✔ React 기반 재구현 및 상태 흐름 개선  
✔ 실서비스 전환 단계 3개월 투입, 빌드 및 형상관리 구조 재구성  
✔ 개발-운영 환경 차이 이슈 해결 및 안정적 오픈 지원
`,
    impact: [
      "복잡한 금융 로직 정리 및 재설계",
      "실서비스 전환 안정화",
      "빌드/배포 구조 개선 경험",
    ],
    tags: [
      "React",
      "JavaScript ES6+",
      "Android WebView",
      "WebSocket",
      "Code Splitting",
      "Git",
    ],
  },

  {
    id: "dongyang-life",
    title: "동양생명 이미지시스템 구축",
    period: "2024.12 ~ 2025.05 (6개월)",
    role: "Frontend & Client Developer",
    summary: "보험 이미지 관리 시스템 구축 및 웹-로컬 WebSocket 연동 구조 구현",
    description: `
✔ React 기반 이미지 뷰어 및 검색 UI 설계·구현  
✔ 기존 보험 계약·동의 프로세스 분석 후 웹 반영  
✔ 웹-로컬 프로그램 간 WebSocket 연동 구조 설계  
✔ 이미지 처리 및 전송 흐름 최적화
`,
    impact: ["보험 프로세스 웹 전환 경험", "웹-클라이언트 통신 구조 구현"],
    tags: ["React", "C#", ".NET Framework", "Winform", "WebSocket", "SVN"],
  },

  {
    id: "abl-life",
    title: "ABL생명 GA 사전스캔 및 WebSocket Agent 개발",
    period: "2025.06 ~ 2025.08 (3개월)",
    role: "Client Engineer",
    summary: "웹-로컬 스캐너 연동 프로그램 개발 및 자동 배포 구조 구현",
    description: `
✔ WebSocket 기반 웹-로컬 통신 구조 구현  
✔ 스캐너 제어 및 이미지 처리 안정화  
✔ 서버-로컬 버전 비교 기반 자동 업데이트 로직 구현  
✔ 수동 배포 제거 및 운영 효율성 개선
`,
    impact: ["자동 배포 구조 설계", "WebSocket 기반 실시간 통신 구현"],
    tags: [
      "C#",
      ".NET Framework",
      "Winform",
      "WebSocket",
      "이미지 처리",
      "Git",
    ],
  },

  {
    id: "jeju-bank",
    title: "제주은행 집단대출 ODS 시스템 구축",
    period: "2025.09 ~ 2025.11 (3개월)",
    role: "Frontend Engineer",
    summary: "태블릿 기반 7단계 대출 신청 프로세스 구현 및 분기 로직 설계",
    description: `
✔ 집단대출(아파트 담보·전세자금) React 기반 구현  
✔ 7단계 신청 프로세스 상태 흐름 설계  
✔ 공동명의자 분기 처리 및 예외 케이스 대응  
✔ 중간 단계 임시저장 기능 구현
`,
    impact: ["복잡한 단계형 프로세스 설계 경험", "태블릿 환경 UX 최적화"],
    tags: ["React", "JavaScript ES6+", "Android WebView", "RESTful API", "Git"],
  },

  {
    id: "kiwoom",
    title: "한국투자증권 전자증명 수취 시스템 / 모바일 운전면허증",
    period: "2023.05 ~ 2023.11 (7개월)",
    role: "Client Developer",
    summary: "전자증명서 조회 및 모바일 운전면허증 진위 확인 프로그램 개발",
    description: `
✔ PDF/TIFF 문서 뷰어 기능 구현  
✔ QR 코드 기반 인증 및 진위 확인 로직 개발  
✔ 서버 통신 및 문서 처리 흐름 구현
`,
    impact: ["전자증명 시스템 구축 경험", "QR 인증 로직 구현"],
    tags: ["C#", ".NET Framework", "Winform", "이미지 처리"],
  },

  {
    id: "ibk",
    title: "IBK투자증권 ODS 및 디지털창구",
    period: "2022.11 ~ 2023.04 (6개월)",
    role: "Client Developer",
    summary: "외근 영업 및 디지털 창구용 서류 스캔·등록 시스템 개발",
    description: `
✔ 서류 스캔 및 이미지 처리 로직 구현  
✔ 서버 업로드 및 예외 처리 구조 설계  
✔ 현장 업무 흐름에 맞춘 기능 구현
`,
    impact: ["이미지 처리 기반 업무 시스템 구현"],
    tags: ["C#", ".NET Framework", "WPF", "이미지 처리", "Git"],
  },

  {
    id: "kfcc-ibk-bank",
    title: "새마을금고 / 기업은행 모바일 운전면허증",
    period: "2022.04 ~ 2022.11 (8개월)",
    role: "Client Developer",
    summary: "신분증 진위 확인 프로그램 확장 구조 설계 및 구현",
    description: `
✔ 기존 실물 신분증 스캔 프로그램 분석  
✔ 모바일 운전면허증 추가 및 확장 가능한 구조 설계  
✔ QR 코드 기반 진위 확인 통신 로직 구현
`,
    impact: ["확장 가능한 인증 구조 설계", "모바일 신분증 도입 대응"],
    tags: ["C#", ".NET Framework", "Winform", "이미지 처리", "SVN"],
  },

  {
    id: "post",
    title: "우체국 차세대 금융시스템",
    period: "2021.08 ~ 2022.03 (8개월)",
    role: "Business Logic Developer",
    summary: "통합단말-전자문서 뷰어 간 연동 비즈니스 로직 개발",
    description: `
✔ 전자문서 뷰어 연동 로직 구현  
✔ 시스템 간 데이터 흐름 및 처리 로직 개발
`,
    impact: ["금융 차세대 시스템 구축 경험"],
    tags: ["JavaScript", "SVN"],
  },
];

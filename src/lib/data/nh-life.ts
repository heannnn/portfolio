import { Project } from "@/types";

export const nhLife: Project = {
  id: "nh-life",
  title: "NH농협생명 이미지시스템 재구축",
  period: "2025.11 ~ 현재",
  role: "Frontend Lead",
  isKey: true,
  category: "architecture",
  summary:
    "20년 운영된 레거시 윈도우 시스템의 웹 전환 아키텍처 설계 및 프론트엔드 구조 정의",
  cardImpact: "✔ 레거시 전환 기준 수립 · 공통 모듈 설계 · 3인 리딩",
  description: `20년 이상 운영된 윈도우 기반 이미지 시스템을 웹 환경으로 전환하는 프로젝트입니다.  
AS-IS 화면을 기능 단위로 정리하며, 단순 화면 이식이 아니라 업무 흐름 기준으로 재구성하는 방향을 설정했습니다.  
이미지 뷰어는 솔루션 기반이었으며, 화면별로 사용하는 기능이 달라 공통 사용 패턴을 정리해 모듈 단위로 구조화했습니다.  
요청/응답 구조는 code, message, data 형태였고, 실패 코드 수신 시 공통 처리 로직에서 메시지를 표준화하여 사용자에게 노출하도록 구성했습니다.  
프론트엔드 3인의 구현 방향을 조율하며 화면 구조, 상태 흐름, 공통 처리 기준을 공유했습니다.`,
  impact: [
    "레거시 시스템 전환 기준 수립",
    "공통 모듈 기반 구조화",
    "프론트엔드 리드 경험",
  ],
  tags: ["Architecture", "WebSocket", "Module Design", "Exbuilder6"],
};

import { Project } from "@/types";

export const nhLife: Project = {
  id: "nh-life",
  title: "NH농협생명 이미지시스템 재구축",
  period: "2025.11 ~ 현재",
  role: "Frontend Lead",
  isKey: true,
  category: "architecture",
  summary:
    "20년 운영된 윈도우 기반 이미지 시스템을 웹 환경으로 전환하는 프로젝트에서 프론트엔드 설계와 개발을 담당하고 있습니다.",
  cardImpact: "✔ 레거시 전환 기준 수립 · 공통 모듈 설계 · 3인 리딩",
  description: `20년간 운영된 윈도우 기반 이미지 시스템을 웹 환경으로 전환하는 프로젝트입니다.
80개 AS-IS 화면을 분석해 그대로 전환될 기능과 새로 구현될 기능으로 분류했고, 기존 OCX 뷰어와 HTML5 뷰어 간 기능 갭을 파악해 전환 방식을 정의했습니다.
ECM 파일을 로컬에 다운로드해 처리·전송하는 흐름은 WebSocket Agent 담당 개발자와 협의해 설계했습니다.
이미지 뷰어 공통 모듈과 WebSocket 통신 공통 모듈을 구현하고 사용 가이드를 작성해 팀 내 구현 기준을 정리했습니다.
프론트엔드 3명의 구현 방향을 조율하며 화면 구조, 상태 흐름, 공통 처리 기준을 공유했습니다.`,
  impact: [
    "80개 AS-IS 화면 분석 및 전환 방식 정의",
    "이미지 뷰어 · WebSocket 공통 모듈 설계",
    "프론트엔드 3명 리딩 및 개발 가이드 작성",
  ],
  tags: ["JavaScript", "WebSocket", "Module Design", "SVN"],
};

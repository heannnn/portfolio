import { Project } from "@/types";

export const smartRadar: Project = {
  id: "smart-radar",
  title: "SmartRadar — 레이더 시뮬레이터 & 모니터",
  period: "2026.08",
  role: "개인 프로젝트",
  type: "personal",
  category: "client",
  github: "https://github.com/heannnn/SmartRadar",
  summary:
    "C# 시뮬레이터가 UDP로 보내는 가상 레이더 데이터를 WPF 데스크톱에서 3D로 시각화하고, 별도의 Next.js 대시보드로 장비와 탐지 이력을 관리하는 Desktop + Web 개인 프로젝트입니다.",
  cardTitle: "SmartRadar — 실시간 레이더 모니터링",
  cardSummary:
    "C#/WPF와 Next.js로 구성한 실시간 레이더 모니터링 프로젝트로, UDP 데이터 수신과 3D 시각화를 구현했습니다.",
  cardTags: ["C#", "WPF", "UDP", "Next.js"],
  cardImpact:
    "✔ UDP 약 20Hz 수신 · 수신/렌더 주기 분리 · WPF 3D 시각화 + 객체 선택",
  description: `실제 레이더 장비 없이 동작을 검증하기 위해, C#/.NET 8로 가상 센서 데이터를 만들어 보내는 Simulator와 이를 받아 시각화하는 WPF Monitor로 나눠 구성했습니다.
Simulator는 차량·사람·자전거 객체를 이동시키며 프레임을 약 20Hz로 UDP 전송합니다.
Monitor는 UDP로 들어오는 프레임을 모두 받아 객체 상태를 유지하고, 화면은 그보다 낮은 주기로만 갱신해 네트워크 수신 주기와 UI 렌더링 주기를 분리했습니다. 시퀀스 번호로 패킷 유실·역전·중복·시뮬레이터 재시작을 구분해 지표로 보여줍니다.
WPF 3D 뷰에서는 레이더 좌표를 3D 공간 좌표로 변환해 객체의 위치와 진행 방향을 표시하고, 카메라 회전·확대와 마우스 클릭으로 객체를 선택할 수 있으며 선택 상태는 표(그리드)와 동기화됩니다. 라이브 세션을 파일로 녹화하고 0.5x·1x·2x로 재생하는 기능으로 동작을 확인했습니다.
별도의 Web Dashboard는 Next.js(App Router) + TypeScript로, JWT 기반 로그인 세션과 역할(admin/operator/viewer)별 접근 제어를 적용했습니다. 장비 목록·상세, 탐지 이력, 사용자 관리, 분석 차트 화면으로 구성했고, 대시보드 데이터는 모두 mock입니다.`,
  impact: [
    "C#/.NET 8 Simulator에서 WPF Monitor로 UDP 약 20Hz 데이터 전송",
    "UDP 수신 주기와 UI 렌더링 주기 분리 (수신은 전 프레임, 화면은 낮은 주기로 갱신)",
    "WPF 3D 시각화 — 좌표 변환, 객체 방향 표시, 마우스 클릭 객체 선택, 라이브 녹화/재생(Replay)",
    "Next.js Web Dashboard — JWT 로그인 세션 + 역할별 접근 제어 (데이터는 mock)",
  ],
  tags: ["C#", ".NET 8", "WPF", "WPF 3D", "UDP", "Next.js", "TypeScript"],
};

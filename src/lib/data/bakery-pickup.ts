import { Project } from "@/types";

export const bakeryPickup: Project = {
  id: "bakery-pickup-demo",
  title: "Bakery Pickup — 픽업 주문 흐름",
  period: "2026.08",
  role: "개인 프로젝트",
  type: "personal",
  category: "process",
  github: "https://github.com/heannnn/bakery-pickup-demo",
  summary:
    "메뉴 → 장바구니 → 픽업 시간 선택 → 주문으로 이어지는 픽업 주문 흐름을 구현하면서, 픽업 슬롯 예약 충돌과 WebView-네이티브 연동을 함께 다뤄본 개인 프로젝트입니다.",
  cardSummary:
    "Next.js 기반 픽업 주문 프로젝트로, 주문 흐름과 시간대 예약 충돌 처리, WebView 연동을 구현했습니다.",
  cardTags: ["Next.js", "TypeScript", "TanStack Query", "WebView Bridge"],
  cardImpact:
    "✔ 주문 확정 시 슬롯 재검증 후 마감 시 HTTP 409 처리 · WebView 브리지 + 웹 단독 실행 fallback",
  description: `Next.js(App Router) + TypeScript로, 메뉴 조회 → 장바구니 → 픽업 시간 선택 → 주문으로 이어지는 흐름을 구현했습니다.
서버에서 내려오는 데이터(메뉴·픽업 슬롯·주문)는 TanStack Query로, 장바구니는 React Context로 관리하고 localStorage에 저장해 새로고침 후에도 유지되도록 했습니다.
픽업 슬롯은 슬롯마다 정원이 있어, 사용자가 슬롯을 고른 뒤에도 다른 주문이 먼저 그 슬롯을 채울 수 있습니다. 그래서 주문을 확정하는 시점에 서버가 슬롯 정원을 다시 확인하고, 이미 마감됐으면 HTTP 409로 거절합니다. 클라이언트는 409를 받으면 선택했던 슬롯을 해제하고 슬롯 목록을 다시 불러와 다른 시간을 고르도록 합니다.
결제와 쿠폰 스캔은 WebView(네이티브 앱) 환경을 가정해 브리지 인터페이스로 추상화했고, 네이티브가 없는 웹 단독 실행에서는 mock 결과로 대체됩니다. 주문 결과는 서버가 확정한 뒤에만 화면에 반영합니다.`,
  impact: [
    "메뉴 → 장바구니 → 픽업 시간 → 주문 흐름 구현",
    "주문 확정 시점에 슬롯 정원을 재검증하고 마감 시 HTTP 409로 처리",
    "TanStack Query(서버 데이터)와 Context + localStorage(장바구니) 역할 분리",
    "WebView 브리지로 결제·쿠폰 스캔 연동, 웹 단독 실행 시 mock으로 fallback",
  ],
  tags: ["Next.js", "TypeScript", "TanStack Query", "React Context", "WebView Bridge"],
};

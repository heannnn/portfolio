import { Project } from "@/types";

export const payflow: Project = {
  id: "payflow",
  title: "PayFlow — 모바일 결제 흐름",
  period: "2026.08",
  role: "개인 프로젝트",
  type: "personal",
  category: "process",
  github: "https://github.com/heannnn/payflow",
  summary:
    "React Native로 결제 흐름을 구현하면서, 앱이 백그라운드로 전환되거나 네트워크가 실패했을 때 결제 상태를 어떻게 다룰지에 초점을 맞춘 개인 프로젝트입니다.",
  cardSummary:
    "React Native로 모바일 결제 흐름을 구현하고, 중복 요청과 앱 상태 변화에 따른 결제 상태 복구를 다룬 프로젝트입니다.",
  cardImpact:
    "✔ PaymentStatus 상태 전이 · idempotency key로 중복 결제 차단 · 앱 복귀 시 결제 상태 재조회",
  description: `React Native(Expo) 앱으로, 실제 PG 연동 없이 Mock 결제 API로 결제 요청과 응답 흐름을 구현했습니다.
결제 진행 상태를 여러 개의 boolean이 아니라 하나의 PaymentStatus 값으로 모델링해, 각 화면이 필요한 선행 상태가 없으면 이전 단계로 되돌아가도록 했습니다.
진행 중인 결제 흐름 상태는 Zustand로, 서버에 원본이 있는 데이터(결제 요청 결과, 결제 내역)는 TanStack Query로 역할을 나눴습니다.
중복 결제는 버튼 연타를 UI에서 막는 것과 별개로, 각 결제 시도에 idempotency key를 부여해 같은 요청이 다시 전달돼도 Mock API에서 중복 처리되지 않도록 했습니다.
결제 도중 앱이 백그라운드로 전환됐다가 돌아오면, 아직 처리 중인 결제는 해당 key로 상태를 다시 확인해 서버가 확정한 결과로 화면을 복구합니다.
인증 실패 / 잔액 부족 / 네트워크 오류는 개발용 패널에서 직접 골라 재현했고, 결제 결과는 optimistic update 없이 서버가 확정한 뒤에만 반영했습니다.`,
  impact: [
    "결제 진행 상태를 PaymentStatus 값 하나로 모델링",
    "idempotency key로 중복 결제 요청 방지 (UI 연타 차단 + Mock API 중복 처리 방지)",
    "앱 백그라운드 복귀 시 진행 중 결제 상태 재확인 후 화면 복구",
    "Zustand(클라이언트 상태)와 TanStack Query(서버 상태) 역할 분리",
  ],
  tags: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query"],
};

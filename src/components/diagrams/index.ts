import type { ComponentType } from "react";
import NhIntegrationDiagram from "./NhIntegrationDiagram";
import HanaFlowDiagram from "./HanaFlowDiagram";

export { NhIntegrationDiagram, HanaFlowDiagram };

/** 프로젝트 id별 구조도. 상세 페이지에서 개요 위에 표시한다. */
export const PROJECT_DIAGRAMS: Record<
  string,
  { Component: ComponentType; caption: string }
> = {
  "nh-life": {
    Component: NhIntegrationDiagram,
    caption:
      "여러 업무 화면이 이미지뷰어와 Local Agent를 같은 방식으로 호출하도록 연동 공통 API를 구성했습니다.",
  },
  "hana-securities": {
    Component: HanaFlowDiagram,
    caption:
      "랩·신탁·투자일임 가입 흐름을 단순화한 그림입니다. 실제 순서와 조건은 상품마다 다르며, 오픈 직전에는 ELS/DLF 가입 화면에도 같은 절차를 추가했습니다.",
  },
};

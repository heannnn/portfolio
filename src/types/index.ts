export type ProjectCategory = "architecture" | "process" | "client";

export type FilterType = "all" | ProjectCategory;

/**
 * professional: 금융권 실무 프로젝트 (기본값 — 별도 지정하지 않으면 professional로 취급)
 * personal: 개인 프로젝트
 */
export type ProjectType = "professional" | "personal";

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  isKey?: boolean;
  category: ProjectCategory;
  summary: string;
  description: string;
  impact?: string[];
  tags: string[];
  badge?: string;
  cardImpact?: string;
  /** 생략 시 professional. personal 프로젝트에서만 명시한다. */
  type?: ProjectType;
  /** personal 프로젝트의 GitHub repository URL */
  github?: string;
  /** 실제 배포 URL이 확인된 경우에만 채운다 */
  demo?: string;
  /** 목록 카드에서만 쓰는 표시용 제목. 상세 페이지와 라우팅(id)에는 영향 없음. */
  cardTitle?: string;
  /** 목록 카드에서만 쓰는 짧은 설명. 상세 페이지 description/impact와 무관. */
  cardSummary?: string;
  /** 목록 카드에서 노출할 핵심 태그(최대 4개). 생략 시 tags 앞 4개를 사용. */
  cardTags?: string[];
}

import { nhLife } from "./data/nh-life";
import { hanaSecurities } from "./data/hana-securities";
import { jejuBank } from "./data/jeju-bank";
import { dongyangLife } from "./data/dongyang-life";
import { ablLife } from "./data/abl-life";
import { koreaInvestment } from "./data/korea-investment";
import { ibk } from "./data/ibk";
import { kfccIbkBank } from "./data/kfcc-ibk-bank";
import { post } from "./data/post";
import { payflow } from "./data/payflow";
import { smartRadar } from "./data/smart-radar";
import { bakeryPickup } from "./data/bakery-pickup";

/** 금융권 실무 프로젝트 */
export const projects = [
  nhLife,
  jejuBank,
  hanaSecurities,
  dongyangLife,
  ablLife,
  koreaInvestment,
  ibk,
  kfccIbkBank,
  post,
];

/** 개인 프로젝트 */
export const personalProjects = [payflow, smartRadar, bakeryPickup];

/** 상세 페이지 조회 등 전체 프로젝트가 필요할 때 사용 */
export const allProjects = [...projects, ...personalProjects];

/** 현재 시점의 대표 실무 프로젝트 (배열 순서와 무관하게 명시적으로 지정) */
export const FEATURED_PROJECT_ID = "nh-life";

export const featuredProject =
  projects.find((p) => p.id === FEATURED_PROJECT_ID) ?? projects[0];

/** 대표 프로젝트 다음으로 Home에 노출할 주요 프로젝트 */
export const featuredSubProjects = projects.filter(
  (p) => p.isKey && p.id !== featuredProject.id,
);

"use client";

import { useId, useState } from "react";
import { Check } from "lucide-react";

// 제주은행 태블릿 집단대출 신청의 단계형 흐름을 축약한 데모
type Ownership = "single" | "joint";

interface FormState {
  verified: boolean;
  ownership: Ownership | null;
  coOwnerName: string;
  amount: string;
}

type StepId = "verify" | "ownership" | "coOwner" | "amount" | "confirm";

const STEP_LABELS: Record<StepId, string> = {
  verify: "본인인증",
  ownership: "명의 구분",
  coOwner: "공동명의자",
  amount: "희망 금액",
  confirm: "신청 확인",
};

const MIN_AMOUNT = 10_000_000;
const MAX_AMOUNT = 500_000_000;

const initialState: FormState = {
  verified: false,
  ownership: null,
  coOwnerName: "",
  amount: "",
};

// 공동명의를 선택하면 공동명의자 화면이 추가됨 (실제 인증·동의·정보입력 sub 화면을 하나로 축약)
function getSteps(state: FormState): StepId[] {
  return state.ownership === "joint"
    ? ["verify", "ownership", "coOwner", "amount", "confirm"]
    : ["verify", "ownership", "amount", "confirm"];
}

// 단계별 검증: 통과하면 null, 실패하면 안내 문구
function validate(step: StepId, state: FormState): string | null {
  switch (step) {
    case "verify":
      return state.verified ? null : "본인인증을 먼저 완료해 주세요.";
    case "ownership":
      return state.ownership ? null : "명의 구분을 선택해 주세요.";
    case "coOwner":
      return state.coOwnerName.trim().length >= 2
        ? null
        : "공동명의자 이름을 2자 이상 입력해 주세요.";
    case "amount": {
      if (!state.amount) return "희망 금액을 입력해 주세요.";
      const value = Number(state.amount);
      if (value < MIN_AMOUNT || value > MAX_AMOUNT)
        return "1,000만 원부터 5억 원까지 신청할 수 있어요.";
      return null;
    }
    default:
      return null;
  }
}

const formatWon = (digits: string) =>
  digits ? `${Number(digits).toLocaleString("ko-KR")}원` : "";

export default function ApplyFlowDemo() {
  const [state, setState] = useState<FormState>(initialState);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fieldId = useId();

  const steps = getSteps(state);
  const current = steps[index];
  const isLast = current === "confirm";

  const update = (patch: Partial<FormState>) => {
    setState((prev) => ({ ...prev, ...patch }));
    setError(null);
  };

  const next = () => {
    const message = validate(current, state);
    if (message) {
      setError(message);
      return;
    }
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setError(null);
    setIndex((i) => Math.max(0, i - 1));
  };

  const reset = () => {
    setState(initialState);
    setIndex(0);
    setError(null);
  };

  return (
    <div className="rounded-xl border border-line bg-surface shadow-[0_1px_0_var(--color-line),0_12px_32px_-16px_rgb(23_32_28/0.25)]">
      {/* 단계 표시 */}
      <ol
        className="flex border-b border-line text-xs"
        aria-label="신청 단계"
      >
        {steps.map((step, i) => {
          const done = i < index;
          const active = i === index;
          return (
            <li
              key={step}
              aria-current={active ? "step" : undefined}
              className={`flex-1 px-1 py-3 text-center border-b-2 -mb-px transition-colors ${
                active
                  ? "border-accent text-fg font-semibold"
                  : done
                    ? "border-transparent text-accent"
                    : "border-transparent text-fg-muted"
              }`}
            >
              <span className="block tabular">
                {done ? <Check size={14} className="inline" /> : i + 1}
              </span>
              <span className="block mt-0.5 whitespace-nowrap">
                {STEP_LABELS[step]}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="p-5 sm:p-6 min-h-56 flex flex-col">
        <div className="flex-1" aria-live="polite">
          {current === "verify" && (
            <div className="space-y-4">
              <p className="text-fg-body">
                신청을 시작하려면 본인인증이 필요합니다.
              </p>
              <button
                type="button"
                onClick={() => update({ verified: true })}
                disabled={state.verified}
                className="w-full py-3 rounded-lg border border-line text-fg font-medium hover:border-accent disabled:border-accent disabled:bg-accent-soft disabled:text-accent transition-colors"
              >
                {state.verified ? "인증 완료" : "휴대폰으로 인증하기"}
              </button>
            </div>
          )}

          {current === "ownership" && (
            <fieldset className="space-y-3">
              <legend className="text-fg-body mb-3">
                담보 물건의 명의를 선택해 주세요.
              </legend>
              {(
                [
                  ["single", "단독명의"],
                  ["joint", "공동명의"],
                ] as const
              ).map(([value, label]) => (
                <label
                  key={value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                    state.ownership === value
                      ? "border-accent bg-accent-soft text-fg"
                      : "border-line text-fg-body hover:border-fg-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${fieldId}-ownership`}
                    value={value}
                    checked={state.ownership === value}
                    onChange={() => update({ ownership: value })}
                    className="accent-(--color-accent)"
                  />
                  {label}
                  {value === "joint" && (
                    <span className="ml-auto text-xs text-fg-muted">
                      화면 추가
                    </span>
                  )}
                </label>
              ))}
            </fieldset>
          )}

          {current === "coOwner" && (
            <div className="space-y-2">
              <label htmlFor={fieldId} className="block text-fg-body">
                공동명의자 이름
              </label>
              <input
                id={fieldId}
                value={state.coOwnerName}
                onChange={(e) => update({ coOwnerName: e.target.value })}
                aria-invalid={!!error}
                aria-describedby={error ? `${fieldId}-error` : undefined}
                className="w-full px-4 py-3 rounded-lg border border-line bg-base text-fg aria-invalid:border-danger"
                placeholder="홍길동"
              />
            </div>
          )}

          {current === "amount" && (
            <div className="space-y-2">
              <label htmlFor={fieldId} className="block text-fg-body">
                희망 대출 금액
              </label>
              <input
                id={fieldId}
                inputMode="numeric"
                value={state.amount ? Number(state.amount).toLocaleString("ko-KR") : ""}
                // 숫자 외 입력은 걸러내고 원 단위 숫자만 상태에 저장
                onChange={(e) =>
                  update({ amount: e.target.value.replace(/\D/g, "").slice(0, 10) })
                }
                aria-invalid={!!error}
                aria-describedby={`${fieldId}-hint${error ? ` ${fieldId}-error` : ""}`}
                className="w-full px-4 py-3 rounded-lg border border-line bg-base text-fg text-right tabular aria-invalid:border-danger"
                placeholder="0"
              />
              <p id={`${fieldId}-hint`} className="text-xs text-fg-muted">
                1,000만 원 ~ 5억 원 (데모용 예시 값)
              </p>
            </div>
          )}

          {current === "confirm" && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="text-fg-muted">본인인증</dt>
              <dd className="text-fg text-right">완료</dd>
              <dt className="text-fg-muted">명의</dt>
              <dd className="text-fg text-right">
                {state.ownership === "joint"
                  ? `공동명의 (${state.coOwnerName.trim()})`
                  : "단독명의"}
              </dd>
              <dt className="text-fg-muted">희망 금액</dt>
              <dd className="text-fg text-right tabular">
                {formatWon(state.amount)}
              </dd>
            </dl>
          )}

          {error && (
            <p
              id={`${fieldId}-error`}
              role="alert"
              className="mt-3 text-sm text-danger"
            >
              {error}
            </p>
          )}
        </div>

        <div className="flex gap-2 pt-5">
          {index > 0 && !isLast && (
            <button
              type="button"
              onClick={prev}
              className="px-4 py-2.5 rounded-lg text-fg-body hover:bg-sunken transition-colors"
            >
              이전
            </button>
          )}
          {isLast ? (
            <button
              type="button"
              onClick={reset}
              className="ml-auto px-5 py-2.5 rounded-lg border border-line text-fg hover:border-accent transition-colors"
            >
              처음부터 다시
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="ml-auto px-5 py-2.5 rounded-lg bg-accent text-on-accent font-medium hover:opacity-90 transition-opacity"
            >
              다음
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

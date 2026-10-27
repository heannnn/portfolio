// 하나증권 ODS — 조건별 금융상품 가입 흐름
// 경력_사실원본.md 기준. 단계 순서는 단순화했고, 상품별 정확한 조건은 표시하지 않는다.

const W = 760;
const H = 236;
const NODE_W = 104;
const NODE_H = 56;
const GAP = (W - NODE_W * 6) / 5;
const Y = 64;

const STEPS = [
  { label: ["상품 · 고객", "정보 입력"], conditional: false },
  { label: ["투자성향", "확인"], conditional: true },
  { label: ["전자문서"], conditional: true },
  { label: ["상담 녹취"], conditional: true },
  { label: ["책임자 승인"], conditional: true },
  { label: ["가입 처리"], conditional: false },
];

const nodeX = (i: number) => i * (NODE_W + GAP);
const centerX = (i: number) => nodeX(i) + NODE_W / 2;

export default function HanaFlowDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[640px] h-auto"
        role="img"
        aria-labelledby="hana-diagram-title hana-diagram-desc"
      >
        <title id="hana-diagram-title">하나증권 금융상품 가입 흐름</title>
        <desc id="hana-diagram-desc">
          상품과 고객 정보를 입력한 뒤 투자성향 확인, 전자문서, 상담 녹취,
          책임자 승인 단계를 거쳐 가입을 처리한다. 가운데 네 단계는 상품과
          고객 조건에 따라 포함 여부가 달라진다. 상담 녹취는 외부 녹취
          솔루션과 연동했고, 투자성향이 바뀌면 기존 녹취를 초기화한다. 책임자
          승인은 상품별 필요 여부에 따라 분기한다.
        </desc>

        <defs>
          <marker
            id="hana-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--color-fg-muted)" />
          </marker>
        </defs>

        {/* 조건부 구간 표시 */}
        <path
          d={`M${nodeX(1)} 40 L${nodeX(1)} 32 L${nodeX(4) + NODE_W} 32 L${nodeX(4) + NODE_W} 40`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={1}
        />
        <text
          x={(nodeX(1) + nodeX(4) + NODE_W) / 2}
          y={22}
          fontSize={14}
          textAnchor="middle"
          fill="var(--color-accent)"
        >
          상품 · 고객 조건에 따라 포함 여부가 달라지는 단계
        </text>

        {STEPS.map((step, i) => (
          <g key={step.label.join("")}>
            <rect
              x={nodeX(i)}
              y={Y}
              width={NODE_W}
              height={NODE_H}
              rx={8}
              fill={step.conditional ? "var(--color-accent-soft)" : "var(--color-surface)"}
              stroke={step.conditional ? "var(--color-accent)" : "var(--color-line)"}
              strokeDasharray={step.conditional ? "5 4" : undefined}
            />
            {step.label.map((line, j) => (
              <text
                key={line}
                x={centerX(i)}
                y={Y + NODE_H / 2 + 5 + (j - (step.label.length - 1) / 2) * 18}
                fontSize={15}
                fontWeight={600}
                textAnchor="middle"
                fill="var(--color-fg)"
              >
                {line}
              </text>
            ))}
            {i < STEPS.length - 1 && (
              <path
                d={`M${nodeX(i) + NODE_W + 3} ${Y + NODE_H / 2} L${nodeX(i + 1) - 3} ${Y + NODE_H / 2}`}
                stroke="var(--color-fg-muted)"
                strokeWidth={1.25}
                markerEnd="url(#hana-arrow)"
              />
            )}
          </g>
        ))}

        {/* 투자성향 변경 → 기존 녹취 초기화 */}
        <path
          d={`M${centerX(1)} ${Y + NODE_H + 4} C${centerX(1)} 172 ${centerX(3)} 172 ${centerX(3)} ${Y + NODE_H + 6}`}
          fill="none"
          stroke="var(--color-fg-muted)"
          strokeWidth={1.25}
          strokeDasharray="4 4"
          markerEnd="url(#hana-arrow)"
        />
        <text x={centerX(2)} y={180} fontSize={13.5} textAnchor="middle" fill="var(--color-fg-body)">
          투자성향이 바뀌면 기존 녹취 초기화
        </text>

        {/* 단계별 메모 */}
        {[
          { x: centerX(3), lines: ["외부 녹취", "솔루션 연동"] },
          { x: centerX(4), lines: ["상품별 승인", "필요 여부로 분기"] },
        ].map((note) =>
          note.lines.map((line, j) => (
            <text
              key={line}
              x={note.x}
              y={204 + j * 19}
              fontSize={13.5}
              textAnchor="middle"
              fill="var(--color-fg-body)"
            >
              {line}
            </text>
          )),
        )}
      </svg>
    </div>
  );
}

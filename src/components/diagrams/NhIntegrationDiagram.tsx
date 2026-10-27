// NH농협생명 이미지시스템 재구축 — 연동 구조도
// 경력_사실원본.md의 [사용자 확인] 범위만 표시한다. (내부 구성도·ERD 등 고객사 자료는 사용하지 않음)

const W = 800;
const H = 400;

function Box({
  x,
  y,
  w,
  h,
  title,
  lines = [],
  variant = "default",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  variant?: "default" | "mine" | "linked" | "legacy";
}) {
  const style = {
    default: { fill: "var(--color-surface)", stroke: "var(--color-line)", dash: undefined },
    mine: { fill: "var(--color-accent-soft)", stroke: "var(--color-accent)", dash: undefined },
    linked: { fill: "var(--color-surface)", stroke: "var(--color-fg-muted)", dash: "5 4" },
    legacy: { fill: "var(--color-sunken)", stroke: "var(--color-line)", dash: undefined },
  }[variant];

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={style.fill}
        stroke={style.stroke}
        strokeWidth={variant === "mine" ? 1.5 : 1}
        strokeDasharray={style.dash}
      />
      <text
        x={x + 16}
        y={y + 30}
        fontSize={16.5}
        fontWeight={600}
        fill="var(--color-fg)"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 16}
          y={y + 55 + i * 21}
          fontSize={14}
          fill="var(--color-fg-body)"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--color-fg-muted)"
      strokeWidth={1.25}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd="url(#nh-arrow)"
    />
  );
}

export default function NhIntegrationDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[640px] h-auto"
        role="img"
        aria-labelledby="nh-diagram-title nh-diagram-desc"
      >
        <title id="nh-diagram-title">
          NH농협생명 이미지시스템 웹 전환 연동 구조
        </title>
        <desc id="nh-diagram-desc">
          XPlatform·ActiveX 기반 Windows 시스템의 화면 약 80개를 분석해 웹
          업무 화면으로 전환했다. 업무 화면은 본인이 구성한 연동 공통 API를
          통해 사내 이미지뷰어 솔루션과, WebSocket으로 사용자 PC의 Local
          Agent를 호출한다. SSO, 사설인증서, 화면 캡처 방지 같은 외부 솔루션도
          업무 화면에 연동했다.
        </desc>

        <defs>
          <marker
            id="nh-arrow"
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

        {/* AS-IS */}
        <text x={0} y={18} fontSize={13.5} fill="var(--color-fg-muted)">
          기존
        </text>
        <Box
          x={0}
          y={118}
          w={176}
          h={104}
          variant="legacy"
          title="기존 업무 시스템"
          lines={["Windows · XPlatform", "ActiveX 기반"]}
        />

        <Arrow d="M184 170 L310 170" />
        <text x={247} y={154} fontSize={13.5} textAnchor="middle" fill="var(--color-fg-body)">
          화면 약 80개
        </text>
        <text x={247} y={194} fontSize={13.5} textAnchor="middle" fill="var(--color-fg-body)">
          흐름·분기·예외 분석
        </text>

        {/* TO-BE */}
        <text x={318} y={18} fontSize={13.5} fill="var(--color-fg-muted)">
          웹 전환 후 (2026.07 오픈)
        </text>
        <Box
          x={318}
          y={34}
          w={228}
          h={122}
          title="웹 업무 화면"
          lines={["exBuilder6 · JavaScript", "프론트엔드 3명이 나눠 개발", "본인: 메인 · 로그인 · 스캔"]}
        />
        <Box
          x={318}
          y={204}
          w={228}
          h={100}
          variant="mine"
          title="연동 공통 API"
          lines={["화면마다 같은 방식으로 호출", "개발 가이드 · 코드 리뷰"]}
        />
        <Arrow d="M432 160 L432 198" />

        <Box
          x={600}
          y={34}
          w={200}
          h={96}
          variant="linked"
          title="외부 솔루션"
          lines={["SSO · 사설인증서", "화면 캡처 방지"]}
        />
        <Arrow d="M550 82 L594 82" dashed />

        <Box
          x={600}
          y={154}
          w={200}
          h={76}
          variant="linked"
          title="이미지뷰어"
          lines={["사내 솔루션"]}
        />
        <Box
          x={600}
          y={254}
          w={200}
          h={96}
          variant="linked"
          title="Local Agent"
          lines={["사용자 PC에 설치", "다른 개발자 개발"]}
        />
        <Arrow d="M550 232 C576 232 572 192 594 192" />
        <Arrow d="M550 276 C576 276 572 302 594 302" />
        <text x={560} y={336} fontSize={12.5} textAnchor="middle" fill="var(--color-fg-muted)">
          WebSocket
        </text>

        {/* 범례 */}
        <g transform="translate(0 378)">
          <rect width={15} height={15} rx={3} fill="var(--color-accent-soft)" stroke="var(--color-accent)" strokeWidth={1.5} />
          <text x={24} y={12.5} fontSize={13.5} fill="var(--color-fg-body)">
            본인이 구성한 부분
          </text>
          <rect x={170} width={15} height={15} rx={3} fill="var(--color-surface)" stroke="var(--color-fg-muted)" strokeDasharray="3 2" />
          <text x={194} y={12.5} fontSize={13.5} fill="var(--color-fg-body)">
            연동한 솔루션 · 프로그램 (직접 개발하지 않음)
          </text>
        </g>
      </svg>
    </div>
  );
}

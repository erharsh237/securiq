export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Illustration of connected cloud resources being monitored, with one flagged issue highlighted"
    >
      {/* connective lines between nodes */}
      <g stroke="var(--color-sage-dark)" strokeWidth="1.5">
        <line x1="260" y1="230" x2="110" y2="120" />
        <line x1="260" y1="230" x2="400" y2="110" />
        <line x1="260" y1="230" x2="90" y2="300" />
        <line x1="260" y1="230" x2="410" y2="310" />
        <line x1="260" y1="230" x2="260" y2="380" />
        <line x1="110" y1="120" x2="90" y2="300" />
        <line x1="400" y1="110" x2="410" y2="310" />
      </g>

      {/* scanning ring around the flagged node */}
      <circle
        cx="400"
        cy="110"
        r="34"
        stroke="var(--color-pine)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 110"
          to="360 400 110"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>

      {/* peripheral nodes (healthy resources) */}
      {[
        { cx: 110, cy: 120, label: "IAM" },
        { cx: 90, cy: 300, label: "S3" },
        { cx: 410, cy: 310, label: "VPC" },
        { cx: 260, cy: 380, label: "GH" },
      ].map((node) => (
        <g key={node.label}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="26"
            fill="var(--color-paper)"
            stroke="var(--color-sage-dark)"
            strokeWidth="1.5"
          />
          <text
            x={node.cx}
            y={node.cy + 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--color-muted)"
            letterSpacing="0.05em"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* flagged node (the detected issue) */}
      <circle cx="400" cy="110" r="26" fill="var(--color-coral)" opacity="0.12" />
      <circle cx="400" cy="110" r="20" fill="var(--color-coral)" />
      <path
        d="M400 100v9M400 114v2"
        stroke="var(--color-paper)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* center node (Securiq, the hub) */}
      <circle cx="260" cy="230" r="46" fill="var(--color-pine)" />
      <circle cx="260" cy="230" r="46" fill="var(--color-pine-dark)" opacity="0.15" />
      <path
        d="M260 208c-12 0-22 6-22 6v16c0 14 9 22 22 26 13-4 22-12 22-26v-16s-10-6-22-6Z"
        fill="var(--color-paper)"
      />
      <path
        d="m251 231 6 6 12-13"
        stroke="var(--color-pine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

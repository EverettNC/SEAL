type Props = {
  mark: string;
  color: string;
  size?: "sm" | "md" | "lg";
};

const SIZE = {
  sm: "h-10 w-10 text-xs",
  md: "h-16 w-16 text-sm",
  lg: "h-28 w-28 text-2xl md:h-32 md:w-32 md:text-3xl",
};

export function SealMark({ mark, color, size = "md" }: Props) {
  return (
    <span
      className={`relative inline-grid place-items-center rounded-full font-display tracking-[0.18em] text-fg ${SIZE[size]}`}
      style={{
        background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${color} 35%, #5a221c), #3a1410 62%, #1a0c0a)`,
        boxShadow: `inset 0 0 0 2px color-mix(in oklab, ${color} 45%, #8b3a32), inset 0 -8px 16px rgb(0 0 0 / 0.45)`,
      }}
      aria-hidden="true"
    >
      <span className="absolute inset-[3px] rounded-full border border-fg/15" />
      <span className="relative font-medium">{mark}</span>
    </span>
  );
}

import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-[box-shadow,background-color,color,opacity] duration-150 ease-out disabled:opacity-40",
  {
    variants: {
      tone: {
        wax: "bg-wax text-wax-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        paper: "bg-fg text-bg hover:bg-fg/90",
        line: "border border-line bg-transparent text-fg hover:bg-raised",
        ghost: "text-muted hover:text-fg",
      },
    },
    defaultVariants: { tone: "line" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, tone, type = "button", ...props }: Props) {
  return <button type={type} className={cn(buttonVariants({ tone }), className)} {...props} />;
}

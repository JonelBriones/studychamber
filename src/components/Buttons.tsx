import type { ComponentProps } from "react";

type variant = "primary" | "secondary";
type ButtonProps = {
  variant?: variant;
} & ComponentProps<"button">;

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-void-grey-200 px-2 py-1 rounded-xs" />
  );
}

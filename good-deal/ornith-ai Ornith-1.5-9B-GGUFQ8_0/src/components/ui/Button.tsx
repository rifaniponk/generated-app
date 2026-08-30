import { type ReactNode, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const sizeMap = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variantClasses = {
  primary: "bg-brand-600 text-white shadow-neon hover:bg-brand-700 active:scale-[0.97]",
  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:border-brand-300 hover:bg-brand-50 active:scale-[0.97]",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 active:scale-[0.97]",
};

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  return (
    <button
      className={`btn ${sizeMap[size]} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

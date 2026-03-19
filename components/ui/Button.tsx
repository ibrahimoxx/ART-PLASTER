"use client";

import { forwardRef, ButtonHTMLAttributes, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon = true,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary:
        "bg-primary hover:bg-primary-dark text-text border border-transparent hover:shadow-glow",
      secondary:
        "bg-transparent border border-primary/50 text-primary-light hover:border-primary hover:bg-primary/10",
      ghost:
        "bg-transparent border border-transparent text-text-muted hover:text-text hover:bg-surface-2",
      teal: "bg-teal hover:bg-teal-light text-white border border-transparent",
    };

    const sizeClasses = {
      sm: "px-5 py-2.5 text-xs tracking-[0.1em] rounded-full",
      md: "px-7 py-3.5 text-[0.8125rem] tracking-[0.1em] rounded-full",
      lg: "px-8 py-4 text-sm tracking-[0.12em] rounded-full",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "group relative overflow-hidden inline-flex items-center justify-center gap-2 font-body font-medium uppercase transition-all duration-300",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          (disabled || loading) && "opacity-60 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Shimmer layer */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {loading ? (
          <Loader2 size={14} className="animate-spin" />
        ) : null}

        <span className="relative z-10">{children}</span>

        {icon && !loading && (
          <ChevronRight
            size={14}
            className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

import { forwardRef } from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface OptimizedButtonProps extends ButtonProps {
  /** Ensures minimum touch target size for accessibility */
  touchOptimized?: boolean;
  /** Loading state for async operations */
  loading?: boolean;
  /** Custom aria-label for screen readers */
  ariaLabel?: string;
}

export const OptimizedButton = forwardRef<HTMLButtonElement, OptimizedButtonProps>(
  ({ 
    className, 
    touchOptimized = true, 
    loading = false, 
    ariaLabel,
    children, 
    disabled,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          // Base accessibility styles
          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
          // Touch optimization - minimum 44x44px
          touchOptimized && "min-h-[44px] min-w-[44px]",
          // Loading state
          loading && "cursor-not-allowed opacity-70",
          // Smooth interactions
          "transition-all duration-200 active:scale-95",
          className
        )}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Carregando...</span>
          </div>
        ) : (
          children
        )}
      </Button>
    );
  }
);

OptimizedButton.displayName = "OptimizedButton";
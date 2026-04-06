import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "outlined" | "ghost" | "gradient";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

const cardVariants: Record<CardVariant, string> = {
  elevated: "bg-white dark:bg-slate-800 shadow-soft dark:shadow-none",
  outlined: "bg-white dark:bg-slate-800 border border-border dark:border-slate-700",
  ghost: "bg-transparent dark:bg-transparent",
  gradient: "bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden",
};

const cardHoverVariants: Record<CardVariant, string> = {
  elevated: "hover:shadow-medium hover:-translate-y-1 dark:hover:shadow-none",
  outlined: "hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-soft dark:hover:shadow-none",
  ghost: "hover:bg-white/50 dark:hover:bg-slate-700/50",
  gradient: "hover:shadow-soft dark:hover:shadow-none",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "elevated", hoverable = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl transition-all duration-300",
        cardVariants[variant],
        hoverable && "cursor-pointer",
        hoverable && cardHoverVariants[variant],
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-display text-xl font-semibold leading-none tracking-tight text-foreground dark:text-foreground",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-foreground-muted leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const FeatureCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    title: string;
    description: string;
    accentColor?: "primary" | "secondary" | "accent" | "trust";
  }
>(
  (
    {
      className,
      icon,
      title,
      description,
      accentColor = "primary",
      children,
      ...props
    },
    ref
  ) => {
    const accentGradients = {
      primary: "from-primary-500",
      secondary: "from-secondary-500",
      accent: "from-accent-500",
      trust: "from-trust-500",
    };

    const iconBgColors = {
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      accent: "bg-accent-50",
      trust: "bg-trust-50",
    };

    const iconTextColors = {
      primary: "text-primary-600",
      secondary: "text-secondary-600",
      accent: "text-accent-600",
      trust: "text-trust-600",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 transition-all duration-300 hover:shadow-soft dark:hover:shadow-none",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-5 bg-gradient-to-br",
            accentGradients[accentColor],
            "to-transparent"
          )}
        />

        <div className="relative">
          {icon && (
            <div
              className={cn(
                "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl",
                iconBgColors[accentColor]
              )}
            >
              <div className={iconTextColors[accentColor]}>{icon}</div>
            </div>
          )}
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-foreground-muted leading-relaxed">{description}</p>
          {children}
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

const QuoteCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-3xl bg-white dark:bg-slate-800 p-8 lg:p-12 shadow-soft dark:shadow-none dark:border dark:border-slate-700",
      className
    )}
    {...props}
  >
    <div className="absolute -top-6 left-12">
      <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow-primary">
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>
    {children}
  </div>
));
QuoteCard.displayName = "QuoteCard";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  FeatureCard,
  QuoteCard,
};
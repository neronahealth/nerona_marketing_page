"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ComponentProps<typeof Image> {
  fallback?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.png",
  aspectRatio,
  containerClassName,
  className,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const aspectRatioClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio && aspectRatioClasses[aspectRatio],
        !loaded && "bg-muted animate-pulse",
        containerClassName
      )}
    >
      <Image
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        {...props}
      />
    </div>
  );
}
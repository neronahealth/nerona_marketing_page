"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

// Skeleton component for loading states
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-muted rounded-lg",
        className
      )}
    />
  );
}

export default function Loading() {
  return (
    <main className="min-h-[calc(100vh-5rem)]">
      <Container size="xl" className="py-16 lg:py-24">
        {/* Hero Section Skeleton */}
        <div className="max-w-4xl mb-20">
          {/* Badge skeleton */}
          <Skeleton className="h-10 w-48 rounded-full mb-6" />
          
          {/* Title skeleton */}
          <div className="space-y-4 mb-6">
            <Skeleton className="h-12 w-full md:w-3/4" />
            <Skeleton className="h-12 w-2/3" />
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-3 mb-10">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          
          {/* CTA buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-14 w-40 rounded-lg" />
            <Skeleton className="h-14 w-44 rounded-lg" />
          </div>
          
          {/* Trust badges skeleton */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-32" />
            ))}
          </div>
        </div>

        {/* Feature Grid Skeleton */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-64 mx-auto" />
              <Skeleton className="h-6 w-48 mx-auto" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-6 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Skeleton */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-40 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4 text-center">
                <Skeleton className="h-20 w-20 rounded-full mx-auto" />
                <Skeleton className="h-6 w-32 mx-auto" />
                <Skeleton className="h-4 w-full mx-auto" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Skeleton */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-10 w-24 mx-auto" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Skeleton */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-56 mx-auto mb-4" />
            <Skeleton className="h-6 w-72 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section Skeleton */}
        <div className="text-center py-16 px-8 rounded-3xl bg-gradient-to-br from-primary-500/10 via-background to-background border border-border">
          <Skeleton className="h-10 w-96 mx-auto mb-6" />
          <div className="space-y-2 mb-8">
            <Skeleton className="h-5 w-full max-w-lg mx-auto" />
            <Skeleton className="h-5 w-5/6 max-w-lg mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
        </div>
      </Container>
    </main>
  );
}
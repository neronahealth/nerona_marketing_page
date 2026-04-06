"use client";

import { useState, useEffect } from "react";
import type {
  HomePageContent,
  ForPatientsContent,
  ForDoctorsContent,
  ForHospitalsContent,
  FeaturesPageContent,
  NavigationContent,
  FooterContent,
  Testimonial,
} from "@/content/types";

async function fetchContent<T>(filename: string): Promise<T> {
  const response = await fetch(`/api/content/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to load ${filename}`);
  }
  return response.json();
}

export function useHomeContent() {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<HomePageContent>("home")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useForPatientsContent() {
  const [content, setContent] = useState<ForPatientsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<ForPatientsContent>("for-patients")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useForDoctorsContent() {
  const [content, setContent] = useState<ForDoctorsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<ForDoctorsContent>("for-doctors")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useForHospitalsContent() {
  const [content, setContent] = useState<ForHospitalsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<ForHospitalsContent>("for-hospitals")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useFeaturesContent() {
  const [content, setContent] = useState<FeaturesPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<FeaturesPageContent>("features")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useNavigationContent() {
  const [content, setContent] = useState<NavigationContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<NavigationContent>("navigation")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useFooterContent() {
  const [content, setContent] = useState<FooterContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<FooterContent>("footer")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

export function useTestimonials() {
  const [content, setContent] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent<Testimonial[]>("testimonials")
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}
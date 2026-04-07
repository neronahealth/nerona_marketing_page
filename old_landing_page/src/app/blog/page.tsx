"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

const blogPosts = [
  {
    slug: "understanding-your-symptoms-ai-triage",
    title: "Understanding Your Symptoms: How AI Triage Works",
    excerpt:
      "Learn how our AI-powered symptom analysis helps you understand urgency levels and get the right care faster.",
    category: "Health Tips",
    author: "Dr. Adaeze Okonkwo",
    date: "2026-04-02",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "choosing-right-hospital-nigeria",
    title: "How to Choose the Right Hospital in Nigeria",
    excerpt:
      "A guide to finding quality healthcare facilities. What to look for, questions to ask, and red flags to avoid.",
    category: "Patient Guide",
    author: "Chioma Adebayo",
    date: "2026-03-28",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "digital-medical-records-benefits",
    title: "5 Benefits of Digital Medical Records",
    excerpt:
      "Why keeping your health history in one secure place matters for better diagnosis and coordinated care.",
    category: "Health Tech",
    author: "Dr. Emeka Eze",
    date: "2026-03-25",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: "emergency-preparedness-guide",
    title: "Emergency Preparedness: What Every Nigerian Should Know",
    excerpt:
      "Essential information about when to call emergency services and what to do while waiting for help.",
    category: "Emergency",
    author: "Fatima Ibrahim",
    date: "2026-03-20",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "telehealth-future-nigeria",
    title: "The Future of Telehealth in Nigeria",
    excerpt:
      "How video consultations and digital health tools are expanding access to quality care across the country.",
    category: "Health Tech",
    author: "Dr. Adaeze Okonkwo",
    date: "2026-03-15",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "managing-chronic-conditions",
  title: "Managing Chronic Conditions with NeronaHealth",
    excerpt:
      "Tips for using our platform to track medications, appointments, and health metrics for long-term care.",
    category: "Patient Guide",
    author: "Dr. Emeka Eze",
    date: "2026-03-10",
    readTime: "5 min",
    featured: false,
  },
];

const categories = ["All", "Health Tips", "Patient Guide", "Health Tech", "Emergency"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold"
            >
              Health <span className="text-primary">Insights</span> & Updates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-fluid-lg text-foreground-muted"
            >
              Expert health tips, patient guides, and the latest on healthcare innovation in Nigeria.
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <h2 className="font-display text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-foreground-muted">
                          {post.readTime} read
                        </span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-between text-sm text-foreground-muted">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-NG", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

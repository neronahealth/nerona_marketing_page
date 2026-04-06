"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-fluid-lg text-foreground-muted"
            >
              Have questions about NeronaHealth? Want to partner with us? We&apos;re here
              to help. Reach out and we&apos;ll respond as soon as possible.
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32">
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-foreground-muted">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        For general inquiries
                      </p>
                      <a
                        href="mailto:hello@neronahealth.com"
                        className="text-primary hover:underline"
                      >
                        hello@neronahealth.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        Mon-Fri, 8am-6pm WAT
                      </p>
                      <a href="tel:+2347000000000" className="text-secondary hover:underline">
                        +234 700 000 0000
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        Our headquarters
                      </p>
                      <address className="not-italic text-foreground-muted">
                        5 Akin Adesola Street<br />
                        Victoria Island, Lagos<br />
                        Nigeria
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-trust" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emergency Support</h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        24/7 for app users
                      </p>
                      <a
                        href="tel:+2347000000001"
                        className="text-trust hover:underline"
                      >
                        +234 700 000 0001
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
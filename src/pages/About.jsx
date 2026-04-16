import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, ShieldCheck, BadgeCheck, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';

export default function About() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', profession: '', note: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const inputCls = "h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring w-full";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.integrations.Core.SendEmail({
      to: 'info@neuronahealth.com',
      subject: `New message from ${form.name}`,
      body: `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProfession: ${form.profession}\n\nMessage:\n${form.note}`,
    });
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-16">

      {/* About Neurona */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-4">About Neurona</h1>
          <p className="text-xl font-semibold text-primary mb-3">Connecting you to care, instantly.</p>
          <p className="text-muted-foreground leading-relaxed">
            Neurona is building the infrastructure that makes healthcare access faster, simpler, and more reliable, starting in Lagos and expanding across Africa.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
          <img
            src="https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/11af0c42b_neurona_image_2.webp"
            alt="Clinical environment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">What We Do</h2>
        <p className="text-muted-foreground leading-relaxed">
          Neurona connects patients to hospitals and ambulance providers in real time.
          We help people find care quickly, request appointments, and access emergency services, while enabling providers to reach patients more efficiently.
        </p>
      </section>

      {/* Problem & Solution */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">The Problem & Our Solution</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Accessing healthcare can be slow and unpredictable. Patients often don't know where to go or who is available, especially in urgent situations.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Neurona solves this by creating a connected network of trusted providers, enabling faster discovery, better coordination, and real-time access to care.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To make access to healthcare seamless, reliable, and immediate.
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-5">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Reliability', desc: 'Fast and consistent access to care.', Icon: ShieldCheck },
            { title: 'Trust', desc: 'Verified providers and dependable systems.', Icon: BadgeCheck },
            { title: 'Accessibility', desc: 'Healthcare that\'s easy to reach.', Icon: Globe },
            { title: 'Efficiency', desc: 'Reduced delays and better coordination.', Icon: Zap },
          ].map(({ title, desc, Icon }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@neuronahealth.com</span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Lagos, Nigeria</span>
        </div>
      </section>

      {/* Join Us */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-2">Join Us</h2>
        <p className="text-muted-foreground mb-6">Be part of a better way to access healthcare.</p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button
            variant="outline"
            className="rounded-xl gap-2"
            onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Button>
          <Link to="/for-hospitals">
            <Button className="rounded-xl gap-2 shadow-lg shadow-primary/20">
              Partner with us <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Get in Touch Form */}
        <div id="get-in-touch" className="bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-2xl">
          <h3 className="text-xl font-bold text-foreground mb-1">Get in Touch</h3>
          <p className="text-sm text-muted-foreground mb-6">We'd love to hear from you.</p>

          {sent ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-primary">Message sent! ✓</p>
              <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Name *</label>
                <input className={inputCls} value={form.name} onChange={e => set('name', e.target.value)} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input className={inputCls} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Email Address *</label>
                <input className={inputCls} type="email" value={form.email} onChange={e => set('email', e.target.value)} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Your Profession</label>
                <input className={inputCls} placeholder="e.g. Doctor, Patient, Admin" value={form.profession} onChange={e => set('profession', e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">A Note to Us</label>
                <textarea
                  rows={4}
                  className="px-3 py-2 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring w-full resize-none"
                  value={form.note}
                  onChange={e => set('note', e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full rounded-xl gap-2 shadow-lg shadow-primary/20" disabled={loading}>
                {loading ? 'Sending…' : 'Send Message'} {!loading && <ArrowRight className="w-4 h-4" />}
              </Button>
              <p className="text-xs text-center text-muted-foreground">We'll contact you within 24 hours.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
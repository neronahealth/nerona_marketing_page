import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Palette, Type, Box, Zap, Heart, Users, Building2,
  Calendar, Siren, Brain, FileText, Pill, Activity,
  Bell, BarChart2, Shield, CheckCircle, ChevronRight,
  Layers, Grid, Sliders
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Design System Components
import UrgencyBadge from '../components/design-system/UrgencyBadge';
import AppointmentStatusBadge from '../components/design-system/AppointmentStatusBadge';
import EmergencyStatusIndicator from '../components/design-system/EmergencyStatusIndicator';
import PatientCard from '../components/design-system/PatientCard';
import DoctorCard from '../components/design-system/DoctorCard';
import AppointmentCard from '../components/design-system/AppointmentCard';
import HospitalCard from '../components/design-system/HospitalCard';
import VitalSignsDisplay from '../components/design-system/VitalSignsDisplay';
import TriageResultCard from '../components/design-system/TriageResultCard';
import EmergencyRequestCard from '../components/design-system/EmergencyRequestCard';
import MedicalRecordCard from '../components/design-system/MedicalRecordCard';
import PrescriptionCard from '../components/design-system/PrescriptionCard';
import SymptomInput from '../components/design-system/SymptomInput';
import DashboardStatsCard from '../components/design-system/DashboardStatsCard';
import NotificationItem from '../components/design-system/NotificationItem';
import AvatarGroup from '../components/design-system/AvatarGroup';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Grid },
  { id: 'tokens', label: 'Design Tokens', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'badges', label: 'Badges & Status', icon: Layers },
  { id: 'cards', label: 'Healthcare Cards', icon: Box },
  { id: 'vitals', label: 'Vitals & Triage', icon: Activity },
  { id: 'emergency', label: 'Emergency', icon: Siren },
  { id: 'records', label: 'Records & Rx', icon: FileText },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
  { id: 'forms', label: 'AI Triage Input', icon: Brain },
];

const Section = ({ title, subtitle, children }) => (
  <div className="mb-16">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-foreground font-jakarta">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4 border-b border-border pb-2">{title}</h3>
    {children}
  </div>
);

const ColorSwatch = ({ name, value, hsl, textDark = false }) => (
  <div className="flex flex-col gap-1">
    <div
      className="h-16 rounded-xl shadow-sm border border-black/5"
      style={{ backgroundColor: value }}
    />
    <p className={`text-xs font-semibold ${textDark ? 'text-foreground' : 'text-foreground'}`}>{name}</p>
    <p className="text-[10px] text-muted-foreground font-mono">{hsl}</p>
  </div>
);

const CodeBlock = ({ code }) => (
  <div className="bg-foreground/95 rounded-xl p-4 overflow-x-auto">
    <pre className="text-xs text-green-300 font-mono leading-relaxed">{code}</pre>
  </div>
);

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState('overview');

  const fadeIn = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-ai-triage/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              NeuronaHealth Design System v1.0
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground font-jakarta tracking-tight mb-4">
              Neurona UI
              <span className="text-primary"> Component Library</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive, production-grade design system for the NeuronaHealth platform.
              Built for patients, doctors, hospital admins, and emergency services.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                WCAG 2.1 AA Accessible
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                HIPAA-Aware Design
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-amber-500" />
                Mobile-First Responsive
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="w-4 h-4 text-violet-500" />
                AI-Integrated Patterns
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide py-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'text-primary border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div key={activeTab} {...fadeIn}>

          {/* ===== OVERVIEW ===== */}
          {activeTab === 'overview' && (
            <div>
              <Section title="Design System Overview" subtitle="All components at a glance — click a tab above to explore in depth.">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {tabs.slice(1).map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className="group p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/25 hover:shadow-elevation-2 transition-all text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1 font-jakarta">{tab.label}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          View components <ChevronRight className="w-3 h-3" />
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Section>

              <Section title="Brand Principles" subtitle="The values that guide every design decision.">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: 'Trustworthy', desc: 'Consistent, clear, honest. Healthcare demands reliability.', color: 'text-primary', bg: 'bg-primary/10', emoji: '🛡️' },
                    { title: 'Empathetic', desc: 'Patients are vulnerable. Every interaction should feel caring.', color: 'text-violet-600', bg: 'bg-violet-50', emoji: '💙' },
                    { title: 'Urgent-Aware', desc: 'Emergency vs routine states are visually distinct.', color: 'text-red-600', bg: 'bg-red-50', emoji: '⚡' },
                    { title: 'Intelligent', desc: 'AI guidance feels helpful, not robotic or cold.', color: 'text-amber-600', bg: 'bg-amber-50', emoji: '🤖' },
                  ].map(p => (
                    <div key={p.title} className={`p-5 rounded-2xl ${p.bg} border border-current/10`}>
                      <p className="text-2xl mb-3">{p.emoji}</p>
                      <h3 className={`text-sm font-bold ${p.color} mb-1 font-jakarta`}>{p.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="App Coverage" subtitle="This system powers all NeuronaHealth touchpoints.">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: 'Landing Page', url: 'neuronahealth.com', role: 'Marketing', icon: '🌐', status: 'active' },
                    { name: 'Patient App', url: 'app.neuronahealth.com', role: 'Patient Portal', icon: '👤', status: 'active' },
                    { name: 'Doctor Portal', url: 'doctor.neuronahealth.com', role: 'Clinician', icon: '🩺', status: 'active' },
                    { name: 'Hospital Admin', url: 'hospital.neuronahealth.com', role: 'Administrator', icon: '🏥', status: 'active' },
                    { name: 'Ambulance Provider', url: 'ambulance.neuronahealth.com', role: 'EMS', icon: '🚑', status: 'active' },
                    { name: 'Platform Admin', url: 'admin.neuronahealth.com', role: 'Super Admin', icon: '⚙️', status: 'active' },
                    { name: 'Patient Mobile', url: 'iOS & Android', role: 'Flutter App', icon: '📱', status: 'active' },
                    { name: 'Driver App', url: 'iOS & Android', role: 'Flutter App', icon: '🚗', status: 'active' },
                  ].map(app => (
                    <div key={app.name} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60">
                      <span className="text-2xl">{app.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{app.name}</p>
                        <p className="text-xs text-muted-foreground">{app.url}</p>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">{app.role}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          )}

          {/* ===== DESIGN TOKENS ===== */}
          {activeTab === 'tokens' && (
            <div>
              <Section title="Design Tokens" subtitle="The visual foundation — extracted from NeuronaHealth brand guidelines.">
                <SubSection title="Brand Colors">
                  <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
                    <ColorSwatch name="Primary 50" value="hsl(168,60%,96%)" hsl="hsl(168,60%,96%)" />
                    <ColorSwatch name="Primary 100" value="hsl(168,60%,90%)" hsl="hsl(168,60%,90%)" />
                    <ColorSwatch name="Primary 300" value="hsl(168,60%,60%)" hsl="hsl(168,60%,60%)" />
                    <ColorSwatch name="Primary 500" value="hsl(168,60%,32%)" hsl="hsl(168,60%,32%)" />
                    <ColorSwatch name="Primary 700" value="hsl(168,60%,22%)" hsl="hsl(168,60%,22%)" />
                    <ColorSwatch name="Primary 900" value="hsl(168,60%,12%)" hsl="hsl(168,60%,12%)" />
                    <ColorSwatch name="Accent" value="hsl(12,80%,58%)" hsl="hsl(12,80%,58%)" />
                  </div>
                </SubSection>

                <SubSection title="Healthcare Semantic Colors">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: 'Emergency', value: '#dc2626', label: 'Critical / Life-threatening', sub: 'Red 600' },
                      { name: 'Urgent', value: '#f97316', label: 'Urgent / High Priority', sub: 'Orange 500' },
                      { name: 'Routine', value: '#22c55e', label: 'Routine / Stable', sub: 'Green 500' },
                      { name: 'AI Triage', value: '#7c3aed', label: 'AI-Powered Features', sub: 'Violet 600' },
                    ].map(c => (
                      <div key={c.name} className="flex flex-col gap-2">
                        <div className="h-20 rounded-xl" style={{ backgroundColor: c.value }} />
                        <div>
                          <p className="text-sm font-bold text-foreground">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.label}</p>
                          <p className="text-[10px] text-muted-foreground/60 font-mono mt-0.5">{c.sub} · {c.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Neutral Scale">
                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                      <div key={shade} className="flex flex-col gap-1">
                        <div
                          className="h-10 rounded-lg border border-black/5"
                          style={{ backgroundColor: `hsl(200, 10%, ${100 - shade / 10}%)` }}
                        />
                        <p className="text-[10px] text-muted-foreground text-center">{shade}</p>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Spacing Scale">
                  <div className="flex items-end gap-3 overflow-x-auto pb-2">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map(n => (
                      <div key={n} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                        <div className="bg-primary rounded" style={{ width: 4, height: n * 4 }} />
                        <p className="text-[10px] text-muted-foreground font-mono">{n * 4}px</p>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Border Radius">
                  <div className="flex items-center gap-6 flex-wrap">
                    {[
                      { name: 'sm', value: '0.5rem', class: 'rounded-sm' },
                      { name: 'md', value: '0.625rem', class: 'rounded-md' },
                      { name: 'lg (default)', value: '0.75rem', class: 'rounded-lg' },
                      { name: 'xl', value: '0.75rem', class: 'rounded-xl' },
                      { name: '2xl', value: '1rem', class: 'rounded-2xl' },
                      { name: '3xl', value: '1.5rem', class: 'rounded-3xl' },
                      { name: 'full', value: '9999px', class: 'rounded-full' },
                    ].map(r => (
                      <div key={r.name} className="flex flex-col items-center gap-2">
                        <div className={`w-16 h-16 bg-primary/15 border-2 border-primary/30 ${r.class}`} />
                        <p className="text-[10px] text-muted-foreground text-center">{r.name}</p>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Shadows">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      { name: 'elevation-1', cls: 'shadow-elevation-1' },
                      { name: 'elevation-2', cls: 'shadow-elevation-2' },
                      { name: 'elevation-3', cls: 'shadow-elevation-3' },
                      { name: 'elevation-4', cls: 'shadow-elevation-4' },
                      { name: 'glow-primary', cls: 'shadow-glow-primary' },
                    ].map(s => (
                      <div key={s.name} className={`h-20 bg-card rounded-2xl ${s.cls} flex items-center justify-center`}>
                        <p className="text-xs text-muted-foreground font-mono">{s.name}</p>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="CSS Custom Properties">
                  <CodeBlock code={`/* index.css — NeuronaHealth Design Tokens */
:root {
  --primary: 168 60% 32%;          /* Brand teal-green */
  --accent: 12 80% 58%;            /* Coral orange */
  --emergency: 0 84% 55%;          /* Critical red */
  --urgent: 25 95% 53%;            /* Urgent orange */
  --routine: 142 71% 45%;          /* Routine green */
  --ai-triage: 263 70% 58%;        /* AI violet */
  --background: 150 10% 98%;
  --foreground: 200 25% 10%;
  --radius: 0.75rem;               /* Base border radius */
}`} />
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== TYPOGRAPHY ===== */}
          {activeTab === 'typography' && (
            <div>
              <Section title="Typography" subtitle="Two complementary typefaces for a modern, trustworthy medical feel.">
                <SubSection title="Font Families">
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-card border border-border rounded-2xl">
                      <p className="text-xs text-muted-foreground mb-3 font-mono">font-inter — Body & UI</p>
                      <p className="text-4xl font-normal text-foreground font-inter">Aa Bb Cc</p>
                      <p className="text-sm text-muted-foreground mt-2 font-inter leading-relaxed">
                        Inter is the primary typeface for body copy, labels, navigation, and all UI elements.
                        Exceptional legibility at small sizes.
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-3 font-mono">weights: 300 400 500 600 700 800 900</p>
                    </div>
                    <div className="p-6 bg-card border border-border rounded-2xl">
                      <p className="text-xs text-muted-foreground mb-3 font-mono">font-jakarta — Headings & Display</p>
                      <p className="text-4xl font-bold text-foreground font-jakarta">Aa Bb Cc</p>
                      <p className="text-sm text-muted-foreground mt-2 font-inter leading-relaxed">
                        Plus Jakarta Sans brings warmth and character to headings and prominent text.
                        Slightly condensed for impactful display.
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-3 font-mono">weights: 400 500 600 700 800</p>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Type Scale">
                  <div className="space-y-4 bg-card border border-border rounded-2xl p-6">
                    {[
                      { size: '6xl', px: '60px', sample: 'AI-Powered Healthcare', weight: 'extrabold' },
                      { size: '5xl', px: '48px', sample: 'Find Care Now', weight: 'bold' },
                      { size: '4xl', px: '36px', sample: 'Your Health Dashboard', weight: 'bold' },
                      { size: '3xl', px: '30px', sample: 'Appointments Today', weight: 'semibold' },
                      { size: '2xl', px: '24px', sample: 'Patient Summary', weight: 'semibold' },
                      { size: 'xl', px: '20px', sample: 'Vital Signs Overview', weight: 'medium' },
                      { size: 'lg', px: '18px', sample: 'Prescription Details', weight: 'normal' },
                      { size: 'base', px: '16px', sample: 'Lorem ipsum dolor sit amet consectetur.', weight: 'normal' },
                      { size: 'sm', px: '14px', sample: 'Supporting description text and labels.', weight: 'normal' },
                      { size: 'xs', px: '12px', sample: 'Metadata, timestamps, secondary labels.', weight: 'normal' },
                    ].map(t => (
                      <div key={t.size} className="flex items-baseline gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
                        <span className="w-16 text-[10px] font-mono text-muted-foreground flex-shrink-0">text-{t.size}</span>
                        <span className="w-12 text-[10px] text-muted-foreground/60 flex-shrink-0">{t.px}</span>
                        <p className={`font-jakarta text-${t.size} font-${t.weight} text-foreground leading-tight`}>
                          {t.sample}
                        </p>
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Healthcare-Specific Text Patterns">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-card border border-border rounded-2xl space-y-3">
                      <p className="section-label">PHI Indicator</p>
                      <p className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 inline-block">🔒 Protected Health Info</p>
                      <p className="text-xs font-semibold text-amber-600 flex items-center gap-1.5">⚠️ Critical Result — Action Required</p>
                      <p className="text-xs font-mono text-muted-foreground">Patient ID: NH-00234-KEN</p>
                      <p className="text-xs italic text-muted-foreground">Consult a healthcare professional before making decisions.</p>
                    </div>
                    <div className="p-5 bg-card border border-border rounded-2xl space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Specialist</p>
                      <p className="text-2xl font-bold font-jakarta text-foreground">Dr. Amina Osei</p>
                      <p className="text-sm font-semibold text-primary">Interventional Cardiologist</p>
                      <p className="text-xs text-muted-foreground">MBChB, FRCS · 12 years experience</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Verified</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">Available Today</span>
                      </div>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== BADGES & STATUS ===== */}
          {activeTab === 'badges' && (
            <div>
              <Section title="Badges & Status Indicators" subtitle="Visual language for urgency, status, and classification in healthcare.">
                <SubSection title="Urgency Level Badges">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <UrgencyBadge level="routine" />
                    <UrgencyBadge level="urgent" />
                    <UrgencyBadge level="emergency" />
                    <UrgencyBadge level="ai" />
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <UrgencyBadge level="routine" size="sm" />
                    <UrgencyBadge level="urgent" size="sm" />
                    <UrgencyBadge level="emergency" size="sm" />
                    <UrgencyBadge level="ai" size="sm" />
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <UrgencyBadge level="routine" size="lg" showDot />
                    <UrgencyBadge level="urgent" size="lg" showDot />
                    <UrgencyBadge level="emergency" size="lg" showDot />
                    <UrgencyBadge level="ai" size="lg" showDot />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <UrgencyBadge level="emergency" customLabel="Chest Pain Protocol" />
                    <UrgencyBadge level="urgent" customLabel="Within 2 Hours" />
                    <UrgencyBadge level="routine" customLabel="Elective" />
                  </div>
                </SubSection>

                <SubSection title="Appointment Status Badges">
                  <div className="flex flex-wrap gap-3">
                    {['scheduled', 'confirmed', 'in-progress', 'completed', 'cancelled', 'no-show', 'pending'].map(s => (
                      <AppointmentStatusBadge key={s} status={s} />
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Specialty Badges (Quick Chips)">
                  <div className="flex flex-wrap gap-2">
                    {['Cardiology', 'Oncology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Psychiatry', 'Radiology', 'Emergency Medicine', 'General Surgery'].map(s => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{s}</span>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="Button Variants">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Button>Primary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Danger</Button>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <button className="btn-emergency">
                      <Siren className="w-4 h-4" />
                      Request Emergency
                    </button>
                    <button className="btn-ai-triage">
                      <Brain className="w-4 h-4" />
                      Start AI Triage
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                    <Button className="gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Loading...
                    </Button>
                  </div>
                </SubSection>

                <SubSection title="Notification Items">
                  <div className="max-w-md space-y-2">
                    <NotificationItem notification={{ type: 'emergency', title: 'Emergency Alert', message: 'Ambulance dispatched to Westlands. ETA 8 minutes.', time: '2 min ago', isRead: false }} />
                    <NotificationItem notification={{ type: 'appointment', title: 'Appointment Confirmed', message: 'Your appointment with Dr. Osei is confirmed for Dec 15 at 10:30 AM.', time: '1 hour ago', isRead: false }} />
                    <NotificationItem notification={{ type: 'info', title: 'AI Triage Complete', message: 'Your symptom assessment is ready. Review your results.', time: '3 hours ago', isRead: true }} />
                    <NotificationItem notification={{ type: 'success', title: 'Prescription Ready', message: 'Your prescription for Atenolol 50mg has been processed.', time: 'Yesterday', isRead: true }} />
                  </div>
                </SubSection>

                <SubSection title="Avatar Group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <AvatarGroup users={['John', 'Amina', 'David', 'Sarah', 'Peter']} size="sm" />
                      <AvatarGroup users={[{ name: 'John Kamau' }, { name: 'Amina Osei' }, { name: 'David Mwangi' }, { name: 'Sarah Njeri' }]} size="md" />
                      <AvatarGroup users={['A', 'B', 'C', 'D', 'E', 'F']} size="lg" max={3} />
                    </div>
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== HEALTHCARE CARDS ===== */}
          {activeTab === 'cards' && (
            <div>
              <Section title="Healthcare Cards" subtitle="Rich information cards tailored for each stakeholder.">
                <SubSection title="Patient Card">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <PatientCard patient={{ name: 'John Kamau', age: 34, urgencyLevel: 'routine', condition: 'Hypertension Follow-up' }} />
                    <PatientCard patient={{ name: 'Sarah Njeri', age: 28, urgencyLevel: 'urgent', condition: 'Chest Pain — Evaluation Needed' }} />
                    <PatientCard patient={{ name: 'David Ochieng', age: 67, urgencyLevel: 'emergency', condition: 'Post-MI Monitoring' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Compact variant:</p>
                  <div className="max-w-sm space-y-2">
                    <PatientCard compact patient={{ name: 'John Kamau', age: 34, patientId: 'NH-00234', urgencyLevel: 'routine' }} />
                    <PatientCard compact patient={{ name: 'Sarah Njeri', age: 28, patientId: 'NH-00891', urgencyLevel: 'urgent' }} />
                  </div>
                </SubSection>

                <SubSection title="Doctor Card">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <DoctorCard doctor={{ name: 'Dr. Amina Osei', specialty: 'Cardiologist', city: 'Nairobi', rating: 4.8, availableToday: true }} />
                    <DoctorCard doctor={{ name: 'Dr. James Kiptoo', specialty: 'Neurologist', city: 'Kampala', rating: 4.6, availableToday: false, virtualAvailable: true }} />
                    <DoctorCard doctor={{ name: 'Dr. Fatima Hassan', specialty: 'Pediatrician', city: 'Lagos', rating: 4.9, availableToday: true, nextSlot: 'Today 11:00 AM' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Horizontal variant:</p>
                  <div className="max-w-lg space-y-2">
                    <DoctorCard horizontal doctor={{ name: 'Dr. Amina Osei', specialty: 'Cardiologist', city: 'Nairobi', rating: 4.8 }} />
                    <DoctorCard horizontal doctor={{ name: 'Dr. James Kiptoo', specialty: 'Neurologist', city: 'Kampala', rating: 4.6 }} />
                  </div>
                </SubSection>

                <SubSection title="Hospital Card">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <HospitalCard hospital={{ name: 'Aga Khan University Hospital', city: 'Nairobi', rating: 4.8, distance: '2.4 km', emergencyCapable: true, departments: ['Cardiology', 'Oncology', 'Neurology', 'ICU'] }} />
                    <HospitalCard hospital={{ name: 'Kenyatta National Hospital', city: 'Nairobi', rating: 4.2, distance: '5.1 km', emergencyCapable: true, departments: ['General Surgery', 'Pediatrics', 'Obstetrics'] }} />
                    <HospitalCard hospital={{ name: 'Nairobi Hospital', city: 'Nairobi', rating: 4.5, distance: '3.8 km', emergencyCapable: false, departments: ['Orthopedics', 'Dermatology', 'Psychiatry'] }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Horizontal variant:</p>
                  <div className="max-w-lg space-y-2">
                    <HospitalCard horizontal hospital={{ name: 'Aga Khan University Hospital', city: 'Nairobi', rating: 4.8, distance: '2.4 km', emergencyCapable: true }} />
                  </div>
                </SubSection>

                <SubSection title="Appointment Card">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <AppointmentCard appointment={{ doctorName: 'Dr. Amina Osei', specialty: 'Cardiology', date: 'Dec 15, 2024', time: '10:30 AM', status: 'confirmed', type: 'in-person' }} />
                    <AppointmentCard appointment={{ doctorName: 'Dr. James Kiptoo', specialty: 'Neurology', date: 'Dec 18, 2024', time: '2:00 PM', status: 'scheduled', type: 'virtual' }} />
                    <AppointmentCard appointment={{ doctorName: 'Dr. Fatima Hassan', specialty: 'Pediatrics', date: 'Nov 20, 2024', time: '9:00 AM', status: 'completed', type: 'in-person' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Compact variant:</p>
                  <div className="max-w-sm space-y-2">
                    <AppointmentCard compact appointment={{ doctorName: 'Dr. Amina Osei', date: 'Dec 15', time: '10:30 AM', status: 'confirmed' }} />
                    <AppointmentCard compact appointment={{ doctorName: 'Dr. James Kiptoo', date: 'Dec 18', time: '2:00 PM', status: 'scheduled' }} />
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== VITALS & TRIAGE ===== */}
          {activeTab === 'vitals' && (
            <div>
              <Section title="Vitals & AI Triage" subtitle="Clinical data display and AI-powered symptom assessment.">
                <SubSection title="Vital Signs Display — All Normal">
                  <VitalSignsDisplay
                    values={{ heartRate: 72, systolic: 118, temperature: 36.8, oxygenSat: 98, respRate: 16 }}
                    trends={{ heartRate: 'stable', systolic: 'down', temperature: 'stable', oxygenSat: 'up', respRate: 'stable' }}
                  />
                </SubSection>
                <SubSection title="Vital Signs Display — Mixed States">
                  <VitalSignsDisplay
                    values={{ heartRate: 112, systolic: 158, temperature: 38.9, oxygenSat: 91, respRate: 24 }}
                    trends={{ heartRate: 'up', systolic: 'up', temperature: 'up', oxygenSat: 'down', respRate: 'up' }}
                  />
                </SubSection>
                <SubSection title="Compact Vital Signs">
                  <div className="max-w-md">
                    <VitalSignsDisplay
                      compact
                      values={{ heartRate: 72, systolic: 118, temperature: 36.8 }}
                    />
                  </div>
                </SubSection>

                <SubSection title="AI Triage Result Cards">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <TriageResultCard result={{ urgencyLevel: 'urgent', symptoms: ['Chest Pain', 'Shortness of Breath'], assessment: 'Possible cardiac event. Immediate evaluation recommended.', confidence: 'high', specialty: 'Cardiology' }} />
                    <TriageResultCard result={{ urgencyLevel: 'routine', symptoms: ['Headache', 'Fatigue', 'Runny nose'], assessment: 'Symptoms consistent with upper respiratory infection. Rest and hydration advised.', confidence: 'high', specialty: 'General Practice' }} />
                    <TriageResultCard result={{ urgencyLevel: 'emergency', symptoms: ['Sudden severe headache', 'Confusion', 'Neck stiffness'], assessment: 'Symptoms may indicate serious neurological event. Immediate emergency care required.', confidence: 'medium', specialty: 'Neurology' }} />
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== EMERGENCY ===== */}
          {activeTab === 'emergency' && (
            <div>
              <Section title="Emergency Components" subtitle="High-visibility, time-critical UI patterns for emergency services.">
                <SubSection title="Emergency Request Cards">
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <EmergencyRequestCard request={{ requestId: 'EMR-0012', emergencyType: 'Cardiac Arrest', location: 'Westlands, Nairobi', status: 'en-route', priority: 'critical', eta: '~8 min', driverName: 'James Otieno', ambulanceId: 'AMB-04' }} />
                    <EmergencyRequestCard request={{ requestId: 'EMR-0013', emergencyType: 'Road Accident', location: 'Thika Superhighway Km 14', status: 'dispatched', priority: 'high', eta: '~15 min', driverName: 'Peter Mwangi', ambulanceId: 'AMB-07' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Compact variant:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <EmergencyRequestCard compact request={{ requestId: 'EMR-0012', emergencyType: 'Cardiac Arrest', location: 'Westlands', priority: 'critical' }} />
                    <EmergencyRequestCard compact request={{ requestId: 'EMR-0013', emergencyType: 'Accident', location: 'Thika Rd', priority: 'high' }} />
                    <EmergencyRequestCard compact request={{ requestId: 'EMR-0014', emergencyType: 'Stroke', location: 'Kilimani', priority: 'medium' }} />
                  </div>
                </SubSection>

                <SubSection title="Emergency Status Indicator — All States">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['received', 'dispatched', 'en-route', 'on-scene', 'transporting', 'completed'].map(s => (
                      <div key={s}>
                        <p className="text-xs text-muted-foreground mb-1 font-mono">{s}</p>
                        <EmergencyStatusIndicator status={s} eta={s !== 'completed' ? '~8 min' : null} />
                      </div>
                    ))}
                  </div>
                </SubSection>

                <SubSection title="One-Tap Emergency Activation">
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-red-50 border-2 border-red-200 rounded-2xl">
                    <button className="btn-emergency text-base py-4 px-8 rounded-2xl animate-emergency-pulse">
                      <Siren className="w-6 h-6" />
                      REQUEST EMERGENCY
                    </button>
                    <div className="text-sm text-red-700 text-center sm:text-left">
                      <p className="font-bold">One-tap activation</p>
                      <p className="text-xs text-red-600 mt-1">Automatically shares your GPS location and notifies the nearest ambulance and hospital.</p>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== RECORDS & PRESCRIPTIONS ===== */}
          {activeTab === 'records' && (
            <div>
              <Section title="Medical Records & Prescriptions" subtitle="Secure display of protected health information.">
                <SubSection title="Medical Record Cards">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <MedicalRecordCard record={{ type: 'consultation', title: 'Cardiology Consultation', date: 'Nov 20, 2024', doctor: 'Dr. Amina Osei', facility: 'Aga Khan Hospital', summary: 'Elevated BP (158/92). Started on Atenolol 50mg OD.' }} />
                    <MedicalRecordCard record={{ type: 'lab', title: 'Full Blood Count', date: 'Nov 18, 2024', doctor: 'Dr. Njeru Kamau', facility: 'Pathcare Kenya', summary: 'Hemoglobin 11.2 g/dL — Mild anemia. Iron supplements recommended.' }} />
                    <MedicalRecordCard record={{ type: 'imaging', title: 'Chest X-Ray', date: 'Nov 15, 2024', doctor: 'Dr. Aisha Wangari', facility: 'Nairobi Radiology', summary: 'No acute pulmonary pathology. Mild cardiomegaly noted.' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Compact list variant:</p>
                  <div className="max-w-lg space-y-2">
                    <MedicalRecordCard compact record={{ type: 'consultation', title: 'Cardiology Consultation', date: 'Nov 20, 2024', doctor: 'Dr. Amina Osei' }} />
                    <MedicalRecordCard compact record={{ type: 'lab', title: 'Full Blood Count', date: 'Nov 18, 2024', doctor: 'Dr. Njeru' }} />
                    <MedicalRecordCard compact record={{ type: 'prescription', title: 'Atenolol 50mg Prescription', date: 'Nov 20, 2024', doctor: 'Dr. Amina Osei' }} />
                  </div>
                </SubSection>

                <SubSection title="Prescription Cards">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <PrescriptionCard prescription={{ medicationName: 'Atenolol', dosage: '50mg', frequency: 'once-daily', duration: '30 days', prescribedBy: 'Dr. Amina Osei', refillsLeft: 2, isActive: true }} />
                    <PrescriptionCard prescription={{ medicationName: 'Metformin', dosage: '500mg', frequency: 'twice-daily', duration: '90 days', prescribedBy: 'Dr. Kiptoo', refillsLeft: 0, isActive: true }} />
                    <PrescriptionCard prescription={{ medicationName: 'Amoxicillin', dosage: '250mg', frequency: 'three-daily', duration: '7 days', prescribedBy: 'Dr. Hassan', refillsLeft: 0, isActive: false }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Compact variant:</p>
                  <div className="max-w-sm space-y-2">
                    <PrescriptionCard compact prescription={{ medicationName: 'Atenolol', dosage: '50mg', frequency: 'once-daily', isActive: true }} />
                    <PrescriptionCard compact prescription={{ medicationName: 'Metformin', dosage: '500mg', frequency: 'twice-daily', isActive: true }} />
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== DASHBOARD ===== */}
          {activeTab === 'dashboard' && (
            <div>
              <Section title="Dashboard Patterns" subtitle="Analytics and summary views for all portal types.">
                <SubSection title="Patient Dashboard Stats">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <DashboardStatsCard title="Upcoming Appointments" value="3" icon={Calendar} iconBg="bg-blue-50" iconColor="text-blue-600" change={50} trend="up" changeLabel="vs last month" />
                    <DashboardStatsCard title="Active Prescriptions" value="2" icon={Pill} iconBg="bg-green-50" iconColor="text-green-600" />
                    <DashboardStatsCard title="Medical Records" value="14" icon={FileText} iconBg="bg-violet-50" iconColor="text-violet-600" change={7} trend="up" changeLabel="2 new this month" />
                    <DashboardStatsCard title="AI Triages Done" value="5" icon={Brain} iconBg="bg-amber-50" iconColor="text-amber-500" change={25} trend="up" changeLabel="vs last month" />
                  </div>
                </SubSection>

                <SubSection title="Hospital Admin Stats">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <DashboardStatsCard title="Total Patients" value="2,847" icon={Users} iconBg="bg-primary/10" iconColor="text-primary" change={12} trend="up" changeLabel="vs last month" />
                    <DashboardStatsCard title="Today's Appointments" value="184" icon={Calendar} iconBg="bg-blue-50" iconColor="text-blue-600" change={8} trend="up" />
                    <DashboardStatsCard title="Emergency Requests" value="7" icon={Siren} iconBg="bg-red-50" iconColor="text-red-600" change={3} trend="down" changeLabel="vs yesterday" />
                    <DashboardStatsCard title="Bed Occupancy" value="78" unit="%" icon={Building2} iconBg="bg-amber-50" iconColor="text-amber-600" change={5} trend="up" />
                  </div>
                </SubSection>

                <SubSection title="Activity Timeline Sample">
                  <div className="max-w-lg space-y-0">
                    {[
                      { time: '10:30 AM', event: 'Appointment with Dr. Osei', type: 'appointment', status: 'completed' },
                      { time: '11:45 AM', event: 'Lab results received — FBC', type: 'lab', status: 'info' },
                      { time: '2:00 PM', event: 'AI Triage completed', type: 'ai', status: 'info' },
                      { time: '3:30 PM', event: 'Prescription renewed — Atenolol', type: 'rx', status: 'success' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'info' ? 'bg-blue-500' :
                            item.status === 'success' ? 'bg-primary' : 'bg-gray-400'
                          }`} />
                          {i < 3 && <div className="w-0.5 h-10 bg-border mt-1" />}
                        </div>
                        <div className="pb-4">
                          <p className="text-sm font-medium text-foreground">{item.event}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

          {/* ===== FORMS ===== */}
          {activeTab === 'forms' && (
            <div>
              <Section title="AI Triage Input" subtitle="Conversational symptom collection with AI assessment.">
                <SubSection title="Symptom Input Component">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <SymptomInput onSubmit={(data) => console.log('Triage data:', data)} />
                    <div className="space-y-4">
                      <div className="p-5 bg-card border border-border rounded-2xl">
                        <h3 className="text-sm font-bold text-foreground mb-3 font-jakarta">Design Rationale</h3>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Quick-select chips reduce cognitive load</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Voice input for users with limited literacy</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Visual severity scale instead of numbers</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Duration chips for faster selection</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />AI branding (gradient violet) reinforces trust</li>
                          <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Disabled submit until symptoms selected</li>
                        </ul>
                      </div>
                      <div className="p-5 bg-violet-50 border border-violet-200 rounded-2xl">
                        <h3 className="text-sm font-bold text-violet-700 mb-2 font-jakarta">Accessibility Notes</h3>
                        <ul className="space-y-1 text-xs text-violet-700">
                          <li>• All buttons keyboard accessible</li>
                          <li>• Screen reader labels on all icons</li>
                          <li>• Color is never the only differentiator</li>
                          <li>• Focus visible indicators on all inputs</li>
                          <li>• Touch targets minimum 44×44px</li>
                          <li>• Error states with text, not just color</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SubSection>
              </Section>
            </div>
          )}

        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-secondary/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/ee6a0ab30_Neuronalogo.png" alt="Neurona" className="h-7 w-auto opacity-70" />
              <span className="text-sm text-muted-foreground">Neurona UI Design System v1.0</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>React 18 + Tailwind CSS 3.4</span>
              <span>·</span>
              <span>Lucide React Icons</span>
              <span>·</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
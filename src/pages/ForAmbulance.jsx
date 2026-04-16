import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Siren } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-card hover:bg-secondary/40 transition-colors text-left"
      >
        <span className="font-bold text-foreground text-lg">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-card border-t border-border text-sm text-muted-foreground leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring w-full";
const selectCls = "h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring w-full";
const AMB_TYPES = ['Basic', 'Advanced Life Support'];

export default function ForAmbulance() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company_name: '', base_location: '', areas_covered: '',
    contact_name: '', phone: '', whatsapp: '', email: '',
    num_ambulances: '', ambulance_types: [], available_24_7: '', avg_response_time: '',
    base_fee: '', additional_pricing: '', additional_info: '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleCheck = (key, val) => setForm(f => ({
    ...f,
    [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val],
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.AmbulanceProviderSignup.create(form);
    setLoading(false);
    setSubmitted(true);
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => document.getElementById('ambulance-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Get More Ride Requests. Grow Your Business.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Neurona connects your ambulance service to patients and hospitals that need immediate transportation, helping you increase utilization and revenue.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={scrollToForm} className="rounded-xl gap-2 shadow-lg shadow-primary/20" size="lg">
                  Join as a Provider <ArrowRight className="w-4 h-4" />
                </Button>
                <Link to="/Ambulance">
                  <Button variant="outline" className="rounded-xl gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" size="lg">
                    <Siren className="w-4 h-4" /> Book an Ambulance
                  </Button>
                </Link>
              </div>
            </div>
            {/* Ambulance image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1576091160727-86f58277e59f?w=800&q=80"
                alt="Ambulance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur rounded-xl px-4 py-2">
                <Siren className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Emergency Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-3">
        <AccordionItem title="What is Neurona?">
          Neurona is a healthcare access platform that connects patients to hospitals and ambulance providers in real time, enabling faster response and better coordination for urgent and non-urgent care.
        </AccordionItem>

        <AccordionItem title="Why Join Neurona">
          <ol className="space-y-3 list-none">
            {[
              ['More Ride Requests', 'Receive consistent transport requests from patients and hospitals.'],
              ['Increase Revenue', 'Maximize the usage of your ambulances.'],
              ['Faster Dispatch', 'Respond quickly to nearby requests.'],
              ['Better Visibility', 'Be discovered by patients who need immediate help.'],
            ].map(([b, d], i) => (
              <li key={b}><span className="font-semibold text-foreground">{i + 1}. {b}</span>, {d}</li>
            ))}
          </ol>
        </AccordionItem>

        <AccordionItem title="How It Works">
          <ol className="space-y-2 list-none">
            {[
              'Sign up as a provider',
              'Receive ride requests in real time',
              'Accept and dispatch your ambulance',
              'Complete the trip and get paid',
            ].map((step, i) => (
              <li key={i}><span className="font-semibold text-foreground">Step {i + 1}.</span> {step}</li>
            ))}
          </ol>
        </AccordionItem>

        <AccordionItem title="Provider Requirements">
          <ol className="list-decimal list-inside space-y-1">
            <li>Licensed ambulance service</li>
            <li>Reliable response times</li>
            <li>Defined service coverage area</li>
          </ol>
        </AccordionItem>

        <AccordionItem title="How You Earn">
          Neurona operates on a commission-based model. You receive payment directly from patients, and a small percentage is paid to the platform per completed trip.
        </AccordionItem>

        <AccordionItem title="Frequently Asked Questions">
          <dl className="space-y-4">
            {[
              ['How do we receive requests?', 'Via phone, WhatsApp, or platform notifications.'],
              ['How quickly do we need to respond?', 'As quickly as possible to ensure timely service.'],
              ['How are payments handled?', 'Patients pay you directly, and commissions are settled periodically.'],
            ].map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-1">{a}</dd>
              </div>
            ))}
          </dl>
        </AccordionItem>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Start Receiving Ride Requests Today</h2>
          <p className="text-muted-foreground mb-6">Join Neurona and grow your ambulance business with consistent demand.</p>
          <Button onClick={scrollToForm} className="rounded-xl gap-2 shadow-lg shadow-primary/20" size="lg">
            Apply as a Provider <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Success banner */}
      {submitted && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-primary">Application received! ✓</p>
            <p className="text-sm text-muted-foreground mt-1">We'll contact you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Provider Signup Form */}
      {showForm && (
        <section id="ambulance-form" className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">Ambulance Provider Application</h2>
            <p className="text-muted-foreground text-sm mb-8">Fill in the form below and we'll be in touch within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 1: Basic Info</h3>
                <div className="space-y-4">
                  <Field label="Company Name *">
                    <input className={inputCls} value={form.company_name} onChange={e => set('company_name', e.target.value)} required />
                  </Field>
                  <Field label="Base Location">
                    <input className={inputCls} placeholder="e.g. Lekki, Lagos" value={form.base_location} onChange={e => set('base_location', e.target.value)} />
                  </Field>
                  <Field label="Areas Covered">
                    <input className={inputCls} placeholder="e.g. Lekki, VI, Ikoyi" value={form.areas_covered} onChange={e => set('areas_covered', e.target.value)} />
                  </Field>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 2: Contact</h3>
                <div className="space-y-4">
                  <Field label="Contact Name *">
                    <input className={inputCls} value={form.contact_name} onChange={e => set('contact_name', e.target.value)} required />
                  </Field>
                  <Field label="Phone Number *">
                    <input className={inputCls} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} required />
                  </Field>
                  <Field label="WhatsApp Number">
                    <input className={inputCls} type="tel" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} />
                  </Field>
                  <Field label="Email *">
                    <input className={inputCls} type="email" value={form.email} onChange={e => set('email', e.target.value)} required />
                  </Field>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 3: Operations</h3>
                <div className="space-y-4">
                  <Field label="Number of Ambulances">
                    <input className={inputCls} placeholder="e.g. 3" value={form.num_ambulances} onChange={e => set('num_ambulances', e.target.value)} />
                  </Field>
                  <Field label="Type of Ambulances">
                    <div className="flex flex-col gap-2 mt-1">
                      {AMB_TYPES.map(t => (
                        <label key={t} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" checked={form.ambulance_types.includes(t)} onChange={() => toggleCheck('ambulance_types', t)} className="rounded" />
                          {t}
                        </label>
                      ))}
                    </div>
                  </Field>
                  <Field label="Are you available 24/7?">
                    <select className={selectCls} value={form.available_24_7} onChange={e => set('available_24_7', e.target.value)}>
                      <option value="">Select one</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </Field>
                  <Field label="Average Response Time">
                    <select className={selectCls} value={form.avg_response_time} onChange={e => set('avg_response_time', e.target.value)}>
                      <option value="">Select one</option>
                      {['<10 minutes', '10–20 minutes', '20–30 minutes', '30+ minutes'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 4: Pricing</h3>
                <div className="space-y-4">
                  <Field label="Typical Base Fee (₦)">
                    <input className={inputCls} placeholder="e.g. 15000" value={form.base_fee} onChange={e => set('base_fee', e.target.value)} />
                  </Field>
                  <Field label="Additional pricing (if applicable)">
                    <input className={inputCls} placeholder="e.g. ₦500/km after 10km" value={form.additional_pricing} onChange={e => set('additional_pricing', e.target.value)} />
                  </Field>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 5: Final</h3>
                <Field label="Any additional information?">
                  <textarea
                    rows={4}
                    className="px-3 py-2 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring w-full resize-none"
                    value={form.additional_info}
                    onChange={e => set('additional_info', e.target.value)}
                  />
                </Field>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl gap-2 shadow-lg shadow-primary/20" disabled={loading}>
                {loading ? 'Submitting…' : 'Submit Application'}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </Button>
              <p className="text-xs text-center text-muted-foreground">We'll contact you within 24 hours.</p>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
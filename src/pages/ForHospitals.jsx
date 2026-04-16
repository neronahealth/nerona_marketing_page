import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  'General Practice', 'Emergency Care', 'Pediatrics', 'Gynecology',
  'Surgery', 'Diagnostics', 'Laboratory Services', 'Other (specify)',
];
const CONTACT_METHODS = ['Phone call', 'WhatsApp', 'Email', 'Platform dashboard'];

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

export default function ForHospitals() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    hospital_name: '', facility_type: '', address: '', area: '', area_other: '',
    contact_name: '', contact_role: '', phone_primary: '', whatsapp_number: '', email: '',
    services: [], services_other: '', handles_emergency: '', operating_hours: '',
    response_time: '', preferred_contact: [], is_licensed: '', years_of_operation: '',
    additional_info: '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const toggleCheck = (key, val) => {
    setForm(f => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.HospitalSignup.create(form);
    setLoading(false);
    setSubmitted(true);
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Get More Patients. Improve Access. Join Neurona.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Neurona connects your hospital to patients actively seeking care, helping you increase visibility, improve response times, and streamline access to your services.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => { setShowForm(true); setTimeout(() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                  className="rounded-xl gap-2 shadow-lg shadow-primary/20"
                  size="lg"
                >
                  Partner with us <ArrowRight className="w-4 h-4" />
                </Button>
                <Link to="/FindCare">
                  <Button variant="outline" className="rounded-xl gap-2" size="lg">
                    <Search className="w-4 h-4" /> Find Care Now
                  </Button>
                </Link>
              </div>
            </div>
            {/* Hospital image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Hospital interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-3">
        <AccordionItem title="What is Neurona?">
          Neurona is a healthcare access platform that connects patients to verified hospitals in real time. Patients can discover your facility, request appointments, and access care faster, while your hospital benefits from increased patient flow and better coordination.
        </AccordionItem>

        <AccordionItem title="Why Partner with Neurona">
          <ul className="space-y-3">
            {[
              ['Increase Patient Volume', 'Receive requests from patients actively looking for care near you.'],
              ['Faster Patient Access', 'Reduce delays and ensure patients reach your hospital quickly.'],
              ['Increased Visibility', 'Be discovered by new patients across your area.'],
              ['Better Coordination', 'Streamline how you receive and respond to patient requests.'],
              ['No Upfront Cost', 'Start receiving patient requests with no initial setup fees.'],
            ].map(([b, d]) => (
              <li key={b}><span className="font-semibold text-foreground">{b}</span>, {d}</li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="How It Works">
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign up your hospital</li>
            <li>Receive patient requests in real time</li>
            <li>Accept and respond quickly</li>
            <li>Provide care directly to the patient</li>
          </ol>
        </AccordionItem>

        <AccordionItem title="Who We Work With">
          <p className="font-semibold text-foreground mb-2">We partner with:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Licensed hospitals and clinics</li>
            <li>Providers with reliable response times</li>
            <li>Facilities committed to high-quality care</li>
          </ol>
        </AccordionItem>

        <AccordionItem title="Built for Reliable Healthcare Providers">
          Neurona is building a trusted network of healthcare providers across Lagos, focused on reliability, speed, and quality patient care.
        </AccordionItem>

        <AccordionItem title="Frequently Asked Questions">
          <dl className="space-y-4">
            {[
              ['Do we need to change our current systems?', 'No. Neurona works alongside your existing processes.'],
              ['How do we receive patient requests?', 'Requests can be shared via phone, WhatsApp, or through our platform.'],
              ['Are there any upfront costs?', 'No. You can start receiving requests without any initial fees.'],
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
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Start Receiving Patient Requests Today</h2>
          <p className="text-muted-foreground mb-6">
            Join Neurona and become part of a growing network of trusted healthcare providers.
          </p>
          <Button
            onClick={() => { setShowForm(true); setTimeout(() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="rounded-xl gap-2 shadow-lg shadow-primary/20"
            size="lg"
          >
            Apply as a Partner <ArrowRight className="w-4 h-4" />
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

      {/* Hospital Signup Form */}
      {showForm && (
        <section id="signup-form" className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">Hospital Partner Application</h2>
            <p className="text-muted-foreground text-sm mb-8">Fill in the form below and we'll be in touch within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 1: Basic Information</h3>
                <div className="space-y-4">
                  <Field label="Hospital Name *">
                    <input className={inputCls} value={form.hospital_name} onChange={e => set('hospital_name', e.target.value)} required />
                  </Field>
                  <Field label="Facility Type *">
                    <select className={selectCls} value={form.facility_type} onChange={e => set('facility_type', e.target.value)} required>
                      <option value="">Select one</option>
                      {['Hospital','Clinic','Specialist Center','Diagnostic Center'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Address *">
                    <input className={inputCls} value={form.address} onChange={e => set('address', e.target.value)} required />
                  </Field>
                  <Field label="Area">
                    <select className={selectCls} value={form.area} onChange={e => set('area', e.target.value)}>
                      <option value="">Select area</option>
                      {['Lekki','Ikoyi','Victoria Island','Lagos Island','Lagos Mainland','Other (specify)'].map(o => <option key={o}>{o}</option>)}
                    </select>
                    {form.area === 'Other (specify)' && (
                      <input className={inputCls + ' mt-2'} placeholder="Specify area" value={form.area_other} onChange={e => set('area_other', e.target.value)} />
                    )}
                  </Field>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 2: Contact Details</h3>
                <div className="space-y-4">
                  <Field label="Primary Contact Name *">
                    <input className={inputCls} value={form.contact_name} onChange={e => set('contact_name', e.target.value)} required />
                  </Field>
                  <Field label="Role (e.g. Admin, Doctor, Manager)">
                    <input className={inputCls} value={form.contact_role} onChange={e => set('contact_role', e.target.value)} />
                  </Field>
                  <Field label="Phone Number (Primary) *">
                    <input className={inputCls} type="tel" value={form.phone_primary} onChange={e => set('phone_primary', e.target.value)} required />
                  </Field>
                  <Field label="WhatsApp Number (if different)">
                    <input className={inputCls} type="tel" value={form.whatsapp_number} onChange={e => set('whatsapp_number', e.target.value)} />
                  </Field>
                  <Field label="Email Address *">
                    <input className={inputCls} type="email" value={form.email} onChange={e => set('email', e.target.value)} required />
                  </Field>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 3: Services & Capability</h3>
                <div className="space-y-4">
                  <Field label="What services do you provide?">
                    <div className="grid sm:grid-cols-2 gap-2 mt-1">
                      {SERVICES.map(s => (
                        <label key={s} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleCheck('services', s)} className="rounded" />
                          {s}
                        </label>
                      ))}
                    </div>
                    {form.services.includes('Other (specify)') && (
                      <input className={inputCls + ' mt-2'} placeholder="Specify service" value={form.services_other} onChange={e => set('services_other', e.target.value)} />
                    )}
                  </Field>
                  <Field label="Do you handle emergency cases?">
                    <select className={selectCls} value={form.handles_emergency} onChange={e => set('handles_emergency', e.target.value)}>
                      <option value="">Select one</option>
                      {['Yes (24/7)','Yes (limited hours)','No'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Operating Hours">
                    <input className={inputCls} placeholder="e.g. Mon–Fri 8am–8pm" value={form.operating_hours} onChange={e => set('operating_hours', e.target.value)} />
                  </Field>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 4: Response & Operations</h3>
                <div className="space-y-4">
                  <Field label="How quickly can you typically respond to a patient request?">
                    <select className={selectCls} value={form.response_time} onChange={e => set('response_time', e.target.value)}>
                      <option value="">Select one</option>
                      {['Within 5 minutes','Within 10 minutes','Within 30 minutes','Longer'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="How would you prefer to receive requests?">
                    <div className="grid sm:grid-cols-2 gap-2 mt-1">
                      {CONTACT_METHODS.map(m => (
                        <label key={m} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" checked={form.preferred_contact.includes(m)} onChange={() => toggleCheck('preferred_contact', m)} className="rounded" />
                          {m}
                        </label>
                      ))}
                    </div>
                  </Field>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 5: Credibility</h3>
                <div className="space-y-4">
                  <Field label="Is your facility licensed and registered?">
                    <select className={selectCls} value={form.is_licensed} onChange={e => set('is_licensed', e.target.value)}>
                      <option value="">Select one</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </Field>
                  <Field label="Years of operation">
                    <input className={inputCls} placeholder="e.g. 5" value={form.years_of_operation} onChange={e => set('years_of_operation', e.target.value)} />
                  </Field>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Section 6: Final</h3>
                <Field label="Any additional information you'd like us to know?">
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
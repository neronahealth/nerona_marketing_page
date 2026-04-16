import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Search, MapPin, Star, ShieldCheck, ArrowRight, AlertTriangle, Clock, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function FindCare() {
  const [symptoms, setSymptoms] = useState('');
  const [severity, setSeverity] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setResults(null);

    const hospitals = await base44.entities.Hospital.list('-rating', 50);

    const aiResult = await base44.integrations.Core.InvokeLLM({
      prompt: `You are NeronaHealth, an AI healthcare navigator for Africa. A patient reports the following:

Symptoms: ${symptoms}
Severity: ${severity || 'Not specified'}
Preferred City: ${city || 'Any'}

Here are the available hospitals:
${JSON.stringify(hospitals.map(h => ({ id: h.id, name: h.name, city: h.city, specialties: h.specialties, emergency_capable: h.emergency_capable, rating: h.rating, available_beds: h.available_beds, facilities: h.facilities })), null, 2)}

Evaluate the symptoms and recommend the top 3 most appropriate hospitals from the list. Consider:
1. Required specialty match
2. City preference (if specified)
3. Emergency capability (if urgent)
4. Available beds and rating

Also provide:
- A brief assessment of the likely condition
- Urgency level (low, moderate, high, critical)
- Whether emergency services are recommended
- Suggested specialty to seek`,
      response_json_schema: {
        type: "object",
        properties: {
          assessment: { type: "string" },
          urgency: { type: "string", enum: ["low", "moderate", "high", "critical"] },
          needs_emergency: { type: "boolean" },
          suggested_specialty: { type: "string" },
          recommended_hospitals: {
            type: "array",
            items: {
              type: "object",
              properties: {
                hospital_id: { type: "string" },
                hospital_name: { type: "string" },
                reason: { type: "string" },
                match_score: { type: "number" }
              }
            }
          },
          care_advice: { type: "string" }
        }
      }
    });

    const hospitalMap = {};
    hospitals.forEach(h => { hospitalMap[h.id] = h; });

    setResults({
      ...aiResult,
      hospitals: aiResult.recommended_hospitals?.map(rec => ({
        ...rec,
        details: hospitalMap[rec.hospital_id]
      })).filter(r => r.details)
    });
    setLoading(false);
  };

  const urgencyColors = {
    low: 'bg-green-100 text-green-700 border-green-200',
    moderate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
    critical: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Search className="w-3.5 h-3.5" /> AI-Powered Care Matching
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Find the Right Care
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Describe your symptoms and we'll match you with the best facilities based on specialty, proximity, and availability.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Describe your symptoms
              </label>
              <Textarea
                placeholder="e.g., I've been experiencing severe chest pain and shortness of breath for the last 2 hours..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="min-h-[120px] rounded-xl resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Severity level
                </label>
                <Select value={severity} onValueChange={setSeverity}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="How severe?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mild">Mild — Can wait</SelectItem>
                    <SelectItem value="moderate">Moderate — Need care soon</SelectItem>
                    <SelectItem value="severe">Severe — Urgent care needed</SelectItem>
                    <SelectItem value="critical">Critical — Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Preferred city
                </label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Any city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Lagos">Lagos</SelectItem>
                    <SelectItem value="Nairobi">Nairobi</SelectItem>
                    <SelectItem value="Accra">Accra</SelectItem>
                    <SelectItem value="Dar es Salaam">Dar es Salaam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleSearch}
              disabled={loading || !symptoms.trim()}
              className="w-full h-12 rounded-xl text-base gap-2 shadow-lg shadow-primary/20"
              size="lg"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing symptoms...</>
              ) : (
                <><Search className="w-4 h-4" /> Find Best Care</>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              {/* Assessment Card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border ${urgencyColors[results.urgency] || urgencyColors.moderate}`}>
                    {results.urgency?.toUpperCase()} URGENCY
                  </div>
                  {results.needs_emergency && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold border border-red-200">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Emergency Recommended
                    </div>
                  )}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">{results.assessment}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Suggested specialty: <span className="font-medium text-foreground">{results.suggested_specialty}</span>
                </div>
                {results.care_advice && (
                  <p className="mt-3 text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    {results.care_advice}
                  </p>
                )}
              </div>

              {/* Download Prompt */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Download the App to Continue</h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                  Your results are ready! Download the Neurona app to view your matched hospitals and book care.
                </p>
                {results.needs_emergency && (
                  <Link to="/Ambulance" className="block mb-3">
                    <Button className="w-full h-12 rounded-xl gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                      <AlertTriangle className="w-5 h-5" />
                      Request Emergency Ambulance
                    </Button>
                  </Link>
                )}
                <Link to="/download">
                  <Button className="h-12 px-8 rounded-xl gap-2 shadow-lg shadow-primary/20" size="lg">
                    <Download className="w-4 h-4" />
                    Download Neurona App
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
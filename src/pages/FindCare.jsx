import { useState } from 'react';
import { base44 } from '@/api/base44Client';
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
      prompt: `You are HealthBudi, an AI healthcare navigator for Africa. A patient reports the following:

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

              {/* Recommended Hospitals */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Recommended Facilities
                </h3>
                <div className="space-y-3">
                  {results.hospitals?.map((rec, i) => (
                    <div
                      key={i}
                      className="bg-card rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                          <img
                            src={rec.details?.image_url || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200'}
                            alt={rec.hospital_name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              #{i + 1} Match
                            </span>
                            {rec.details?.verified && (
                              <ShieldCheck className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <h4 className="font-semibold text-foreground">{rec.hospital_name}</h4>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {rec.details?.city}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-500" fill="currentColor" /> {rec.details?.rating}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{rec.reason}</p>
                        </div>
                        <Link to={`/Directory?hospital=${rec.hospital_id}`}>
                          <Button variant="outline" size="sm" className="gap-1 rounded-xl flex-shrink-0">
                            View <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {results.needs_emergency && (
                <Link to="/Ambulance">
                  <Button className="w-full h-12 rounded-xl gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                    <AlertTriangle className="w-5 h-5" />
                    Request Emergency Ambulance
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
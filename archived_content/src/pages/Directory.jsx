import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Building2, Stethoscope, Loader2 } from 'lucide-react';
import HospitalCard from '../components/directory/HospitalCard';
import DoctorCard from '../components/directory/DoctorCard';
import HospitalDetail from '../components/directory/HospitalDetail';
import { motion } from 'framer-motion';

export default function Directory() {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [selectedHospital, setSelectedHospital] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const hospitalIdFromUrl = urlParams.get('hospital');

  const { data: hospitals, isLoading: loadingHospitals } = useQuery({
    queryKey: ['hospitals'],
    queryFn: () => base44.entities.Hospital.list('-rating', 50),
  });

  const { data: doctors, isLoading: loadingDoctors } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => base44.entities.Doctor.list('-rating', 50),
  });

  // Auto-select hospital from URL
  const preselected = hospitalIdFromUrl && hospitals?.find(h => h.id === hospitalIdFromUrl);
  if (preselected && !selectedHospital) {
    setSelectedHospital(preselected);
  }

  const filteredHospitals = hospitals?.filter((h) => {
    const matchSearch = h.name?.toLowerCase().includes(search.toLowerCase()) ||
      h.address?.toLowerCase().includes(search.toLowerCase());
    const matchCity = cityFilter === 'all' || h.city === cityFilter;
    const matchSpecialty = specialtyFilter === 'all' || h.specialties?.includes(specialtyFilter);
    return matchSearch && matchCity && matchSpecialty;
  });

  const filteredDoctors = doctors?.filter((d) => {
    const matchSearch = d.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty?.toLowerCase().includes(search.toLowerCase()) ||
      d.hospital_name?.toLowerCase().includes(search.toLowerCase());
    const matchCity = cityFilter === 'all' || hospitals?.find(h => h.name === d.hospital_name)?.city === cityFilter;
    const matchSpecialty = specialtyFilter === 'all' || d.specialty === specialtyFilter;
    return matchSearch && matchCity && matchSpecialty;
  });

  const cities = [...new Set(hospitals?.map(h => h.city).filter(Boolean))];
  const specialties = [...new Set([
    ...(hospitals?.flatMap(h => h.specialties || []) || []),
    ...(doctors?.map(d => d.specialty).filter(Boolean) || [])
  ])].sort();

  if (selectedHospital) {
    return (
      <HospitalDetail
        hospital={selectedHospital}
        doctors={doctors?.filter(d => d.hospital_name === selectedHospital.name)}
        onBack={() => {
          setSelectedHospital(null);
          if (hospitalIdFromUrl) {
            window.history.replaceState({}, '', '/Directory');
          }
        }}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-1">
          Healthcare Directory
        </h1>
        <p className="text-muted-foreground mb-6">
          Browse verified hospitals and specialist doctors across Africa
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search hospitals, doctors, specialties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
          <Select value={cityFilter} onValueChange={setCityFilter}>
            <SelectTrigger className="w-full sm:w-40 rounded-xl">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="w-full sm:w-48 rounded-xl">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              {specialties.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="hospitals">
          <TabsList className="mb-6 rounded-xl">
            <TabsTrigger value="hospitals" className="gap-1.5 rounded-lg">
              <Building2 className="w-4 h-4" />
              Hospitals ({filteredHospitals?.length || 0})
            </TabsTrigger>
            <TabsTrigger value="doctors" className="gap-1.5 rounded-lg">
              <Stethoscope className="w-4 h-4" />
              Doctors ({filteredDoctors?.length || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hospitals">
            {loadingHospitals ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : filteredHospitals?.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Building2 className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No hospitals found matching your search.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHospitals?.map((hospital) => (
                  <HospitalCard
                    key={hospital.id}
                    hospital={hospital}
                    onClick={() => setSelectedHospital(hospital)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="doctors">
            {loadingDoctors ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : filteredDoctors?.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Stethoscope className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No doctors found matching your search.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDoctors?.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
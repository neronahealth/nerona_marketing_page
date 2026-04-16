import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import Home from './pages/Home';
import FindCare from './pages/FindCare';
import Directory from './pages/Directory';
import BookAppointment from './pages/BookAppointment';
import Appointments from './pages/Appointments';
import Ambulance from './pages/Ambulance';
import CareNavigator from './pages/CareNavigator';
import About from './pages/About';
import ForPatients from './pages/ForPatients';
import ForHospitals from './pages/ForHospitals';
import ForAmbulance from './pages/ForAmbulance';
import Download from './pages/Download';
import LegalComingSoon from './pages/LegalComingSoon';
import Founders from './pages/Founders';
import DesignSystem from './pages/DesignSystem';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/FindCare" element={<FindCare />} />
        <Route path="/Directory" element={<Directory />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Ambulance" element={<Ambulance />} />
        <Route path="/CareNavigator" element={<CareNavigator />} />
        <Route path="/about" element={<About />} />
        <Route path="/for-patients" element={<ForPatients />} />
        <Route path="/for-hospitals" element={<ForHospitals />} />
        <Route path="/for-ambulance" element={<ForAmbulance />} />
        <Route path="/download" element={<Download />} />
        <Route path="/legal-coming-soon" element={<LegalComingSoon />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
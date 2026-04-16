import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function LegalComingSoon() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h1>
        <p className="text-muted-foreground mb-8">
          This legal document is being prepared by our team. Please check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="outline" className="rounded-xl gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/download">
            <Button className="rounded-xl gap-2">
              <Download className="w-4 h-4" />
              Download App
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
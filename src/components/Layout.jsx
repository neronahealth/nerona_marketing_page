import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Siren } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Footer from './Footer';

const navItems = [
  {
    label: 'About Us',
    dropdown: [
      { label: 'About Neurona', path: '/about' },
      { label: 'Meet Our Founders', path: '/founders' },
    ],
  },
  {
    label: 'For Patients',
    dropdown: [
      { label: 'Find Care', path: '/FindCare' },
      { label: 'Book Appointments', path: '/Directory' },
      { label: 'Directory', path: '/Directory' },
      { label: 'Care Navigator', path: '/CareNavigator' },
    ],
  },
  { label: 'For Hospitals', path: '/for-hospitals' },
  { label: 'For Ambulance Providers', path: '/for-ambulance' },
  { label: 'Design System', path: '/design-system' },
];

export default function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img src="https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/ee6a0ab30_Neuronalogo.png" alt="Neurona" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.dropdown.map((sub) => (
                        <DropdownMenuItem key={sub.path} asChild>
                          <Link to={sub.path} className="w-full cursor-pointer">
                            {sub.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/Ambulance">
                <Button variant="outline" size="sm" className="rounded-lg text-xs h-8 px-3 gap-1.5">
                  <Siren className="w-3.5 h-3.5" /> Request Ambulance
                </Button>
              </Link>
              <Link to="/download">
                <Button size="sm" className="rounded-lg text-xs h-8 px-3 shadow-md shadow-primary/20">
                  Download App
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      <img src="https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/ee6a0ab30_Neuronalogo.png" alt="Neurona" className="h-10 w-auto" />
                    </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) =>
                      item.dropdown ? (
                        <div key={item.label} className="space-y-1">
                          <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </p>
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </nav>
                  <div className="p-4 border-t border-border">
                    <Link to="/download" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full rounded-xl">Download App</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
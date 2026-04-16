/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        jakarta: ['var(--font-jakarta)'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        // Healthcare semantic tokens
        emergency: {
          DEFAULT: 'hsl(var(--emergency))',
          foreground: 'hsl(var(--emergency-foreground))',
          muted: 'hsl(var(--emergency-muted))',
        },
        urgent: {
          DEFAULT: 'hsl(var(--urgent))',
          foreground: 'hsl(var(--urgent-foreground))',
          muted: 'hsl(var(--urgent-muted))',
        },
        routine: {
          DEFAULT: 'hsl(var(--routine))',
          foreground: 'hsl(var(--routine-foreground))',
          muted: 'hsl(var(--routine-muted))',
        },
        'ai-triage': {
          DEFAULT: 'hsl(var(--ai-triage))',
          foreground: 'hsl(var(--ai-triage-foreground))',
          muted: 'hsl(var(--ai-triage-muted))',
        },
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
        'emergency-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(220,38,38,0.4)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 0 10px rgba(220,38,38,0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'emergency-pulse': 'emergency-pulse 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-in-up': 'slide-in-up 0.4s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
  		},
      boxShadow: {
        'glow-primary': '0 0 20px hsl(168 60% 32% / 0.3), 0 0 60px hsl(168 60% 32% / 0.1)',
        'glow-emergency': '0 0 20px rgba(220,38,38,0.4), 0 0 60px rgba(220,38,38,0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'elevation-2': '0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        'elevation-3': '0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)',
        'elevation-4': '0 24px 80px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Urgency level classes
    'bg-green-100', 'text-green-700', 'text-green-600', 'border-green-200', 'bg-green-50',
    'bg-amber-100', 'text-amber-700', 'text-amber-600', 'border-amber-200', 'bg-amber-50',
    'bg-red-100', 'text-red-700', 'text-red-600', 'border-red-200', 'bg-red-50',
    'bg-violet-100', 'text-violet-700', 'text-violet-600', 'border-violet-200', 'bg-violet-50',
    'bg-blue-100', 'text-blue-700', 'text-blue-600', 'border-blue-200', 'bg-blue-50',
    'bg-indigo-100', 'text-indigo-700',
    'bg-purple-100', 'text-purple-700',
    'bg-emerald-100', 'text-emerald-700', 'text-emerald-600',
    // Status
    'bg-green-500', 'bg-amber-500', 'bg-gray-400', 'bg-red-600',
    // Emergency pulse
    'animate-emergency-pulse',
  ],
}

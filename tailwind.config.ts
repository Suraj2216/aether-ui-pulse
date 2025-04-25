
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom brand colors
				brand: {
					50: '#F4F3FF',
					100: '#EBE9FE',
					200: '#D9D6FE',
					300: '#BDB4FE',
					400: '#9B8AFB',
					500: '#7F56D9',  // Primary purple
					600: '#6941C6',  // Darker purple
					700: '#53389E',
					800: '#42307D',
					900: '#3A2465',
				},
				slate: {
					50: '#F9FAFB',
					100: '#F3F4F6',
					200: '#E5E7EB',
					300: '#D1D5DB',
					400: '#9CA3AF',
					500: '#6B7280',
					600: '#4B5563',
					700: '#374151',
					800: '#1F2937',
					900: '#111827',
				},
				blue: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					300: '#93C5FD',
					400: '#60A5FA',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					900: '#1E3A8A',
					950: '#172554',
				},
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				heading: ['Space Grotesk', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-down": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"wave": {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-8.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"fade-out": "fade-out 0.3s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"slide-up": "slide-up 0.4s ease-out",
				"slide-down": "slide-down 0.4s ease-out",
				"float": "float 6s ease-in-out infinite",
				"pulse-slow": "pulse-slow 4s ease-in-out infinite",
				"spin-slow": "spin-slow 8s linear infinite",
				"wave": "wave 2.5s ease-in-out infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'url("/images/hero-pattern.svg")',
				'gradient-primary': 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 30%, hsl(var(--primary-foreground)) 100%)',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
				'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.05)',
				'neon': '0 0 5px theme(colors.primary.500), 0 0 20px theme(colors.primary.500)',
				'neon-lg': '0 0 10px theme(colors.primary.500), 0 0 40px theme(colors.primary.500)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'none',
						},
						h1: {
							fontFamily: theme('fontFamily.heading'),
						},
						h2: {
							fontFamily: theme('fontFamily.heading'),
						},
						h3: {
							fontFamily: theme('fontFamily.heading'),
						},
						h4: {
							fontFamily: theme('fontFamily.heading'),
						},
					},
				},
			}),
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

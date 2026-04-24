/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter:   ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'az-pink':   '#ff359b',
        'az-yellow': '#fffd87',
        'az-blue':   '#00d2ff',
        'az-dark':   '#0a0a0f',
        'az-dark2':  '#12121a',
        'az-dark3':  '#1a1a26',
      },
      animation: {
        'float':      'floatBlob 8s ease-in-out infinite alternate',
        'float-r':    'floatBlob 8s ease-in-out infinite alternate-reverse',
        'float-slow': 'floatBlob 11s ease-in-out infinite alternate',
        'pulse-ring': 'pulseRing 3s ease-in-out infinite alternate',
        'blob-1':     'blobMove 9s ease-in-out infinite alternate',
        'blob-2':     'blobMove 11s ease-in-out infinite alternate-reverse',
        'blob-3':     'blobMove 7s ease-in-out infinite alternate',
        'page-in':    'pageFadeIn 0.45s ease both',
        'fade-up':    'fadeUp 0.6s ease both',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        floatBlob: {
          '0%':   { transform: 'translateY(0) scale(1)'    },
          '100%': { transform: 'translateY(30px) scale(1.05)' },
        },
        pulseRing: {
          '0%':   { boxShadow: '0 0 40px rgba(255,53,155,0.3)' },
          '100%': { boxShadow: '0 0 80px rgba(0,210,255,0.4)' },
        },
        blobMove: {
          '0%':   { transform: 'translate(0, 0) scale(1)'          },
          '100%': { transform: 'translate(20px, 30px) scale(1.1)'  },
        },
        pageFadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
};

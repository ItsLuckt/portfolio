import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || theme === "system"; // Assuming system is dark by default for this app

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
      
      {/* Background Gradient to give depth */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,0,0,0.5)_0%,rgba(5,5,5,1)_100%)]" />
      )}

      {/* Main Grid */}
      <div 
        className="absolute inset-[-100%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
          animation: 'moveGrid 15s linear infinite',
        }}
      />

      {/* Secondary accent grid to create parallax effect */}
      {isDark && (
        <div 
          className="absolute inset-[-100%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(239, 68, 68, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(239, 68, 68, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            animation: 'moveGridSlow 25s linear infinite',
          }}
        />
      )}

      {/* Glowing Orbs */}
      {isDark && (
        <>
          <div className="absolute top-[20%] -left-32 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-[20%] -right-32 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </>
      )}

      <style>{`
        @keyframes moveGrid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
        @keyframes moveGridSlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite alternate;
        }
        @keyframes pulse-slow {
          0% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

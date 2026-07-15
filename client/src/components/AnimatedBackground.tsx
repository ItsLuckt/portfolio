import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || theme === "system";

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700 ${isDark ? 'bg-[#050110]' : 'bg-[#faf8ff]'}`}>
      
      {/* Deep Background Gradient */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,10,60,0.5)_0%,rgba(5,1,16,1)_100%)]" />
      )}
      {!isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.1)_0%,rgba(250,248,255,1)_100%)]" />
      )}

      {/* Modern Dotted Grid */}
      <div 
        className="absolute inset-[-100%]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(167, 139, 250, 0.2)' : 'rgba(139, 92, 246, 0.15)'} 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
          animation: 'moveGrid 30s linear infinite',
        }}
      />

      {/* Floating Gradient Orbs */}
      {isDark ? (
        <>
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[30%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000" />
        </>
      ) : (
        <>
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-fuchsia-200/30 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[30%] w-[700px] h-[700px] bg-indigo-300/30 rounded-full blur-[150px] mix-blend-multiply animate-blob animation-delay-4000" />
        </>
      )}

      {/* Top light beam */}
      <div className={`absolute top-0 left-1/4 right-1/4 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_30px_10px_rgba(168,85,247,0.3)]' : 'bg-gradient-to-r from-transparent via-purple-300 to-transparent shadow-[0_0_30px_10px_rgba(168,85,247,0.2)]'}`} />

      <style>{`
        @keyframes moveGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

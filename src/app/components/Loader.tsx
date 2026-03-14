import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
      </div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10"
      >
        {/* Logo orb with breathing blink effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-24 h-24"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#0EA5E9] shadow-[0_25px_60px_rgba(139,92,246,0.3)] flex items-center justify-center transform rotate-12 group">
            <span className="text-3xl font-black text-white transform -rotate-12 italic tracking-tighter">AY</span>
          </div>
          <div className="absolute inset-0 rounded-3xl bg-[#8B5CF6]/40 blur-3xl -z-10" />
        </motion.div>

        <div className="text-center space-y-3">
          <motion.h1
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl font-extrabold text-foreground tracking-tight"
          >
            Asim Yaqoob
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            className="h-1 bg-[#8B5CF6] mx-auto rounded-full"
          />
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
            Full-Stack Developer
          </p>
        </div>

        <div className="w-72 space-y-4">
          <div className="h-[2px] bg-[#1E293B] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#FFFFFF] to-[#0EA5E9]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-between items-center text-[10px] font-bold tracking-[0.1em] text-muted-foreground uppercase"
          >
            <span>{progress < 100 ? "Syncing Workspace" : "System Ready"}</span>
            <span>{progress}%</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

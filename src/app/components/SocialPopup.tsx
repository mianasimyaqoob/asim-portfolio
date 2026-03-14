import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { socialLinks } from '../data/contact';
import { X } from 'lucide-react';

export function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    if (hasBeenDismissed) return;

    const triggerCycle = () => {
      setIsVisible(true);
      // Hide after 5 seconds
      const hTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return hTimer;
    };

    // Initial show immediately
    const firstHideTimer = triggerCycle();

    // Repeat every 35 seconds (5s showing + 30s hidden)
    const interval = setInterval(() => {
      triggerCycle();
    }, 35000);

    return () => {
      clearTimeout(firstHideTimer);
      clearInterval(interval);
    };
  }, [hasBeenDismissed]);

  return (
    <AnimatePresence>
      {isVisible && !hasBeenDismissed && (
        <motion.div
          initial={{ x: 250, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 250, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 30, stiffness: 250 }}
          className="fixed bottom-8 right-8 z-[100] bg-card/95 backdrop-blur-2xl rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-4 border border-border/40 group w-[220px]"
        >
          {/* Close Button - Minimal */}
          <button 
            onClick={() => {
              setIsVisible(false);
              setHasBeenDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-card rounded-full shadow-md border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 scale-90"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-1 h-1 rounded-full bg-blue-600" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Connect With Me</span>
          </div>
          
          <div className="flex justify-between items-center gap-2">
            {socialLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-black hover:-translate-y-1 transition-all duration-300"
              >
                <link.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-1.5 px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Available for projects</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

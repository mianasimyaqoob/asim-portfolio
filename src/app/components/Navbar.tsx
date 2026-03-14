import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { LogoText } from './LogoText';

export function Navbar() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Don't show navbar on admin routes
  if (isAdminRoute) {
    return null;
  }

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl mt-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] relative overflow-hidden">
        {/* Continuous Animated Multi-color Line at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6] via-[#FFFFFF] via-[#0EA5E9] to-transparent opacity-60"
          />
        </div>

        {/* Logo side */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] rounded-xl flex items-center justify-center shadow-[0_12px_30px_rgba(39,76,119,0.35)] group-hover:shadow-[0_18px_40px_rgba(39,76,119,0.5)] transition-shadow duration-200">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-xl border border-border/40 opacity-70" />
            <div className="pointer-events-none absolute -bottom-1 left-1/2 h-2 w-12 -translate-x-1/2 bg-[#8B5CF6]/30 blur-md opacity-70" />
          </div>
          <LogoText
            className="font-semibold text-lg tracking-tight text-foreground hidden sm:block"
            fullText="Asim Yaqoob – Portfolio"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-2 rounded-full px-2 py-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
              >
                <motion.span
                  className={`inline-flex items-center justify-center px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-[#8B5CF6]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ y: -1, scale: 1.02 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  {link.name}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  >
                    {/* Flowing Gradient Animation - Simplified for performance */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#FFFFFF] to-[#0EA5E9] bg-[length:200%_auto] animate-gradient-flow"
                    />
                    <div className="absolute inset-0 blur-[2px] bg-inherit opacity-30" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

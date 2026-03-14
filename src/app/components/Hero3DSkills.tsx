import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Code2, Smartphone, Cloud, Briefcase, Database, LayoutDashboard } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

export function Hero3DSkills() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    {
      icon: Code2,
      label: 'Web Apps',
      color: 'from-[#8B5CF6] to-[#1E293B]',
      position: { top: '15%', left: '10%' },
      delay: 0.2,
      depth: 1.5,
    },
    {
      icon: Smartphone,
      label: 'Mobile Apps',
      color: 'from-[#0EA5E9] to-[#8B5CF6]',
      position: { top: '10%', right: '15%' },
      delay: 0.3,
      depth: 1.3,
    },
    {
      icon: Database,
      label: 'APIs',
      color: 'from-[#0EA5E9] to-[#1E293B]',
      position: { top: '50%', right: '5%' },
      delay: 0.4,
      depth: 1.2,
    },
    {
      icon: LayoutDashboard,
      label: 'Dashboards',
      color: 'from-[#8B5CF6] to-[#0EA5E9]',
      position: { bottom: '15%', right: '20%' },
      delay: 0.5,
      depth: 1.4,
    },
    {
      icon: Briefcase,
      label: 'Automation',
      color: 'from-[#8B5CF6] via-[#FFFFFF] to-[#8B5CF6]',
      position: { bottom: '20%', left: '5%' },
      delay: 0.6,
      depth: 1.6,
    },
    {
      icon: Cloud,
      label: 'Scraping',
      color: 'from-[#2DD4BF] to-[#0EA5E9]',
      position: { top: '8%', left: '45%' },
      delay: 0.7,
      depth: 1.1,
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      {/* Center Card - MS Full-Stack Developer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, z: -100 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          z: 0,
          rotateX: mousePosition.y * -5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          scale: { duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
          z: { duration: 0.8, delay: 0.8 },
          rotateX: { type: 'spring', stiffness: 50, damping: 20 },
          rotateY: { type: 'spring', stiffness: 50, damping: 20 },
        }}
        className="relative z-10 will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="w-[240px] h-[240px] bg-card/95 backdrop-blur-xl rounded-[32px] border-2 border-border/60 flex flex-col items-center justify-center gap-4 shadow-2xl"
          style={{
            boxShadow: `
              0 20px 60px rgba(139, 92, 246, 0.4),
              0 10px 30px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* AY Logo */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] rounded-[20px] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-4xl">AY</span>
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-1">
              Full-Stack
            </h3>
            <p className="text-base font-semibold text-muted-foreground">
              Developer
            </p>
          </div>

          {/* Glow behind - Reduced for performance */}
          <div
            className="absolute inset-0 rounded-[32px] -z-10 blur-xl opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* Floating Skill Cards */}
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        
        return (
          <motion.div
            key={skill.label}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              x: 0,
              y: 0,
              z: -200,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x * -15 * skill.depth,
              y: mousePosition.y * -15 * skill.depth,
              z: skill.depth * 20,
              rotateX: mousePosition.y * -3 * skill.depth,
              rotateY: mousePosition.x * 3 * skill.depth,
            }}
            transition={{
              opacity: { duration: 0.6, delay: skill.delay },
              scale: { duration: 0.6, delay: skill.delay, ease: [0.22, 1, 0.36, 1] },
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
              z: { type: 'spring', stiffness: 50, damping: 20 },
              rotateX: { type: 'spring', stiffness: 50, damping: 20 },
              rotateY: { type: 'spring', stiffness: 50, damping: 20 },
            }}
            whileHover={{
              scale: 1.1,
              z: skill.depth * 40,
              transition: { duration: 0.2 },
            }}
            className="absolute will-change-transform"
            style={{
              ...skill.position,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Skill Card */}
            <div
              className="relative bg-card/90 backdrop-blur-lg rounded-[20px] border border-border/60 px-5 py-3.5 flex items-center gap-3 cursor-pointer group"
              style={{
                boxShadow: `
                  0 10px 30px rgba(0, 0, 0, 0.1),
                  0 5px 15px rgba(139, 92, 246, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              {/* Icon Circle */}
              <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>

              {/* Label */}
              <span className="text-base font-semibold text-foreground whitespace-nowrap">
                {skill.label}
              </span>

              {/* Subtle glow - Optimized opacity */}
              <div
                className="absolute inset-0 rounded-[20px] -z-10 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${skill.color})`,
                }}
              />
            </div>

            {/* Floating animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: skill.delay,
              }}
              className="absolute inset-0"
            />
          </motion.div>
        );
      })}

      {/* Ambient background effect */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

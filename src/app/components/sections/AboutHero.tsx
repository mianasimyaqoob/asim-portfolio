import { motion } from 'motion/react';

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              About Me
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[#8B5CF6] font-semibold">
              Asim Yaqoob
            </h2>
            <p className="text-xl lg:text-2xl font-medium text-muted-foreground tracking-wide">
              Full-Stack Developer | MERN, React Native & Flutter
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a full-stack developer using MERN, React Native and Flutter to build web and mobile apps for startups and small businesses. I focus on clean UI, smooth user experience, and reliable backend architecture. Recently, I’ve been building automation-heavy, data-driven dashboards and admin panels that help teams save time and make better decisions.
            </p>
          </motion.div>

          {/* Avatar/Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="w-80 h-80 rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#1E293B] flex items-center justify-center text-white relative overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
              }}
            >
              <img
                src="/images/projects/asim.jpeg"
                alt="Asim Yaqoob"
                className="w-full h-full object-cover object-[50%_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


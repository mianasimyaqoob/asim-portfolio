import { motion } from 'motion/react';
import { Code2, Database, Smartphone, Bot, Award, Briefcase } from 'lucide-react';
import { fadeInUpSmall, staggerContainer, staggerItem } from '../../utils/animations';

const skills = [
  { name: 'React / Next.js', level: 'Advanced', icon: Code2, color: 'from-[#8B5CF6] to-[#1E293B]' },
  { name: 'Node.js / Express', level: 'Intermediate to Advanced', icon: Database, color: 'from-[#0EA5E9] to-[#1E293B]' },
  { name: 'Flutter / Dart', level: 'Advanced', icon: Smartphone, color: 'from-[#8B5CF6] to-[#0EA5E9]' },
  { name: 'Python / Automation', level: 'Advanced', icon: Bot, color: 'from-[#8B5CF6] to-[#1E293B]' },
];

const timeline = [
  {
    year: 'Jan 2023 - Present',
    title: 'Freelance Full-Stack Developer',
    organization: 'Upwork & Fiverr',
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>10+ web & mobile projects delivered for international clients.</li>
        <li>Built apps with MERN, React Native, and Flutter.</li>
        <li>Improved app load time by up to 35%.</li>
        <li>Integrated Stripe for secure online payments.</li>
      </ul>
    ),
  },
  {
    year: 'Jun 2024 - Jan 2026',
    title: 'Data Systems Engineer',
    organization: 'Corporate Website Solutions',
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Scraped 10,000+ records per week using Python.</li>
        <li>Automated data collection and saved 60% manual work.</li>
        <li>Cleaned and organized large datasets for reporting.</li>
        <li>Helped maintain reliable data pipelines for internal tools.</li>
      </ul>
    ),
  },
  {
    year: 'Oct 2025 - Feb 2026',
    title: 'Full-Stack Developer (ScholarIQ FYP)',
    organization: 'The University of Lahore',
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Built React, Python, SQLite based scholarship assistant.</li>
        <li>Platform that collects student data and recommends suitable scholarships.</li>
        <li>Includes an AI consultant chatbot and direct application links.</li>
      </ul>
    ),
  },
  {
    year: '2022 - 2026',
    title: 'BSCS',
    organization: 'The University of Lahore, Lahore, Pakistan',
    description: 'Focusing on software engineering, algorithms, and modern web technologies.',
  },
];

const expertise = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', description: '' },
      { name: 'Next.js', description: '' },
      { name: 'TypeScript', description: '' },
      { name: 'Tailwind CSS', description: '' },
      { name: 'Motion', description: '' }
    ],
    color: 'from-[#8B5CF6] to-[#1E293B]',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', description: '' },
      { name: 'React Native', description: '' },
      { name: 'Dart', description: '' }
    ],
    color: 'from-[#8B5CF6] to-[#0EA5E9]',
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    skills: [
      { name: 'Node.js', description: '' },
      { name: 'Python', description: '' },
      { name: 'MongoDB', description: '' },
      { name: 'PostgreSQL', description: '' },
      { name: 'REST APIs', description: '' }
    ],
    color: 'from-[#0EA5E9] to-[#1E293B]',
  },
  {
    title: 'Tools',
    icon: Bot,
    skills: [
      { name: 'Stripe', description: 'Payment integration' },
      { name: 'Web Scraping', description: 'Python, Playwright, Puppeteer' },
      { name: 'Python (Web Scraping & Automation)', description: '' },
      { name: 'Git & GitHub Actions', description: '' },
      { name: 'Vercel & Firebase', description: '' }
    ],
    color: 'from-[#8B5CF6] to-[#1E293B]',
  },
];

export function AboutSections() {
  return (
    <>
      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUpSmall}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Proficiency across the full development stack
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={staggerItem}
                  className="bg-muted rounded-2xl p-8 border border-border/50/50"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                        <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{skill.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                      className={`absolute h-full bg-gradient-to-r ${skill.color} rounded-full opacity-20`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-xs text-muted-foreground italic"
          >
            Based on 3+ years of hands-on experience building web and mobile apps.
          </motion.p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUpSmall}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="relative pl-8 border-l-2 border-[#8B5CF6]"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#8B5CF6] rounded-full" />
                <div
                  className="bg-card rounded-2xl p-8 border border-border/50/50"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-[#8B5CF6] to-[#1E293B]' : 'from-[#0EA5E9] to-[#1E293B]'} rounded-xl flex items-center justify-center text-white`}>
                      {index === 0 ? <Award className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-[#8B5CF6] font-semibold mb-2">{item.organization}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUpSmall}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with daily
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {expertise.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={staggerItem}
                  className="bg-muted rounded-2xl p-8 border border-border/50/50"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.skills.map((skill) => (
                      <li key={typeof skill === 'string' ? skill : skill.name} className="flex flex-col gap-0.5 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color}`} />
                          <span className="font-medium text-sm text-foreground">{typeof skill === 'string' ? skill : skill.name}</span>
                        </div>
                        {typeof skill !== 'string' && skill.description && (
                          <span className="text-[11px] text-[#9CA3AF] ml-3.5 leading-tight">{skill.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}


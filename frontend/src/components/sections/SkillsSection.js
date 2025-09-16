import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'R', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'Java', level: 60 },
      ],
    },
    {
      title: 'Machine Learning / AI',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'NLP', level: 75 },
        { name: 'Computer Vision', level: 70 },
      ],
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Big Data', level: 70 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 65 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
      ],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section bg-rich-black/95">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-slate-gray max-w-2xl mx-auto">
            A comprehensive look at my technical skills and competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-gradient rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'Docker', 'Kubernetes', 'AWS', 'GCP',
                'Azure', 'Jupyter', 'VS Code', 'PyCharm',
                'MongoDB', 'PostgreSQL', 'Redis', 'Linux',
                'CI/CD', 'Agile', 'REST API', 'GraphQL'
              ].map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-primary/20 transition-colors duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
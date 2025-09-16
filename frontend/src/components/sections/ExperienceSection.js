import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'AI Research Engineer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2022 - Present',
      description: [
        'Developing state-of-the-art machine learning models for natural language processing applications',
        'Leading a team of 3 engineers in building an automated document processing system',
        'Improving model accuracy by 35% through advanced feature engineering and hyperparameter optimization',
        'Implementing CI/CD pipelines for machine learning model deployment'
      ]
    },
    {
      title: 'Data Scientist',
      company: 'Data Analytics Pro',
      duration: 'Mar 2020 - Dec 2021',
      description: [
        'Analyzed large datasets to extract insights and develop predictive models',
        'Created interactive dashboards for data visualization using Tableau and PowerBI',
        'Collaborated with business teams to understand requirements and provide data-driven solutions',
        'Implemented A/B testing methodologies to optimize business processes'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Software Solutions Ltd',
      duration: 'Jun 2019 - Feb 2020',
      description: [
        'Developed backend APIs using Flask and Django frameworks',
        'Created automated test suites to ensure code quality',
        'Collaborated with senior developers to improve existing codebases',
        'Participated in agile development processes and daily stand-ups'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-rich-black/95">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-slate-gray max-w-2xl mx-auto">
            A timeline of my professional journey and career growth
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary z-10"></div>
              
              {/* Content */}
              <div className={`card p-6 md:w-[calc(50%-20px)] ${
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <div className="flex items-center mb-3">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                
                <h4 className="text-secondary mb-2">{exp.company}</h4>
                
                <div className="flex items-center text-sm text-slate-gray mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                      <span className="text-slate-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
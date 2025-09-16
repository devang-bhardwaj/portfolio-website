import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Server } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: 'Machine Learning',
      description: 'Building intelligent systems that can learn from data and make predictions or decisions.',
    },
    {
      icon: <Code className="h-6 w-6 text-secondary" />,
      title: 'Software Development',
      description: 'Creating robust and scalable applications with clean and maintainable code.',
    },
    {
      icon: <Server className="h-6 w-6 text-accent" />,
      title: 'Data Science',
      description: 'Extracting insights from data to solve complex problems and drive decision making.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section bg-gradient-to-b from-rich-black to-rich-black/95">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl"></div>
              <img
                src="/images/profile-photo.jpg"
                alt="Devang Bhardwaj"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x450/6E07F3/FFFFFF?text=Devang+Bhardwaj";
                }}
              />
              <div className="absolute inset-0 border-2 border-primary rounded-2xl transform rotate-3"></div>
            </div>
          </motion.div>

          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Python Developer & AI/ML Engineer
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-gray mb-4">
                I am an AI/ML Engineer and Python Developer with a passion for creating intelligent systems 
                that solve real-world problems. With a strong foundation in computer science and mathematics,
                I specialize in developing machine learning models and data-driven applications.
              </p>
              <p className="text-slate-gray mb-6">
                My expertise includes deep learning, natural language processing, computer vision, and 
                data analysis. I am committed to continuous learning and staying updated with the latest 
                advancements in the field of artificial intelligence and machine learning.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <span className="font-medium mr-2">Name:</span>
                <span className="text-slate-gray">Devang Bhardwaj</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a 
                  href="mailto:devang@example.com" 
                  className="text-slate-gray hover:text-secondary transition-colors duration-300"
                >
                  devang@example.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">From:</span>
                <span className="text-slate-gray">Delhi, India</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white/5 p-4 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
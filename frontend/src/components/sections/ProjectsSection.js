import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'AI Image Generation',
      description: 'A deep learning model to generate realistic images from text descriptions using GANs and transformers.',
      image: '/images/projects/project-1.jpg',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'React', 'FastAPI'],
      category: 'ai',
      demoLink: 'https://example.com/ai-image-generation',
      githubLink: 'https://github.com/devangbhardwaj/ai-image-generation',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'An interactive dashboard for business analytics with predictive models for forecasting trends.',
      image: '/images/projects/project-2.jpg',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Plotly', 'Dash'],
      category: 'data',
      demoLink: 'https://example.com/analytics-dashboard',
      githubLink: 'https://github.com/devangbhardwaj/analytics-dashboard',
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'A natural language processing system that analyzes sentiment from customer reviews and social media.',
      image: '/images/projects/project-3.jpg',
      technologies: ['Python', 'NLTK', 'Transformers', 'FastAPI', 'MongoDB'],
      category: 'ai',
      demoLink: 'https://example.com/sentiment-analysis',
      githubLink: 'https://github.com/devangbhardwaj/sentiment-analysis',
    },
    {
      title: 'Personal Finance Manager',
      description: 'A web application that helps users track expenses, set budgets, and visualize spending patterns.',
      image: '/images/projects/project-4.jpg',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'web',
      demoLink: 'https://example.com/finance-manager',
      githubLink: 'https://github.com/devangbhardwaj/finance-manager',
    },
    {
      title: 'Computer Vision Object Detector',
      description: 'Real-time object detection and classification using advanced computer vision techniques.',
      image: '/images/projects/project-5.jpg',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Flask'],
      category: 'ai',
      demoLink: 'https://example.com/object-detector',
      githubLink: 'https://github.com/devangbhardwaj/object-detector',
    },
    {
      title: 'Data Visualization Platform',
      description: 'An interactive platform for visualizing complex datasets with customizable charts and graphs.',
      image: '/images/projects/project-6.jpg',
      technologies: ['JavaScript', 'D3.js', 'React', 'Node.js', 'MongoDB'],
      category: 'data',
      demoLink: 'https://example.com/data-viz-platform',
      githubLink: 'https://github.com/devangbhardwaj/data-viz-platform',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'data', name: 'Data Science' },
    { id: 'web', name: 'Web Development' },
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
    <section id="projects" className="section bg-rich-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Explore my recent projects and applications
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary-gradient text-white'
                  : 'bg-white/5 text-slate-gray hover:bg-white/10'
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/600x340/6E07F3/FFFFFF?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-rich-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-primary/90 transition-colors duration-300"
                      aria-label={`View demo of ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-primary/90 transition-colors duration-300"
                      aria-label={`View code of ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/devangbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <span className="mr-2">View More Projects</span>
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
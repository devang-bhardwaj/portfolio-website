import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });
    
    // Simulate form submission with timeout
    try {
      // Here you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false,
          message: ''
        }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'devang@example.com',
      link: 'mailto:devang@example.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Location',
      value: 'Delhi, India',
      link: null
    },
  ];

  return (
    <section id="contact" className="section bg-rich-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Get in touch with me for collaborations, opportunities, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-4 rounded-full bg-white/5">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-slate-gray hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-gray">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/devangbhardwaj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/devangbhardwaj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/devangbhardwaj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-6">
                Send Me a Message
              </h3>
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-start ${
                  formStatus.isError ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
                }`}>
                  {formStatus.isError ? (
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`btn-primary w-full flex items-center justify-center ${
                      formStatus.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
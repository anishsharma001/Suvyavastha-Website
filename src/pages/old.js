import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { 
  Menu, X, Moon, Sun, ChevronRight, ChevronDown, ArrowRight, 
  Shield, Server, Cloud, BarChart3, Check, Quote, 
  Linkedin, Twitter, Github, Mail, Phone, MapPin, 
  ArrowUp, Users, Zap, Clock, Award, Code, Database,
  GitBranch, Settings, Monitor, Lock, Activity, TrendingUp,
  AlertCircle, ChevronUp, ExternalLink, Star, Globe
} from 'lucide-react';

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // Default safe for SSR
  
    useEffect(() => {
      // This only runs in the browser
      const saved = localStorage.getItem("theme");
      if (saved) {
        setIsDark(saved === "dark");
      } else {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }, []);
  
    useEffect(() => {
      // Update HTML class & localStorage whenever isDark changes
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// Utility Components
const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const variants = {
    primary: 'inline-flex items-center rounded-lg bg-violet-600 px-5 py-3 text-white shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-250 transform hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'inline-flex items-center rounded-lg border border-violet-300 text-violet-600 px-5 py-3 hover:bg-violet-50 dark:text-violet-400 dark:border-violet-700 dark:hover:bg-violet-900/20 focus:outline-none focus:ring-2 focus:ring-violet-300 transition-all duration-250',
    hero: 'inline-flex items-center rounded-lg bg-white/10 px-6 py-3 text-white border border-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-250 backdrop-blur-sm'
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, setIsDark } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Clients', href: '#clients' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">Suvyavastha</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative
                  ${activeSection === item.href.slice(1) 
                    ? 'text-cyan-500 dark:text-cyan-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 dark:bg-cyan-400" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="primary" className="hidden sm:inline-flex">
              Get a Free Consultation
            </Button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 text-base font-medium
                  ${activeSection === item.href.slice(1)
                    ? 'text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                    : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <Button variant="primary" className="w-full justify-center">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add scroll handler for "See Our Work"
  const handleSeeWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#case-studies');
    if (target) {
      const offset = 80;
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-indigo-900"
        style={{
          background: 'radial-gradient(120% 120% at 80% 0%, #6C0BF4 0%, #2A34AA 60%, #1B226B 100%)'
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      </div>

<div
  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
/>

      <Container className="relative z-10 py-32">
        <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-6 border border-white/20">
            <Zap className="w-4 h-4 mr-2" />
            <span>Powering Digital Transformation</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building the Digital Future<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              of Your Business
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Expert IT services, maintenance/SRE, DevOps, and marketplace survey platforms. 
            We design, build, and operate modern software with deep expertise in survey security and fraud prevention.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" className="group animate-pulse">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero" onClick={handleSeeWork}>
              See Our Work
              <ChevronDown className="ml-2 w-4 h-4 animate-bounce" style={{animationDuration: '2s'}} />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-white/70 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
              <div className="text-white/70 text-sm">Response Time</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-white/70 text-sm">Projects Delivered</div>
            </div>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <span className="text-white/70">Trusted by</span>
            <div className="flex space-x-6">
              <div className="text-white font-semibold text-lg hover:text-cyan-400 transition-colors cursor-pointer">Zamplia</div>
              <div className="text-white font-semibold text-lg hover:text-cyan-400 transition-colors cursor-pointer">Logit</div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <span className="block w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
            <span className="block w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
            <span className="block w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </Container>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'IT Services & Solutions',
      description: 'Custom software development, system integration, and digital transformation consulting.',
      features: ['Custom Development', 'API Integration', 'Legacy Modernization']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Software Maintenance & Support',
      description: '24/7 monitoring, incident response, and continuous improvement of your systems.',
      features: ['24/7 Monitoring', 'SRE Practices', 'Performance Optimization']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      description: 'Cloud migration, CI/CD pipelines, and infrastructure as code implementation.',
      features: ['AWS/Azure/GCP', 'Kubernetes', 'Infrastructure as Code']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Marketplace Survey Platform',
      description: 'Specialized expertise in survey routing, fraud detection, and behavioral analytics.',
      features: ['Smart Routing', 'Fraud Prevention', 'Real-time Analytics'],
      featured: true
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT services tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                service.featured ? 'ring-2 ring-violet-500 relative' : ''
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-8 bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Specialized
                </span>
              )}
              <div className="text-cyan-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Expertise Component
const Expertise = () => {
  const capabilities = [
    { icon: <Shield />, title: 'Risk Scoring', desc: 'Advanced fraud detection algorithms' },
    { icon: <GitBranch />, title: 'Smart Re-routing', desc: 'Intelligent traffic distribution' },
    { icon: <Settings />, title: 'Vendor Automation', desc: 'Seamless integration workflows' },
    { icon: <Activity />, title: 'Real-time Ops', desc: 'Live monitoring and analytics' }
  ];

  return (
    <section id="expertise" className="py-20 md:py-28 bg-indigo-900 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Core Expertise: Marketplace Survey Platforms
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Industry-leading solutions for survey routing, fraud prevention, and behavioral analytics
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {capabilities.map((cap, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                {React.cloneElement(cap.icon, { className: 'w-8 h-8 text-cyan-400' })}
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-white/70">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" className="bg-violet-500 hover:bg-violet-600">
            Discuss Your Platform
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

// Clients Component
const Clients = () => {
  const clients = ['Zamplia', 'Logit', 'TechCorp', 'DataFlow', 'CloudScale', 'SecureNet'];

  return (
    <section id="clients" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join the companies that rely on our expertise
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-gray-400 hover:text-violet-600 transition-colors">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Process Component
const Process = () => {
  const steps = [
    { icon: <Globe />, title: 'Discover', desc: 'Understanding your needs and challenges' },
    { icon: <Settings />, title: 'Design', desc: 'Architecting the optimal solution' },
    { icon: <Code />, title: 'Build', desc: 'Developing with best practices' },
    { icon: <Activity />, title: 'Operate', desc: 'Continuous monitoring and improvement' }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our proven methodology ensures project success
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-600 -translate-y-1/2" />
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center relative z-10">
                  {React.cloneElement(step.icon, { className: 'w-10 h-10 text-violet-600' })}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Case Studies Component
const CaseStudies = () => {
  const cases = [
    {
      client: 'Zamplia',
      title: 'Survey Platform Optimization',
      description: 'Reduced fraud by 87% and increased completion rates by 45%',
      metrics: [
        { label: 'Fraud Reduction', value: '87%' },
        { label: 'Completion Rate', value: '+45%' },
        { label: 'Response Time', value: '32ms' }
      ],
      image: 'https://via.placeholder.com/600x400/6C0BF4/ffffff?text=Zamplia'
    },
    {
      client: 'Logit',
      title: 'Cloud Infrastructure Migration',
      description: 'Seamless migration to AWS with 99.99% uptime maintained',
      metrics: [
        { label: 'Cost Savings', value: '42%' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Performance', value: '+3x' }
      ],
      image: 'https://via.placeholder.com/600x400/2A34AA/ffffff?text=Logit'
    }
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Selected Work & Outcomes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real results for real businesses
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((study, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <div className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                  {study.client}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: "Suvyavastha transformed our survey platform. The fraud detection capabilities they implemented saved us millions.",
      author: "Sarah Chen",
      role: "CTO, Zamplia",
      rating: 5
    },
    {
      quote: "Their DevOps expertise helped us achieve true continuous deployment. Our release cycle went from weeks to hours.",
      author: "Michael Rodriguez",
      role: "VP Engineering, Logit",
      rating: 5
    },
    {
      quote: "Professional, innovative, and always exceeding expectations. They're not just vendors, they're partners.",
      author: "Emily Watson",
      role: "Product Director, TechCorp",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Partners Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-violet-200 dark:text-violet-900" />

            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                &quot;{testimonials[current].quote}&quot;
              </p>

              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[current].author}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {testimonials[current].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-violet-600' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Team Component
const Team = () => {
  const team = [
    {
      name: 'Rockstar',
      role: 'CTO',
      image: 'https://via.placeholder.com/300x300/6C0BF4/ffffff?text=RS',
      linkedin: '#'
    },
    {
      name: 'Alex Kumar',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/300x300/2A34AA/ffffff?text=AK',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'DevOps Lead',
      image: 'https://via.placeholder.com/300x300/22D3EE/ffffff?text=PS',
      linkedin: '#'
    },
    {
      name: 'David Chen',
      role: 'Security Expert',
      image: 'https://via.placeholder.com/300x300/B45309/ffffff?text=DC',
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Talented Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The experts behind your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 inline-block">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <a
                  href={member.linkedin}
                  className="absolute inset-0 rounded-full bg-violet-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you approach client engagements?',
      answer: 'We begin with a comprehensive discovery phase to understand your unique challenges and goals. Our approach is collaborative and transparent, ensuring alignment at every stage of the project.'
    },
    {
      question: 'What are typical project timelines?',
      answer: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while enterprise implementations can span 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you offer SLA guarantees?',
      answer: 'Yes, we provide comprehensive SLAs with guaranteed uptime (99.9% standard, 99.99% premium), response times, and resolution commitments tailored to your business needs.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'Security is built into everything we do. We follow industry best practices including encryption at rest and in transit, regular security audits, compliance with standards like SOC 2 and ISO 27001, and continuous monitoring.'
    },
    {
      question: 'Who owns the intellectual property?',
      answer: 'Unless otherwise specified in the contract, all custom code and solutions developed for your project become your intellectual property upon project completion and final payment.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. We\'ll recommend the best approach based on your project requirements and budget.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get answers to common questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    // Check honeypot
    if (formData.honeypot) {
      return;
    }

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Start your digital transformation journey today
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Your company (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              value={formData.honeypot}
              onChange={(e) => handleChange('honeypot', e.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <Button
              onClick={handleSubmit}
              variant="primary"
              disabled={isSubmitting}
              className="w-full justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Mail className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
              Thank you for your message! We&apos;ll get back to you within 24 hours.
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Or email us directly at{' '}
              <a href="mailto:hello@suvyavastha.com" className="text-cyan-500 hover:text-cyan-600 transition-colors">
                hello@suvyavastha.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-gray-900 to-indigo-900">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-white">Suvyavastha</span>
            </div>
            <p className="text-gray-400">
              Building the digital future of your business
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-violet-400 transition-colors">
                  IT Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-violet-400 transition-colors">
                  DevOps & Cloud
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Survey Platforms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="text-gray-400 hover:text-violet-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              Noida, India
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Suvyavastha. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

// Back to Top Component
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 600);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 flex items-center justify-center z-40 transform hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-marquee {
        animation: marquee 30s linear infinite;
      }

      .animate-marquee:hover {
        animation-play-state: paused;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .5; }
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .animate-marquee,
        .animate-pulse {
          animation: none;
        }
      }

      /* Smooth scrolling for the entire page */
      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #6C0BF4;
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #4E0BC6;
      }

      .dark ::-webkit-scrollbar-track {
        background: #1f2937;
      }

      .dark ::-webkit-scrollbar-thumb {
        background: #8D47F7;
      }

      .dark ::-webkit-scrollbar-thumb:hover {
        background: #6C0BF4;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main>
          <Hero />
          <Services />
          <Expertise />
          <Clients />
          <Process />
          <CaseStudies />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;

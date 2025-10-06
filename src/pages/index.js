import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { 
  Menu, X, Moon, Sun, ChevronRight, ChevronDown, ArrowRight, 
  Shield, Server, Cloud, BarChart3, Check, Quote, 
  Linkedin, Twitter, Github, Mail, Phone, MapPin, 
  ArrowUp, Users, Zap, Clock, Award, Code, Database,
  GitBranch, Settings, Monitor, Lock, Activity, TrendingUp,
  AlertCircle, ChevronUp, ExternalLink, Star, Globe,
  Cpu, Layers, Terminal, Gauge, ShieldCheck, Sparkles
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
    primary: 'inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200',
    accent: 'inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'inline-flex items-center rounded-md px-5 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
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
  const [scrolled, setScrolled] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#expertise' },
    { name: 'Clients', href: '#clients' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Suvyavastha
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative
                  ${activeSection === item.href.slice(1) 
                    ? scrolled 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-white'
                    : scrolled
                      ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* <Button variant="accent" className="hidden sm:inline-flex">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button> */}
            {/* <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg transition-colors ${ scrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10' }`} aria-label="Toggle theme" > {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-xl">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-2 text-base font-medium rounded-lg mx-2
                  ${activeSection === item.href.slice(1)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-4">
              <Button variant="accent" className="w-full justify-center">
                Get Started
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

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-gray-900 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-700 via-blue-900 to-gray-900 opacity-50" />
      </div>
      
      {/* Grid pattern overlay */}
<div
  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
/>      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />

      <Container className="relative z-10 py-32">
        <div className={`max-w-5xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm text-blue-300 text-sm mb-8 border border-blue-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-semibold">Enterprise-Grade IT Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              With Modern Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            We architect, build, and scale enterprise software solutions. Specializing in cloud infrastructure, 
            DevOps excellence, and cutting-edge marketplace survey platforms.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="accent" className="text-lg px-8 py-4 shadow-2xl shadow-emerald-500/25">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              View Our Work
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">99.99%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2">50ms</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Avg Response</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white dark:fill-gray-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,56C384,59,480,53,576,48C672,43,768,37,864,40C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"/>
        </svg>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements and scalability needs.',
      features: ['Microservices Architecture', 'API Development', 'Cloud-Native Apps'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'DevOps & SRE',
      description: '24/7 monitoring, automated deployments, and infrastructure reliability engineering.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Multi-cloud strategies, migration services, and cloud optimization for maximum efficiency.',
      features: ['AWS, Azure, GCP', 'Kubernetes', 'Cost Optimization'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Survey Platform Excellence',
      description: 'Advanced marketplace survey solutions with fraud prevention and intelligent routing.',
      features: ['Fraud Detection AI', 'Smart Routing', 'Real-time Analytics'],
      featured: true,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Enterprise Solutions That Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we deliver robust technology solutions that drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                service.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-full">
                  Featured Solution
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 dark:text-blue-400 font-semibold flex items-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Learn more 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Security First', desc: 'Bank-grade security protocols' },
    { icon: <Cpu className="w-8 h-8" />, title: 'AI-Powered', desc: 'Machine learning fraud detection' },
    { icon: <Gauge className="w-8 h-8" />, title: 'High Performance', desc: 'Sub-50ms response times' },
    { icon: <Activity className="w-8 h-8" />, title: 'Real-time Analytics', desc: 'Live dashboard insights' }
  ];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
<div
  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
/>      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Marketplace Survey Platform Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading survey platform solutions with advanced fraud prevention, 
            intelligent routing, and enterprise-grade security
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {capabilities.map((cap, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {React.cloneElement(cap.icon, { className: 'text-emerald-400' })}
              </div>
              <h3 className="font-bold text-lg mb-2">{cap.title}</h3>
              <p className="text-gray-400">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">87%</div>
              <div className="text-gray-400">Fraud Reduction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">3M+</div>
              <div className="text-gray-400">Surveys Processed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" className="text-lg px-8 py-4">
            Explore Platform Features
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

// Clients Component
const Clients = () => {
  const clients = [
    'Zamplia', 'Logit', 'TechCorp', 'DataFlow', 'CloudScale', 'SecureNet',
    'InnovateTech', 'GlobalSys', 'NextGen', 'FutureStack'
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join 150+ companies that rely on our expertise
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">150+</div>
            <div className="text-gray-600 dark:text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">35</div>
            <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Process Component
const Process = () => {
  const steps = [
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: 'Discovery', 
      desc: 'Deep dive into your requirements',
      details: 'Comprehensive analysis of business needs and technical requirements'
    },
    { 
      icon: <Settings className="w-8 h-8" />, 
      title: 'Architecture', 
      desc: 'Design scalable solutions',
      details: 'Create robust, future-proof system architecture'
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: 'Development', 
      desc: 'Build with best practices',
      details: 'Agile development with continuous integration'
    },
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: 'Deployment', 
      desc: 'Launch and optimize',
      details: '24/7 monitoring and continuous optimization'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            How We Deliver Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven methodology that ensures project success from inception to deployment
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{step.desc}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{step.details}</p>
                  </div>
                </div>
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
      industry: 'Market Research',
      title: 'Survey Platform Transformation',
      description: 'Complete overhaul of survey infrastructure resulting in 10x performance improvement',
      challenge: 'Legacy system couldn\'t handle scale, frequent downtime, high fraud rates',
      solution: 'Microservices architecture, AI-powered fraud detection, real-time analytics',
      metrics: [
        { label: 'Fraud Reduction', value: '87%', color: 'text-emerald-600' },
        { label: 'Performance', value: '10x', color: 'text-blue-600' },
        { label: 'Uptime', value: '99.99%', color: 'text-purple-600' },
        { label: 'Cost Savings', value: '45%', color: 'text-orange-600' }
      ]
    },
    {
      client: 'Logit',
      industry: 'Logistics',
      title: 'Cloud-Native Migration',
      description: 'Seamless transition from on-premise to multi-cloud architecture',
      challenge: 'Monolithic architecture, scaling issues, high operational costs',
      solution: 'Kubernetes orchestration, serverless functions, automated CI/CD',
      metrics: [
        { label: 'Deploy Time', value: '-92%', color: 'text-emerald-600' },
        { label: 'Scalability', value: '∞', color: 'text-blue-600' },
        { label: 'OpEx Reduction', value: '60%', color: 'text-purple-600' },
        { label: 'Reliability', value: '99.95%', color: 'text-orange-600' }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Success Stories That Matter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world transformations delivering measurable business impact
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((study, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{study.client}</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {study.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 flex items-center">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
                        <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
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
      quote: "Suvyavastha transformed our entire technology stack. Their expertise in cloud architecture and DevOps has been game-changing for our business.",
      author: "Sarah Chen",
      role: "CTO, Zamplia",
      company: "Zamplia",
      rating: 5
    },
    {
      quote: "The survey platform they built handles millions of responses daily with zero downtime. The fraud detection alone saved us millions.",
      author: "Michael Rodriguez",
      role: "VP Engineering, Logit",
      company: "Logit",
      rating: 5
    },
    {
      quote: "Professional, innovative, and always exceeding expectations. They don't just deliver code, they deliver business value.",
      author: "Emily Watson",
      role: "Product Director, TechCorp",
      company: "TechCorp",
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
    <section className="py-24 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <Quote className="w-12 h-12 text-emerald-400 mb-6" />
            
            <div className="space-y-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-2xl leading-relaxed text-gray-100">
                 &quot;{testimonials[current].quote}&quot
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-emerald-400' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
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
      role: 'CTO & Co-Founder',
      bio: 'Cloud architecture expert with 15+ years experience',
      specialties: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: '#'
    },
    {
      name: 'Alex Kumar',
      role: 'Lead Architect',
      bio: 'Full-stack engineer specializing in distributed systems',
      specialties: ['Microservices', 'React', 'Node.js'],
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'DevOps Lead',
      bio: 'Infrastructure automation and reliability engineering expert',
      specialties: ['Kubernetes', 'Terraform', 'CI/CD'],
      linkedin: '#'
    },
    {
      name: 'David Chen',
      role: 'Security Architect',
      bio: 'Cybersecurity specialist with focus on cloud security',
      specialties: ['Security', 'Compliance', 'Penetration Testing'],
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A talented team of engineers, architects, and innovators driving your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <a
                    href={member.linkedin}
                    className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Want to join our team?</p>
          <Button variant="secondary">
            View Open Positions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
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
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, medium projects 2-4 months, while enterprise implementations can span 4-8 months. We provide detailed timelines during the discovery phase.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes, we provide comprehensive support packages including 24/7 monitoring, regular updates, security patches, and dedicated support teams. Our SLA guarantees 99.9% uptime with response times as low as 15 minutes for critical issues.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in cloud platforms (AWS, Azure, GCP), modern frameworks (React, Node.js, Python), containerization (Docker, Kubernetes), and DevOps tools (Jenkins, GitLab CI, Terraform). We also have deep expertise in AI/ML for fraud detection and analytics.'
    },
    {
      question: 'How do you ensure project success?',
      answer: 'We follow agile methodologies with regular sprints, continuous integration, and frequent client communication. Every project includes dedicated project managers, regular demos, and comprehensive documentation.'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'Security is built into every layer of our solutions. We implement encryption at rest and in transit, regular security audits, penetration testing, compliance with standards (SOC 2, ISO 27001), and continuous monitoring for threats.'
    },
    {
      question: 'How do you handle scalability?',
      answer: 'We design all systems with scalability in mind, using microservices architecture, auto-scaling, load balancing, and cloud-native technologies. Our solutions can handle 100x growth without architecture changes.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
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
    if (formData.honeypot) return;

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Let&#39;s Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you succeed.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                  <a href="mailto:hello@suvyavastha.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    hello@suvyavastha.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sector 62, Noida<br />
                    Uttar Pradesh, India 201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
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
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="John Doe"
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
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="john@company.com"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Company"
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

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
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg">
                Thank you! We&#39;ll get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-16 bg-gray-900 text-gray-400">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Suvyavastha</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building enterprise-grade software solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Custom Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">DevOps & SRE</a></li>
              <li><a href="#expertise" className="hover:text-blue-400 transition-colors">Survey Platforms</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#team" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Suvyavastha. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
          </div>
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
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 transform hover:scale-110"
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
        animation: marquee 40s linear infinite;
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
      
      html {
        scroll-behavior: smooth;
      }
      
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #2563eb, #06b6d4);
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #1d4ed8, #0891b2);
      }
      
      .dark ::-webkit-scrollbar-track {
        background: #1f2937;
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
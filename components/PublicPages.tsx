import React from 'react';
import { Page, Service, BlogPost } from '../types';
import { 
  ArrowRight, CheckCircle, Star, Users, Briefcase, 
  TrendingUp, Globe, Search, MapPin, Mail, Phone,
  Clock, Shield, Zap
} from 'lucide-react';

// --- Shared Components ---
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 text-center">
    {subtitle && <span className="text-blue-400 uppercase tracking-widest text-xs font-bold mb-3 block">{subtitle}</span>}
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-6"></div>
  </div>
);

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] group ${className}`}>
    {children}
  </div>
);

// --- Home Page 1 (General) ---
export const Home1 = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-metallic-900 to-metallic-900 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              #1 Recruitment Agency 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
              Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Elite</span> Corporate Legacies
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              We bridge the gap between world-class talent and industry-leading organizations through data-driven precision and a luxury human-centric approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => setPage(Page.CONTACT)} className="px-8 py-4 rounded-xl bg-white text-metallic-900 font-bold hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Start Hiring
              </button>
              <button onClick={() => setPage(Page.SERVICES)} className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:border-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white/5">
                Explore Services
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in">
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-2xl shadow-2xl translate-y-12 opacity-90 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[400px] w-full" 
                  alt="Executive Woman" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-2xl shadow-2xl -translate-y-8 opacity-90 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[400px] w-full" 
                  alt="Corporate Meeting" 
                />
             </div>
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Placements', value: '15k+' },
            { label: 'Fortune 500 Clients', value: '250+' },
            { label: 'Countries', value: '32' },
            { label: 'Success Rate', value: '98%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-400 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-metallic-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Strategic Talent Solutions" subtitle="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Executive Search", desc: "Retained search for C-suite and board-level appointments." },
              { icon: Users, title: "Team Expansion", desc: "Rapid scaling solutions for high-growth startups and enterprises." },
              { icon: Globe, title: "Global Mobility", desc: "Managing international assignments and cross-border talent acquisition." },
            ].map((s, idx) => (
              <Card key={idx} className="group">
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <s.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
                <button onClick={() => setPage(Page.SERVICE_DETAILS)} className="group flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-wider hover:text-white hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- Home Page 2 (Niche/SaaS Focus) ---
export const Home2 = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <>
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Background Image for Home 2 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
            alt="Tech Team" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-metallic-900/80 to-metallic-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-500/20 text-blue-300 mb-8 backdrop-blur-sm">
            Specialized in SaaS & Tech Recruitment
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter">
            HIRE THE <span className="italic text-blue-500">IMPOSSIBLE</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            We find the 1% of engineering and product talent that traditional agencies miss.
          </p>
          <div className="flex justify-center gap-6">
            <button onClick={() => setPage(Page.CONTACT)} className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/20">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {['AI Engineers', 'Product Managers', 'CTOs', 'Data Scientists'].map((role, i) => (
               <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                 <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{role}</h4>
                 <p className="text-slate-500 text-sm mt-2">View 24 candidates</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- About Page ---
export const About = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20 pb-32">
    <div className="max-w-7xl mx-auto px-6">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
         <div>
            <h1 className="text-5xl font-serif font-bold text-white mb-8">Redefining Recruitment Standards</h1>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Founded in 2010, Lumina started with a simple premise: Talent is the only true competitive advantage in the modern economy.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We operate not as headhunters, but as strategic growth partners. Our methodology combines behavioral psychology, data analytics, and industry intuition.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="border-l-2 border-blue-500 pl-6">
                 <h3 className="text-white font-bold text-xl mb-2">Our Mission</h3>
                 <p className="text-slate-500 text-sm">To accelerate global innovation by connecting visionaries.</p>
               </div>
               <div className="border-l-2 border-blue-500 pl-6">
                 <h3 className="text-white font-bold text-xl mb-2">Our Vision</h3>
                 <p className="text-slate-500 text-sm">A world where every career move is a step towards greatness.</p>
               </div>
            </div>
         </div>
         <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Office" 
              className="rounded-lg shadow-2xl w-full grayscale-[50%] hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-white font-serif text-2xl font-bold">"Excellence is not an act, but a habit."</p>
            </div>
         </div>
       </div>

       <SectionTitle title="Leadership Team" subtitle="The Minds Behind Lumina" />
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alexander Sterling", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
            { name: "Sarah Jenkins", role: "Head of Talent", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
            { name: "Marcus Thorne", role: "Director of Operations", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" }
          ].map((member, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                   <img src={member.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt={member.name} />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm uppercase tracking-wide">{member.role}</p>
             </div>
          ))}
       </div>
    </div>
  </div>
);

// --- Services Page ---
export const Services = ({ setPage }: { setPage: (p: Page) => void }) => {
  const services: Service[] = [
    { id: '1', title: 'Executive Search', description: 'C-Suite, VP, and Board placements.', icon: Briefcase, price: '$50k+' },
    { id: '2', title: 'Technical Recruiting', description: 'Software Engineers, Data Scientists, DevOps.', icon: Zap, price: '$20k+' },
    { id: '3', title: 'RPO Solutions', description: 'Full-cycle recruitment process outsourcing.', icon: TrendingUp, price: 'Custom' },
    { id: '4', title: 'HR Consulting', description: 'Organizational design and compensation strategy.', icon: Users, price: '$200/hr' },
    { id: '5', title: 'Interim Management', description: 'Short-term leadership for critical transitions.', icon: Clock, price: 'Custom' },
    { id: '6', title: 'Talent Mapping', description: 'Comprehensive market intelligence reports.', icon: Search, price: '$5k' },
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
         <SectionTitle title="Our Expertise" subtitle="Comprehensive Solutions" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
               <Card key={s.id} className="hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                        <s.icon className="w-8 h-8" />
                     </div>
                     <span className="text-xs font-bold text-slate-500 border border-slate-700 px-2 py-1 rounded">
                       STARTING AT {s.price}
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-slate-400 mb-8">{s.description}</p>
                  <button onClick={() => setPage(Page.SERVICE_DETAILS)} className="w-full py-3 rounded border border-white/10 text-white font-medium hover:bg-white hover:text-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    View Details
                  </button>
               </Card>
            ))}
         </div>
      </div>
    </div>
  );
};

// --- Service Details Page ---
export const ServiceDetails = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-10 pb-32">
    <div className="h-[40vh] bg-blue-950 relative overflow-hidden flex items-center justify-center mb-20">
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-metallic-900 to-metallic-900/50 z-10"></div>
       <h1 className="relative z-20 text-5xl md:text-7xl font-serif font-bold text-white text-center px-4">Executive Search</h1>
    </div>
    
    <div className="max-w-4xl mx-auto px-6">
       <div className="prose prose-lg prose-invert mb-20">
          <p className="text-xl text-slate-300 leading-relaxed">
             Our retained executive search practice is the cornerstone of Lumina. We focus on placing transformative leaders who can navigate complexity and drive sustainable growth.
          </p>
          <h3 className="text-white mt-12 mb-6 text-2xl font-bold">The Process</h3>
          <ul className="space-y-4">
             {[
               "Needs Analysis & Strategy Definition",
               "Market Mapping & Candidate Identification",
               "In-depth Assessment & Behavioral Interviewing",
               "Presentation of Shortlist",
               "Offer Negotiation & Onboarding"
             ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-white/5">
                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{i+1}</div>
                   <span className="text-slate-300">{item}</span>
                </li>
             ))}
          </ul>
       </div>
       
       <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-12 rounded-2xl border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h3 className="text-3xl font-serif font-bold text-white mb-6 relative z-10">Ready to find your next leader?</h3>
          <button onClick={() => setPage(Page.CONTACT)} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative z-10 shadow-lg">
             Schedule Consultation
          </button>
       </div>
    </div>
  </div>
);

// --- Blog & Blog Details ---
export const Blog = ({ setPage }: { setPage: (p: Page) => void }) => {
  const blogImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", // Team meeting
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", // Data analysis
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", // Modern workspace
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // Group discussion
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", // Handshake/Meeting
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", // Office environment
  ];

  return (
    <div className="pt-20 pb-32 max-w-7xl mx-auto px-6">
       <SectionTitle title="Insights & News" subtitle="Thought Leadership" />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i, idx) => (
             <div key={i} onClick={() => setPage(Page.BLOG_DETAILS)} className="cursor-pointer group">
                <div className="overflow-hidden rounded-xl mb-6 relative">
                   <img src={blogImages[idx]} alt="Blog" className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">TALENT</div>
                </div>
                <div className="text-slate-500 text-sm mb-2">October 12, 2024 • 5 min read</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">The Future of Remote Work in FinTech</h3>
                <p className="text-slate-400 text-sm line-clamp-2">Exploring how decentralized teams are reshaping the financial technology landscape...</p>
             </div>
          ))}
       </div>
    </div>
  );
};

export const BlogDetails = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20 pb-32 max-w-3xl mx-auto px-6">
     <button onClick={() => setPage(Page.BLOG)} className="group text-blue-400 mb-8 flex items-center gap-2 hover:text-white transition-colors duration-300">
       <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
     </button>
     
     <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Blog Hero" className="w-full h-auto" />
     </div>

     <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">The Future of Remote Work in FinTech</h1>
     <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
          alt="Author" 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div>
           <div className="text-white font-bold">Sarah Jenkins</div>
           <div className="text-slate-500 text-sm">Senior HR Analyst</div>
        </div>
     </div>
     <div className="prose prose-invert prose-lg">
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-slate-300">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-white my-8">
           "Talent is no longer bound by geography. The best companies know this and are adapting rapidly."
        </blockquote>
        <p className="text-slate-300">
           Suspendisse potenti. Cras mollis, justo a accumsan suscipit, turpis urna dapibus felis, eu scelerisque mauris purus vitae libero.
        </p>
     </div>
  </div>
);

// --- Contact Page ---
export const Contact = () => (
   <div className="pt-20 pb-32 max-w-7xl mx-auto px-6">
      <SectionTitle title="Get in Touch" subtitle="Start the Conversation" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
         <div className="space-y-8">
            <Card>
               <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                     <MapPin className="text-blue-500" />
                     <span>1000 Luxury Lane, New York, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                     <Phone className="text-blue-500" />
                     <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                     <Mail className="text-blue-500" />
                     <span>hello@lumina-recruit.com</span>
                  </div>
               </div>
            </Card>
            <div className="h-64 rounded-2xl overflow-hidden grayscale invert-[.8]">
               {/* Mock Map */}
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633023222534!5m2!1sen!2sus" width="100%" height="100%" loading="lazy"></iframe>
            </div>
         </div>
         
         <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
               </div>
            </div>
            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-400">Email Address</label>
               <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-400">Subject</label>
               <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Hiring Talent</option>
                  <option>Job Seeker</option>
                  <option>Partnership</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-400">Message</label>
               <textarea rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
               Send Message
            </button>
         </form>
      </div>
   </div>
);

// --- Pricing Page ---
export const Pricing = () => (
   <div className="pt-20 pb-32 max-w-7xl mx-auto px-6">
      <SectionTitle title="Investment Plans" subtitle="Transparent Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
            { name: 'Starter', price: '15%', desc: 'of first year salary', features: ['Contingent Search', '30-Day Guarantee', 'Basic Screening'] },
            { name: 'Growth', price: '20%', desc: 'of first year salary', features: ['Dedicated Recruiter', '60-Day Guarantee', 'Technical Assessments', 'Market Mapping'], active: true },
            { name: 'Enterprise', price: 'Retained', desc: 'Custom Agreement', features: ['Priority Search', '1-Year Guarantee', 'C-Suite Specialists', 'Onsite Consultation', '24/7 Support'] }
         ].map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-2xl border ${plan.active ? 'bg-blue-900/20 border-blue-500' : 'bg-slate-800/50 border-white/10'} flex flex-col`}>
               {plan.active && <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>}
               <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
               <div className="text-4xl font-serif font-bold text-white mb-1">{plan.price}</div>
               <div className="text-slate-500 text-sm mb-8">{plan.desc}</div>
               <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                     <li key={j} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500" /> {f}
                     </li>
                  ))}
               </ul>
               <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${plan.active ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Choose Plan
               </button>
            </div>
         ))}
      </div>
   </div>
);
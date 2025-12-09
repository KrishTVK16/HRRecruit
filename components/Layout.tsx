import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { 
  Menu, X, Briefcase, Users, FileText, Mail, 
  LayoutDashboard, MessageSquare, LogOut, ChevronRight, Settings,
  Globe, Shield
} from 'lucide-react';

// --- Types & Props ---
interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setPage: (page: Page) => void;
}

// --- Header Component ---
const Header: React.FC<{ setPage: (page: Page) => void; currentPage: Page }> = ({ setPage, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', page: Page.HOME_1 },
    { label: 'Services', page: Page.SERVICES },
    { label: 'About', page: Page.ABOUT },
    { label: 'Blog', page: Page.BLOG },
    { label: 'Contact', page: Page.CONTACT },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-metallic-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => setPage(Page.HOME_1)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-metallic-900 flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
              <Briefcase className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-wide">LUMINA</span>
          </div>

          {/* Desktop Nav - visible at 1024px+ */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setPage(item.page)}
                className={`text-sm font-medium tracking-wider transition-colors duration-200 ${
                  currentPage === item.page ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Auth Buttons - visible at 1024px+ */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setPage(Page.LOGIN)}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => setPage(Page.ADMIN_DASHBOARD)}
              className="px-5 py-2.5 rounded-lg bg-white text-metallic-900 font-semibold text-sm hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Admin Demo
            </button>
          </div>

          {/* Mobile Toggle - visible below 1024px */}
          <button 
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - 45% width, 60% height, slides from right */}
      <div className={`fixed top-0 right-0 w-[45%] min-w-[280px] h-[60%] 
        bg-metallic-900 z-40 lg:hidden
        flex flex-col items-center justify-center gap-6
        rounded-bl-2xl shadow-2xl border-l border-b border-white/10
        transition-transform duration-300 ease-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setPage(item.page);
              setIsMobileMenuOpen(false);
            }}
            className={`text-lg font-medium tracking-wider transition-colors duration-200 ${
              currentPage === item.page ? 'text-blue-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        <div className="w-3/4 h-px bg-white/10 my-2"></div>
        
        <button 
          onClick={() => {
            setPage(Page.LOGIN);
            setIsMobileMenuOpen(false);
          }}
          className="text-slate-300 hover:text-white font-medium transition-colors"
        >
          Log In
        </button>
        <button 
          onClick={() => {
            setPage(Page.ADMIN_DASHBOARD);
            setIsMobileMenuOpen(false);
          }}
          className="px-6 py-2.5 rounded-lg bg-white text-metallic-900 font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
        >
          Admin Demo
        </button>
      </div>
    </>
  );
};

// --- Footer Component ---
const Footer: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => (
  <footer className="bg-metallic-900 border-t border-white/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <Briefcase className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-serif font-bold text-white">LUMINA</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Elevating human potential through precision recruitment and strategic talent acquisition. The future of corporate excellence starts here.
        </p>
      </div>
      
      <div>
        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h3>
        <ul className="space-y-4">
          <li><button onClick={() => setPage(Page.ABOUT)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Us</button></li>
          <li><button onClick={() => setPage(Page.HOME_2)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Careers</button></li>
          <li><button onClick={() => setPage(Page.BLOG)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">News & Insights</button></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
        <ul className="space-y-4">
          <li><button onClick={() => setPage(Page.SERVICES)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Executive Search</button></li>
          <li><button onClick={() => setPage(Page.SERVICES)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">RPO Solutions</button></li>
          <li><button onClick={() => setPage(Page.PRICING)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Pricing Plans</button></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
        <ul className="space-y-4">
          <li className="text-slate-400 text-sm">1000 Luxury Lane, Suite 100<br/>New York, NY 10001</li>
          <li className="text-slate-400 text-sm">+1 (555) 123-4567</li>
          <li className="text-slate-400 text-sm">contact@lumina-recruit.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-xs">© 2024 Lumina Recruitment. All rights reserved.</p>
      <div className="flex gap-6">
        <span className="text-slate-500 text-xs hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="text-slate-500 text-xs hover:text-white cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </footer>
);

// --- Public Layout ---
export const PublicLayout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => (
  <div className="min-h-screen bg-metallic-900 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
    <Header currentPage={currentPage} setPage={setPage} />
    <main className="flex-grow pt-20">
      {children}
    </main>
    <Footer setPage={setPage} />
  </div>
);

// --- Admin Layout ---
export const AdminLayout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
  const sidebarItems: NavItem[] = [
    { label: 'Dashboard', page: Page.ADMIN_DASHBOARD, icon: LayoutDashboard },
    { label: 'Users', page: Page.ADMIN_USERS, icon: Users },
    { label: 'Messages', page: Page.ADMIN_MESSAGES, icon: MessageSquare },
    { label: 'Website', page: Page.HOME_1, icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 fixed h-full hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-2">
           <Shield className="w-6 h-6 text-blue-500" />
           <span className="font-bold text-xl tracking-wide">LUMINA ADMIN</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setPage(item.page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === item.page 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => setPage(Page.LOGIN)}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="md:hidden">
            {/* Mobile Toggle Placeholder */}
            <Menu className="text-slate-400" />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">AD</div>
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </header>
        
        <main className="flex-1 p-6 overflow-y-auto bg-[#0b1121]">
          {children}
        </main>
      </div>
    </div>
  );
};
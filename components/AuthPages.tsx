import React from 'react';
import { Page } from '../types';
import { Briefcase, ArrowLeft, Construction, Linkedin, Facebook } from 'lucide-react';

export const Login = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
     {/* Background Decor */}
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
     
     <div className="relative z-10 w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in">
        
        {/* Full Logo Header */}
        <div className="flex flex-col items-center mb-8">
           <div 
             onClick={() => setPage(Page.HOME_1)}
             className="flex items-center gap-2 mb-8 cursor-pointer group"
           >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-metallic-900 flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
                 <Briefcase className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">LUMINA</span>
           </div>
           
           <h2 className="text-xl font-serif font-bold text-white mb-2">Welcome Back</h2>
           <p className="text-slate-400 text-sm">Sign in to your dashboard</p>
        </div>

        <form className="space-y-4">
           <div>
              <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">Email Address</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="name@company.com" />
           </div>
           <div>
              <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">Password</label>
              <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="••••••••" />
           </div>
           
           {/* Remember Me & Forgot Password */}
           <div className="flex items-center justify-between py-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                 <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 accent-blue-600 transition-colors" />
                 <span className="text-slate-400 text-xs font-medium group-hover:text-slate-300 transition-colors">Remember me</span>
              </label>
              <button type="button" className="text-blue-500 hover:text-blue-400 text-xs font-bold transition-colors">
                 Forgot Password?
              </button>
           </div>

           <button type="button" onClick={() => setPage(Page.ADMIN_DASHBOARD)} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80">
              Sign In
           </button>
        </form>
        
        {/* Social Login */}
        <div className="mt-8">
           <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                 <span className="px-2 bg-slate-900 text-slate-500 text-xs uppercase tracking-wider font-semibold">Or continue with</span>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all text-sm font-medium">
                 <Linkedin className="w-4 h-4" />
                 <span>LinkedIn</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all text-sm font-medium">
                 <Facebook className="w-4 h-4" />
                 <span>Facebook</span>
              </button>
           </div>
        </div>

        <div className="mt-8 text-center border-t border-slate-800 pt-6">
           <p className="text-slate-500 text-sm">
              Don't have an account? <button onClick={() => setPage(Page.REGISTER)} className="text-blue-500 hover:text-blue-400 font-bold ml-1 transition-colors">Sign up</button>
           </p>
        </div>
     </div>
  </div>
);

export const Register = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
     {/* Background Decor */}
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
     
     <div className="relative z-10 w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in">
        
        {/* Full Logo Header */}
        <div className="flex flex-col items-center mb-8">
           <div 
             onClick={() => setPage(Page.HOME_1)}
             className="flex items-center gap-2 mb-8 cursor-pointer group"
           >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-metallic-900 flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
                 <Briefcase className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">LUMINA</span>
           </div>
           
           <h2 className="text-xl font-serif font-bold text-white mb-2">Create Account</h2>
           <p className="text-slate-400 text-sm">Join the elite recruitment network</p>
        </div>

        <form className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
              <div>
                 <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">First Name</label>
                 <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="John" />
              </div>
              <div>
                 <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">Last Name</label>
                 <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="Doe" />
              </div>
           </div>
           <div>
              <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">Email Address</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="name@company.com" />
           </div>
           <div>
              <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">Password</label>
              <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="Create a password" />
           </div>
           
           <div className="flex items-start gap-2 py-1">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 accent-blue-600 mt-0.5" />
              <span className="text-slate-400 text-xs leading-relaxed">
                 I agree to the <span className="text-blue-400 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-blue-400 cursor-pointer hover:underline">Privacy Policy</span>.
              </span>
           </div>

           <button type="button" onClick={() => setPage(Page.ADMIN_DASHBOARD)} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80">
              Create Account
           </button>
        </form>
        
        {/* Social Login */}
        <div className="mt-8">
           <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                 <span className="px-2 bg-slate-900 text-slate-500 text-xs uppercase tracking-wider font-semibold">Or sign up with</span>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all text-sm font-medium">
                 <Linkedin className="w-4 h-4" />
                 <span>LinkedIn</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all text-sm font-medium">
                 <Facebook className="w-4 h-4" />
                 <span>Facebook</span>
              </button>
           </div>
        </div>

        <div className="mt-8 text-center border-t border-slate-800 pt-6">
           <p className="text-slate-500 text-sm">
              Already have an account? <button onClick={() => setPage(Page.LOGIN)} className="text-blue-500 hover:text-blue-400 font-bold ml-1 transition-colors">Sign in</button>
           </p>
        </div>
     </div>
  </div>
);

export const ComingSoon = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
     <Construction className="w-20 h-20 text-blue-500 mb-6 animate-pulse relative z-10" />
     <h1 className="text-5xl font-serif font-bold text-white mb-4 relative z-10">Coming Soon</h1>
     <p className="text-slate-400 text-lg max-w-md mb-8 relative z-10">
        We are crafting something extraordinary. This page is currently under development.
     </p>
     <button onClick={() => setPage(Page.HOME_1)} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors relative z-10 backdrop-blur-sm border border-white/5">
        Return Home
     </button>
  </div>
);

export const NotFound = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
     <h1 className="text-[12rem] font-bold text-slate-800/50 mb-4 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">404</h1>
     <h2 className="text-4xl font-serif font-bold text-white mb-4 relative z-10">Page Not Found</h2>
     <p className="text-slate-400 text-lg max-w-md mb-8 relative z-10">
        The page you are looking for has been moved or deleted.
     </p>
     <button onClick={() => setPage(Page.HOME_1)} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors relative z-10 shadow-lg shadow-blue-900/20">
        Return Home
     </button>
  </div>
);
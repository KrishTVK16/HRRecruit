import { LucideIcon } from 'lucide-react';

export enum Page {
  // Public
  HOME_1 = 'home',
  HOME_2 = 'saas-recruitment',
  ABOUT = 'about',
  SERVICES = 'services',
  SERVICE_DETAILS = 'service-details',
  BLOG = 'blog',
  BLOG_DETAILS = 'blog-details',
  CONTACT = 'contact',
  PRICING = 'pricing',
  
  // Auth / Misc
  LOGIN = 'login',
  REGISTER = 'register',
  NOT_FOUND = '404',
  COMING_SOON = 'coming-soon',

  // Admin
  ADMIN_DASHBOARD = 'admin-dashboard',
  ADMIN_USERS = 'admin-users',
  ADMIN_MESSAGES = 'admin-messages',
}

export interface NavItem {
  label: string;
  page: Page;
  icon?: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Pending' | 'Inactive';
  email: string;
}
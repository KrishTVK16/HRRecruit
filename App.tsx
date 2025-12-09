import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { PublicLayout, AdminLayout } from './components/Layout';
import { 
  Home1, Home2, About, Services, ServiceDetails, Blog, BlogDetails, Contact, Pricing 
} from './components/PublicPages';
import { Dashboard, UsersList } from './components/AdminPages';
import { Login, Register, ComingSoon, NotFound } from './components/AuthPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME_1);

  // --- Hash Routing Logic for GitHub Pages Compatibility ---
  
  // 1. Listen for Hash Changes (Browser Back/Forward or Manual URL Entry)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      
      // If no hash, default to Home
      if (!hash) {
        if (currentPage !== Page.HOME_1) setCurrentPage(Page.HOME_1);
        return;
      }

      // Check if the hash matches a valid Page enum value
      const targetPage = Object.values(Page).find(p => p === hash) as Page | undefined;
      
      if (targetPage) {
        if (currentPage !== targetPage) setCurrentPage(targetPage);
      } else {
        // If hash is invalid, show 404
        if (currentPage !== Page.NOT_FOUND) setCurrentPage(Page.NOT_FOUND);
      }
    };

    // Initial check on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // 2. Update Hash when Page State Changes (Internal Navigation)
  useEffect(() => {
    const targetHash = currentPage === Page.HOME_1 ? '' : currentPage;
    
    // Only update if different to avoid history loops
    if (window.location.hash.slice(1) !== targetHash) {
      window.location.hash = targetHash;
    }
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [currentPage]);


  // --- Render Logic ---
  const renderPage = () => {
    switch (currentPage) {
      // Public Pages
      case Page.HOME_1:
        return <Home1 setPage={setCurrentPage} />;
      case Page.HOME_2:
        return <Home2 setPage={setCurrentPage} />;
      case Page.ABOUT:
        return <About setPage={setCurrentPage} />;
      case Page.SERVICES:
        return <Services setPage={setCurrentPage} />;
      case Page.SERVICE_DETAILS:
        return <ServiceDetails setPage={setCurrentPage} />;
      case Page.BLOG:
        return <Blog setPage={setCurrentPage} />;
      case Page.BLOG_DETAILS:
        return <BlogDetails setPage={setCurrentPage} />;
      case Page.CONTACT:
        return <Contact />;
      case Page.PRICING:
        return <Pricing />;
      default:
        return <NotFound setPage={setCurrentPage} />;
    }
  };

  const isAdminPage = [
    Page.ADMIN_DASHBOARD, 
    Page.ADMIN_USERS, 
    Page.ADMIN_MESSAGES
  ].includes(currentPage);

  const isAuthPage = [
    Page.LOGIN, 
    Page.REGISTER, 
    Page.NOT_FOUND, 
    Page.COMING_SOON
  ].includes(currentPage);

  // Render Auth Pages (No Layout)
  if (isAuthPage) {
    if (currentPage === Page.LOGIN) return <Login setPage={setCurrentPage} />;
    if (currentPage === Page.REGISTER) return <Register setPage={setCurrentPage} />;
    if (currentPage === Page.COMING_SOON) return <ComingSoon setPage={setCurrentPage} />;
    return <NotFound setPage={setCurrentPage} />;
  }

  // Render Admin Layout
  if (isAdminPage) {
    return (
      <AdminLayout currentPage={currentPage} setPage={setCurrentPage}>
        {currentPage === Page.ADMIN_DASHBOARD && <Dashboard />}
        {currentPage === Page.ADMIN_USERS && <UsersList />}
        {currentPage === Page.ADMIN_MESSAGES && <ComingSoon setPage={setCurrentPage} />}
      </AdminLayout>
    );
  }

  // Render Public Layout (Default)
  return (
    <PublicLayout currentPage={currentPage} setPage={setCurrentPage}>
      {renderPage()}
    </PublicLayout>
  );
};

export default App;

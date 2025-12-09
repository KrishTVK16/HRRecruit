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
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Wrapper for page navigation with smooth transition
  const navigateToPage = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  // --- Hash Routing Logic for GitHub Pages Compatibility ---
  
  // 1. Listen for Hash Changes (Browser Back/Forward or Manual URL Entry)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      
      // If no hash, default to Home
      if (!hash) {
        if (currentPage !== Page.HOME_1) navigateToPage(Page.HOME_1);
        return;
      }

      // Check if the hash matches a valid Page enum value
      const targetPage = Object.values(Page).find(p => p === hash) as Page | undefined;
      
      if (targetPage) {
        if (currentPage !== targetPage) navigateToPage(targetPage);
      } else {
        // If hash is invalid, show 404
        if (currentPage !== Page.NOT_FOUND) navigateToPage(Page.NOT_FOUND);
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
    
    // Smooth scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);


  // --- Render Logic ---
  const renderPage = () => {
    switch (currentPage) {
      // Public Pages
      case Page.HOME_1:
        return <Home1 setPage={navigateToPage} />;
      case Page.HOME_2:
        return <Home2 setPage={navigateToPage} />;
      case Page.ABOUT:
        return <About setPage={navigateToPage} />;
      case Page.SERVICES:
        return <Services setPage={navigateToPage} />;
      case Page.SERVICE_DETAILS:
        return <ServiceDetails setPage={navigateToPage} />;
      case Page.BLOG:
        return <Blog setPage={navigateToPage} />;
      case Page.BLOG_DETAILS:
        return <BlogDetails setPage={navigateToPage} />;
      case Page.CONTACT:
        return <Contact />;
      case Page.PRICING:
        return <Pricing />;
      default:
        return <NotFound setPage={navigateToPage} />;
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

  // Page transition wrapper
  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div 
      className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      {children}
    </div>
  );

  // Render Auth Pages (No Layout)
  if (isAuthPage) {
    return (
      <PageWrapper>
        {currentPage === Page.LOGIN && <Login setPage={navigateToPage} />}
        {currentPage === Page.REGISTER && <Register setPage={navigateToPage} />}
        {currentPage === Page.COMING_SOON && <ComingSoon setPage={navigateToPage} />}
        {currentPage === Page.NOT_FOUND && <NotFound setPage={navigateToPage} />}
      </PageWrapper>
    );
  }

  // Render Admin Layout
  if (isAdminPage) {
    return (
      <PageWrapper>
        <AdminLayout currentPage={currentPage} setPage={navigateToPage}>
          {currentPage === Page.ADMIN_DASHBOARD && <Dashboard />}
          {currentPage === Page.ADMIN_USERS && <UsersList />}
          {currentPage === Page.ADMIN_MESSAGES && <ComingSoon setPage={navigateToPage} />}
        </AdminLayout>
      </PageWrapper>
    );
  }

  // Render Public Layout (Default)
  return (
    <PageWrapper>
      <PublicLayout currentPage={currentPage} setPage={navigateToPage}>
        {renderPage()}
      </PublicLayout>
    </PageWrapper>
  );
};

export default App;
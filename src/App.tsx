/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdultAgeNotice } from './components/AdultAgeNotice';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { VenuesPage } from './pages/VenuesPage';
import { EventsPage } from './pages/EventsPage';
import { CreatorsPage } from './pages/CreatorsPage';
import { CommunityPage } from './pages/CommunityPage';
import { CareersPage } from './pages/CareersPage';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#080809] text-[#F3F1EE] flex flex-col font-sans selection:bg-[#D51F36] selection:text-white">
          {/* Discrete 18+ Adult Classification Notice */}
          <AdultAgeNotice />

          {/* Editorial Sticky Header */}
          <Header />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/venues" element={<VenuesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/creators" element={<CreatorsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Institutional Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

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
import { RegionPage } from './pages/RegionPage';
import { StatePage } from './pages/StatePage';
import { VenueDetailPage } from './pages/VenueDetailPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { EventsPage } from './pages/EventsPage';
import { CreatorsPage } from './pages/CreatorsPage';
import { CommunityPage } from './pages/CommunityPage';
import { CareersPage } from './pages/CareersPage';
import { ClientAreaPage } from './pages/ClientAreaPage';

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
        <div className="min-h-screen bg-[#080809] text-[#F3F1EE] flex flex-col font-sans selection:bg-[#FF173E] selection:text-white">
          {/* Mandatory 18+ Adult Classification Notice */}
          <AdultAgeNotice />

          {/* Compact Editorial Header */}
          <Header />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              {/* Core Geographic Flow: HOME → REGION → STATE → VENUE */}
              <Route path="/" element={<HomePage />} />
              <Route path="/regions/:regionSlug" element={<RegionPage />} />
              <Route path="/states/:stateCode" element={<StatePage />} />
              <Route path="/venues/:venueSlug" element={<VenueDetailPage />} />

              {/* Categorized Directory */}
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:categorySlug" element={<CategoriesPage />} />

              {/* Auxiliary Menus & Modules */}
              <Route path="/destinations" element={<HomePage />} />
              <Route path="/venues" element={<CategoriesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/creators" element={<CreatorsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/client-area" element={<ClientAreaPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Institutional Discrete Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

import React, { useState, useEffect } from 'react';
import { PageId, Specialty } from './types';
import { SPECIALTIES } from './data/hospitalData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { SpecialtyDetailModal } from './components/SpecialtyDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { InsurancePage } from './pages/InsurancePage';
import { FeedbackPage } from './pages/FeedbackPage';
import { ReachUsPage } from './pages/ReachUsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentSpecialty, setAppointmentSpecialty] = useState<string | undefined>();
  const [appointmentDoctor, setAppointmentDoctor] = useState<string | undefined>();
  const [activeSpecialtyModal, setActiveSpecialtyModal] = useState<Specialty | null>(null);

  // Sync hash routing for natural browser history & deep links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'facilities', 'insurance', 'feedback', 'reach-us'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else if (hash.startsWith('specialty-')) {
        const specId = hash.replace('specialty-', '');
        const found = SPECIALTIES.find((s) => s.id === specId);
        if (found) {
          setActiveSpecialtyModal(found);
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenAppointmentModal = (specialtyId?: string, doctorName?: string) => {
    setAppointmentSpecialty(specialtyId);
    setAppointmentDoctor(doctorName);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectSpecialty = (specialtyId: string) => {
    const spec = SPECIALTIES.find((s) => s.id === specialtyId);
    if (spec) {
      setActiveSpecialtyModal(spec);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#26353D]">
      
      {/* Top Header Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onSelectSpecialty={handleSelectSpecialty}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onSelectSpecialty={handleSelectSpecialty}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            onNavigate={navigateTo}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}

        {currentPage === 'insurance' && (
          <InsurancePage
            onNavigate={navigateTo}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}

        {currentPage === 'feedback' && (
          <FeedbackPage
            onNavigate={navigateTo}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}

        {currentPage === 'reach-us' && (
          <ReachUsPage
            onNavigate={navigateTo}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectSpecialty={handleSelectSpecialty}
      />

      {/* Consultation Request Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        preselectedSpecialty={appointmentSpecialty}
        preselectedDoctor={appointmentDoctor}
      />

      {/* Specialty In-Depth Overview Modal */}
      <SpecialtyDetailModal
        specialty={activeSpecialtyModal}
        onClose={() => setActiveSpecialtyModal(null)}
        onBookAppointment={(specialtyId, doctorName) => {
          setActiveSpecialtyModal(null);
          handleOpenAppointmentModal(specialtyId, doctorName);
        }}
        onSelectDoctor={(doctorId) => {
          setActiveSpecialtyModal(null);
          navigateTo('about');
        }}
      />

    </div>
  );
}

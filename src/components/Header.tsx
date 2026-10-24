import React, { useState } from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, Menu, X, Calendar, AlertCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'insurance', label: 'Insurance' },
    { id: 'feedback', label: 'Patient Feedback' },
    { id: 'reach-us', label: 'Reach Us' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Quiet Top Utility / Emergency Announcement Bar */}
      <div className="bg-[#173B4B] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#173B4B]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#E2E7E6]">
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">Avinash Hospitals</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Kovilambakkam, Chennai</span>
            <span aria-hidden="true" className="text-white/40 hidden md:inline">·</span>
            <span className="hidden md:inline text-white/90">30-Bedded Multispecialty Care</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:inline text-white/70">Emergency & Ambulance:</span>
            <a
              href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#EBF3F2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#397A78] fill-[#397A78]" />
              <span className="tabular-nums font-semibold">{HOSPITAL_INFO.contacts.primaryPhone}</span>
            </a>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
            <a
              href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`}
              className="hidden sm:inline font-medium text-white/90 hover:text-white tabular-nums transition-colors"
            >
              {HOSPITAL_INFO.contacts.landline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E7E6] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark Element */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397A78] rounded p-1 shrink-0"
            aria-label="Avinash Hospitals Home"
          >
            <div className="w-10 h-10 rounded bg-[#173B4B] text-white flex items-center justify-center font-bold text-lg font-heading tracking-tight shadow-sm shrink-0">
              AH
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#173B4B] font-heading whitespace-nowrap">
                Avinash Hospitals
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#397A78] uppercase whitespace-nowrap">
                Transparency in Healthcare
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-Line Text with Underline State) */}
          <nav className="hidden xl:flex items-center gap-7 text-[14px] font-medium text-[#26353D]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#173B4B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#397A78] rounded ${
                    isActive ? 'text-[#173B4B] font-semibold' : 'text-[#6B777C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#397A78] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Phone Connect */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#173B4B] bg-[#F7F8F5] border border-[#E2E7E6] rounded hover:border-[#397A78] hover:text-[#397A78] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hospital</span>
            </a>

            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#173B4B] hover:bg-[#0F2631] active:bg-[#0F2631] rounded shadow-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397A78]"
            >
              <Calendar className="w-4 h-4 text-[#397A78]" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-[#26353D] hover:bg-[#F7F8F5] border border-[#E2E7E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397A78]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#E2E7E6] bg-white px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base py-2 font-medium border-b border-[#E2E7E6]/60 transition-colors ${
                      isActive ? 'text-[#173B4B] font-semibold' : 'text-[#6B777C]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#F7F8F5] border border-[#E2E7E6] text-sm font-semibold text-[#173B4B]"
                >
                  <Phone className="w-4 h-4 text-[#397A78]" />
                  <span>Call +91 7700933009</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="w-full py-3 px-4 rounded bg-[#173B4B] text-white text-sm font-semibold shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#397A78]" />
                  <span>Request Doctor Appointment</span>
                </button>
              </div>

              <div className="mt-2 p-3 bg-[#F7F8F5] rounded border border-[#E2E7E6] text-xs text-[#6B777C] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#B93B36] shrink-0 mt-0.5" />
                <span>For emergency trauma or ambulance assistance, dial directly: <strong className="text-[#173B4B]">+91 7700933009</strong></span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

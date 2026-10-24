import React, { useState } from 'react';
import { PageId, Specialty } from '../types';
import { SPECIALTIES, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import {
  Search,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  User,
  Building,
  HelpCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorName?: string) => void;
  onSelectSpecialty: (specialtyId: string) => void;
  initialSpecialtyId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onSelectSpecialty,
  initialSpecialtyId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Surgical', 'Medical', 'Specialized', 'Diagnostics & Rehab'];

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.procedures.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      
      {/* Page Header */}
      <section className="bg-white border-b border-[#E2E7E6] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-3 block">
              CLINICAL DEPARTMENTS & PROCEDURES
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              Multispecialty medical services for your family.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              Explore our verified clinical specialties, surgical procedures, diagnostic facilities, and rehabilitation care offered at Avinash Hospitals, Kovilambakkam.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-[#F7F8F5] border-b border-[#E2E7E6] py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#173B4B] text-white shadow-xs'
                      : 'bg-white text-[#6B777C] hover:text-[#173B4B] border border-[#E2E7E6]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#6B777C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search procedures or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-16 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-[#E2E7E6] p-8">
              <p className="text-base font-semibold text-[#173B4B]">No medical services matching your search criteria.</p>
              <p className="text-xs text-[#6B777C] mt-1">Try searching for generic terms like "fracture", "laparoscopic", or "physiotherapy".</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-[#173B4B] bg-[#F7F8F5] border border-[#E2E7E6] rounded hover:border-[#397A78]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredSpecialties.map((specialty, index) => {
              const doc = specialty.associatedDoctor
                ? DOCTORS.find((d) => d.name === specialty.associatedDoctor)
                : undefined;

              return (
                <div
                  key={specialty.id}
                  id={specialty.id}
                  className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-10 shadow-xs hover:border-[#397A78] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Specialty Details & Procedures */}
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-semibold text-[#397A78] uppercase tracking-wider">
                          {String(index + 1).padStart(2, '0')} · {specialty.category}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#173B4B]">
                        {specialty.name}
                      </h2>

                      <p className="text-sm text-[#26353D] leading-relaxed">
                        {specialty.fullDescription}
                      </p>

                      {/* Procedures Section */}
                      <div className="pt-2">
                        <h3 className="text-xs font-semibold text-[#6B777C] uppercase tracking-wider mb-3">
                          Procedures & Treatments Offered
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {specialty.procedures.map((proc, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2 text-xs text-[#26353D] p-2 bg-[#F7F8F5] rounded border border-[#E2E7E6]/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                              <span className="font-medium">{proc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Facilities used */}
                      <div className="pt-2">
                        <span className="text-[11px] font-semibold text-[#6B777C] uppercase tracking-wider block mb-1.5">
                          Clinical Support Facilities
                        </span>
                        <div className="flex flex-wrap gap-2 text-xs">
                          {specialty.facilitiesUsed.map((fac, fIdx) => (
                            <span
                              key={fIdx}
                              className="px-2.5 py-1 rounded bg-[#F7F8F5] border border-[#E2E7E6] text-[#26353D]"
                            >
                              {fac}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Doctor Card & Actions */}
                    <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E2E7E6] pt-6 lg:pt-0 lg:pl-8 space-y-6">
                      
                      {doc ? (
                        <div className="p-4 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] space-y-3">
                          <span className="text-[11px] font-semibold text-[#397A78] uppercase tracking-wider block">
                            Department Specialist
                          </span>
                          <div className="flex items-center gap-3">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              referrerPolicy="no-referrer"
                              className="w-14 h-14 rounded object-cover border border-[#E2E7E6] shrink-0"
                            />
                            <div>
                              <h4 className="text-sm font-bold font-heading text-[#173B4B]">{doc.name}</h4>
                              <p className="text-xs text-[#6B777C]">{doc.qualifications}</p>
                              <p className="text-[11px] text-[#397A78] font-medium mt-0.5">{doc.role}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] space-y-2 text-xs text-[#6B777C]">
                          <strong className="text-[#173B4B] block font-heading text-sm">Consultant Evaluation</strong>
                          <p>Consultations for this specialty are scheduled by appointment with visiting and hospital-panel physicians.</p>
                        </div>
                      )}

                      {/* Patient Preparation Guidance */}
                      <div className="text-xs text-[#6B777C] space-y-1.5 p-3 rounded bg-white border border-[#E2E7E6]">
                        <span className="font-semibold text-[#26353D] block">Patient Guidance:</span>
                        <p>Please carry all prior diagnostic scans, prescriptions, and health insurance policy documents to your visit.</p>
                      </div>

                      {/* Booking Action */}
                      <div className="space-y-2 pt-2">
                        <button
                          onClick={() => onOpenAppointmentModal(specialty.id, doc?.name)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs sm:text-sm font-semibold rounded transition-colors shadow-xs"
                        >
                          <Calendar className="w-4 h-4 text-[#397A78]" />
                          <span>Book Consultation</span>
                        </button>

                        <a
                          href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#E2E7E6] hover:border-[#397A78] text-[#173B4B] text-xs font-semibold rounded transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#397A78]" />
                          <span>Call Reception: {HOSPITAL_INFO.contacts.primaryPhone}</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })
          )}

        </div>
      </section>

      {/* Hospital Transparency Note */}
      <section className="py-12 bg-white border-t border-[#E2E7E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-2">
          <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block">
            Clinical Transparency
          </span>
          <p className="text-xs text-[#6B777C] leading-relaxed">
            All listed clinical procedures and consultations are carried out based on individual doctor evaluations and appropriate indications. Avinash Hospitals does not guarantee unverified surgical outcomes; all care is guided by clinical standards and transparent patient counseling.
          </p>
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { PageId } from '../types';
import { FACILITIES, HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <section className="bg-white border-b border-[#E2E7E6] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-3 block">
              INFRASTRUCTURE & CLINICAL SUPPORT
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              Essential facilities, thoughtfully organized.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              From our sterile modular operation theatre and digital X-ray suite to our 24/7 in-house pharmacy, Avinash Hospitals provides dependable support infrastructure for surgical and medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Medical Suites (OT and Radiology) */}
      <section className="py-16 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Modular OT Suite */}
            <div className="bg-white rounded-lg border border-[#E2E7E6] overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <img
                  src={HOSPITAL_INFO.images.modularOT}
                  alt="Modular Operation Theatre at Avinash Hospitals"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider">
                      Surgical Infrastructure
                    </span>
                    <span className="text-xs text-[#6B777C] font-mono">Sterile Airflow</span>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-[#173B4B]">
                    Modular Operation Theatre
                  </h2>
                  <p className="text-sm text-[#26353D] leading-relaxed">
                    Designed with precision modular panels, laminar air flow, ceiling-mounted surgical lights, and advanced anesthetic monitoring stations to support sterile orthopedic replacements, general laparoscopy, and reconstructive procedures.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#6B777C] pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                      <span>HEPA filtration and strict infection control barrier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                      <span>Multi-parameter patient vital monitoring systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-[#F7F8F5] border-t border-[#E2E7E6] flex items-center justify-between">
                <span className="text-xs text-[#6B777C]">Available for scheduled & emergency surgery</span>
                <button
                  onClick={onOpenAppointmentModal}
                  className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] transition-colors"
                >
                  Surgical Consultations →
                </button>
              </div>
            </div>

            {/* Digital Radiology Suite */}
            <div className="bg-white rounded-lg border border-[#E2E7E6] overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <img
                  src={HOSPITAL_INFO.images.diagnostics}
                  alt="Digital X-ray & Radiology Suite"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider">
                      Diagnostic Imaging
                    </span>
                    <span className="text-xs text-[#6B777C] font-mono">Digital Radiography</span>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-[#173B4B]">
                    Digital X-ray & Imaging Suite
                  </h2>
                  <p className="text-sm text-[#26353D] leading-relaxed">
                    High-definition digital radiology offering low-dose, rapid radiographic imaging for skeletal fractures, joint evaluations, chest conditions, and spinal trauma, with instant digital availability for consulting physicians.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#6B777C] pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                      <span>Immediate high-resolution digital imaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                      <span>Daily timings: 8:00 AM – 8:00 PM (Emergency on-call)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-[#F7F8F5] border-t border-[#E2E7E6] flex items-center justify-between">
                <span className="text-xs text-[#6B777C]">Report access for doctor review</span>
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                  className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] transition-colors"
                >
                  Call Radiology Desk →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Comprehensive Facilities List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2 block">
              ALL HOSPITAL FACILITIES
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#173B4B]">
              Integrated diagnostic, nursing, and recovery support.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="p-6 sm:p-8 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#397A78] mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{facility.availability}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#173B4B] mb-2">
                    {facility.name}
                  </h3>

                  <p className="text-xs font-medium text-[#26353D] mb-3">
                    {facility.shortDescription}
                  </p>

                  <p className="text-xs text-[#6B777C] leading-relaxed">
                    {facility.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E7E6] flex items-center justify-between text-xs">
                  <span className="text-[#6B777C]">Avinash Hospitals</span>
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                    className="font-semibold text-[#173B4B] hover:text-[#397A78]"
                  >
                    Direct Inquiry
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Help Banner */}
          <div className="mt-16 p-8 bg-[#173B4B] rounded-lg text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Need information about hospital admission or diagnostic slots?</h3>
              <p className="text-xs text-white/80 mt-1">Our hospital reception desk can assist you with timings, doctor schedules, and test preparation.</p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
              className="px-6 py-3 bg-white text-[#173B4B] text-xs sm:text-sm font-semibold rounded hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
            >
              Call: {HOSPITAL_INFO.contacts.primaryPhone}
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

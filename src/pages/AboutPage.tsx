import React from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { Shield, Target, Users, MapPin, Phone, ArrowRight, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E2E7E6] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-3">
              ABOUT AVINASH HOSPITALS
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              A healthcare foundation built on clinical transparency.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              Established to provide accessible, patient-first multispecialty medical care for families in Kovilambakkam, Chennai, and nearby neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Story & Community Commitment */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase">
                OUR COMMITMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
                Healthcare built around the needs of our community.
              </h2>
              
              <p className="text-base text-[#26353D] leading-relaxed">
                Avinash Hospitals was established with a commitment to providing quality healthcare to the local community. As a 30-bedded multispecialty hospital, it serves patients requiring general medical care as well as specialist evaluation, treatment, and referral services.
              </p>

              <p className="text-base text-[#6B777C] leading-relaxed">
                Our services include orthopedic and trauma care, plastic and reconstructive surgery, surgical specialties, diagnostics, physiotherapy, and other medical services offered by the hospital. We emphasize prompt consultations, accurate diagnostic assessments, and careful clinical follow-up.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-[#26353D]">
                <div className="p-4 bg-white rounded border border-[#E2E7E6]">
                  <h3 className="font-bold text-sm text-[#173B4B] font-heading mb-1">30 Inpatient Beds</h3>
                  <p className="text-[#6B777C]">Clean general wards and private recovery rooms with 24-hour nursing supervision.</p>
                </div>
                <div className="p-4 bg-white rounded border border-[#E2E7E6]">
                  <h3 className="font-bold text-sm text-[#173B4B] font-heading mb-1">Modern Diagnostics</h3>
                  <p className="text-[#6B777C]">In-house digital X-ray suite, fully equipped clinical laboratory, and 24/7 pharmacy.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#E2E7E6] shadow-sm bg-white">
                <img
                  src={HOSPITAL_INFO.images.buildingHero}
                  alt="Avinash Hospitals Exterior, Kovilambakkam"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover"
                />
                <div className="p-5 bg-white border-t border-[#E2E7E6] space-y-1">
                  <div className="text-xs font-bold text-[#173B4B] font-heading">Avinash Hospitals, Kovilambakkam</div>
                  <div className="text-xs text-[#6B777C]">165, Thiruvin Nagar, 200ft Radial Road, Chennai – 600129</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Motto and Vision Section */}
      <section className="py-20 bg-white border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase">
              FOUNDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#173B4B]">
              Our Motto & Hospital Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] space-y-4">
              <div className="w-10 h-10 rounded bg-[#173B4B] text-white flex items-center justify-center font-bold text-sm">
                <Shield className="w-5 h-5 text-[#397A78]" />
              </div>
              <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block">
                Hospital Motto
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#173B4B]">
                "Transparency in Healthcare"
              </h3>
              <p className="text-sm text-[#6B777C] leading-relaxed">
                Medical decisions should always be clear to patients and their families. We take time to explain treatment plans, procedure risks, recovery expectations, and treatment estimates openly, enabling families to make informed healthcare choices.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] space-y-4">
              <div className="w-10 h-10 rounded bg-[#173B4B] text-white flex items-center justify-center font-bold text-sm">
                <Target className="w-5 h-5 text-[#397A78]" />
              </div>
              <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block">
                Hospital Vision
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#173B4B]">
                "To do our best to provide quality treatment that supports good health and well-being."
              </h3>
              <p className="text-sm text-[#6B777C] leading-relaxed">
                We are committed to delivering rigorous medical care guided by experienced physicians and compassionate nursing staff, supporting our patients from the initial outpatient evaluation through complete recovery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership & Medical Team */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2 block">
              CLINICAL LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
              Experienced consultants guiding hospital care.
            </h2>
            <p className="text-base text-[#6B777C] mt-2">
              Our clinical departments are led by verified medical professionals with extensive training and specialized clinical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-md object-cover border border-[#E2E7E6] shrink-0"
                    />
                    <div>
                      <span className="text-[11px] font-semibold text-[#397A78] uppercase tracking-wider block">
                        {doc.role}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-mono text-[#6B777C]">{doc.qualifications}</p>
                      <p className="text-xs text-[#26353D] font-medium mt-1">{doc.specialty}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#6B777C] leading-relaxed mb-5">
                    {doc.summary}
                  </p>

                  <div className="border-t border-[#E2E7E6] pt-4">
                    <h4 className="text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-2">
                      Key Clinical Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26353D]">
                      {doc.clinicalFocus.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#397A78] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E7E6] flex items-center justify-between">
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                    className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#397A78]" />
                    <span>Inquire Timings</span>
                  </a>

                  <button
                    onClick={() => onOpenAppointmentModal(undefined, doc.name)}
                    className="px-4 py-2 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs font-semibold rounded transition-colors"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#173B4B]">
            Visit Avinash Hospitals in Kovilambakkam
          </h2>
          <p className="text-sm text-[#6B777C] max-w-xl mx-auto">
            165, Thiruvin Nagar, 200ft Radial Road, Kovilambakkam, Chennai – 600129. Directly accessible along the arterial radial corridor.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('reach-us')}
              className="px-6 py-3 bg-[#173B4B] text-white text-sm font-semibold rounded hover:bg-[#0F2631] transition-colors"
            >
              Get Directions & Map
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 bg-[#F7F8F5] border border-[#E2E7E6] text-[#173B4B] text-sm font-semibold rounded hover:border-[#397A78] transition-colors"
            >
              Explore Medical Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

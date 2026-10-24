import React from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';
import { Phone, Mail, MapPin, ExternalLink, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectSpecialty?: (specialtyId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectSpecialty }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpecialtyClick = (specialtyId: string) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(specialtyId);
    } else {
      onNavigate('services');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173B4B] text-white border-t border-[#173B4B]/30 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Hospital Identity & Mission (Span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#397A78] text-white flex items-center justify-center font-bold text-lg font-heading">
                AH
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white tracking-tight">Avinash Hospitals</h3>
                <p className="text-xs font-medium text-[#EBF3F2]/80 uppercase tracking-wider">30-Bedded Multispecialty Hospital</p>
              </div>
            </div>

            <p className="text-sm text-white/75 leading-relaxed mb-6">
              Avinash Hospitals was established with a commitment to providing quality healthcare to the local community in Kovilambakkam and South Chennai. Guided by our founding motto: <span className="text-white font-medium italic">"Transparency in Healthcare"</span>.
            </p>

            <div className="p-4 rounded bg-white/5 border border-white/10 text-xs text-white/80 space-y-2">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Emergency & Trauma Care:</strong>
                  <span>24 Hours / 7 Days On-Duty</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Outpatient Consultations:</strong>
                  <span>Monday – Saturday: 9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#397A78] mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors">Facilities</button>
              </li>
              <li>
                <button onClick={() => handleNav('insurance')} className="hover:text-white transition-colors">Insurance</button>
              </li>
              <li>
                <button onClick={() => handleNav('feedback')} className="hover:text-white transition-colors">Patient Feedback</button>
              </li>
              <li>
                <button onClick={() => handleNav('reach-us')} className="hover:text-white transition-colors">Reach Us</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Specialties (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#397A78] mb-5">
              Clinical Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {SPECIALTIES.slice(0, 8).map((spec) => (
                <li key={spec.id}>
                  <button
                    onClick={() => handleSpecialtyClick(spec.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {spec.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-[#EBF3F2] font-medium hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View all 16+ specialties →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#397A78] mb-5">
              Location & Contact
            </h4>
            
            <div className="space-y-4 text-xs text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#397A78] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Avinash Hospitals</p>
                  <p>{HOSPITAL_INFO.address.line1}</p>
                  <p>{HOSPITAL_INFO.address.line2}</p>
                  <p>{HOSPITAL_INFO.address.city} – {HOSPITAL_INFO.address.postalCode}, {HOSPITAL_INFO.address.state}</p>
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#397A78] hover:text-[#EBF3F2] mt-1 font-medium transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#397A78] shrink-0" />
                <div>
                  <span className="block text-[11px] text-white/60">Primary / Emergency Call</span>
                  <a href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`} className="text-white font-semibold hover:underline tabular-nums text-sm">
                    {HOSPITAL_INFO.contacts.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#397A78] shrink-0" />
                <div>
                  <span className="block text-[11px] text-white/60">Landline Desk</span>
                  <a href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`} className="text-white hover:underline tabular-nums">
                    {HOSPITAL_INFO.contacts.landline}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#397A78] shrink-0" />
                <div>
                  <span className="block text-[11px] text-white/60">Email Inquiries</span>
                  <a href={`mailto:${HOSPITAL_INFO.contacts.email}`} className="text-white hover:underline">
                    {HOSPITAL_INFO.contacts.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            <span>Copyright © 2026 Avinash Hospitals. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('insurance')} className="hover:text-white transition-colors">
              Insurance & Billing Notes
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('reach-us')} className="hover:text-white transition-colors">
              Hospital Location & Map
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('feedback')} className="hover:text-white transition-colors">
              Patient Care Desk
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

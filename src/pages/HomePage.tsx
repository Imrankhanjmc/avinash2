import React, { useState } from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO, DOCTORS, SPECIALTIES, FACILITIES } from '../data/hospitalData';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Building2,
  Activity,
  MapPin,
  Mail,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send,
  AlertCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorName?: string) => void;
  onSelectSpecialty: (specialtyId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
  onSelectSpecialty,
}) => {
  // Contact enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [enquiryErrors, setEnquiryErrors] = useState<{ [key: string]: string }>({});
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);

  // Specialty category tab state
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Surgical', 'Medical', 'Specialized', 'Diagnostics & Rehab'];

  const filteredSpecialties = activeCategory === 'All'
    ? SPECIALTIES
    : SPECIALTIES.filter((s) => s.category === activeCategory);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!enquiryForm.name.trim()) errors.name = 'Please provide your full name';
    const cleanPhone = enquiryForm.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errors.phone = 'Please provide a valid 10-digit telephone number';
    if (enquiryForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryForm.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!enquiryForm.message.trim()) errors.message = 'Please enter your message or enquiry';

    setEnquiryErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setEnquirySubmitting(true);
    setTimeout(() => {
      setEnquirySubmitting(false);
      setEnquirySubmitted(true);
      setEnquiryForm({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* =========================================================================
          SECTION 01 — HERO (Editorial Balanced Two-Column Layout)
          ========================================================================= */}
      <section className="bg-white border-b border-[#E2E7E6] pt-8 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Introductory Label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#397A78] uppercase">
                <span>AVINASH HOSPITALS</span>
                <span aria-hidden="true">·</span>
                <span>KOVILAMBAKKAM, CHENNAI</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#173B4B] tracking-tight leading-[1.12] text-balance">
                Thoughtful care. Closer to home.
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-[#6B777C] font-normal leading-relaxed max-w-2xl">
                Quality multispecialty healthcare, experienced doctors, and essential medical services for you and your family on the 200ft Radial Road.
              </p>

              {/* Positioning & Tagline Metadata */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#26353D]">
                <span className="font-semibold px-3 py-1.5 rounded bg-[#F7F8F5] border border-[#E2E7E6]">
                  30-Bedded Multispecialty Hospital
                </span>
                <span className="font-medium px-3 py-1.5 rounded bg-[#F7F8F5] border border-[#E2E7E6] text-[#397A78]">
                  Transparency in Healthcare
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#173B4B] hover:bg-[#0F2631] text-white text-sm font-semibold rounded shadow-sm transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E2E7E6] hover:border-[#397A78] text-[#173B4B] text-sm font-semibold rounded hover:bg-[#F7F8F5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#397A78]" />
                  <span>Call the Hospital</span>
                </a>
              </div>

            </div>

            {/* Right Hospital Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-[#E2E7E6] shadow-sm bg-[#F7F8F5]">
                <img
                  src={HOSPITAL_INFO.images.buildingHero}
                  alt="Avinash Hospitals Facade, Kovilambakkam, Chennai"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                
                {/* Subtle Authentic Caption */}
                <div className="p-4 bg-white/95 border-t border-[#E2E7E6] text-xs text-[#26353D] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#173B4B] block">Avinash Hospitals Campus</span>
                    <span className="text-[#6B777C]">165, Thiruvin Nagar, 200ft Radial Road</span>
                  </div>
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#397A78] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — A SHORT INTRODUCTION
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase">
                ABOUT AVINASH HOSPITALS
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight leading-snug">
                Healthcare built around the needs of our community.
              </h2>

              <p className="text-base text-[#26353D] leading-relaxed">
                Avinash Hospitals was established with a commitment to providing quality healthcare to the local community. As a 30-bedded multispecialty hospital, it serves patients requiring general medical care as well as specialist evaluation, treatment, and referral services.
              </p>

              <p className="text-base text-[#6B777C] leading-relaxed">
                Our services include orthopedic and trauma care, plastic and reconstructive surgery, surgical specialties, diagnostics, physiotherapy, and other medical services offered by the hospital.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#173B4B] hover:text-[#397A78] transition-colors group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-[#E2E7E6]">
                    <img
                      src={HOSPITAL_INFO.images.modularOT}
                      alt="Modular Operation Theatre"
                      referrerPolicy="no-referrer"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-[#E2E7E6]">
                    <h3 className="font-heading font-bold text-sm text-[#173B4B]">Modular OT Suite</h3>
                    <p className="text-xs text-[#6B777C] mt-1">Sterile airflow environment for orthopedic & general surgeries.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 sm:pt-10">
                  <div className="p-4 bg-white rounded-lg border border-[#E2E7E6]">
                    <h3 className="font-heading font-bold text-sm text-[#173B4B]">Digital Diagnostics</h3>
                    <p className="text-xs text-[#6B777C] mt-1">Direct digital X-ray and automated clinical laboratory testing.</p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-[#E2E7E6]">
                    <img
                      src={HOSPITAL_INFO.images.diagnostics}
                      alt="Digital X-ray and Diagnostics"
                      referrerPolicy="no-referrer"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — TRUST AND HOSPITAL OVERVIEW (Restrained Typographic Row)
          ========================================================================= */}
      <section className="bg-white border-b border-[#E2E7E6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E7E6]">
            
            <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0">
              <div className="text-2xl lg:text-3xl font-bold font-heading text-[#173B4B] tabular-nums">
                30 Beds
              </div>
              <div className="text-sm font-semibold text-[#26353D] mt-1">
                Inpatient Capacity
              </div>
              <div className="text-xs text-[#6B777C] mt-1">
                General ward, private rooms, and postoperative recovery.
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <div className="text-2xl lg:text-3xl font-bold font-heading text-[#173B4B]">
                Multispecialty
              </div>
              <div className="text-sm font-semibold text-[#26353D] mt-1">
                Clinical Departments
              </div>
              <div className="text-xs text-[#6B777C] mt-1">
                Orthopedics, reconstructive surgery, laparoscopic, and medicine.
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <div className="text-2xl lg:text-3xl font-bold font-heading text-[#173B4B]">
                Qualified
              </div>
              <div className="text-sm font-semibold text-[#26353D] mt-1">
                Medical Professionals
              </div>
              <div className="text-xs text-[#6B777C] mt-1">
                Experienced surgeons, doctors, and compassionate nursing staff.
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <div className="text-2xl lg:text-3xl font-bold font-heading text-[#173B4B]">
                24 / 7
              </div>
              <div className="text-sm font-semibold text-[#26353D] mt-1">
                Emergency & Pharmacy
              </div>
              <div className="text-xs text-[#6B777C] mt-1">
                Round-the-clock pharmacy and emergency trauma assistance.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — MEDICAL SPECIALTIES (Directory with Clean Category Filter)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2">
                OUR SPECIALTIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
                Care across a range of medical specialties.
              </h2>
              <p className="text-base text-[#6B777C] mt-2 max-w-2xl">
                Explore our medical departments and find the care relevant to your needs.
              </p>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex flex-wrap gap-1 p-1 bg-white rounded border border-[#E2E7E6]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#173B4B] text-white shadow-xs'
                      : 'text-[#6B777C] hover:text-[#173B4B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredSpecialties.map((specialty) => (
              <div
                key={specialty.id}
                className="bg-white rounded border border-[#E2E7E6] p-5 flex flex-col justify-between hover:border-[#397A78] transition-colors"
              >
                <div>
                  <div className="text-[11px] font-semibold text-[#397A78] uppercase tracking-wider mb-1.5">
                    {specialty.category}
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#173B4B] mb-2 leading-snug">
                    {specialty.name}
                  </h3>
                  <p className="text-xs text-[#6B777C] leading-relaxed line-clamp-3 mb-4">
                    {specialty.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E7E6]/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectSpecialty(specialty.id)}
                    className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Services</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(specialty.id, specialty.associatedDoctor)}
                    className="text-xs text-[#397A78] hover:text-[#173B4B] font-medium"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E2E7E6] hover:border-[#173B4B] text-[#173B4B] text-sm font-semibold rounded transition-colors"
            >
              <span>View Detailed Procedures on Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — FEATURED SERVICES (Alternating Editorial Layout)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
              Medical services for different stages of care.
            </h2>
            <p className="text-base text-[#6B777C] mt-2">
              Our clinical care is organized around six comprehensive treatment groups with experienced doctors and supportive hospital infrastructure.
            </p>
          </div>

          {/* Group 01 & 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* 01. Orthopedics and Trauma */}
            <div className="p-8 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] uppercase tracking-wider block mb-2">
                  01. Orthopedics & Trauma Care
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#173B4B] mb-3">
                  Restoring mobility and bone health.
                </h3>
                <p className="text-sm text-[#6B777C] leading-relaxed mb-6">
                  Fracture management, casting, joint replacement, spine-related procedures, and orthopedic care under the leadership of Dr. V. V. Prasad.
                </p>

                <ul className="space-y-2 text-xs text-[#26353D] mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>POP and casting for fractures and limb injuries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Knee replacement and hip replacement surgeries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Spine evaluation, injections, and surgical interventions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Shoulder, wrist, and hand fracture management</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E2E7E6] flex items-center justify-between">
                <span className="text-xs text-[#6B777C]">Dr. V. V. Prasad (MBBS, MS.Ortho)</span>
                <button
                  onClick={() => onSelectSpecialty('orthopedics')}
                  className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1"
                >
                  <span>Specialty Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 02. Plastic & Reconstructive Surgery */}
            <div className="p-8 rounded-lg bg-[#F7F8F5] border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] uppercase tracking-wider block mb-2">
                  02. Plastic & Reconstructive Surgery
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#173B4B] mb-3">
                  Reconstructive, burns, and aesthetic care.
                </h3>
                <p className="text-sm text-[#6B777C] leading-relaxed mb-6">
                  Reconstructive procedures, wound care, burns surgery, hand surgery, nerve surgery, and clinical aesthetic procedures guided by Dr. Rohini Prasad.
                </p>

                <ul className="space-y-2 text-xs text-[#26353D] mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Trauma wound care, flaps, and skin grafting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Hand and peripheral nerve surgery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Burns surgery, scar revision, and contracture release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0" />
                    <span>Abdominoplasty, liposuction, and breast procedures</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E2E7E6] flex items-center justify-between">
                <span className="text-xs text-[#6B777C]">Dr. Rohini Prasad (MBBS, MS, MCh)</span>
                <button
                  onClick={() => onSelectSpecialty('plastic-surgery')}
                  className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1"
                >
                  <span>Specialty Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Group 03, 04, 05, 06 in 4-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] block mb-1">03. Laparoscopic Surgery</span>
                <h4 className="text-base font-bold font-heading text-[#173B4B] mb-2">General & Keyhole Care</h4>
                <p className="text-xs text-[#6B777C] leading-relaxed mb-4">
                  Hernia repair, gallbladder surgery (lap cholecystectomy), appendectomy, and soft tissue procedures.
                </p>
              </div>
              <button
                onClick={() => onSelectSpecialty('general-surgery')}
                className="text-xs font-semibold text-[#173B4B] hover:underline text-left inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] block mb-1">04. Women's Health</span>
                <h4 className="text-base font-bold font-heading text-[#173B4B] mb-2">Gynecology & Maternity</h4>
                <p className="text-xs text-[#6B777C] leading-relaxed mb-4">
                  Antenatal services, elective LSCS, laparoscopic hysterectomy, and menstrual disorder management.
                </p>
              </div>
              <button
                onClick={() => onSelectSpecialty('gynecology')}
                className="text-xs font-semibold text-[#173B4B] hover:underline text-left inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] block mb-1">05. Physiotherapy</span>
                <h4 className="text-base font-bold font-heading text-[#173B4B] mb-2">Rehab & Pain Relief</h4>
                <p className="text-xs text-[#6B777C] leading-relaxed mb-4">
                  Postoperative rehabilitation, knee arthritis care, IFT, back pain therapy, and recovery exercises.
                </p>
              </div>
              <button
                onClick={() => onSelectSpecialty('physiotherapy')}
                className="text-xs font-semibold text-[#173B4B] hover:underline text-left inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded border border-[#E2E7E6] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#397A78] block mb-1">06. Diagnostics & Lab</span>
                <h4 className="text-base font-bold font-heading text-[#173B4B] mb-2">Imaging & Testing</h4>
                <p className="text-xs text-[#6B777C] leading-relaxed mb-4">
                  Digital X-ray, clinical laboratory hematology & biochemistry, ultrasound, and 24/7 pharmacy.
                </p>
              </div>
              <button
                onClick={() => onNavigate('facilities')}
                className="text-xs font-semibold text-[#173B4B] hover:underline text-left inline-flex items-center gap-1"
              >
                <span>View Facilities</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — DOCTORS AND MEDICAL TEAM (Verified Profiles with Real Photos)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2">
              OUR MEDICAL TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
              Meet the people behind your care.
            </h2>
            <p className="text-base text-[#6B777C] mt-2">
              Experienced consultants dedicated to transparent diagnoses, careful surgical interventions, and attentive patient recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg border border-[#E2E7E6] overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 sm:p-8">
                    {/* Doctor Portrait */}
                    <div className="sm:col-span-5">
                      <div className="aspect-square rounded-md overflow-hidden border border-[#E2E7E6] bg-[#F7F8F5]">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="sm:col-span-7 flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[#397A78] uppercase tracking-wider">
                        {doc.role}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#173B4B] mt-1">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#6B777C] mt-1">
                        {doc.qualifications}
                      </p>
                      <p className="text-xs font-semibold text-[#26353D] mt-2">
                        {doc.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-sm text-[#6B777C] leading-relaxed mb-5">
                      {doc.summary}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-2">
                        Areas of Clinical Work
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26353D]">
                        {doc.clinicalFocus.map((focus, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-[#397A78] font-bold">·</span>
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#F7F8F5] border-t border-[#E2E7E6] flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                    className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#397A78]" />
                    <span>Call Desk for Timings</span>
                  </a>

                  <button
                    onClick={() => onOpenAppointmentModal(undefined, doc.name)}
                    className="px-4 py-2 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs font-semibold rounded transition-colors inline-flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#397A78]" />
                    <span>Consult with {doc.name.split(' ')[0]} {doc.name.split(' ').slice(-1)[0]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — FACILITIES (Clean, Image-Led Layout)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2">
                HOSPITAL FACILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
                Essential facilities, thoughtfully organized.
              </h2>
              <p className="text-base text-[#6B777C] mt-2 max-w-2xl">
                A clean clinical environment equipped with modern surgical theatres, digital imaging, continuous pharmacy, and dedicated nursing care.
              </p>
            </div>

            <button
              onClick={() => onNavigate('facilities')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#173B4B] hover:text-[#397A78] transition-colors whitespace-nowrap"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Facility Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-[#E2E7E6]">
              <img
                src={HOSPITAL_INFO.images.modularOT}
                alt="Modular Operation Theatre"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
              <div className="p-4 bg-[#F7F8F5] border-t border-[#E2E7E6] text-xs text-[#26353D]">
                <strong className="text-[#173B4B]">Featured Facility: Modular Operation Theatre</strong>
                <p className="text-[#6B777C] mt-0.5">Laminar airflow and sterile environment designed for precision orthopedic and surgical procedures.</p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-lg overflow-hidden border border-[#E2E7E6]">
              <img
                src={HOSPITAL_INFO.images.diagnostics}
                alt="Digital X-ray Diagnostics"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
              <div className="p-4 bg-[#F7F8F5] border-t border-[#E2E7E6] text-xs text-[#26353D]">
                <strong className="text-[#173B4B]">Featured Facility: Digital X-ray Suite</strong>
                <p className="text-[#6B777C] mt-0.5">Rapid high-resolution digital imaging for accurate fracture and chest evaluations.</p>
              </div>
            </div>
          </div>

          {/* Facilities Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACILITIES.slice(0, 8).map((fac) => (
              <div key={fac.id} className="p-5 bg-[#F7F8F5] rounded border border-[#E2E7E6] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#397A78] block mb-1">
                    {fac.availability}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#173B4B] mb-2">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-[#6B777C] leading-relaxed">
                    {fac.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — PATIENT EXPERIENCE (Authentic Patient Guidance, Zero Fake Reviews)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase">
            PATIENT FEEDBACK & SUPPORT
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
            Have a question about visiting Avinash Hospitals?
          </h2>

          <p className="text-base sm:text-lg text-[#6B777C] leading-relaxed max-w-2xl mx-auto">
            In keeping with our commitment to transparency in healthcare, we welcome direct enquiries and patient feedback. Contact our team for information about services, appointments, and hospital visits.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('reach-us')}
              className="w-full sm:w-auto px-6 py-3 bg-[#173B4B] hover:bg-[#0F2631] text-white text-sm font-semibold rounded shadow-sm transition-colors"
            >
              Contact the Hospital
            </button>

            <button
              onClick={() => onNavigate('feedback')}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-[#E2E7E6] hover:border-[#173B4B] text-[#173B4B] text-sm font-semibold rounded transition-colors"
            >
              Share Patient Feedback
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — INSURANCE AND BILLING (Clear, Factual Guidance)
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#173B4B] text-white rounded-lg p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#397A78]">
                  INSURANCE AND BILLING
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Information about health insurance coverage.
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  For information about private health insurance, coverage, documentation, and applicable payment procedures, please contact Avinash Hospitals directly. Our administrative desk assists with insurance paperwork and reimbursement claim documents.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#EBF3F2]">
                  <ShieldCheck className="w-4 h-4 text-[#397A78]" />
                  <span>Itemized billing and verified discharge summaries provided for policy claims.</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white text-[#173B4B] hover:bg-[#F7F8F5] font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#397A78]" />
                  <span className="tabular-nums">Call: {HOSPITAL_INFO.contacts.primaryPhone}</span>
                </a>

                <button
                  onClick={() => onNavigate('insurance')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/20"
                >
                  <span>View Insurance Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — ABOUT AND VALUES (Motto and Vision)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5] border-b border-[#E2E7E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-2">
              OUR GUIDING PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B]">
              Our commitment to transparent healthcare.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white rounded-lg border border-[#E2E7E6] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#397A78] block">
                Hospital Motto
              </span>
              <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                "Transparency in Healthcare"
              </h3>
              <p className="text-sm text-[#6B777C] leading-relaxed">
                We believe that trust between patients and medical professionals is formed through clarity in diagnosis, honest discussions about treatment options, and open billing without unexpected surprises.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-[#E2E7E6] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#397A78] block">
                Hospital Vision
              </span>
              <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                "To do our best to provide quality treatment that supports good health and well-being."
              </h3>
              <p className="text-sm text-[#6B777C] leading-relaxed">
                Dedicated to clinical diligence, ethical practice, and accessible multispecialty medical care for families across Kovilambakkam, Keelkattalai, Medavakkam, and the greater Chennai region.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — LOCATION AND CONTACT
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#E2E7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold tracking-wider text-[#397A78] uppercase">
                VISIT AVINASH HOSPITALS
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B] tracking-tight">
                We're here when you need us.
              </h2>

              <p className="text-base text-[#6B777C] leading-relaxed">
                Conveniently located on the 200ft Radial Road in Kovilambakkam, offering straightforward accessibility from Keelkattalai, Medavakkam, Velachery, and Pallavaram.
              </p>

              <div className="p-6 bg-[#F7F8F5] rounded-lg border border-[#E2E7E6] space-y-4 text-sm text-[#26353D]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#397A78] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173B4B] font-heading">Avinash Hospitals</strong>
                    <p>{HOSPITAL_INFO.address.line1}</p>
                    <p>{HOSPITAL_INFO.address.line2}</p>
                    <p>{HOSPITAL_INFO.address.city} – {HOSPITAL_INFO.address.postalCode}, {HOSPITAL_INFO.address.state}</p>
                    <p className="text-xs text-[#6B777C] mt-1">{HOSPITAL_INFO.address.landmark}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E7E6] space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#397A78] shrink-0" />
                    <div>
                      <span className="text-xs text-[#6B777C] block">Mobile / Urgent Care</span>
                      <a href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`} className="font-semibold text-[#173B4B] hover:underline tabular-nums">
                        {HOSPITAL_INFO.contacts.primaryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#397A78] shrink-0" />
                    <div>
                      <span className="text-xs text-[#6B777C] block">Landline Desk</span>
                      <a href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`} className="text-[#26353D] hover:underline tabular-nums">
                        {HOSPITAL_INFO.contacts.landline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#397A78] shrink-0" />
                    <div>
                      <span className="text-xs text-[#6B777C] block">Email</span>
                      <a href={`mailto:${HOSPITAL_INFO.contacts.email}`} className="text-[#26353D] hover:underline">
                        {HOSPITAL_INFO.contacts.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-white border border-[#E2E7E6] hover:border-[#173B4B] text-[#173B4B] text-xs font-semibold rounded transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map Card & Transport Guide */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Interactive Map Visual Frame */}
              <div className="rounded-lg overflow-hidden border border-[#E2E7E6] bg-[#F7F8F5] relative shadow-sm">
                <iframe
                  title="Avinash Hospitals Location on Google Maps"
                  src="https://maps.google.com/maps?q=165%20Thiruvin%20Nagar%20200ft%20Radial%20Road%20Kovilambakkam%20Chennai%20600129&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[360px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="p-3 bg-white border-t border-[#E2E7E6] flex items-center justify-between text-xs text-[#6B777C]">
                  <span>200ft Radial Road, Kovilambakkam</span>
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#397A78] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Navigate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Operating Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#F7F8F5] rounded border border-[#E2E7E6]">
                  <div className="flex items-center gap-2 font-semibold text-[#173B4B] mb-1">
                    <Clock className="w-4 h-4 text-[#397A78]" />
                    <span>Emergency & Pharmacy</span>
                  </div>
                  <p className="text-[#6B777C]">Open 24 Hours, 7 Days a week for trauma, urgent admissions, and medications.</p>
                </div>

                <div className="p-4 bg-[#F7F8F5] rounded border border-[#E2E7E6]">
                  <div className="flex items-center gap-2 font-semibold text-[#173B4B] mb-1">
                    <Calendar className="w-4 h-4 text-[#397A78]" />
                    <span>OPD Consultations</span>
                  </div>
                  <p className="text-[#6B777C]">Monday – Saturday: 9:00 AM – 8:00 PM. Prior consultation booking advised.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — CONTACT FORM (Validated with Clear States)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#173B4B]">
              How can we help you?
            </h2>
            <p className="text-base text-[#6B777C] max-w-xl mx-auto">
              Send us your enquiry and our team can assist you with information about the hospital and its services.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-10 shadow-xs">
            {enquirySubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#EBF3F2] rounded-full flex items-center justify-center mx-auto text-[#397A78]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                  Message Received
                </h3>
                <p className="text-sm text-[#6B777C] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Avinash Hospitals. Our staff has received your enquiry and will respond promptly via your provided contact details.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setEnquirySubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-[#173B4B] bg-[#F7F8F5] border border-[#E2E7E6] rounded hover:border-[#397A78]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-name" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#B93B36]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Enter your name"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                        enquiryErrors.name ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                      }`}
                    />
                    {enquiryErrors.name && <p className="text-xs text-[#B93B36] mt-1">{enquiryErrors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[#B93B36]">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="e.g. 9840012345"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                        enquiryErrors.phone ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                      }`}
                    />
                    {enquiryErrors.phone && <p className="text-xs text-[#B93B36] mt-1">{enquiryErrors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#6B777C] font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                        enquiryErrors.email ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                      }`}
                    />
                    {enquiryErrors.email && <p className="text-xs text-[#B93B36] mt-1">{enquiryErrors.email}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-message" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                      Enquiry or Medical Question <span className="text-[#B93B36]">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      placeholder="How can we assist you with hospital services or consultations?"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                        enquiryErrors.message ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                      }`}
                    />
                    {enquiryErrors.message && <p className="text-xs text-[#B93B36] mt-1">{enquiryErrors.message}</p>}
                  </div>

                </div>

                <div className="text-xs text-[#6B777C]">
                  Please do not send sensitive personal health records through general inquiry forms. For immediate emergency triage, dial <strong className="text-[#173B4B] tabular-nums">{HOSPITAL_INFO.contacts.primaryPhone}</strong>.
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={enquirySubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#173B4B] hover:bg-[#0F2631] text-white text-sm font-semibold rounded shadow-sm disabled:opacity-50 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#397A78]" />
                    <span>{enquirySubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

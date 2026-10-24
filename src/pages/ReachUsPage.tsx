import React, { useState } from 'react';
import { PageId } from '../types';
import { HOSPITAL_INFO } from '../data/hospitalData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  CheckCircle2,
  Navigation,
  Bus,
  Car
} from 'lucide-react';

interface ReachUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const ReachUsPage: React.FC<ReachUsPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Please provide your name';
    const cleanPhone = form.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!form.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    }, 500);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <section className="bg-white border-b border-[#E2E7E6] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-3 block">
              LOCATION & CONTACT CHANNELS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              Reach Avinash Hospitals.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              We are located on the 200ft Radial Road in Kovilambakkam, Chennai. Connect with us by phone, email, or visit our hospital premises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Location Details + Interactive Map + Form */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#397A78] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Hospital Address</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                    Avinash Hospitals
                  </h3>
                  <p className="text-sm text-[#26353D] mt-1 leading-relaxed">
                    165, Thiruvin Nagar, 200ft Radial Road,<br />
                    Kovilambakkam, Chennai – 600129,<br />
                    Tamil Nadu, India.
                  </p>
                  <p className="text-xs text-[#6B777C] mt-2">
                    Landmark: Situated along the 200ft Radial Road connecting Keelkattalai & Medavakkam to Velachery / Pallavaram.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7F8F5] hover:bg-[#EBF3F2] border border-[#E2E7E6] text-[#173B4B] text-xs font-semibold rounded transition-colors w-full justify-center"
                  >
                    <Navigation className="w-4 h-4 text-[#397A78]" />
                    <span>Open in Google Maps Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Telephone Cards */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-8 space-y-5">
                <div className="text-xs font-semibold text-[#397A78] uppercase tracking-wider">
                  Direct Phone Lines
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded bg-[#F7F8F5] border border-[#E2E7E6] flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#173B4B] block text-sm">Primary Mobile / Urgent</span>
                      <span className="text-[#6B777C]">24/7 Trauma, Ambulance & Admissions</span>
                    </div>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                      className="px-3 py-1.5 bg-[#173B4B] text-white rounded font-bold tabular-nums hover:bg-[#0F2631] transition-colors"
                    >
                      {HOSPITAL_INFO.contacts.primaryPhone}
                    </a>
                  </div>

                  <div className="p-3 rounded bg-[#F7F8F5] border border-[#E2E7E6] flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#173B4B] block text-sm">Hospital Landline</span>
                      <span className="text-[#6B777C]">Outpatient & Billing Desk</span>
                    </div>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`}
                      className="px-3 py-1.5 bg-white border border-[#E2E7E6] text-[#173B4B] rounded font-semibold tabular-nums hover:border-[#397A78] transition-colors"
                    >
                      {HOSPITAL_INFO.contacts.landline}
                    </a>
                  </div>

                  <div className="p-3 rounded bg-[#F7F8F5] border border-[#E2E7E6] flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#173B4B] block text-sm">Email Inquiries</span>
                      <span className="text-[#6B777C]">General & Administrative Communication</span>
                    </div>
                    <a
                      href={`mailto:${HOSPITAL_INFO.contacts.email}`}
                      className="text-xs font-medium text-[#397A78] hover:underline"
                    >
                      {HOSPITAL_INFO.contacts.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-6 space-y-3 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#173B4B]">
                  <Clock className="w-4 h-4 text-[#397A78]" />
                  <span>Operating Timings</span>
                </div>
                <div className="space-y-1.5 text-[#6B777C]">
                  <p><strong className="text-[#26353D]">Emergency & Trauma:</strong> 24 Hours / 7 Days</p>
                  <p><strong className="text-[#26353D]">In-House Pharmacy:</strong> 24 Hours / 7 Days</p>
                  <p><strong className="text-[#26353D]">OPD Consultations:</strong> Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p><strong className="text-[#26353D]">Digital X-ray & Lab:</strong> Mon – Sat: 8:00 AM – 8:00 PM</p>
                </div>
              </div>

              {/* Transport Guide */}
              <div className="bg-[#173B4B] text-white rounded-lg p-6 space-y-3 text-xs">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Car className="w-4 h-4 text-[#397A78]" />
                  <span>Transport & Accessibility</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Located directly on the broad 200ft Radial Road with convenient parking space for ambulances, cars, and two-wheelers. Easily accessible via MTC bus routes passing through Kovilambakkam Radial Road junction.
                </p>
              </div>

            </div>

            {/* Right 7 Cols: Map Frame & Contact Form */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Responsive Google Maps Iframe */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] overflow-hidden shadow-xs">
                <div className="p-4 bg-white border-b border-[#E2E7E6] flex items-center justify-between">
                  <span className="text-xs font-bold font-heading text-[#173B4B]">
                    Hospital Location Map · 200ft Radial Road, Kovilambakkam
                  </span>
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#397A78] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  title="Avinash Hospitals Google Map Embed"
                  src="https://maps.google.com/maps?q=165%20Thiruvin%20Nagar%20200ft%20Radial%20Road%20Kovilambakkam%20Chennai%20600129&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[340px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Send Enquiry Form */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-10 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block mb-1">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-[#173B4B]">
                    Send us a Message
                  </h2>
                  <p className="text-xs text-[#6B777C] mt-1">
                    Submit your query regarding hospital services, doctor schedules, or facility availability.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 bg-[#EBF3F2] rounded-full flex items-center justify-center mx-auto text-[#397A78]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#173B4B]">
                      Message Successfully Sent
                    </h3>
                    <p className="text-xs text-[#6B777C] max-w-sm mx-auto">
                      Our front office team will review your enquiry and get back to you soon. For emergency care, call directly at <strong className="text-[#173B4B]">{HOSPITAL_INFO.contacts.primaryPhone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#173B4B] bg-[#F7F8F5] border border-[#E2E7E6] rounded"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="reach-name" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-[#B93B36]">*</span>
                        </label>
                        <input
                          id="reach-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                            errors.name ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-[#B93B36] mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="reach-phone" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-[#B93B36]">*</span>
                        </label>
                        <input
                          id="reach-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="e.g. 9840012345"
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                            errors.phone ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-[#B93B36] mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="reach-email" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-[#6B777C] font-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="reach-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                            errors.email ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-[#B93B36] mt-1">{errors.email}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="reach-subject" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                          Subject / Department
                        </label>
                        <select
                          id="reach-subject"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] outline-none"
                        >
                          <option value="General Inquiry">General Hospital Inquiry</option>
                          <option value="Doctor Timings">Doctor Timings & Schedule</option>
                          <option value="Diagnostic Tests">Diagnostic Tests (X-ray, Lab)</option>
                          <option value="Insurance / Billing">Insurance & Billing Query</option>
                          <option value="Admission / Daycare">Admission & Daycare Facilities</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="reach-message" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                          Message / Query <span className="text-[#B93B36]">*</span>
                        </label>
                        <textarea
                          id="reach-message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Please provide details of your inquiry..."
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                            errors.message ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                          }`}
                        />
                        {errors.message && <p className="text-xs text-[#B93B36] mt-1">{errors.message}</p>}
                      </div>

                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs sm:text-sm font-semibold rounded shadow-xs disabled:opacity-50 transition-colors"
                      >
                        <Send className="w-4 h-4 text-[#397A78]" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

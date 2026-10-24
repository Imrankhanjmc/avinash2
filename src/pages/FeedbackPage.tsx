import React, { useState } from 'react';
import { PageId, FeedbackFormData } from '../types';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { MessageSquare, Phone, CheckCircle2, Shield, HeartHandshake, Send } from 'lucide-react';

interface FeedbackPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const FeedbackPage: React.FC<FeedbackPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    fullName: '',
    phone: '',
    email: '',
    visitDepartment: 'General Inquiry / Reception',
    feedbackType: 'Appreciation',
    comments: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FeedbackFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'General Inquiry / Reception',
    'Orthopedics and Traumatology',
    'Plastic and Reconstructive Surgery',
    'General & Laparoscopic Surgery',
    'Gynecology & Maternity',
    'Physiotherapy Unit',
    'Digital X-Ray / Laboratory',
    'Inpatient Care & Nursing',
    'Pharmacy & Billing',
  ];

  const validate = () => {
    const errs: Partial<Record<keyof FeedbackFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.comments.trim() || formData.comments.trim().length < 10) {
      errs.comments = 'Please write at least 10 characters describing your experience or suggestion';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        visitDepartment: 'General Inquiry / Reception',
        feedbackType: 'Appreciation',
        comments: '',
      });
    }, 500);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <section className="bg-white border-b border-[#E2E7E6] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#397A78] uppercase mb-3 block">
              PATIENT CARE & FEEDBACK DESK
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              Listening to our patients and community.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              In upholding "Transparency in Healthcare", we actively review patient experiences, suggestions, and feedback to maintain high clinical standards and compassionate service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feedback & Support Desk Grid */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Feedback Form (Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-lg border border-[#E2E7E6] p-6 sm:p-10 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block mb-1">
                  Share Your Experience
                </span>
                <h2 className="text-2xl font-bold font-heading text-[#173B4B]">
                  Patient Feedback Submission
                </h2>
                <p className="text-xs text-[#6B777C] mt-1">
                  Whether you wish to share appreciation for a doctor or nursing team, offer suggestions for improvement, or voice a concern, your feedback is directly reviewed by hospital management.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-[#EBF3F2] rounded-full flex items-center justify-center mx-auto text-[#397A78]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                    Thank You for Your Feedback
                  </h3>
                  <p className="text-sm text-[#6B777C] max-w-md mx-auto leading-relaxed">
                    Your remarks have been submitted to the Avinash Hospitals administrative team. We value your voice in helping us continue providing thoughtful, transparent healthcare.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-[#173B4B] bg-[#F7F8F5] border border-[#E2E7E6] rounded hover:border-[#397A78]"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="fb-name" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-[#B93B36]">*</span>
                      </label>
                      <input
                        id="fb-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your name"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                          errors.fullName ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-[#B93B36] mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="fb-phone" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Contact Number <span className="text-[#B93B36]">*</span>
                      </label>
                      <input
                        id="fb-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9840012345"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                          errors.phone ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-[#B93B36] mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="fb-email" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#6B777C] font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        id="fb-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                          errors.email ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-[#B93B36] mt-1">{errors.email}</p>}
                    </div>

                    {/* Feedback Type */}
                    <div>
                      <label htmlFor="fb-type" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Feedback Nature
                      </label>
                      <select
                        id="fb-type"
                        value={formData.feedbackType}
                        onChange={(e) =>
                          setFormData({ ...formData, feedbackType: e.target.value as FeedbackFormData['feedbackType'] })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] outline-none"
                      >
                        <option value="Appreciation">Appreciation</option>
                        <option value="Suggestion">Suggestion for Improvement</option>
                        <option value="Query">Service Query</option>
                        <option value="Concern">Concern / Grievance</option>
                      </select>
                    </div>

                    {/* Department Visited */}
                    <div>
                      <label htmlFor="fb-dept" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Department Visited
                      </label>
                      <select
                        id="fb-dept"
                        value={formData.visitDepartment}
                        onChange={(e) => setFormData({ ...formData, visitDepartment: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] outline-none"
                      >
                        {departments.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Comments */}
                    <div className="sm:col-span-2">
                      <label htmlFor="fb-comments" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                        Your Feedback / Observations <span className="text-[#B93B36]">*</span>
                      </label>
                      <textarea
                        id="fb-comments"
                        rows={4}
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        placeholder="Please share details regarding your consultation, doctor interaction, nursing care, or hospital experience..."
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                          errors.comments ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                        }`}
                      />
                      {errors.comments && <p className="text-xs text-[#B93B36] mt-1">{errors.comments}</p>}
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs sm:text-sm font-semibold rounded shadow-xs disabled:opacity-50 transition-colors"
                    >
                      <Send className="w-4 h-4 text-[#397A78]" />
                      <span>{submitting ? 'Submitting Feedback...' : 'Submit Feedback'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Support Desk Sidebar (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#173B4B] text-white rounded-lg p-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#397A78]">
                  PATIENT ASSISTANCE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Direct Grievance & Care Desk
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  If you have an immediate concern regarding an ongoing inpatient stay, medication, or billing matter, please contact our hospital manager or on-duty administration immediately.
                </p>

                <div className="pt-2 border-t border-white/10 space-y-3 text-xs">
                  <div>
                    <span className="text-white/60 block mb-0.5">Primary Mobile Contact:</span>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                      className="text-white font-bold hover:underline tabular-nums text-base block"
                    >
                      {HOSPITAL_INFO.contacts.primaryPhone}
                    </a>
                  </div>

                  <div>
                    <span className="text-white/60 block mb-0.5">Hospital Landline:</span>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`}
                      className="text-white font-medium hover:underline tabular-nums"
                    >
                      {HOSPITAL_INFO.contacts.landline}
                    </a>
                  </div>

                  <div>
                    <span className="text-white/60 block mb-0.5">Official Inquiries:</span>
                    <a
                      href={`mailto:${HOSPITAL_INFO.contacts.email}`}
                      className="text-white hover:underline"
                    >
                      {HOSPITAL_INFO.contacts.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Anti-Slop Transparency Statement */}
              <div className="p-6 bg-white rounded-lg border border-[#E2E7E6] text-xs text-[#26353D] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#173B4B]">
                  <Shield className="w-4 h-4 text-[#397A78]" />
                  <span>Commitment to Honest Communication</span>
                </div>
                <p className="text-[#6B777C] leading-relaxed">
                  We refrain from publishing unverified testimonials or fabricated 5-star badges. Patient feedback is treated as a clinical tool for internal refinement and transparent community service.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

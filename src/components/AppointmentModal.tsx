import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { HOSPITAL_INFO, DOCTORS, SPECIALTIES } from '../data/hospitalData';
import { X, Calendar, Phone, CheckCircle, Clock } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpecialty?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedSpecialty,
  preselectedDoctor,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    specialty: preselectedSpecialty || 'orthopedics',
    preferredDoctor: preselectedDoctor || '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter patient full name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server-side appointment registration
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(`AH-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setBookingRef('');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      specialty: 'orthopedics',
      preferredDoctor: '',
      preferredDate: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl border border-[#E2E7E6] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#173B4B] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#397A78] uppercase block">
              Avinash Hospitals · Outpatient Services
            </span>
            <h2 id="modal-title" className="text-xl font-bold font-heading text-white">
              Request Doctor Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397A78]"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#EBF3F2] rounded-full flex items-center justify-center mx-auto text-[#397A78]">
                <CheckCircle className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                Consultation Request Received
              </h3>
              
              <p className="text-sm text-[#6B777C] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#26353D]">{formData.fullName}</strong>. Your consultation enquiry has been recorded with reference ID: <span className="font-mono font-bold text-[#173B4B] bg-[#F7F8F5] px-2 py-1 rounded border border-[#E2E7E6]">{bookingRef}</span>.
              </p>

              <div className="bg-[#F7F8F5] p-4 rounded border border-[#E2E7E6] text-left text-xs text-[#26353D] space-y-2 max-w-md mx-auto">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                  <span>
                    Our hospital outpatient coordinator will call your registered number (<strong className="tabular-nums">{formData.phone}</strong>) within operating hours to confirm your scheduled doctor slot and consultation timings.
                  </span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-[#E2E7E6]">
                  <Phone className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                  <span>
                    For urgent medical needs or immediate trauma care, please call the hospital directly at <a href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`} className="font-bold text-[#173B4B] hover:underline tabular-nums">{HOSPITAL_INFO.contacts.primaryPhone}</a>.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#173B4B] hover:bg-[#0F2631] text-white text-sm font-semibold rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Patient Full Name <span className="text-[#B93B36]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter patient full name"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                      errors.fullName ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-[#B93B36] mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Contact Phone Number <span className="text-[#B93B36]">*</span>
                  </label>
                  <input
                    id="phone"
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
                  <label htmlFor="email" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-[#6B777C] font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    id="email"
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

                {/* Specialty */}
                <div>
                  <label htmlFor="specialty" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Clinical Department / Specialty <span className="text-[#B93B36]">*</span>
                  </label>
                  <select
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors"
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Doctor */}
                <div>
                  <label htmlFor="preferredDoctor" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Consulting Specialist
                  </label>
                  <select
                    id="preferredDoctor"
                    value={formData.preferredDoctor}
                    onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors"
                  >
                    <option value="">Any Available Specialist</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.specialty})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="sm:col-span-2">
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Preferred Consultation Date <span className="text-[#B93B36]">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors ${
                      errors.preferredDate ? 'border-[#B93B36]' : 'border-[#E2E7E6]'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-xs text-[#B93B36] mt-1">{errors.preferredDate}</p>}
                </div>

                {/* Clinical Notes / Symptoms */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#26353D] uppercase tracking-wider mb-1.5">
                    Brief Nature of Concern <span className="text-[#6B777C] font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Knee pain, post-fracture follow-up, general surgical inquiry..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2E7E6] rounded focus:border-[#397A78] focus:ring-1 focus:ring-[#397A78] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="bg-[#F7F8F5] p-3 rounded border border-[#E2E7E6] text-xs text-[#6B777C] flex items-center justify-between">
                <span>Direct hospital telephone: <strong className="text-[#173B4B] tabular-nums">{HOSPITAL_INFO.contacts.primaryPhone}</strong></span>
                <span className="text-[11px] text-[#397A78] font-medium">9 AM – 8 PM</span>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#6B777C] hover:text-[#26353D] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs sm:text-sm font-semibold rounded shadow-sm disabled:opacity-50 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#397A78]" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Specialty } from '../types';
import { DOCTORS } from '../data/hospitalData';
import { X, Check, Calendar, User, Building, ChevronRight } from 'lucide-react';

interface SpecialtyDetailModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onBookAppointment: (specialtyId: string, doctorName?: string) => void;
  onSelectDoctor?: (doctorId: string) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  specialty,
  onClose,
  onBookAppointment,
  onSelectDoctor,
}) => {
  if (!specialty) return null;

  const doctor = specialty.associatedDoctor 
    ? DOCTORS.find((d) => d.name === specialty.associatedDoctor)
    : undefined;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-[#E2E7E6] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#173B4B] text-white px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#EBF3F2]/80 uppercase tracking-wider mb-1">
              <span>{specialty.category} Care</span>
              <span aria-hidden="true">·</span>
              <span>Avinash Hospitals</span>
            </div>
            <h2 id="specialty-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-white">
              {specialty.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B777C] uppercase tracking-wider mb-2">
              Clinical Overview
            </h3>
            <p className="text-sm text-[#26353D] leading-relaxed">
              {specialty.fullDescription}
            </p>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B777C] uppercase tracking-wider mb-3">
              Procedures & Services Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {specialty.procedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded bg-[#F7F8F5] border border-[#E2E7E6] text-xs text-[#26353D]"
                >
                  <Check className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                  <span className="font-medium">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Associated Doctor (if any) */}
          {doctor && (
            <div className="p-4 rounded border border-[#E2E7E6] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded object-cover border border-[#E2E7E6]"
                />
                <div>
                  <div className="text-[11px] font-semibold text-[#397A78] uppercase tracking-wider">
                    Consulting Specialist
                  </div>
                  <h4 className="text-sm font-bold text-[#173B4B] font-heading">
                    {doctor.name}
                  </h4>
                  <p className="text-xs text-[#6B777C]">{doctor.qualifications}</p>
                </div>
              </div>

              {onSelectDoctor && (
                <button
                  onClick={() => {
                    onClose();
                    onSelectDoctor(doctor.id);
                  }}
                  className="text-xs font-semibold text-[#173B4B] hover:text-[#397A78] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Doctor Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Facilities Used */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B777C] uppercase tracking-wider mb-2">
              Supporting Hospital Facilities
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-[#26353D]">
              {specialty.facilitiesUsed.map((fac, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#F7F8F5] border border-[#E2E7E6] font-medium"
                >
                  {fac}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#F7F8F5] px-6 py-4 border-t border-[#E2E7E6] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#6B777C] hover:text-[#26353D] transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBookAppointment(specialty.id, doctor?.name);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173B4B] hover:bg-[#0F2631] text-white text-xs sm:text-sm font-semibold rounded shadow-sm transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#397A78]" />
            <span>Consult for {specialty.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

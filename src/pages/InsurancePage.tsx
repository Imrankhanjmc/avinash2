import React from 'react';
import { PageId } from '../types';
import { INSURANCE_GUIDELINES, HOSPITAL_INFO } from '../data/hospitalData';
import { ShieldCheck, FileText, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface InsurancePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: () => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({
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
              PATIENT BILLING & INSURANCE DESK
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-[#173B4B] tracking-tight leading-tight">
              Information about health insurance coverage.
            </h1>
            <p className="text-lg text-[#6B777C] mt-4 leading-relaxed">
              We assist patients with private health insurance documentation and claims. Clear billing information and verified documentation help ensure smooth hospital visits.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Guidance Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-8 space-y-4">
                <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block">
                  Private Insurance Inquiries
                </span>
                <h2 className="text-2xl font-bold font-heading text-[#173B4B]">
                  How Insurance Processing Works at Avinash Hospitals
                </h2>
                <p className="text-sm text-[#26353D] leading-relaxed">
                  For information about private health insurance, coverage, documentation, and applicable payment procedures, please contact Avinash Hospitals directly. Our administrative desk coordinates with policyholders to facilitate either pre-authorized cashless processing or comprehensive reimbursement paperwork.
                </p>
                <div className="p-4 bg-[#F7F8F5] rounded border border-[#E2E7E6] text-xs text-[#6B777C] space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                    <span>
                      Because eligibility, coverage limits, room rent caps, and deductibles depend on individual insurance policies and Third-Party Administrator (TPA) rules, we strongly advise patients to contact our desk before planned elective admissions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#397A78] uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Checklist for Admission & Claims</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                  Documents Required for Verification
                </h3>
                <p className="text-xs text-[#6B777C]">
                  Please carry original documents and copies when visiting for an insurance-assisted admission:
                </p>

                <div className="space-y-3 pt-2">
                  {INSURANCE_GUIDELINES.documentsNeeded.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#26353D]">
                      <CheckCircle2 className="w-4 h-4 text-[#397A78] shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reimbursement Claims Support */}
              <div className="bg-white rounded-lg border border-[#E2E7E6] p-8 space-y-3">
                <h3 className="text-xl font-bold font-heading text-[#173B4B]">
                  Reimbursement Claims Assistance
                </h3>
                <p className="text-sm text-[#6B777C] leading-relaxed">
                  For policies requiring reimbursement, Avinash Hospitals provides all requisite documentation upon discharge:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26353D] pt-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#397A78] font-bold">·</span>
                    <span>Detailed Itemized Hospital Final Bill</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#397A78] font-bold">·</span>
                    <span>Official Paid Payment Receipts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#397A78] font-bold">·</span>
                    <span>Physician-Signed Discharge Summary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#397A78] font-bold">·</span>
                    <span>Investigation Reports & OT Notes</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Side Billing Desk Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#173B4B] text-white rounded-lg p-8 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-[#397A78] uppercase tracking-wider block mb-1">
                    Direct Assistance
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Contact Billing Desk
                  </h3>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">
                    Have questions regarding your specific insurance company or coverage for an upcoming orthopedic or surgical procedure? Speak directly with our billing team.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-white/60 block mb-1">Primary Telephone:</span>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.primaryPhoneRaw}`}
                      className="text-white font-bold text-lg hover:underline tabular-nums flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#397A78]" />
                      <span>{HOSPITAL_INFO.contacts.primaryPhone}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-white/60 block mb-1">Hospital Landline:</span>
                    <a
                      href={`tel:${HOSPITAL_INFO.contacts.landlineRaw}`}
                      className="text-white font-medium hover:underline tabular-nums"
                    >
                      {HOSPITAL_INFO.contacts.landline}
                    </a>
                  </div>

                  <div>
                    <span className="text-white/60 block mb-1">Email Queries:</span>
                    <a
                      href={`mailto:${HOSPITAL_INFO.contacts.email}`}
                      className="text-white hover:underline"
                    >
                      {HOSPITAL_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAppointmentModal}
                    className="w-full py-3 bg-[#397A78] hover:bg-[#2A5A58] text-white text-xs font-semibold rounded transition-colors text-center"
                  >
                    Request Pre-Consultation Discussion
                  </button>
                </div>
              </div>

              {/* Hospital Location Summary */}
              <div className="p-6 bg-white rounded-lg border border-[#E2E7E6] text-xs text-[#26353D] space-y-2">
                <span className="font-semibold text-[#173B4B] block font-heading text-sm">
                  Hospital Billing & Administrative Desk
                </span>
                <p className="text-[#6B777C]">
                  Avinash Hospitals, 165 Thiruvin Nagar, 200ft Radial Road, Kovilambakkam, Chennai – 600129.
                </p>
                <p className="text-[#6B777C]">
                  Desk Hours: Monday – Saturday: 9:00 AM – 7:00 PM.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

import { Doctor, Specialty, Facility } from '../types';

export const HOSPITAL_INFO = {
  name: 'Avinash Hospitals',
  tagline: 'Transparency in Healthcare',
  type: '30-Bedded Multispecialty Hospital',
  motto: 'Transparency in Healthcare',
  vision: 'To do our best to provide quality treatment that supports good health and well-being.',
  address: {
    line1: '165, Thiruvin Nagar',
    line2: '200ft Radial Road, Kovilambakkam',
    city: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600129',
    country: 'India',
    landmark: 'On 200ft Radial Road, connecting Keelkattalai & Medavakkam to Velachery/Pallavaram',
  },
  contacts: {
    primaryPhone: '+91 7700933009',
    primaryPhoneRaw: '+917700933009',
    landline: '044-22479990',
    landlineRaw: '04422479990',
    email: 'avinashhospitals@yahoo.com',
  },
  timings: {
    emergency: '24 Hours Emergency & Trauma Support',
    pharmacy: '24/7 In-House Pharmacy',
    opdConsultations: 'Monday – Saturday: 9:00 AM – 8:00 PM (Prior appointment recommended)',
    diagnostics: 'Monday – Saturday: 8:00 AM – 8:00 PM',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avinash+Hospitals+165+Thiruvin+Nagar+200ft+Radial+Road+Kovilambakkam+Chennai+600129',
  images: {
    buildingHero: '/src/assets/images/hero_hospital_building_1792157925669.jpg',
    modularOT: '/src/assets/images/facility_modular_ot_1792157927584.jpg',
    diagnostics: '/src/assets/images/facility_diagnostics_xray_1792157927803.jpg',
  }
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-vv-prasad',
    name: 'Dr. V. V. Prasad',
    qualifications: 'MBBS, D.ORTHO, MS.ORTHO',
    specialty: 'Orthopedics & Traumatology',
    role: 'Senior Consultant Orthopedic Surgeon',
    summary: 'Dr. V. V. Prasad is an experienced orthopedic surgeon specializing in orthopedic and trauma care, emergency trauma management, and joint procedures. His focus emphasizes patient mobility, fracture rehabilitation, and clear clinical guidance.',
    clinicalFocus: [
      'Fracture and trauma management',
      'Joint replacement (Knee and Hip)',
      'Spine-related evaluation and surgical care',
      'POP casting and non-surgical immobilization',
      'Knee and spine therapeutic injections',
      'Arthroscopic and sports injury evaluation'
    ],
    image: '/src/assets/images/doctor_vv_prasad_1792157926466.jpg',
  },
  {
    id: 'dr-rohini-prasad',
    name: 'Dr. Rohini Prasad',
    qualifications: 'MBBS, MS, MCh (Plastic Surgery)',
    specialty: 'Plastic & Reconstructive Surgery',
    role: 'Consultant Plastic & Reconstructive Surgeon',
    summary: 'Dr. Rohini Prasad is a reconstructive and aesthetic surgeon with extensive clinical focus on tissue reconstruction, burns and trauma healing, hand and nerve surgery, as well as women\'s wellness and aesthetic procedures.',
    clinicalFocus: [
      'Reconstructive surgery and wound care',
      'Hand and peripheral nerve surgery',
      'Burns surgery and scar revision',
      'Aesthetic plastic surgery (Abdominoplasty, Liposuction)',
      'Breast surgery (Reduction and Augmentation)',
      'Clinical aesthetic procedures (Botox, Fillers, Laser)'
    ],
    image: '/src/assets/images/doctor_rohini_prasad_1792157925732.jpg',
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'orthopedics',
    name: 'Orthopedics and Traumatology',
    category: 'Surgical',
    shortDescription: 'Comprehensive bone, joint, and trauma care from fracture immobilization to joint replacements.',
    fullDescription: 'Our orthopedics department delivers evaluation and treatment for skeletal trauma, sports injuries, degenerative joint conditions, and spinal ailments. Led by senior specialists, we provide conservative management, precision casting, and advanced joint restoration.',
    procedures: [
      'POP and plaster casting for fractures',
      'Open reduction and internal fixation of fractures',
      'Shoulder, wrist, and hand fracture management',
      'Spine evaluation and spine surgery',
      'Total and partial knee replacement',
      'Hip replacement surgery',
      'Intra-articular knee and spine injections'
    ],
    associatedDoctor: 'Dr. V. V. Prasad',
    facilitiesUsed: ['Digital X-ray', 'Modular Operation Theatre', 'Physiotherapy Unit', 'Recovery Rooms']
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic and Reconstructive Surgery',
    category: 'Surgical',
    shortDescription: 'Restorative reconstructive surgery, wound management, trauma repair, and aesthetic procedures.',
    fullDescription: 'Our plastic surgery department focuses on restoring form and function after trauma, burns, or congenital conditions, while offering safe aesthetic procedures guided by qualified surgical expertise.',
    procedures: [
      'Reconstructive flap and skin grafting',
      'Acute burns surgery and post-burn contracture release',
      'Complex hand and tendon surgery',
      'Peripheral nerve repair and decompression',
      'Liposuction and body contouring',
      'Abdominoplasty (Tummy tuck)',
      'Breast reduction and breast augmentation',
      'Medical aesthetics: Botox, dermal fillers, and laser skin therapy'
    ],
    associatedDoctor: 'Dr. Rohini Prasad',
    facilitiesUsed: ['Modular Operation Theatre', 'Digital X-ray', 'Dedicated Daycare Ward']
  },
  {
    id: 'general-surgery',
    name: 'General and Laparoscopic Surgery',
    category: 'Surgical',
    shortDescription: 'Minimally invasive keyhole surgery and standard general surgical interventions.',
    fullDescription: 'General surgery at Avinash Hospitals encompasses diagnostic evaluation and surgical management for abdominal, digestive, and soft tissue conditions with an emphasis on laparoscopic (keyhole) techniques for quicker recovery.',
    procedures: [
      'Hernia repair (Inguinal, Incisional, Umbilical) and Hydrocele surgery',
      'Laparoscopic cholecystectomy (Gallbladder removal)',
      'Laparoscopic appendectomy',
      'Laparoscopic tubectomy',
      'Benign and diagnostic breast surgery',
      'Fissure, fistula, and hemorrhoid treatment'
    ],
    facilitiesUsed: ['Modular Operation Theatre', 'Ultrasound Scan', 'Laboratory', 'Inpatient Care']
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Women\'s Health',
    category: 'Specialized',
    shortDescription: 'Antenatal care, delivery services, laparoscopic gynecological procedures, and reproductive wellness.',
    fullDescription: 'Dedicated to women across all stages of life, from adolescent menstrual health to maternal care and menopausal wellness, supported by equipped labour facilities and surgical theatres.',
    procedures: [
      'Antenatal monitoring and delivery care',
      'Elective and emergency Lower Segment Cesarean Section (LSCS)',
      'Laparoscopic hysterectomy',
      'Management of ectopic pregnancies',
      'Dilatation and curettage (D&C)',
      'Ovarian cystectomy and uterine tumor management',
      'Menstrual disorder evaluation and hormonal management'
    ],
    facilitiesUsed: ['Labour Ward', 'Ultrasound Scan', 'Modular Operation Theatre', 'Laboratory']
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy and Rehabilitation',
    category: 'Diagnostics & Rehab',
    shortDescription: 'Evidence-based physical therapy, pain relief modalities, and post-surgical rehabilitation.',
    fullDescription: 'Our physiotherapy wing provides rehabilitation for post-operative orthopedic patients, neurological recovery, musculoskeletal injuries, and age-related mobility challenges.',
    procedures: [
      'Postoperative orthopedic rehabilitation (post-fracture, post-joint replacement)',
      'Targeted back pain and cervical spondylosis management',
      'Knee arthritis physical therapy and muscle strengthening',
      'Interferential Therapy (IFT) and pain relief modalities',
      'Clinical laser therapy for soft tissue healing',
      'Stroke and neurological motor recovery guidance'
    ],
    facilitiesUsed: ['Physiotherapy Unit', 'Digital X-ray']
  },
  {
    id: 'urology',
    name: 'Urology',
    category: 'Surgical',
    shortDescription: 'Kidney stone management, prostate evaluations, cystoscopic procedures, and urinary tract care.',
    fullDescription: 'Comprehensive diagnostic and surgical interventions for urinary tract and male reproductive system conditions with modern endoscopic instrumentation.',
    procedures: [
      'Diagnostic cystoscopy',
      'Ureteroscopy (URS) with DJ stenting for ureteric stones',
      'Prostate evaluation and medical/surgical management',
      'Kidney stone assessment and medical expulsion therapy',
      'Urinary tract infection (UTI) evaluation and management'
    ],
    facilitiesUsed: ['Modular Operation Theatre', 'Ultrasound Scan', 'Digital X-ray', 'Laboratory']
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    category: 'Medical',
    shortDescription: 'Primary clinical care, adult medicine, infectious diseases, and chronic health management.',
    fullDescription: 'Our physicians provide thorough outpatient and inpatient evaluations for acute fevers, respiratory infections, metabolic disorders like diabetes, and cardiovascular risk factors.',
    procedures: [
      'Evaluation of acute fevers and infectious illnesses',
      'Hypertension and blood pressure monitoring',
      'Type 2 diabetes diagnosis, titration, and long-term care',
      'Adult health check-ups and preventive screenings',
      'Multispecialty referral coordination'
    ],
    facilitiesUsed: ['Clinical Laboratory', 'Digital X-ray', 'Pharmacy']
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    category: 'Medical',
    shortDescription: 'Compassionate pediatric outpatient care, acute illness management, and childhood health.',
    fullDescription: 'Gentle, attentive clinical care for infants, children, and adolescents presenting with acute illnesses, nutritional concerns, and developmental milestones.',
    procedures: [
      'Pediatric acute fever evaluation and management',
      'Diarrhea, dehydration, and gastroenteritis management',
      'Pediatric respiratory infection evaluation',
      'Foreign body assessment and initial management',
      'Routine child health consultations'
    ],
    facilitiesUsed: ['Clinical Laboratory', 'Pharmacy', 'Ultrasound Scan']
  },
  {
    id: 'neurology',
    name: 'Neurology and Neurosurgery',
    category: 'Specialized',
    shortDescription: 'Neurological evaluations, headache disorders, neuropathy, and stroke rehabilitation support.',
    fullDescription: 'Clinical evaluation and supportive medical care for disorders affecting the central and peripheral nervous system, coordinated with diagnostic and rehabilitation support.',
    procedures: [
      'Comprehensive neurological clinical assessment',
      'Headache, migraine, and seizure evaluation',
      'Peripheral neuropathy assessment',
      'Supportive stroke management and rehabilitation protocols'
    ],
    facilitiesUsed: ['Physiotherapy Unit', 'Clinical Laboratory', 'Inpatient Care']
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology (Medical & Surgical)',
    category: 'Medical',
    shortDescription: 'Diagnostic and therapeutic care for digestive, liver, and biliary tract conditions.',
    fullDescription: 'Evaluation of gastrointestinal symptoms including abdominal pain, chronic acidity, liver ailments, and coordination for surgical gastroenterological needs.',
    procedures: [
      'Acid peptic disease and GERD management',
      'Jaundice and liver function assessment',
      'Abdominal colic and pancreatitis evaluation',
      'Referral and surgical coordination for complex GI conditions'
    ],
    facilitiesUsed: ['Ultrasound Scan', 'Laboratory', 'Modular Operation Theatre']
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology',
    category: 'Medical',
    shortDescription: 'Assessment and management of bronchial asthma, chest infections, and chronic respiratory disorders.',
    fullDescription: 'Focused clinical diagnosis and therapy for patients suffering from persistent cough, breathing difficulty, wheezing, and seasonal pulmonary conditions.',
    procedures: [
      'Bronchial asthma evaluation and inhaler technique counseling',
      'COPD diagnosis and maintenance management',
      'Pneumonia and chest infection clinical management',
      'Nebulization and acute respiratory support'
    ],
    facilitiesUsed: ['Digital X-ray', 'Clinical Laboratory', 'Pharmacy']
  },
  {
    id: 'dermatology',
    name: 'Dermatology and Cosmetology',
    category: 'Specialized',
    shortDescription: 'Clinical dermatology for skin disorders, allergies, and therapeutic cosmetology.',
    fullDescription: 'Care for everyday dermatological conditions including eczema, psoriasis, acne, as well as cosmetic skin rejuvenation guided by clinical dermatology.',
    procedures: [
      'Acne and rosacea clinical management',
      'Fungal and bacterial skin infection treatment',
      'Eczema, dermatitis, and allergy evaluation',
      'Therapeutic and cosmetic laser procedures'
    ],
    facilitiesUsed: ['Clinical Laboratory', 'Daycare Procedure Room']
  },
  {
    id: 'cardiology',
    name: 'Cardiology & Vascular Surgery',
    category: 'Medical',
    shortDescription: 'Cardiovascular risk assessment, ECG diagnostics, and peripheral vascular evaluations.',
    fullDescription: 'Preventive cardiology, hypertension management, diagnostic ECG, and surgical consultation for peripheral vascular disorders.',
    procedures: [
      '12-lead Electrocardiogram (ECG)',
      'Hypertension assessment and treatment',
      'Peripheral vascular screening (varicose veins, vascular health)',
      'Cardiovascular risk factor profiling'
    ],
    facilitiesUsed: ['ECG Room', 'Laboratory', 'Digital X-ray']
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    category: 'Medical',
    shortDescription: 'Kidney health screening, renal function monitoring, and hypertension-related renal care.',
    fullDescription: 'Medical assessment for acute and chronic kidney conditions, proteinuria, hematuria, and renal preservation strategies.',
    procedures: [
      'Renal function assessment and blood chemistry profiling',
      'Proteinuria and hematuria workup',
      'Diabetic and hypertensive kidney disease monitoring',
      'Electrolyte balance evaluation'
    ],
    facilitiesUsed: ['Clinical Laboratory', 'Ultrasound Scan']
  },
  {
    id: 'oncology',
    name: 'Oncology',
    category: 'Surgical',
    shortDescription: 'Surgical oncology evaluation, modified radical mastectomy, and multidisciplinary referral.',
    fullDescription: 'Evaluation for suspected tumors and surgical oncology procedures with strict clinical indication. Care is coordinated transparently with specialized cancer centers where advanced multimodality therapy is indicated.',
    procedures: [
      'Tumor screening and surgical biopsy coordination',
      'Modified radical mastectomy (MRM)',
      'Post-surgical wound management',
      'Oncological referral coordination'
    ],
    facilitiesUsed: ['Modular Operation Theatre', 'Ultrasound Scan', 'Laboratory']
  },
  {
    id: 'anesthesiology',
    name: 'Anesthesiology & Pain Management',
    category: 'Specialized',
    shortDescription: 'Pre-anesthetic evaluation, intraoperative monitoring, and post-procedural acute pain relief.',
    fullDescription: 'Our anesthesia team provides safe sedation, spinal/regional anesthesia, and general anesthesia for all surgical specialties with continuous vital sign monitoring.',
    procedures: [
      'Pre-anesthesia check-up (PAC)',
      'General, spinal, and regional anesthesia',
      'Post-operative acute pain relief protocols',
      'Critical patient stabilization'
    ],
    facilitiesUsed: ['Modular Operation Theatre', 'Recovery Unit']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'pharmacy',
    name: '24/7 Pharmacy',
    availability: 'Open 24 Hours / 7 Days',
    shortDescription: 'In-house pharmacy stocked with genuine prescription medicines, surgical supplies, and emergency drugs.',
    details: 'Located on the hospital premises for convenient access by outpatients, inpatients, and emergency cases. All pharmaceuticals are temperature-controlled and dispensed by certified pharmacists.',
  },
  {
    id: 'modular-ot',
    name: 'Modular Operation Theatre',
    availability: 'Scheduled & Emergency Procedures',
    shortDescription: 'Sterile surgical suite with laminar air flow, advanced lighting, and multi-parameter anesthesia monitors.',
    details: 'Equipped to support orthopedic surgeries, reconstructive procedures, laparoscopic surgeries, and general surgical interventions with strict infection control protocols.',
    image: '/src/assets/images/facility_modular_ot_1792157927584.jpg',
  },
  {
    id: 'digital-xray',
    name: 'Digital X-ray Suite',
    availability: 'Daily: 8:00 AM – 8:00 PM (Emergency on-call)',
    shortDescription: 'High-resolution digital radiography ensuring rapid diagnosis for fractures, chest, and spinal conditions.',
    details: 'Provides low-radiation digital imaging with immediate electronic reporting to assist our orthopedic, surgical, and physician consultations.',
    image: '/src/assets/images/facility_diagnostics_xray_1792157927803.jpg',
  },
  {
    id: 'laboratory',
    name: 'Clinical Laboratory',
    availability: 'Daily: 8:00 AM – 8:00 PM',
    shortDescription: 'Fully automated diagnostic lab covering hematology, biochemistry, clinical pathology, and microbiology.',
    details: 'Essential routine and pre-surgical blood tests, urine analysis, lipid profiles, and diabetes monitoring with verified quality controls.',
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound Scan',
    availability: 'By Prior Appointment & Clinical Scheduling',
    shortDescription: 'Non-invasive sonography for abdominal, pelvic, obstetric, and vascular evaluations.',
    details: 'Conducted under clinical guidance for pregnancy tracking, abdominal pain investigation, gallbladder screening, and soft tissue assessments.',
  },
  {
    id: 'emergency-services',
    name: 'Emergency Services Desk',
    availability: '24 Hours / 7 Days Immediate Support',
    shortDescription: 'Primary emergency triage, acute trauma care, wound suturing, and emergency stabilization.',
    details: 'Equipped with emergency oxygen, resuscitation setup, and direct access to on-call orthopedic and surgical specialists.',
  },
  {
    id: 'physiotherapy-unit',
    name: 'Physiotherapy & Rehabilitation',
    availability: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    shortDescription: 'Equipped rehab gymnasium with electrotherapy, ultrasound therapy, IFT, and mobility stations.',
    details: 'Supervised by qualified physiotherapists to assist patients recovering from fractures, joint surgery, stroke, or chronic back and knee pain.',
  },
  {
    id: 'labour-ward',
    name: 'Labour & Delivery Ward',
    availability: '24 Hours Maternal Support',
    shortDescription: 'Dedicated maternity room equipped for safe natural deliveries and immediate surgical backup for LSCS.',
    details: 'Focused on maternal safety, continuous fetal heart monitoring, and supportive postpartum nursing care.',
  },
  {
    id: 'recovery-wards',
    name: 'Inpatient Recovery & Daycare Rooms',
    availability: '30 Inpatient Beds with Nursing Care',
    shortDescription: 'Clean, well-ventilated general and private inpatient beds with dedicated 24-hour nursing supervision.',
    details: 'Comfortable recovery environment designed for patient dignity, quiet healing, and hygienic postoperative recuperation.',
  },
  {
    id: 'ambulance',
    name: 'Hospital Ambulance Coordination',
    availability: '24 Hours Emergency Transfer Assistance',
    shortDescription: 'Emergency patient transport and transfer coordination for acute care and medical referral.',
    details: 'Assistance for patient pickup and transfer along the 200ft Radial Road corridor and adjacent localities.',
  }
];

export const INSURANCE_GUIDELINES = {
  title: 'Information About Health Insurance',
  description: 'Avinash Hospitals assists patients with private health insurance documentation and claim facilitation. Because policies and approvals vary across insurance providers and Third-Party Administrators (TPAs), we recommend contacting our billing desk directly before planned admissions.',
  contactNumber: '+91 7700933009',
  landline: '044-22479990',
  documentsNeeded: [
    'Valid Health Insurance Card or Policy Schedule copy',
    'Government Photo ID Proof of the patient (Aadhaar Card, Voter ID, or Driving License)',
    'Treating Doctor\'s consultation prescription / admission advice note',
    'Previous investigation reports (X-rays, blood reports, ultrasound) related to the diagnosis',
    'Corporate Employee ID (if covered under a corporate group policy)'
  ],
  advisoryNote: 'Cashless facility availability depends on insurer pre-authorization. For reimbursement claims, our administrative desk provides complete itemized hospital bills, discharge summaries, and payment receipts stamped for submission to your insurer.'
};

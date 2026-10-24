export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'facilities'
  | 'insurance'
  | 'feedback'
  | 'reach-us';

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  role: string;
  summary: string;
  clinicalFocus: string[];
  image: string;
}

export interface Specialty {
  id: string;
  name: string;
  category: 'Surgical' | 'Medical' | 'Specialized' | 'Diagnostics & Rehab';
  shortDescription: string;
  fullDescription: string;
  procedures: string[];
  associatedDoctor?: string;
  facilitiesUsed: string[];
}

export interface Facility {
  id: string;
  name: string;
  availability: string;
  shortDescription: string;
  details: string;
  image?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  specialty: string;
  preferredDoctor: string;
  preferredDate: string;
  message: string;
}

export interface FeedbackFormData {
  fullName: string;
  phone: string;
  email: string;
  visitDepartment: string;
  feedbackType: 'Appreciation' | 'Suggestion' | 'Query' | 'Concern';
  comments: string;
}

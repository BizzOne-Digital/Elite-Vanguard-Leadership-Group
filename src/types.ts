export type PageId = 'home' | 'about' | 'services' | 'team' | 'booking' | 'contact';

export interface TargetIndustry {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  applications: string[];
}

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  badge?: string;
  bio: string;
  image: string;
  highlights?: string[];
  isPlaceholder?: boolean;
}

export interface CoreValue {
  number: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  focusAreas: string[];
  targetAudience: string;
  deliverables: string[];
}

export interface ConsultationRequest {
  fullName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  industry: string;
  operationalChallenge: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

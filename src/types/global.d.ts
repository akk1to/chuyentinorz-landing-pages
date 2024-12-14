interface Member {
  name: string;
  position: string;
  mail: string;
  skills: string[];
  certificates: string[];
  education?: {
    level: string;
    school: string;
    graduationYear: number;
  };
  awards: string[];
  photo: string;
  coverPhoto?: string;
  xl?: boolean;
  type?: 'xl' | 'xl2' | 'xl3';
  onboarding: number;
}

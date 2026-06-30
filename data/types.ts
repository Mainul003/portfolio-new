export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  readTime: string;
}

export interface Paper {
  title: string;
  conference: string;
  location: string;
  status: "Under Review" | "Published" | "Accepted";
  paperId?: string;
  submittedDate: string;
  notificationDate?: string;
  cameraReadyDate?: string;
  conferenceDate?: string;
  subjectArea?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  type: "industry" | "academia";
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  result: string;
  honors?: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  badge: string;
  imagePath?: string;
  tab: "competitions" | "academic" | "certifications";
}

import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    type: "industry",
    role: "Project Manager – Software Development",
    company: "WebAlive Australia (Remote)",
    period: "May 2023 – Present",
    description:
      "Leading software development projects using Agile methodologies. Coordinating cross-functional teams of developers, architects, and DevOps engineers. Maintaining project roadmaps, sprint retrospectives, risk registers, and ensuring scalable system architecture.",
    tags: ["Agile", "SCRUM", "JIRA", "Team Leadership", "Client Management"],
  },
  {
    type: "industry",
    role: "Project Manager",
    company: "Bit Mascot (Pvt.) Ltd",
    period: "Sep 2020 – Apr 2023",
    description:
      "Managed software development projects from inception to delivery. Coordinated cross-functional teams and implemented agile methodologies. Contributed to feature requirement analysis, API documentation, database testing, and API testing.",
    tags: ["SCRUM", "JIRA", "Waterfall", "QA", "API Testing"],
  },
  {
    type: "academia",
    role: "Adjunct Lecturer, Dept. of CSE",
    company: "United International University",
    period: "Jul 2025 – Present",
    description:
      "Delivering lectures and instructing undergraduate courses in System Analysis and Design. Mentoring undergraduate students and supporting research activities.",
    tags: ["Teaching", "Research", "Mentoring", "System Analysis"],
  },
  {
    type: "academia",
    role: "Undergraduate Teaching Assistant",
    company: "United International University",
    period: "Feb 2018 – May 2020",
    description:
      "Assisted faculty in teaching laboratory courses. Supported students with programming and system design concepts. Prepared course materials and lab instructions.",
    tags: ["Python", "Java", "Lab Assistance", "Research"],
  },
];

export const experienceStats = [
  { value: "6+", label: "Yrs Industry" },
  { value: "2+", label: "Yrs Teaching" },
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Team Members Led" },
];

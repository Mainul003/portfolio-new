import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    type: "industry",
    role: "Sr. SQA Engineer",
    company: "ADN Diginet Limited | BRAC Bank (Augmentation)",
    employerFirst: true,
    period: "Dhaka, Bangladesh | October 2026 – Present",
    highlights: [
      "Perform REST API testing to validate service behavior, response status codes, payloads, authentication, and business rules.",
      "Conduct negative, boundary, and integration testing to identify defects in transaction processing, service dependencies, and exception handling.",
      "Validate API data consistency across Oracle and MongoDB, ensuring response accuracy and alignment with backend records.",
      "Develop and maintain Playwright automation, including Playwright MCP workflows, to improve regression coverage and test efficiency.",
    ],
    tags: ["REST API Testing", "Integration Testing", "Oracle", "MongoDB", "Playwright MCP"],
  },
  {
    type: "academia",
    role: "Adjunct Faculty (Industry)",
    company: "United International University (UIU)",
    period: "July 2025 – Present",
    description: "Teaching System Analysis and Design Laboratory (CSE 3412).",
    tags: ["Teaching", "System Analysis and Design", "CSE 3412"],
  },
  {
    type: "industry",
    role: "Software Engineer in Test (PM)",
    company: "WebAlive (Web Mascot Pty Ltd) · Remote",
    period: "May 2023 – September 2026",
    highlights: [
      "Analyzed requirements and designed manual and automated tests covering API, database, regression, and end-to-end workflows.",
      "Developed Playwright automation and used AI-assisted testing tools, including Claude Code and Playwright MCP.",
      "Conducted performance testing with k6 and JMeter, managed defects, and collaborated with cross-functional teams.",
    ],
    tags: ["Playwright", "API Testing", "k6", "JMeter"],
  },
  {
    type: "industry",
    role: "Software Quality Assurance Engineer",
    company: "Bit Mascot (Pvt.) Ltd",
    period: "September 2020 – April 2023",
    highlights: [
      "Designed and executed functional, regression, API, and database tests.",
      "Validated industrial data-tracking workflows using SAP-integrated tools.",
      "Reported, tracked, and verified defects to support reliable releases.",
    ],
    tags: ["Functional Testing", "API Testing", "Database Testing"],
  },
  {
    type: "academia",
    role: "Undergraduate Teaching Assistant",
    company: "United International University",
    period: "February 2018 – May 2020",
    description:
      "Assisted faculty in teaching laboratory courses and supported students with programming and system design concepts.",
    tags: ["Teaching", "Programming", "System Design"],
  },
];

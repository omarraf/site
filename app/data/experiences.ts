export interface ExperienceUpdate {
  id: string;
  title: string;
  date: string;
  content: string;
  images?: string[];
  week?: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  type: 'research' | 'internship' | 'work' | 'academic' | 'project';
  status: 'ongoing' | 'completed' | 'upcoming';
  startDate: string;
  endDate?: string;
  duration?: string;
  organization?: string;
  location?: string;
  tags: string[];
  image?: string;
  overview: string;
  updates: ExperienceUpdate[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    website?: string;
  };
}

export const experiences: Experience[] = [
  {
    id: "research-project-2024",
    title: "10-Week Research Project",
    description: "An intensive research experience exploring HCI + LLM for family health management",
    type: "research",
    status: "ongoing",
    startDate: "2025-05-26", 
    duration: "10 weeks",
    organization: "UIOWA",
    location: "Iowa City, IA",
    tags: ["Research", "Data Analysis", "Human-Computer Interaction", "LLM", "AI"],
    image: "/images/research-hero.jpg", 
    overview: `
This 10-week research project represents my first deep dive into academic research. I'm exploring [describe your research topic and goals here]. 

The project involves [describe methodology, tools, approaches you're using]. Throughout these 10 weeks, I'm documenting every step of the research process - from initial literature review and hypothesis formation to data collection, analysis, and final conclusions.

This experience is teaching me valuable skills in research methodology, critical thinking, academic writing, and data analysis while contributing new knowledge to [your field of study].
    `,
    updates: [
      {
        id: "week-1",
        title: "Research Kickoff & Literature Review",
        date: "2024-12-01",
        week: 1,
        content: `
## Week 1: Getting Started

This week marked the official beginning of my research journey! Here's what I accomplished:

### Literature Review
- Conducted initial literature search using [databases/tools]
- Identified key papers and researchers in the field
- Started building my research bibliography

### Research Question Development
- Refined my initial research question
- Discussed scope and feasibility with advisor
- Outlined potential methodologies

### Tools & Setup
- Set up research workspace
- Configured necessary software/tools
- Created project organization system

### Next Week Goals
- Complete comprehensive literature review
- Finalize research methodology
- Begin data collection planning

The excitement is real! Looking forward to diving deeper next week.
        `,
        images: ["/images/research-week1-1.jpg", "/images/research-week1-2.jpg"]
      },
      {
        id: "week-2",
        title: "Methodology Design & Planning",
        date: "2024-12-08",
        week: 2,
        content: `
## Week 2: Building the Foundation

Week 2 was all about laying solid groundwork for the research ahead.

### Methodology Finalization
- Completed research design framework
- Selected data collection methods
- Established success metrics and evaluation criteria

### Research Plan
- Created detailed 10-week timeline
- Identified potential challenges and mitigation strategies
- Set up weekly milestone check-ins

### Preliminary Work
- [Add your specific week 2 activities]
- [Any early findings or insights]

### Challenges This Week
- [Describe any obstacles you encountered]
- [How you're addressing them]

### Looking Ahead
Week 3 goals: [Outline next week's objectives]
        `,
        images: []
      }
    ],
    links: {
      github: "https://github.com/omarraf/research-project-2024",
      // Add other relevant links as they become available
    }
  }
]; 
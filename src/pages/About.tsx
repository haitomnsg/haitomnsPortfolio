import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Swords, Briefcase, Award } from "lucide-react"; // Changed FileText to Swords

const introText = "I'm a passionate Robotics and AI Developer with a love for building real-world solutions, from autonomous robots to intelligent software. Focused, creative, and detail-oriented, I enjoy leading projects that blend programming, AI, and robotics to solve everyday problems in simple, effective ways.";

const academicEducation = [
  {
    degree: "BTech in Artificial Intelligence (2027)",
    institution: "Kathmandu University, Dhulikhel",
    duration: "II Year II Semester",
  },
  {
    degree: "Technical Education in Computer Engineering (2023)",
    institution: "Shree Nrisingh Madhyamika Vidyalaya, Birgunj", // Changed Birgunj-14 to Birgunj
    duration: "3.48 GPA",
  },
  {
    degree: "Technical Secondary Education Examination in Computer Engineering (2021)",
    institution: "Shree Nrisingh Madhyamika Vidyalaya, Birgunj", // Changed Birgunj-14 to Birgunj
    duration: "4 GPA",
  },
];

const hackathons = [ // Renamed from nonFormalEducation and updated content
  {
    program: "AI/ML Hackathon 2025", // Corrected typo
    provider: "Best Presentation Award",
    duration: "Organized by Global IME Bank Limited",
  },
  {
    program: "CodeFest 2024",
    provider: "1st Runner Up",
    duration: "Organized by Code For Change",
  },
  {
    program: "AAVISHKAR 2024",
    provider: "1st Runner Up",
    duration: "Organized by Kathmandu University Robotics Club",
  },
];

const experience = [ // Removed specified entries
  {
    role: "Head of Development",
    company: "Haitomns Groups Private Limited",
    duration: "(September 2022 – Present)",
  },
  {
    role: "Blogger",
    company: "High Approach",
    duration: "(March 2021 – Present)",
  },
];

const certifications = [ // Updated content
  {
    name: "Certification For Mentor",
    issuer: "Issued by Kathmandu University Robotics Club", // Corrected typo
    year: "2025",
  },
  {
    name: "Certification of Winner",
    issuer: "Issued by Ministry of Education and Social Welfare",
    year: "2023",
  },
  {
    name: "Participant in Startup & Idea Fest",
    issuer: "Issued by Living with ICT", // Corrected typo
    year: "2022",
  },
];

interface SectionItem {
  primary: string;
  secondary: string;
  tertiary?: string;
}

interface SectionCardProps {
  title: string;
  icon: React.ElementType;
  items: SectionItem[];
  cardClassName?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon: Icon, items, cardClassName }) => (
  <Card className={`shadow-lg flex flex-col ${cardClassName}`}>
    <CardHeader className="flex flex-col items-start pt-5 pb-4">
      <Icon className="w-7 h-7 text-primary mb-3" />
      <CardTitle className="text-2xl font-semibold text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0 flex-grow">
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="relative pl-5">
            <div
              className="absolute left-0 w-2 h-2 bg-foreground rounded-full"
              style={{ top: '0.375em' }} 
            ></div>
            {index < items.length - 1 && (
              <div
                className="absolute w-0.5 bg-[#e6e6e6] -z-10"
                style={{
                  left: '0.1875rem', 
                  top: 'calc(0.375em + 0.25rem)', 
                  bottom: 'calc(-1.5rem + 0.375em + 0.25rem)',
                }}
              ></div>
            )}
            <div>
              <span className="font-medium text-foreground leading-snug">{item.primary}</span>
              <div className="text-sm text-muted-foreground mt-1 leading-snug">{item.secondary}</div>
              {item.tertiary && <div className="text-sm text-muted-foreground mt-1 leading-snug">{item.tertiary}</div>}
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);


const About = () => {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-semibold mb-4 text-left text-foreground">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-4xl text-left">
          {introText}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-x-8 gap-y-8">
        <SectionCard
          title="Academic Education"
          icon={GraduationCap}
          items={academicEducation.map(edu => ({
            primary: edu.degree,
            secondary: edu.institution,
            tertiary: edu.duration,
          }))}
        />
        <SectionCard
          title="Hackathons" // Changed title
          icon={Swords} // Changed icon
          items={hackathons.map(hack => ({ // Changed data source
            primary: hack.program,
            secondary: hack.provider, // This will be "1st Runner Up", "Best Presentation Award"
            tertiary: hack.duration,  // This will be "Organized by..."
          }))}
        />
        <SectionCard
          title="Experience"
          icon={Briefcase}
          items={experience.map(exp => ({
            primary: exp.role,
            secondary: exp.company,
            tertiary: exp.duration,
          }))}
        />
        <SectionCard
          title="Certifications"
          icon={Award}
          items={certifications.map(cert => ({
            primary: cert.name,
            secondary: cert.issuer,
            tertiary: cert.year,
          }))}
        />
      </section>
    </div>
  );
};

export default About;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Briefcase, Award } from "lucide-react";

const introText = "I'm a passionate Robotics and AI Developer with a love for building real-world solutions, from autonomous robots to intelligent software. Focused, creative, and detail-oriented, I enjoy leading projects that blend programming, AI, and robotics to solve everyday problems in simple, effective ways.";

const academicEducation = [
  {
    degree: "BTech in Artificial Intelligence",
    institution: "Kathmandu University, Dhulikhel",
    duration: "II Year II Semester", // Corrected typo
  },
  {
    degree: "Technical Secondary Education Examination in Computer Engineering (2077)",
    institution: "Shree Nrisingh Madhyamika Vidyalaya, Birgunj-14",
    duration: "4 GPA", // Using duration field for GPA as it's the tertiary line
  },
  {
    degree: "Technical Education in Computer Engineering (2079)",
    institution: "Shree Nrisingh Madhyamika Vidyalaya, Birgunj-14",
    duration: "3.48 GPA", // Using duration field for GPA
  },
];

const nonFormalEducation = [
  {
    program: "UX Certification Program",
    provider: "Nielsen Norman Group [NNG]",
    duration: "March – June 2023",
  },
  {
    program: "User Experience Design Immersive",
    provider: "General Assembly",
    duration: "October 2022 – January 2023",
  },
  {
    program: "UX Design Specialization Course",
    provider: "Interaction Design Foundation [IDF]",
    duration: "January – June 2022",
  },
];

const experience = [
  {
    role: "UX Designer",
    company: "Google",
    duration: "January 2022 - Present",
  },
  {
    role: "Web Designer",
    company: "Adobe",
    duration: "June 2019 – December 2021",
  },
  {
    role: "SEO Specialist",
    company: "Hubspot",
    duration: "July 2017 – May 2019",
  },
  {
    role: "UI/UX Designer Intern",
    company: "Spotify",
    duration: "January 2017 – June 2017",
  },
];

const certifications = [
  {
    name: "Certified Usability Analyst (CUA)",
    issuer: "Issued by Human Factors International (HFI)",
    year: "2023",
  },
  {
    name: "NNG UX Certification",
    issuer: "Issued by Nielsen Norman Group (NNG)",
    year: "2022",
  },
  {
    name: "Adobe Certified UX Design Specialist",
    issuer: "Issued by Adobe",
    year: "2021",
  },
  {
    name: "Professional Diploma in UX Design",
    issuer: "Issued by the UX Design Institute",
    year: "2021",
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
            tertiary: edu.duration, // This will now display "II Year II Semester", "4 GPA", "3.48 GPA"
          }))}
        />
        <SectionCard
          title="Non-Formal Education"
          icon={FileText}
          items={nonFormalEducation.map(edu => ({
            primary: edu.program,
            secondary: edu.provider,
            tertiary: edu.duration,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Briefcase, Award } from "lucide-react";

const introText = "I'm a passionate Robotics and AI Developer with a love for building real-world solutions, from autonomous robots to intelligent software. Focused, creative, and detail-oriented, I enjoy leading projects that blend programming, AI, and robotics to solve everyday problems in simple, effective ways.";

const academicEducation = [
  {
    degree: "Master of Arts (MA) in User Experience Design",
    institution: "University of the Arts London - London College of Communication",
    duration: "2020 – 2022",
  },
  {
    degree: "Master of Science (MS) in Strategic Design an Management", // "an" seems like a typo in image, should be "and"
    institution: "Parsons School of Design",
    duration: "2018 – 2020",
  },
  {
    degree: "Bachelor of Fine Arts (BFA) in Interactive Design and Game Development",
    institution: "Savannah College of Art and Design [SCAD]",
    duration: "2015 – 2017",
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
    <CardHeader className="flex flex-row items-center space-x-3 pb-3">
      <Icon className="w-6 h-6 text-primary" />
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0 flex-grow">
      <ul className="space-y-4 list-disc list-inside text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="ml-2">
            <span className="font-medium text-foreground">{item.primary}</span>
            <div className="text-sm ml-0">{item.secondary}</div>
            {item.tertiary && <div className="text-sm ml-0">{item.tertiary}</div>}
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
        <h1 className="text-4xl font-semibold mb-4 text-left">About Me</h1>
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code2, BrainCircuit, Bot, Download } from "lucide-react"; // Added Download

const skillCards = [
  {
    icon: <Code2 className="w-10 h-10 text-red-500" />,
    title: "Programming",
    skillsList: ["C", "C++", "C#", "HTML", "CSS", "Java", "JavaScript", "PHP", "SQL"],
    bgColor: "bg-red-100",
    iconBg: "bg-red-200",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-green-500" />,
    title: "AI/ML",
    skillsList: ["Python", "Tensorflow", "PyTorch", "YOLO"],
    bgColor: "bg-green-100",
    iconBg: "bg-green-200",
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-500" />,
    title: "Robotics",
    skillsList: ["Raspberry Pi", "Arduino", "ESP 32"],
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-200",
  },
];

const Index = () => {
  const handleDownloadCV = () => {
    alert("Resume download functionality would be here!");
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center md:items-start text-center md:text-left">
        <img 
          src="/images/ashish-profile-circle.png" 
          alt="Ashish Gupta"
          className="w-40 h-40 rounded-full object-cover mb-6 shadow-md"
        />
        
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start mb-4">
          <h1 className="text-5xl font-semibold text-foreground mb-4 md:mb-0 text-center md:text-left">
            Hey <span role="img" aria-label="waving hand">👋</span>, I'm Ashish!
          </h1>
          <Button 
            variant="outline" 
            onClick={handleDownloadCV}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70 w-auto mt-4 md:mt-0" // w-auto for natural width, mt-4 for mobile spacing
          >
            <Download className="mr-[6px] h-4 w-4" /> Resume
          </Button>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-3xl text-center md:text-left">
          I'm Ashish Gupta, a multidisciplinary engineer building intelligent robots and AI-driven systems to solve real-world problems. With a passion for code, vision, and robotics, I aim to create machines that don’t just function, they think, act, and help shape the future.
        </p>
      </section>

      {/* Skill Cards Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {skillCards.map((card) => (
          <Card key={card.title} className={`overflow-hidden ${card.bgColor} border-none shadow-lg flex flex-col`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className={`p-3 rounded-full ${card.iconBg}`}>
                {card.icon}
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <CardTitle className="text-xl font-semibold text-foreground mb-6">{card.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.skillsList.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm bg-white/70 text-foreground hover:bg-white">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Index;
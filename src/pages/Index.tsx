import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Code2, BrainCircuit, Bot, Download } from "lucide-react";

const skillCards = [
  {
    icon: <Code2 className="w-10 h-10 text-red-500" />,
    title: "Programming",
    bgColor: "bg-red-100",
    iconBg: "bg-red-200",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-green-500" />,
    title: "AI/ML",
    bgColor: "bg-green-100",
    iconBg: "bg-green-200",
  },
  {
    icon: <Bot className="w-10 h-10 text-blue-500" />, // Updated color to blue
    title: "Robotics",
    bgColor: "bg-blue-100", // Updated background to blue theme
    iconBg: "bg-blue-200",  // Updated icon background to blue theme
  },
];

const Index = () => {
  const handleDownloadCV = () => {
    alert("Resume download functionality would be here!");
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-semibold">
            Hey <span role="img" aria-label="waving hand">👋</span>, I'm Ashish!
          </h1>
          <Button 
            variant="outline" 
            onClick={handleDownloadCV}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70"
          >
            <Download className="mr-[6px] h-4 w-4" /> Resume
          </Button>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          I'm Ashish Gupta, a multidisciplinary engineer building intelligent robots and AI-driven systems to solve real-world problems. With a passion for code, vision, and robotics, I aim to create machines that don’t just function, they think, act, and help shape the future.
        </p>
      </section>

      {/* Skill Cards Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {skillCards.map((card) => (
          <Card key={card.title} className={`overflow-hidden ${card.bgColor} border-none shadow-lg`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className={`p-3 rounded-full ${card.iconBg}`}>
                {card.icon}
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold text-gray-800">{card.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Index;
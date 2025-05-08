import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Code2, BrainCircuit, Bot, Download } from "lucide-react"; // Added Download icon

const skillCards = [
  {
    icon: <Code2 className="w-10 h-10 text-red-500" />, // Updated color to red
    title: "Programming",
    bgColor: "bg-red-100", // Updated background to red theme
    iconBg: "bg-red-200",  // Updated icon background to red theme
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-green-500" />, // Updated color to green
    title: "AI/ML",
    bgColor: "bg-green-100", // Updated background to green theme
    iconBg: "bg-green-200",  // Updated icon background to green theme
  },
  {
    icon: <Bot className="w-10 h-10 text-yellow-500" />, // Updated color to yellow
    title: "Robotics",
    bgColor: "bg-yellow-100", // Updated background to yellow theme
    iconBg: "bg-yellow-200",  // Updated icon background to yellow theme
  },
];

const Index = () => {
  // Placeholder function for CV download
  const handleDownloadCV = () => {
    // In a real scenario, you would trigger a file download here.
    // For example: window.open('/path/to/your/cv.pdf', '_blank');
    alert("CV download functionality would be here!");
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-semibold">
            Hey <span role="img" aria-label="waving hand">👋</span>, I'm Ashish!
          </h1>
          <Button onClick={handleDownloadCV}>
            <Download className="mr-2 h-4 w-4" /> Download CV
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

      {/* Placeholder for About Me section, will be built on the /about page or later here */}
      {/* <section>
        <h2 className="text-3xl font-bold mb-6 text-left">About Me</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-muted-foreground">Detailed about me section will go here...</p>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
};

export default Index;
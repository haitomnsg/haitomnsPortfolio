import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Code2, BrainCircuit, Bot } from "lucide-react"; // Updated icons

const skillCards = [
  {
    icon: <Code2 className="w-10 h-10 text-purple-500" />, // Icon for Programming
    title: "Programming",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-200",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-blue-500" />, // Icon for AI/ML
    title: "AI/ML",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-200",
  },
  {
    icon: <Bot className="w-10 h-10 text-pink-500" />, // Icon for Robotics
    title: "Robotics",
    bgColor: "bg-pink-100",
    iconBg: "bg-pink-200",
  },
];

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left">
        <h1 className="text-5xl font-semibold mb-6"> {/* Changed from font-bold to font-semibold */}
          Hey <span role="img" aria-label="waving hand">👋</span>, I'm Nicole!
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl"> {/* Changed from max-w-2xl to max-w-3xl */}
          I'm Nicole Harper, a passionate Creative Designer with multiple hats as you will see below. I focus on creating intuitive, user-friendly, and visually engaging digital experiences that solve real problems and deliver measurable results.
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
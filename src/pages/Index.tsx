import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, Box, Palette, Search } from "lucide-react";

const skillCards = [
  {
    icon: <Box className="w-10 h-10 text-purple-500" />,
    title: "UI/UX Designer",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-200",
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-500" />,
    title: "Web Designer",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-200",
  },
  {
    icon: <Search className="w-10 h-10 text-pink-500" />,
    title: "SEO Specialist",
    bgColor: "bg-pink-100",
    iconBg: "bg-pink-200",
  },
];

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left">
        <h1 className="text-5xl font-bold mb-4">
          Hey <span role="img" aria-label="waving hand">👋</span>, I'm Nicole!
        </h1>
        <div className="flex items-center space-x-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-lg text-muted-foreground">Available for Projects</span>
          <Button size="lg">Contact Me</Button>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
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
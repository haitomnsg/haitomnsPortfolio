import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio"; // For maintaining image aspect ratio

const introText = "My projects reflect my commitment to solving complex challenges through design. Whether it's building a travel platform or enhancing a real estate website, each project is a blend of innovation, strategy, and user-first design principles.";

const projectsData = [
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Omnifood+Project", // Placeholder
    title: "Omnifood: Revolutionizing Personalized Meal Delivery",
    link: "#", // Placeholder link
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Natours+Project", // Placeholder
    title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
    link: "#",
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Nexter+Project", // Placeholder
    title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
    link: "#",
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Trillo+Project", // Placeholder
    title: "Trillo: Simplifying Travel Planning with Smart, User-Focused Solutions",
    link: "#",
  },
];

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Card className="h-full flex flex-col border-0"> {/* Remove card border */}
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 10}> {/* Adjust ratio as needed, 16/10 or 4/3 are common */}
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 bg-card flex-grow">
        <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  </a>
);

const Projects = () => {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-semibold mb-4 text-left text-foreground">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl text-left">
          {introText}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            imageUrl={project.imageUrl}
            title={project.title}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
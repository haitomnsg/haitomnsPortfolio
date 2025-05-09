import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Card is now for the main container
import { AspectRatio } from "@/components/ui/aspect-ratio";

const introText = "My projects reflect my commitment to solving complex challenges through design. Whether it's building a travel platform or enhancing a real estate website, each project is a blend of innovation, strategy, and user-first design principles.";

const projectsData = [
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Omnifood+Project",
    title: "Omnifood: Revolutionizing Personalized Meal Delivery",
    link: "#",
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Natours+Project",
    title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
    link: "#",
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Nexter+Project",
    title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
    link: "#",
  },
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=Trillo+Project",
    title: "Trillo: Simplifying Travel Planning with Smart, User-Focused Solutions",
    link: "#",
  },
];

interface ProjectItemProps { // Renamed from ProjectCardProps
  imageUrl: string;
  title: string;
  link: string;
}

// This is now for individual project items, not a full card
const ProjectItem: React.FC<ProjectItemProps> = ({ imageUrl, title, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 bg-background"> {/* Added bg-background for individual item if needed, or remove if container card bg is enough */}
      <AspectRatio ratio={16 / 10}>
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>
    </div>
    <h3 className="mt-3 text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300"> {/* Reduced font size, changed CardTitle to h3 */}
      {title}
    </h3>
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

      <section>
        <Card className="shadow-xl"> {/* Single container card */}
          <CardContent className="p-6 md:p-8"> {/* Added padding to the container card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"> {/* gap-y increased for title space */}
              {projectsData.map((project) => (
                <ProjectItem // Using the new ProjectItem component
                  key={project.title}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  link={project.link}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
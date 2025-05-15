import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye } from "lucide-react";

const introText = "My projects focus on solving real-life problems through practical, user-centric solutions. I aim to build complete systems that are both innovative and functional designed with clean code, efficient architecture, and real-world usability in mind. Whether for everyday users or businesses, my goal is to make technology genuinely helpful.";

const projectsData = [
  {
    imageUrl: "./images/doclipi.png",
    title: "DocLipi: An Intelligent Document Classifier and OCR Solution",
    link: "#",
  },
  {
    imageUrl: "./images/tomato-bot.jpg",
    title: "TomatoBot: Eats all red tomatoes",
    link: "#",
  },
  {
    imageUrl: "./images/jiffy.png",
    title: "Jiffy: The AI Food Delivery App",
    link: "#",
  },
  {
    imageUrl: "./images/phulbari.png",
    title: "Phulbari: Happy Flower Happy You",
    link: "#",
  },
  {
    imageUrl: "./images/resthat.png",
    title: "RestHat: Simplify your Restaurant Experience",
    link: "#",
  },
  {
    imageUrl: "./images/redsoil.jpg",
    title: "RedSoil: Make your Blood Work Easy",
    link: "#",
  }
];

interface ProjectItemProps {
  imageUrl: string;
  title: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imageUrl, title, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 bg-background">
      <AspectRatio ratio={16 / 10}>
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="p-3 bg-primary rounded-full mb-3 shadow-md"> {/* Circled icon */}
            <Eye className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-foreground text-sm font-medium">View Project</span> {/* Black text */}
        </div>
      </AspectRatio>
    </div>
    <h3 className="mt-3 text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
      {title}
    </h3>
  </a>
);

const Projects = () => {
  return (
    <section id="projects-section" className="space-y-10"> {/* Added section with ID */}
      <section>
        <h1 className="text-4xl font-semibold mb-4 text-left text-foreground">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl text-left">
          {introText}
        </p>
      </section>

      <section>
        <Card className="shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {projectsData.map((project) => (
                <ProjectItem
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
    </section>
  );
};

export default Projects;
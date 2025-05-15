import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import { projectsData } from "@/data/projects"; // Import project data

const introText = "My projects focus on solving real-life problems through practical, user-centric solutions. I aim to build complete systems that are both innovative and functional designed with clean code, efficient architecture, and real-world usability in mind. Whether for everyday users or businesses, my goal is to make technology genuinely helpful.";

// Use the imported projectsData instead of a local array
// const projectsData = [ ... ]; // Removed local data

interface ProjectItemProps {
  project: {
    id: string; // Add id for linking
    imageUrl: string;
    title: string;
    // link: string; // Removed as we will use id for routing
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  // Use Link component for internal navigation
  <Link to={`/projects/${project.id}`} className="group block">
    <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 bg-background">
      <AspectRatio ratio={16 / 10}>
        <img
          src={project.imageUrl}
          alt={project.title}
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
      {project.title}
    </h3>
  </Link>
);

const Projects = () => {
  // Filter projectsData to only include items that have a corresponding detail page defined
  // This prevents linking to projects that don't have data in src/data/projects.ts
  const projectsWithDetails = projectsData.filter(project =>
    // Check if the project ID exists in the imported projectsData array
    projectsData.some(data => data.id === project.id)
  );


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
              {/* Use the filtered projectsWithDetails */}
              {projectsWithDetails.map((project) => (
                <ProjectItem
                  key={project.id} // Use project.id as key
                  project={{ // Pass necessary props to ProjectItem
                    id: project.id,
                    imageUrl: project.mainImageUrl, // Use mainImageUrl for the thumbnail
                    title: project.title,
                  }}
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
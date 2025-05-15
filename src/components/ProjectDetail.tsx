import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects'; // Import the Project type
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  if (!project) {
    return <div>Project not found.</div>; // Basic handling if project data is missing
  }

  return (
    <div className="space-y-8">
      {/* Back to Projects Link */}
      <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Link>

      {/* Project Title and Meta */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">{project.title}</h1>
        {/* Optional Category and Client */}
        {(project.category || project.client) && (
          <p className="text-sm text-muted-foreground">
            {project.category && `Category: ${project.category}`}
            {project.category && project.client && ' • '}
            {project.client && `Client: ${project.client}`}
          </p>
        )}
      </div>

      {/* Main Project Image */}
      {project.mainImageUrl && (
        <Card className="shadow-xl overflow-hidden">
          <AspectRatio ratio={16 / 9}> {/* Adjust ratio as needed */}
            <img
              src={project.mainImageUrl}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </Card>
      )}

      {/* Supporting Images */}
      {project.supportingImages && project.supportingImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.supportingImages.map((imgUrl, index) => (
            <Card key={index} className="shadow-md overflow-hidden">
               <AspectRatio ratio={16 / 10}> {/* Adjust ratio as needed */}
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </Card>
          ))}
        </div>
      )}

      {/* Project Sections */}
      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-8 text-base text-muted-foreground">
          {/* Intro Text */}
           <p className="text-lg text-foreground font-medium leading-relaxed">{project.intro}</p>
           <div className="border-t border-border pt-8 space-y-8"> {/* Separator and space for sections */}
            {project.sections.map((section, index) => (
              <section key={index} className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-outside space-y-2 pl-5">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{section.content}</p>
                )}
              </section>
            ))}
           </div>
        </CardContent>
      </Card>

      {/* Previous/Next Navigation (Optional - can add later if needed) */}
      {/* <div className="flex justify-between mt-8">
        <Link to="#" className="text-primary hover:underline">&lt; Previous</Link>
        <Link to="#" className="text-primary hover:underline">Next &gt;</Link>
      </div> */}
    </div>
  );
};

export default ProjectDetail;
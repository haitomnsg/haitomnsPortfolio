import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects'; // Import the Project type
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  // Check if project data exists and has supporting images
  if (!project || !project.supportingImages || project.supportingImages.length === 0) {
    // Handle case where project or images are missing
    // Show a message and the back link
    return (
      <div className="space-y-8">
         <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <h1 className="text-4xl font-semibold text-foreground">{project?.title || 'Project Details'}</h1>
        <p className="text-muted-foreground">No images available for this project.</p>
      </div>
    );
  }

  // State to manage the currently displayed main image, initialized with the first supporting image
  const [mainImage, setMainImage] = useState<string>(project.supportingImages[0]);

  // Get the rest of the images for the thumbnail grid
  const thumbnailImages = project.supportingImages.slice(1);

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

      {/* Main Project Image (using state, defaults to first supporting image) */}
      {mainImage && (
        <Card className="shadow-xl overflow-hidden">
          <AspectRatio ratio={16 / 9}> {/* Adjust ratio as needed */}
            <img
              src={mainImage} // Use the state variable
              alt={`${project.title} main image`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </Card>
      )}

      {/* Supporting Images (Thumbnails) */}
      {thumbnailImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted grid for more images */}
          {thumbnailImages.map((imgUrl, index) => (
            <Card
              key={index}
              className="shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setMainImage(imgUrl)} // Set main image on click
            >
               <AspectRatio ratio={16 / 10}> {/* Adjust ratio as needed */}
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${index + 2}`} // Alt text adjusted for index
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" // Added zoom effect
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
                {/* Custom rendering for the 'Requirement' section */}
                {section.heading === 'Requirement' && Array.isArray(section.content) ? (
                  <>
                    {/* Render the first item as a paragraph */}
                    <p className="text-muted-foreground">{section.content[0]}</p>
                    {/* Render the rest as a numbered list */}
                    <ol className="list-decimal list-outside space-y-2 pl-5">
                      {section.content.slice(1).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">{item}</li>
                      ))}
                    </ol>
                  </>
                ) : Array.isArray(section.content) ? (
                  // Existing logic for other sections with array content (unordered list)
                  <ul className="list-disc list-outside space-y-2 pl-5">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                ) : (
                  // Existing logic for sections with string content (paragraph)
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
        <Link to="#" className="text-primary hover:underline">Next &gt; </Link>
      </div> */}
    </div>
  );
};

export default ProjectDetail;
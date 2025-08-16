import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Dialog components
import { ArrowLeft, Link as LinkIcon, Github, Users, X } from 'lucide-react'; // Import LinkIcon, Github, Users, X

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  // State to manage the currently displayed main image, initialized with the first supporting image
  // and for the lightbox visibility
  const [mainImage, setMainImage] = useState<string | undefined>(project.supportingImages?.[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxImage, setCurrentLightboxImage] = useState<string | undefined>(undefined);

  // Handle case where project or images are missing
  if (!project || !project.supportingImages || project.supportingImages.length === 0) {
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

  // Function to open lightbox with a specific image
  const openLightbox = (imageUrl: string) => {
    setCurrentLightboxImage(imageUrl);
    setIsLightboxOpen(true);
  };

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
        <Card className="shadow-xl overflow-hidden cursor-pointer" onClick={() => openLightbox(mainImage)}>
          <AspectRatio ratio={16 / 9}>
            <img
              src={mainImage}
              alt={`${project.title} main image`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </Card>
      )}

      {/* Supporting Images (Thumbnails) */}
      {thumbnailImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {thumbnailImages.map((imgUrl, index) => (
            <Card
              key={index}
              className="shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setMainImage(imgUrl)} // Set main image on click
            >
               <AspectRatio ratio={16 / 10}>
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
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
           <div className="border-t border-border pt-8 space-y-8">
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

            {/* New: Project Links Section */}
            {(project.liveLink || project.githubLink) && (
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Project Links</h2>
                <ul className="list-disc list-outside space-y-2 pl-5">
                  {project.liveLink && (
                    <li>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                        <LinkIcon className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </li>
                  )}
                  {project.githubLink && (
                    <li>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                        <Github className="w-4 h-4 mr-2" /> GitHub Repository
                      </a>
                    </li>
                  )}
                </ul>
              </section>
            )}

            {/* New: Developers Involved Section */}
            {project.developers && project.developers.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Developers Involved</h2>
                <ul className="list-disc list-outside space-y-2 pl-5">
                  {project.developers.map((developer, index) => (
                    <li key={index} className="text-muted-foreground inline-flex items-center">
                      <Users className="w-4 h-4 mr-2" /> {developer}
                    </li>
                  ))}
                </ul>
              </section>
            )}
           </div>
        </CardContent>
      </Card>

      {/* Image Lightbox/Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-screen-lg max-h-screen-lg p-0 border-none bg-transparent shadow-none backdrop-blur-sm">
          {/* Removed white cross (close) button from lightbox */}
          {currentLightboxImage && (
            <img
              src={currentLightboxImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain mx-auto my-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
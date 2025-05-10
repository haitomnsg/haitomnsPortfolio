import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react'; // Icon for features

interface ProjectDetail {
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

interface ProjectDetailRowProps {
  project: ProjectDetail;
}

const ProjectDetailRow: React.FC<ProjectDetailRowProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 md:flex-shrink-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="object-cover w-full h-48 md:h-full" 
          />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8 flex-grow">
          <CardTitle className="text-2xl font-semibold text-foreground mb-3">{project.title}</CardTitle>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Features Section */}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-foreground mb-2">Key Features:</h4>
            <ul className="space-y-1.5">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section */}
          <div>
            <h4 className="text-md font-semibold text-foreground mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetailRow;
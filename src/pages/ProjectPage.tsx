import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '@/components/ProjectDetail';
import { projectsData } from '@/data/projects'; // Import the project data
import NotFound from './NotFound'; // Import NotFound page

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project data based on the projectId from the URL
  const project = projectsData.find(p => p.id === projectId);

  // If project is not found, render the NotFound page
  if (!project) {
    return <NotFound />;
  }

  // Render the ProjectDetail component with the found project data
  return <ProjectDetail project={project} />;
};

export default ProjectPage;
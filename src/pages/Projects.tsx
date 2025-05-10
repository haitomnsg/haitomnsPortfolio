import React from 'react';
import ProjectDetailRow from '@/components/ProjectDetailRow'; // Import the new component

const pageIntroText = "Here's a selection of projects I've worked on, showcasing my skills in building practical and innovative solutions. Each project reflects my dedication to clean code, user-centric design, and impactful technology.";

const projectsData = [
  {
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568?text=DocLipi",
    title: "DocLipi: Intelligent Document Classifier & OCR",
    description: "A smart system to automatically classify various document types (invoices, receipts, contracts) and extract key information using Optical Character Recognition (OCR) and machine learning. Designed for efficiency and accuracy in data management.",
    features: [
      "Automated document sorting based on content.",
      "High-accuracy text extraction from scanned images and PDFs.",
      "Searchable digital archive for easy retrieval of documents.",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "PostgreSQL"],
  },
  {
    imageUrl: "https://placehold.co/600x400/D1FAE5/10B981?text=TomatoBot",
    title: "TomatoBot: Autonomous Tomato Harvesting Robot",
    description: "A robotic arm equipped with computer vision to identify and autonomously pick ripe tomatoes in a greenhouse environment. This project aims to improve agricultural efficiency and reduce manual labor costs through automation.",
    features: [
      "Real-time ripe tomato detection using custom vision models.",
      "Gentle and precise robotic gripping mechanism.",
      "Autonomous navigation capabilities within greenhouse rows.",
    ],
    technologies: ["Python", "ROS (Robot Operating System)", "OpenCV", "Raspberry Pi", "Arduino", "3D Printing"],
  },
  {
    imageUrl: "https://placehold.co/600x400/DBEAFE/3B82F6?text=Jiffy+AI",
    title: "Jiffy: AI-Powered Food Delivery Optimization",
    description: "An intelligent platform for food delivery services that leverages AI to optimize delivery routes, predict demand, and manage fleet operations. The goal is to ensure faster, more cost-effective, and reliable deliveries.",
    features: [
      "Dynamic route optimization considering real-time traffic.",
      "Predictive demand forecasting for efficient resource allocation.",
      "Real-time driver tracking and order management dashboard.",
    ],
    technologies: ["Node.js", "React Native", "Google Maps API", "Python (for AI models)", "Firebase", "Docker"],
  },
];

const Projects = () => {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-semibold mb-4 text-left text-foreground">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-4xl text-left">
          {pageIntroText}
        </p>
      </section>

      <section className="space-y-8 md:space-y-12">
        {projectsData.map((project, index) => (
          <ProjectDetailRow key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
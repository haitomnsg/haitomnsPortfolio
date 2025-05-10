import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const pageIntroText = "Exploring the frontiers of automation and intelligence, my robotics projects are designed to interact with and improve the world around us. From autonomous navigation to complex task execution, each robot is a testament to the power of combining robust hardware with sophisticated software.";

interface RobotProject {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const robotProjectsData: RobotProject[] = [
  {
    id: 'tomatobot',
    imageUrl: 'https://placehold.co/600x400/FF6347/FFFFFF?text=TomatoBot',
    title: 'TomatoBot: Autonomous Tomato Harvesting Robot',
    description: 'TomatoBot is an autonomous tomato harvesting robot designed for farm use. It can differentiate between ripe and unripe tomatoes using YOLO object detection and navigate fields freely with its 360-degree wheel and gear motor system. A grabbing mechanism demonstrates its capability to harvest tomatoes.',
    features: [
      'Ripe/unripe tomato detection using YOLO',
      '360-degree autonomous field navigation',
      'Integrated grabbing mechanism for harvesting simulation',
    ],
    technologies: ['Raspberry Pi', 'YOLO', 'Motor Drivers', 'Camera', 'Wheels', 'Servo Motors'],
  },
  {
    id: 'face-tracking-robot',
    imageUrl: 'https://placehold.co/600x400/4A90E2/FFFFFF?text=Face+Tracking+Robot',
    title: 'AI-Driven Face and Human Tracking Robot',
    description: 'This robot captures live video feeds, processes them using AI to track human bodies and faces, and moves accordingly. It features a dual-mode operation for versatile interaction: one for human/face tracking and another for detecting and following traffic signs.',
    features: [
      'Live AI-powered human body and face tracking',
      'Responsive movement based on tracked subject',
      'Dual-mode: Human/Face Tracking & Traffic Sign Following',
      'Traffic sign detection and corresponding action execution',
    ],
    technologies: ['Arduino', 'Motor Shield Driver', 'Motors', 'Wheels', 'Battery', 'MU Sensor (AI Vision)'],
  },
  {
    id: 'disaster-rescue-vehicle',
    imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF?text=Rescue+Vehicle', // Placeholder image
    title: 'Multi-Utility Disaster Rescue Vehicle',
    description: 'A versatile rescue vehicle designed for military and disaster relief operations. It aids in rescuing victims using a robotic arm, provides surveillance via drone and camera, includes a fire extinguisher, and is equipped with an automatic gun for battlefield scenarios.',
    features: [
      'Robotic arm for rescue and manipulation tasks',
      'Drone for aerial surveillance and relief material deployment',
      'Integrated fire extinguishing system',
      'Onboard camera for real-time monitoring',
      'Automatic gun for defense and battlefield utility',
    ],
    technologies: ['Arduino', 'Robotic Arm', 'Motor Driver', 'Geared Motors', 'Camera', 'Servo', 'Water Pump Motor'],
  },
];

interface RobotProjectItemProps {
  project: RobotProject;
}

const RobotProjectItem: React.FC<RobotProjectItemProps> = ({ project }) => {
  return (
    <Card className="mb-12 shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-2/5 md:flex-shrink-0 bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 md:w-3/5">
          <CardTitle className="text-2xl font-semibold text-foreground mb-3">{project.title}</CardTitle>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2 text-md">Key Features:</h4>
            <ul className="space-y-1.5 list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 text-md">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
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

const Robotics = () => {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-semibold mb-4 text-left text-foreground">Robotics</h1>
        <p className="text-lg text-muted-foreground max-w-3xl text-left">
          {pageIntroText}
        </p>
      </section>
      <section>
        {robotProjectsData.map((project) => (
          <RobotProjectItem key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Robotics;
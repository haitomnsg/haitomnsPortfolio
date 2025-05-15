export interface Project {
  id: string;
  title: string;
  category?: string; // Optional category
  client?: string; // Optional client
  intro: string;
  mainImageUrl: string;
  supportingImages?: string[]; // Optional array of smaller images
  sections: {
    heading: string;
    content: string | string[]; // Can be a paragraph or a list of points
  }[];
  // Add fields for previous/next project links if needed later
}

export const projectsData: Project[] = [
  {
    id: 'doclipi',
    title: 'DocLipi: An Intelligent Document Classifier and OCR Solution',
    intro: 'DocLipi is designed to streamline document management by automatically classifying documents and extracting text using OCR. It helps organize large volumes of documents efficiently.',
    mainImageUrl: './images/doclipi.png', // Use the image you already have
    supportingImages: [], // Add paths to smaller images if available
    sections: [
      {
        heading: 'Overview',
        content: 'DocLipi leverages machine learning models to categorize documents (e.g., invoices, reports, letters) and integrates Optical Character Recognition (OCR) to make scanned documents searchable and editable.',
      },
      {
        heading: 'Key Features',
        content: [
          'Automated document classification',
          'High-accuracy OCR for text extraction',
          'Support for various document formats',
          'Searchable document repository',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Python', 'TensorFlow/PyTorch', 'OCR Libraries (e.g., Tesseract)', 'Web Framework (e.g., Flask/Django)'],
      },
    ],
  },
  {
    id: 'tomatobot',
    title: 'TomatoBot: Eats all red tomatoes',
    intro: 'TomatoBot is an autonomous robot designed to identify and interact with ripe tomatoes in a controlled environment.',
    mainImageUrl: './images/tomato-bot.jpg', // Use the image you already have
    supportingImages: ['./images/tomato-bot-robot.jpg'], // Use the robot image as a supporting image
    sections: [
      {
        heading: 'Concept',
        content: 'The goal was to build a simple robot capable of visual identification and basic manipulation, simulating a harvesting task.',
      },
      {
        heading: 'Implementation',
        content: [
          'Used YOLO for real-time object detection (red tomatoes).',
          'Implemented navigation logic based on object location.',
          'Designed a simple grabbing mechanism.',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Raspberry Pi', 'YOLO', 'OpenCV', 'Python', 'Motor Drivers', 'Servo Motors'],
      },
    ],
  },
   {
    id: 'jiffy',
    title: 'Jiffy: The AI Food Delivery App',
    intro: 'Jiffy is a concept for a food delivery app that uses AI to personalize recommendations and optimize delivery routes.',
    mainImageUrl: './images/jiffy.png',
    supportingImages: [],
    sections: [
      {
        heading: 'Vision',
        content: 'To create a seamless and highly efficient food delivery experience powered by intelligent algorithms.',
      },
      {
        heading: 'Features',
        content: [
          'Personalized restaurant and dish recommendations',
          'Dynamic route optimization for faster delivery',
          'Predictive ordering suggestions',
          'User-friendly interface',
        ],
      },
      {
        heading: 'Technologies Used (Conceptual)',
        content: ['Machine Learning (for recommendations/optimization)', 'Mobile Development Framework (e.g., React Native)', 'Mapping APIs'],
      },
    ],
  },
  {
    id: 'phulbari',
    title: 'Phulbari: Happy Flower Happy You',
    intro: 'Phulbari is a project focused on monitoring and maintaining optimal conditions for plant growth using sensors and automation.',
    mainImageUrl: './images/phulbari.png',
    supportingImages: [],
    sections: [
      {
        heading: 'Goal',
        content: 'To build an automated system that ensures plants receive the right amount of water, light, and nutrients.',
      },
      {
        heading: 'Components',
        content: [
          'Soil moisture sensors',
          'Light sensors',
          'Automated watering system',
          'Data logging and monitoring interface',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Arduino/ESP32', 'Various Sensors', 'Relays', 'Water Pump', 'Data Storage/Display'],
      },
    ],
  },
   {
    id: 'resthat',
    title: 'RestHat: Simplify your Restaurant Experience',
    intro: 'RestHat is a platform designed to improve the dining experience for both customers and restaurants through digital tools.',
    mainImageUrl: './images/resthat.png',
    supportingImages: [],
    sections: [
      {
        heading: 'Concept',
        content: 'To provide features like digital menus, online ordering, table reservations, and potentially loyalty programs.',
      },
      {
        heading: 'Features',
        content: [
          'Point of Sales (POS)',
          'User Friendly',
          'Table Management',
          'Menu Management',
          'Waiter Order Module',
          'Kitchen Management',
          'IRD Certified',
        ],
      },
      {
        heading: 'Technologies Used (Conceptual)',
        content: ['Web Development (Frontend/Backend)', 'Database', 'Payment Gateway Integration'],
      },
    ],
  },
   {
    id: 'redsoil',
    title: 'RedSoil: Make your Blood Work Easy',
    intro: 'RedSoil is an application designed to store the results of the blood banks and analyze them.', // Updated intro
    mainImageUrl: 'https://user-images.githubusercontent.com/114091259/194717618-0320cb45-01a1-48ba-9bbb-b78eebdbfd00.png', // Updated main image
    supportingImages: [ // Added screenshots as supporting images
      'https://user-images.githubusercontent.com/114091259/193549206-a2303652-5b10-4078-9fda-5e4d61d1c3cf.png', // Dashboard
      'https://user-images.githubusercontent.com/114091259/193549311-53d6e702-76ee-422a-b4895f903060.png', // Blood Donation
      'https://user-images.githubusercontent.com/114091259/193549360-44f346db-53bb-4431-b9b7-1532a19ab580.png', // Find Blood
      'https://user-images.githubusercontent.com/114091259/194717625-73e5d370-c5b2-4034-8a66-60fbe17665ca.png', // User Account
    ],
    sections: [ // Added sections based on README
      {
        heading: 'Features',
        content: [
          'Interactive Dashboard to view the status of blood bank.',
          'Real life form insertion for easiness.',
          'Get all your record in a single page.',
          'Backup and restore wherever you want.',
        ],
      },
      {
        heading: 'Requirement',
        content: [ // Changed to array
          'RedSoil uses MySQL in the backend, so download and install MySQL Server, save the following configuration details:', // First item is the paragraph
          'MySQL Username', // Subsequent items for the numbered list
          'MySQL Password',
          'MySQL Port Number',
          'MySQL Installation Path',
        ],
      },
      {
        heading: 'Installation',
        content: 'Download the latest installer of RedSoil from GitHub and install it. Configure and Register the application and you are ready to use it.',
      },
      {
        heading: 'License',
        content: 'This program is free software: you can redistribute it and/or modify it under the terms of the Apache-2.0 License.',
      },
      {
        heading: 'Developers',
        content: 'RedSoil is developed and maintained under Haitomns Groups Private Limited. We welcome developers wishing to contribute in this project improve it and resolve errors.',
      },
    ],
  },
  // Add other projects here following the same structure
  // Example for Robotics projects (using IDs from Robotics.tsx):
   {
    id: 'face-tracking-robot',
    title: 'Face and Human Tracking Robot',
    intro: 'This robot captures live video feeds, processes them using AI to track human bodies and faces, and moves accordingly.',
    mainImageUrl: './images/face-bot-robot.jpg',
    supportingImages: [],
    sections: [
      {
        heading: 'Functionality',
        content: 'Features a dual-mode operation for versatile interaction: one for human/face tracking and another for detecting and following traffic signs.',
      },
      {
        heading: 'Technologies Used',
        content: ['Arduino', 'Motor Shield Driver', 'Motors', 'Battery', 'MU Sensor (AI Vision)'],
      },
    ],
  },
   {
    id: 'disaster-rescue-vehicle',
    title: 'Multi-Utility Disaster Rescue Vehicle',
    intro: 'A versatile rescue vehicle designed for military and disaster relief operations.',
    mainImageUrl: './images/rescue-bot-robot.jpg',
    supportingImages: [],
    sections: [
      {
        heading: 'Capabilities',
        content: [
          'Aids in rescuing victims using a robotic arm',
          'Provides surveillance via drone and camera',
          'Includes a fire extinguisher',
          'Equipped with an automatic gun for battlefield utility',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Arduino', 'Robotic Arm', 'Motor Driver', 'Geared Motors', 'Camera', 'Servo', 'Water Pump Motor'],
      },
    ],
  },
   {
    id: 'obstacle-avoider',
    title: 'Arduino Obstacle Avoiding Car',
    intro: 'A simple yet effective obstacle avoiding car using an ultrasonic sensor.',
    mainImageUrl: './images/obstacle-bot-robot.jpg',
    supportingImages: [],
    sections: [
      {
        heading: 'How it Works',
        content: 'Uses an ultrasonic sensor to detect nearby objects. If an obstacle is detected within a 5cm range, the car stops, scans its surroundings to find an open path, and then navigates towards the direction with the most space.',
      },
      {
        heading: 'Technologies Used',
        content: ['Arduino Uno', 'Ultrasonic Sensor', 'Motor Driver', 'Geared DC Motors'],
      },
    ],
  },
];
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
        heading: 'Potential Features',
        content: [
          'Interactive digital menus',
          'Seamless online ordering and payment',
          'Real-time table availability and booking',
          'Customer feedback system',
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
    intro: 'RedSoil is a health-tech concept aimed at simplifying the process of getting and understanding blood test results.',
    mainImageUrl: './images/redsoil.jpg',
    supportingImages: [],
    sections: [
      {
        heading: 'Vision',
        content: 'To provide users with easy access to their blood test data and understandable explanations of their results.',
      },
      {
        heading: 'Features',
        content: [
          'Secure storage of blood test reports',
          'Visualization of key health markers over time',
          'Simple explanations of test results',
          'Integration with labs (conceptual)',
        ],
      },
      {
        heading: 'Technologies Used (Conceptual)',
        content: ['Secure Data Storage', 'Data Visualization Libraries', 'User Authentication'],
      },
    ],
  },
];
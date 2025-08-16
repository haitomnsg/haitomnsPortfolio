export interface Project {
  id: string;
  title: string;
  category?: string;
  client?: string;
  intro: string;
  mainImageUrl: string;
  supportingImages?: string[];
  sections: {
    heading: string;
    content: string | string[];
  }[];
  liveLink?: string;
  githubLink?: string;
  developers?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'doclipi',
    title: 'DocLipi: An Intelligent Document Classifier and OCR Solution',
    intro: 'DocLipi is designed to streamline document management by automatically classifying documents, extracting text using OCR and grouping them.',
    mainImageUrl: '/images/doclipi.png',
    supportingImages: ['/images/doclipiDashboard.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'DocLipi leverages machine learning models to categorize documents like Citizenship Card, National ID Card, PAN Card and integrates Optical Character Recognition (OCR) to make scanned documents searchable and editable.',
      },
      {
        heading: 'Key Features',
        content: [
          'Robust Document Classification',
          'High Accuracy Nepali and English OCR',
          'Person Specific Document Grouping',
          'Searchable document using Human Language',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Python', 'TensorFlow/PyTorch', 'Gemma 3', 'Java', 'JavaFX', 'FastAPI'],
      },
    ],
    githubLink: 'https://github.com/haitomnsg/doclipi',
  },
  {
    id: 'arthaVidhia',
    title: 'ArthaVidhi: Accounting Simplified',
    intro: 'ArthaVidhi is a comprehensive billing & management solution made to manage all the billing of your company.',
    mainImageUrl: '/images/arthavidhi.png',
    supportingImages: ['/images/arthavidhiDashboard.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'ArthaVidhi is a modern, full-stack web application designed to simplify billing, inventory, and business management for small to medium-sized enterprises. Built with Next.js and a powerful backend, it provides an intuitive, tab-based interface for managing key business operations efficiently.',
      },
      {
        heading: 'Key Features',
        content: [
          'At-a-glance overview of key business metrics',
          'Create and manage professional, VAT-compliant invoices',
          'Add products, categorize, and track stock levels',
          'Generate detailed PDF reports for key metrics',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'MySQL', 'ShadCN UI'],
      },
    ],
    githubLink: 'https://github.com/haitomnsg/arthaVidhi',
  },
  {
    id: 'jiffy',
    title: 'Jiffy: The AI Food Delivery App',
    intro: 'Jiffy is a concept for a food delivery app the AI, AR, Games and Shorts to give users a new Food Ordering Experience.',
    mainImageUrl: '/images/jiffy.png',
    supportingImages: ['/images/jiffyApp.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'Jiffy is a food delivery platform and this app redesigns the current JIFFY APP adding features like AI food Recommendation, AR Food Menu Viewing, Games and other to make the app more interactive.',
      },
      {
        heading: 'Key Features',
        content: [
          'AI Food Suggestion',
          'AR Live Food Viewing',
          'Fun Interactive Games',
          'Food Shorts for Quick Bites',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['Java', 'Python', 'Gemini API', 'FastAPI', 'Sceneform', 'Google AR Core'],
      },
    ],
    githubLink: 'https://github.com/haitomnsg/jiffify',
  },
  {
    id: 'phulbari',
    title: 'Phulbari: Happy Flower Happy You',
    intro: 'Phulbari is an AI Flower Classification & Moisture Detection app for flowers and plants.',
    mainImageUrl: '/images/phulbari.png',
    supportingImages: ['/images/phulbariApp.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'Phulbari is an AI-powered mobile application that integrates deep learning and IoT technology to classify flowers and automate plant care. It uses Convolutional Neural Networks (CNNs) for flower classification and an IoT-based irrigation system to monitor soil moisture levels and water plants when necessary.',
      },
      {
        heading: 'Features',
        content: [
          'AI Flower Classification',
          'Accurate Care Recommendations',
          'Automatic Water Irrigation',
          'Data Logging and Monitoring Interface',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['ESP 32', 'Soil Moisture Sensor', 'Relays', 'Water Pump'],
      },
    ],
    githubLink: 'https://github.com/haitomnsg/phulbari',
  },
  {
    id: 'resthat',
    title: 'RestHat: Simplify your Restaurant Experience',
    intro: 'RestHat is a platform designed to improve the dining experience for both customers and restaurants through digital tools.',
    mainImageUrl: '/images/resthat.png',
    supportingImages: ['/images/resthatDashboard.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'RestHat, is an innovative platform designed to enhance the restaurant experience by streamlining operations and improving customer engagement. It is fully featured packed with all the modules needed to manage a restaurant effectively.',
      },
      {
        heading: 'Key Features',
        content: [
          'Interactive Dashboard to view Live Orders',
          'Menu Management',
          'Waiter Order Module',
          'Kitchen Management',
          'IRD Certified',
          'Reports Generation',
        ],
      },
      {
        heading: 'Technologies Used',
        content: ['PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS'],
      },
    ],
    githubLink: 'https://github.com/haitomnsgroups/restHatWebsite',
  },
  {
    id: 'redsoil',
    title: 'RedSoil: Make your Blood Work Easy',
    intro: 'RedSoil is an application designed to store the results of the blood banks and analyze them.',
    mainImageUrl: '/images/redSoilIcon.png',
    supportingImages: ['/images/redsoilDashboard.png'],
    sections: [
      {
        heading: 'Introduction',
        content: 'RedSoil is an application designed to store the results of the blood banks and analyze them.',
      },
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
        heading: 'Technologies Used',
        content: [
          'Java',
          'JavaFX',
          'MySQL',
          'CSS',
        ],
      },
    ],
    githubLink: 'https://github.com/haitomnsg/redsoil/',
  },
];
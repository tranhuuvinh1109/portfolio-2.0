import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'vinhhuutran.developer@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vinh, I am reaching out to you because...',

    oldPortfolio: 'https://www.linkedin.com/in/vinh-tran-huu',
    upworkProfile: 'https://www.linkedin.com/in/vinh-tran-huu',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/tranhuuvinh1109' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/vinh-tran-huu' },
    { name: 'facebook', url: 'https://www.facebook.com/vinhdeveloper2002' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'V-Care',
        slug: 'v-care',
        liveUrl: 'https://vcare-seven.vercel.app/',
        year: 2024,
        thumbnail: '/projects/images/v-care-5.png',
        longThumbnail: '/projects/images/v-care-5.png',
        images: [
            '/projects/images/v-care.png',
            '/projects/images/v-care-2.png',
            '/projects/images/v-care-3.png',
            '/projects/images/v-care-4.png',
            '/projects/images/v-care-5.png',
        ],
        techStack: [
            'Next.js',
            'Django',
            'Firebase',
            'YOLOv5',
            'OpenAI API',
            'Tailwind CSS',
        ],
        description: `
      V-Care is an AI-powered skincare diagnostic platform that helps users identify potential skin diseases and provides treatment recommendations.  
      <br/><br/>
      The system integrates machine learning, real-time image analysis, and chatbot consultation to enhance user health awareness and accessibility.
      <br/><br/>

      Key Features:
      <ul>
        <li>🤖 AI Skin Detection: Identify skin conditions using YOLOv5 model</li>
        <li>💬 AI Consultation: Chatbot powered by OpenAI for personalized advice</li>
        <li>☁️ Cloud Database: Secure data handling with Firebase</li>
        <li>⚡ Real-time Processing: Fast detection and optimized image pipeline</li>
        <li>📱 Responsive UI: Smooth interface built with React & Tailwind</li>
      </ul>
    `,
        role: `
      Full-Stack Developer  
      <ul>
        <li>🧠 Implemented YOLOv5 inference pipeline for skin disease detection</li>
        <li>🖥️ Developed backend services with Django and Firebase</li>
        <li>🎨 Built the user interface using ReactJS and TailwindCSS</li>
        <li>🤖 Integrated OpenAI API for smart consultation features</li>
        <li>🚀 Deployed the entire system on Vercel</li>
        <li>🧪 Managed CI/CD and optimized application performance</li>
      </ul>
    `,
    },

    {
        title: 'Zay AI',
        slug: 'zay-ai',
        liveUrl: '',
        year: 2024,
        thumbnail: '/projects/images/zaylyAi.webp',
        longThumbnail: '/projects/images/zaylyAi.webp',
        images: [
            '/projects/images/zaylyAi.webp',
            '/projects/images/zaylyAi-1.webp',
            '/projects/images/zaylyAi-2.webp',
            '/projects/images/zaylyAi-3.webp',
            '/projects/images/zaylyAi-4.webp',
            '/projects/images/zaylyAi-5.webp',
        ],
        techStack: ['React.js', 'Django', 'OpenAI API', 'Tailwind CSS', 'i18n'],
        description: `
      Zay AI is an intelligent chatbot platform designed for businesses to automate customer service by training the bot on each company's knowledge base.  
      <br/><br/>
      The system enhances customer support efficiency with context-aware responses and a customizable workflow for enterprises.
      <br/><br/>

      Key Features:
      <ul>
        <li>🤖 AI Chatbot: Uses OpenAI API with custom knowledge training</li>
        <li>📚 Knowledge Base System: Easily upload documents for training</li>
        <li>🌐 Multi-language UI: Built with React i18n</li>
        <li>🎯 Business Automation: Helps companies reduce support workload</li>
        <li>⚡ Lightweight & Fast: Optimized React frontend</li>
      </ul>
    `,
        role: `
      Frontend Developer  
      <ul>
        <li>🎨 Built the entire UI using ReactJS and TailwindCSS</li>
        <li>🌐 Implemented multilingual support with React i18n</li>
        <li>📄 Integrated knowledge base upload and training workflow</li>
        <li>🤝 Worked closely with backend team to structure the API flow</li>
        <li>📱 Ensured responsive and accessible UI/UX across all devices</li>
      </ul>
    `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend + Backend)',
        company: 'NCC Asia',
        duration: 'Jan 2024 - Present',
        describe: [
            'Implement product requirements and develop applications for both Android and iOS using React Native, and build scalable web interfaces using ReactJS.',
            'Developed a mobile crypto wallet application that enables users to store, manage, and perform transactions across multiple blockchain networks.',
            'Implemented features such as secure asset management, cross-network support, and smooth transaction flows.',
            'Built and maintained a token marketing website with real-time price tracking, event updates, and project information.',
            'Contributed to a short-video social media platform with over 20M registered users, focusing on UI optimization, video rendering performance, caching, and infinite scrolling.',
            'Designed and implemented RESTful APIs using Node.js, Express.js, and NestJS for scalable and maintainable backend services.',
            'Collaborated with Product Owners, designers, and QA teams to deliver features on time with high code quality.',
            'Participated in code reviews, optimized application performance, and improved UI/UX consistency across projects.',
        ],
    },
    {
        title: 'Frontend Intern',
        company: 'Sun Asterisk',
        duration: 'Jun 2022 - Sep 2022',
        describe: [
            'Assisted in developing user interfaces using ReactJS with responsive and pixel-perfect layouts.',
            'Translated UI/UX design specifications into reusable and maintainable React components.',
            'Supported senior developers in debugging, testing, and refactoring legacy code.',
            'Worked in an Agile environment: joined daily stand-ups, sprint planning, and collaborated with cross-functional teams.',
        ],
    },
];

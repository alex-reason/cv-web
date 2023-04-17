import { BiBook, BiBriefcase, BiCodeAlt, BiMessageDetail } from 'react-icons/bi';
import { SiLinkedin, SiIndeed, SiGithub, SiCodewars } from 'react-icons/si';

import portfolio1 from './portfolio1.png';
import portfolio2 from './portfolio2.png';
import portfolio3 from './portfolio3.png';
import portfolio4 from './portfolio4.png';
import portfolio5 from './portfolio5.png';

const certData = [
    {
        title: 'Meta: Front-end Developer Professional Certificate',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/CX4XLA2FQN8R',
        detail: 'coursera',
        id: 'cert1',
    },

    {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/mai-reason/responsive-web-design',
        detail: 'freecodecamp',
        id: 'cert2',
    },
    {
        title: 'Javascript Algorithms and Data Structures',
        url: 'https://www.freecodecamp.org/certification/mai-reason/javascript-algorithms-and-data-structures',
        detail: 'freecodecamp',
        id: 'cert3',
    },
    {
        title: 'Advanced CSS and SASS',
        url: 'https://www.udemy.com/certificate/UC-d81b2395-2c38-44fe-8c36-80b9d47777cb/',
        detail: 'Udemy',
        id: 'cert4',
    },
    {
        title: 'Complete jQuery Course',
        url: 'https://www.udemy.com/certificate/UC-66914547-14c7-4ed5-a444-2caff107cf51/',
        detail: 'Udemy',
        id: 'cert5',
    },
    {
        title: 'Modern React with Redux',
        url: 'https://www.udemy.com/certificate/UC-e4cba17d-9e2e-4b03-9a98-765145da4ea1/',
        detail: 'Udemy',
        id: 'cert6',
    },
];

const skillsData = [
    {
        title: 'Technology',
        logo: <BiCodeAlt />,
        details: ['HTML, CSS, javascript', 'SASS/SCSS, React JS, firebase, typescript, Redux Toolkit', 'Visual Code Studio, Node, Git, unit-testing', 'Microsoft Office suite & Google suite',]
    },
    {
        title: 'Skills',
        logo: <BiBriefcase />,
        details: ['Legal & Administrative support', 'Event planning & Time management', 'Document & Data organization', 'Client Relations and Client management systems', 'Research & Writing']
    },
    {
        title: 'Education',
        logo: <BiBook />,
        details: ['Masters in Global Politics', 'Bachelors in Political Science']
    },
    {
        title: 'Languages',
        logo: <BiMessageDetail />,
        details: ['English (fluent/native)', 'Tagalog (fluent/native)', 'French (intermediate)', 'Japanese (intermediate)']
    },
];


const experienceData = [
    {
        id: 'experience1',
        label: 'Paralegal',
        content: [
            'From September 2020',
            'Works on around 10-20 immigration related cases a week with minimal supervision from the attorneys.',
            'Uses AWS and other web services to efficiently file applications.',
            'Maintains relationships with around 100 clients yearly by gathering, evaluating, and organizing extensive amounts of client data in a digital filing system throughout the case process.',
            'Organizes and maintains the electronic database of clients as the company shifts to full digitalization.',
            'Guides and teaches members of the firm on the use of the e-filing software.'
        ]
    },
    {
        id: 'experience2',
        label: 'Legal Assistant',
        content: [
            'November 2018 - March 2020',
            'Prepared immigration related applications with the supervision of 1-2 attorneys.',
            'Stayed in constant communication with around 10 new and current clients a day by gathering information, updating clients of their cases, and maintaining comprehensive spreadsheets of cases and clients along with their respective timetables.',
            'Managed schedules of 5 attorneys.',
            'Handled accounting by billing and documenting income / expenses to monitor if income for the month reached the target.',
        ]
    },
    {
        id: 'experience3',
        label: 'Coordinator',
        content: [
            'April 2018 - March 2020',
            'Class coordinator and assistant to the music school director.',
            'Proposed music classes schedules for around 10 clients a week through connecting students and teachers.',
            'Managed the 3-4 recitals twice a year for about 30 students by coordinating with teachers, parents and students, preparing the schedule, and assisting the director.',
            'Created a system for tracking inquiries and potential clients for the music school.',
        ]
    }
];

const portfolioData = [
    {
        image: portfolio1,
        title: 'youtube clone',
        url: 'https://willowy-clafoutis-50448b.netlify.app/',
        detail: 'Created a youtube-like react website that utilizes the youtube v3 API, mui components and styling, hooks, SASS, and axios. The project is based on a project by JS Mastery. Check out my github for the code.',
        id: 'portfolio1'
    },
    {
        image: portfolio2,
        title: 'Work Guides',
        url: 'https://case-guides.web.app/',
        detail: 'App for guides or templates for recurring tasks. Data is stored in firebase. New templates and guides can be added to the database. Modes can be changed from light to dark; themes can be changed as well. App is created with React, firebase, and useContext.',
        id: 'portfolio2'
    },
    {
        image: portfolio3,
        title: 'Art Portfolio',
        url: 'https://alex-reason.github.io/vince-reasonda/',
        detail: 'Plain html and javascript, and SCSS. Showcasing use of grid and media queries. Artworks are by Vince Reasonda.',
        id: 'portfolio3'
    },

    {
        image: portfolio4,
        title: 'Finance Tracker',
        url: 'https://finance-tracker-68266.web.app/',
        detail: 'App for tracking expenses using React and firebase. Functions include firebase database and authentication.',
        id: 'portfolio4'
    },
    {
        image: portfolio5,
        title: 'personal website',
        url: 'https://alex-reason.github.io/personal-website-3/',
        detail: 'Vanilla html, css and javascript. This is a showcase of DOM manipulation, interactions and  event listeners',
        id: 'portfolio5'
    }
];

const blogData = [
    {
        id: 'blog1',
        title: 'Currently learning as of April 2023',
        content: 'I am currently studying and improving my skills in: unit testing, typescript, and firebase. Although there is a lot to learn, I have built a habit of learning something everyday.My goal is to maintain a habit of coding at least 3 hours a day!'
    },

    {
        id: 'blog2',
        title: 'Most fun to learn, Most difficult to learn',
        content: 'I think I am having the most fun learning React contexts at the moment. I enjoy playing around with contexts and reducers, but there is a definitely a learning curve! I had a hard time grasping it, and I still spend a lot of time incorporating the concepts in my projects, but it is very useful in more complex state managements. My goal is to dive further in Redux and Redux-toolkit.'
    },

    {
        id: 'blog3',
        title: 'Version Control',
        content: 'I started publishing my projects in github early in my learning journey, but at the time, I barely understood the importance of version control. But with my recent projects, I check git status and that I have committed my changes. I should have learned version control earlier. I am far from an expert in git, but I recognize its value in the development cycle.'
    },

    {
        id: 'blog4',
        title: 'Projects and Healthy Habits',
        content: 'We spend majority of the time sitting down and on our desks during work, coding, and studying in general. I am currently working on a web app that will help me in tracking and maintaining healthy habits, and I am applying everything I have learned and currently learning. An app that is practical to me and others like me is very motivating. I cannot wait to finish it.'
    }

];

const socialData = [
    {
        url: 'https://www.linkedin.com/in/alexandra-reasonda/',
        icon: <SiLinkedin />
    },

    {
        url: 'https://my.indeed.com/p/alexandrar-mje63u7',
        icon: <SiIndeed />
    },

    {
        url: 'https://github.com/alex-reason',
        icon: <SiGithub />
    },

    {
        url: 'https://www.codewars.com/users/alex-reason',
        icon: <SiCodewars />
    },
];

export { skillsData, portfolioData, socialData, certData, experienceData, blogData };
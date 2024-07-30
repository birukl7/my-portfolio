import spaceInvaders from '/images/body-images/space-invaders.png'
import healthGuard1 from '/images/body-images/health-guard/health-guard-1.png'
import healthGuard2 from '/images/body-images/health-guard/health-guard-2.png'
import healthGuard3 from '/images/body-images/health-guard/health-guard-1.png'
import healthGuard4 from '/images/body-images/health-guard/health-guard-4.png'
import healthGuard5 from '/images/body-images/health-guard/health-guard-5.png'
import healthGuard6 from '/images/body-images/health-guard/health-guard-6.png'
import healthGuard7 from '/images/body-images/health-guard/health-guard-7.png'
import healthGuard8 from '/images/body-images/health-guard/health-guard-9.png'

import mallin1 from '/images/body-images/mall-in/mall-in-1.png'
import mallin2 from '/images/body-images/mall-in/mall-in-2.png'
import mallin3 from '/images/body-images/mall-in/mall-in-3.png'
import mallin4 from '/images/body-images/mall-in/mall-in-4.png'
import mallin5 from '/images/body-images/mall-in/mall-in-5.png'
import mallin6 from '/images/body-images/mall-in/mall-in-6.png'



const projects = [
  {
    id: 1,
    pics: [healthGuard1,healthGuard2,healthGuard3,healthGuard4,healthGuard5,healthGuard6,healthGuard7,healthGuard8],
    name: 'Heath-Guard',
    firstTech: 'Laravel',
    secondTech: 'Blade',
    tags: ["mental health", "college students", "health consultations"],
    descriptions: [
      'Health Guard is a groundbreaking mental health platform meticulously crafted to support college students grappling with mental health challenges. Developed using Laravel and Blade templating, this comprehensive solution addresses critical issues by offering a wide array of resources and services tailored to the unique needs of its users. The platform facilitates live chats and consultations with health professionals, ensuring students have direct access to expert advice and support. Additionally, Health Guard features interactive quizzes designed to engage users and help them assess their mental well-being, alongside a wealth of informative blogs and a robust FAQ section to provide further guidance and information. A standout component of the platform is its progress tracking system, which utilizes circular progress bars to help users visually monitor their mental health journey and track their improvements over time.',
      ' The project, which earned 4th place in a university hackathon, reflects a deep commitment to leveraging technology for social good and underscores the importance of accessible mental health resources in academic settings. By integrating these features into a user-friendly interface, Health Guard not only enhances students\' ability to manage their mental health but also promotes a culture of well-being and support within the college community.'],
    githubLink: 'https://github.com/birukl7/health-guard',
    siteLink: 'https://healthguard.biruklemma.com',
    readLink: '/works/1',
    catagory: ['Frontend', 'Backend', 'Database'],

  },   
  {
    id: 2,
    pics: [mallin1,mallin2,mallin3,mallin4,mallin5,mallin6,],
    name: 'Mall in',
    firstTech: 'React Js',
    secondTech: 'Laravel',
    tags: ["Locations", "Vacancy", "Entertainment", "Inertia Js"],
    descriptions: [
      'Mall in Addis Ababa is an innovative front-end application developed using React, designed to enhance the shopping experience for users navigating malls in Addis Ababa. This platform serves as a comprehensive guide to the various amenities and products available in local malls, including clothing, accessories, and job vacancies. The application offers an intuitive user interface that allows shoppers to easily search for specific items, explore different stores, and view detailed information about products and services.', 
    ' By integrating features such as interactive maps and real-time updates on store offerings, Mall In aims to streamline the shopping journey and make it more efficient for users. The project showcases advanced front-end development skills, leveraging React\'s powerful capabilities to build a dynamic and responsive application. Mall In not only helps users find what they need but also supports mall businesses by providing them with a digital presence and a platform to reach potential customers more effectively. This project exemplifies a thoughtful approach to solving real-world problems through technology, combining user-centric design with functional features to create a valuable tool for both shoppers and retailers.'
    ],
    githubLink: 'https://github.com/birukl7/mall-in',
    readLink: '/works/2',
    catagory: ['Frontend','database', 'backend']
  },
  {
    id: 3,
    pics: [spaceInvaders],
    name: 'Space Invaders',
    firstTech: 'Vanila JS',
    secondTech: 'css',
    tags: ["Canva", "Game"],
    descriptions: ['Health Guard is a web application that is for college students who are suffering depression and pychological problems, connects them with health professionals. it is built by laravel usign blade templating engine.'],
    githubLink: 'https://github.com/birukl7/health-guard',
    readLink: '/works/3',
    catagory: ['Frontend']
  },
]

export default projects
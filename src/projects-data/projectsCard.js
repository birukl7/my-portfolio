import spaceInvaders from '/images/body-images/space-invaders.png'
import healthGuard1 from '/images/body-images/health-guard/health-guard-1.png'
import healthGuard2 from '/images/body-images/health-guard/health-guard-2.png'
import healthGuard3 from '/images/body-images/health-guard/health-guard-1.png'
import healthGuard4 from '/images/body-images/health-guard/health-guard-4.png'
import healthGuard5 from '/images/body-images/health-guard/health-guard-5.png'
import healthGuard6 from '/images/body-images/health-guard/health-guard-6.png'
import healthGuard7 from '/images/body-images/health-guard/health-guard-7.png'
import healthGuard8 from '/images/body-images/health-guard/health-guard-9.png'


const projects = [
  {
    id: 1,
    pics: [healthGuard1,healthGuard2,healthGuard3,healthGuard4,healthGuard5,healthGuard6,healthGuard7,healthGuard8],
    name: 'Heath-Guard',
    firstTech: 'Laravel',
    secondTech: 'Blade',
    tags: ["mental health", "college students", "health consultations"],
    description: ' is a mental health platform designed to support college students by providing comprehensive resources and services. It features live chats and consultations with health professionals, interactive quizzes, informative blogs, and a detailed FAQ section. Additionally, the platform includes a progress tracking system with circular progress bars to help students monitor their mental health journey. This project, which earned 4th place in a university hackathon, highlights my commitment to creating impactful solutions that address critical issues.',
    githubLink: 'https://github.com/birukl7/health-guard',
    siteLink: 'https://healthguard.biruklemma.com',
    readLink: '/works/1',
    catagory: ['Frontend', 'Backend', 'Database'],

  },   
  {
    id: 2,
    pics: [spaceInvaders],
    name: 'Space Invaders',
    firstTech: 'Vanila JS',
    secondTech: 'css',
    tags: ["Canva", "Game"],
    description: 'is a web application that is for college students who are suffering depression and pychological problems, connects them with health professionals. it is built by laravel usign blade templating engine.',
    githubLink: 'https://github.com/birukl7/health-guard',
    readLink: '/works/2',
    catagory: ['Frontend']
  },
  {
    id: 3,
    pics: [spaceInvaders],
    name: 'Space Invaders',
    firstTech: 'Vanila JS',
    secondTech: 'css',
    description: 'Health Guard is a web application that is for college students who are suffering depression and pychological problems, connects them with health professionals. it is built by laravel usign blade templating engine.',
    githubLink: 'https://github.com/birukl7/health-guard',
    readLink: '/works/3',
    catagory: ['Frontend']
  },
]

export default projects
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

import spaceInvaders1 from '/images/body-images/space-invaders/space-invaders-1.png'
import spaceInvaders2 from '/images/body-images/space-invaders/space-invaders-2.png'
import spaceInvaders3 from '/images/body-images/space-invaders/space-invaders-3.png'
import spaceInvaders4 from '/images/body-images/space-invaders/space-invaders-4.png'
import spaceInvaders5 from '/images/body-images/space-invaders/space-invaders-5.png'

import myPortfolio1 from '/images/body-images/my-portfolio/my-portfolio1.png'
import myPortfolio2 from '/images/body-images/my-portfolio/my-portfolio2.png'
import myPortfolio3 from '/images/body-images/my-portfolio/my-portfolio3.png'
import myPortfolio4 from '/images/body-images/my-portfolio/my-portfolio4.png'
import myPortfolio5 from '/images/body-images/my-portfolio/my-portfolio5.png'
import myPortfolio6 from '/images/body-images/my-portfolio/my-portfolio6.png'
import myPortfolio7 from '/images/body-images/my-portfolio/my-portfolio7.png'



const projects = [
  {
    id: 1,
    pics: [healthGuard1,healthGuard2,healthGuard3,healthGuard4,healthGuard5,healthGuard6,healthGuard7,healthGuard8],
    name: 'Heath-Guard',
    firstTech: 'Laravel',
    secondTech: 'Blade',
    tags: ["mental health", "college students", "health consultations"],
    descriptions: [
      'Health Guard is a mental health platform designed to support college students dealing with mental health challenges. Built with Laravel and Blade templating, this solution provides a range of resources and services tailored to students\' needs. It offers live chats and consultations with health professionals, giving students easy access to expert advice and support. The platform also includes interactive quizzes to help users assess their mental well-being.',
      ' The project, which earned 4th place in a university hackathon, highlights the importance of making mental health resources accessible in academic settings. By incorporating these features into an easy-to-use interface, Health Guard helps students manage their mental health and fosters a supportive environment within the college community.'],
    githubLink: 'https://github.com/birukl7/health-guard',
    siteLink: 'https://healthguard.biruklemma.com',
    readLink: '/works/1',
    catagory: ['Frontend', 'Backend', 'Database', 'UI/UX'],

  },   
  {
    id: 2,
    pics: [mallin1,mallin2,mallin3,mallin4,mallin5,mallin6,],
    name: 'Mall in',
    firstTech: 'React Js',
    secondTech: 'Laravel',
    tags: ["Locations", "Vacancy", "Entertainment", "Inertia Js"],
    descriptions: [
      'Mall in Addis Ababa is a front-end application developed using React, aimed at helping users find and rent available spaces in malls across Addis Ababa. The platform provides information on rental opportunities within local malls, including details about space availability. The current version includes a user-friendly interface that allows users to search for and view information about available rental spaces.', 
    'While the project is still in development and only the front-end is complete, it features interactive maps and a responsive design to enhance the user experience. Mall In showcases advanced front-end development skills with React, and aims to offer a digital platform for users to explore and secure rental spaces in malls. This project represents a step towards creating a valuable tool for both users seeking rental spaces and mall businesses looking to present available spaces online.'
    ],
    githubLink: 'https://github.com/birukl7/mall-in',
    siteLink: 'https://addismall.biruklemma.com',
    readLink: '/works/2',
    catagory: ['Frontend','Database', 'Backend','UI/UX']
  },
  {
    id: 3,
    pics: [spaceInvaders,spaceInvaders1,spaceInvaders2,spaceInvaders3,spaceInvaders4,spaceInvaders5],
    name: 'Space Invaders',
    firstTech: 'Vanilla JS',
    secondTech: 'CSS',
    tags: ["Canva", "Game"],
    descriptions: ['Space Invaders is a classic arcade game recreated using Vanilla JS and CSS. In this game, players control a spaceship to defend the planet by shooting down waves of alien invaders. Use the A and D keys to move left and right, and the SPACE key to shoot. For the best experience, play on a large screen.'],
    siteLink: 'https://birukl7.github.io/space-invaders/',
    githubLink: 'https://github.com/birukl7/health-guard',
    readLink: '/works/3',
    catagory: ['Frontend']
  },{
    id:4,
    pics: [myPortfolio3, myPortfolio1, myPortfolio2, myPortfolio4, myPortfolio5, myPortfolio6, myPortfolio7],
    name: 'My Portfolio',
    firstTech: 'React Js',
    secondTech: 'Tailwind ',
    tags: ["Portfolio","React Js", "Node js", "Files", "Json" ],
    descriptions: ['My portfolio showcases projects ranging from dynamic user interfaces to robust backend systems.'],
    siteLink: 'https://biruklemma.com',
    githubLink: 'https://github.com/birukl7',
    readLink: '/works/4',
    catagory: ['Frontend', 'UI/UX'],
  }
  ]

export default projects
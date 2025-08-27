import redDropImg from '../assets/RedDrop.png';
import shareBiteImg from '../assets/shareBite.png';
import rentBuddyImg from '../assets/rentBuddy.png';
import utiPayImg from '../assets/utiPay.png';

const projects = [
  {
    id: 1,
    name: 'RedDrop',
    image: redDropImg,
    des: 'A full-featured blood donation platform with user roles, dashboards, Stripe integration for funding, and real-time donation request management.',
    challenges: [
      'Implementing secure multi-role authentication (Admin, Donor, Volunteer)',
      'Integrating Stripe for secure funding transactions',
      "Managing real-time updates for donation requests",
      "Optimizing database queries for faster response times"
    ],
    futurePlans: [
      'Add AI-based donor-recipient matching system',
      'Integrate location-based emergency alerts',
      'Improve accessibility features for all users'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind'],
    github: 'https://github.com/hey-its-Sohan/red-drop-client',
    liveLink: 'https://red-drop-web.netlify.app/',
  },
  {
    id: 2,
    name: 'ShareBite',
    image: shareBiteImg,
    des: 'A community food-sharing platform designed to reduce food waste by connecting donors with nearby recipients.',
    challenges: [

      "Designing an intuitive UX for quick posting and requesting",
      "Ensuring real-time updates when food is requested",
      "Handling image uploads and optimization"
    ],
    futurePlans: [
      "Launch a rewards system for active donors",
      "Expand to multi-city operations",
      'Introduce multi-language support'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'Axios', 'MongoDB', 'Tailwind', 'Vercel'],
    github: 'https://github.com/hey-its-Sohan/share-bite-client',
    liveLink: 'https://share-bite-web.netlify.app/',
  },
  {
    id: 3,
    name: 'Rent Buddy',
    image: rentBuddyImg,
    des: 'A roommate and rental finder app built for students and young professionals, featuring user profiles and location-based matching.',
    challenges: [
      "Creating user profile verification and trust-building features",
      "Ensuring performance with large property datasets"
    ],
    futurePlans: [
      "Introduce rental contract management tools",
      "Expand into a mobile app with push notifications",
      "Integrate chat functionality",
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind'],
    github: 'https://github.com/hey-its-Sohan/rent-buddy-client',
    liveLink: 'https://rent-buddy-web.netlify.app/',
  },
  {
    id: 4,
    name: 'UtiPay BD',
    image: utiPayImg,
    des: 'A secure and efficient web app to manage and pay utility bills online.',
    challenges: [
      "Managing bill generation and tracking",
      "Building a responsive UI for all device sizes",
      'Optimizing performance for quick bill search',
    ],
    futurePlans: [
      'Integrate mobile banking payment options',
      "Introduce bill payment reminders via SMS and email",
      'Provide cashback and offers for regular users'
    ],
    tech: ['React.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/hey-its-Sohan/utipay-bd',
    liveLink: 'https://utipay-bd.netlify.app/',
  },
];

export default projects;

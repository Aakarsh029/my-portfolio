import fmg from "./images/fmg.png"
import fc from "./images/fc.png"

const freelancingProjects = [
  {
    id: 1,
    name: "Fritty Club",
    image: fc, // Replace with actual image path
    description: "Led the development of a complete web solution starting with React and Firebase, where I built a showcase website for end-users along with an admin dashboard for managing content and operations. Initially implemented real-time data handling, authentication, and Firestore integration to ensure a smooth workflow between the app and dashboard. As the project scaled, I transitioned the stack to MERN (MongoDB, Express.js, React, Node.js) to gain more control over the backend. I restructured the architecture to support custom APIs, improved scalability, and enhanced database management. This upgrade allowed for more robust features, better performance, and greater flexibility across the system.",
    link: "https://www.frittyclub.com/",
    status: "Completed",
    category: "web"
  },
  {
    id: 2,
    name: "Find My GAFF",
    image: fmg, // Replace with actual image path
    description: "I independently built a full-stack real estate web app inspired by Daft.ie and Zillow using the MERN stack and Firebase. The platform includes advanced property search and filters, map-based listings, user authentication, property scheduling, favorites, chat, and admin controls. Agents can list and manage properties with image uploads, while users can book viewings and receive real-time updates. The app also features property analytics, is fully responsive, SEO-optimized, and scalable—entirely designed, developed, and deployed by me.",
    link: "http://findmygaff.ie/",
    status: "Completed",
    category: "web"
  },
];

export default freelancingProjects;

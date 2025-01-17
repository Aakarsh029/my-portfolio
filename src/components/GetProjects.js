import io from "./images/io.png";
import d from "./images/d.png";
import mg from "./images/MG.png";
import vmug from "./images/vmug.png";
import mkt from "./images/mkt.png";
import ec from "./images/ecc.png";
import cb from "./images/CB.png";
import pp from "./images/pp.png"
import ft from "./images/ft.png"
import dap from "./images/dap.png"

const projects = [
    {
        id: 12,
        image: "https://images.unsplash.com/photo-1583361704493-d4d4d1b1d70a?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "C++ Dictionary Application",
        category: "C++",
        link: "https://github.com/Aakarsh029/ORGANIC-DICTIONARY",
        description: "The C++ dictionary application is a powerful and efficient tool designed for managing and retrieving word definitions, translations, and related information. Developed using the C++ programming language, this application provides a user-friendly interface and robust functionality for users seeking to explore and expand their language knowledge."
    },
    {
        id: 3,
        image: io,
        name: "INDYO ORGANIC WEBSITE Landing Page",
        category: "web",
        link:"https://indyoorganics.com/",
        description: " Worked closely with the team members to define and implement Websie. Consistently wrote well-designed, efficient and testable code according to the specifications. Used languages like HTML, CSS, JavaScript and NodeJS.Identified and resolved bugs efficiently. Ensured designs are in compliance with specifications."
    },
    {
        id:4,
        image: d,
        name: "DEVFOLKS WEBSITE Landing Page",
        category: "web",
        link:"https://www.devfolks.in/",
        description:"Consistently wrote well-designed, efficient and testable code according to the specifications. Used languages like HTML, CSS, JavaScript and NodeJS. Identified and resolved bugs efficiently. Worked closely with the team members to define and implement Websie"
    },
    {
        id:7,
        image: ec,
        name: "Fashion Tip",
        category: "web",
        link:"https://aakarsh029.github.io/Ecommerce-Website/",
        description:"Created a Front End Part Of Ecommerce Website for practice. Consistently wrote well-designed, efficient and testable code according to the specifications. Used languages like HTML, CSS, . Identified and resolved bugs efficiently."
    },
    {
        id: 1,
        image: "https://static.whatsapp.net/rsrc.php/v3/yR/r/y8-PTBaP90a.png",
        name: "Whatsapp Mern",
        category: "web",
        link:"https://github.com/Aakarsh029/Whatsapp-Mern",
        description: "Created a WHATSAPP WEB Website with MERN stack and where whole FRONT END is created in REACTJS and backend is created in NODEJS EXPRESSJS and MONGODB database is used to store messages and PUSHER and AXIOS is used to connect FRONT END with BACKEND"
    },
    {
        id: 2,
        image: mg,
        name: " Music Genre Website",
        category: "ml",
        link:"https://github.com/Aakarsh029/Music-Genre",
        description: "Created a Website to find genre of the music. It is a Web + MLProject where frontend is created using the HTML and CSS and Backend is created using DJANGO "
    },
    {
        id: 5,
        image: vmug,
        name: "Virtual Mouse Beta Version Website",
        category: "ml",
        link:"https://aakarsh029.github.io/Virtual-Mouse-Front-End-Part",
        description: "Created a Website which contains beta version of a virtual mouse using hand gestures. FrontEnd is created using HTML, CSS, JS, GSAP and OPENCV, CVZONE, MEDIAPIPE and NUMPY is used to create gestures module and BackEnd is made in FLASK"
    },
    {
        id:6,
        image: mkt,
        name: "Professor's Portfolio",
        category: "web",
        link:"https://mohitkt.github.io/",
        description:"Created a Professor's Portfolio. Consistently wrote well-designed, efficient and testable code according to the specifications. Used languages like HTML, CSS. Identified and resolved bugs efficiently. "
    },
    {
        id:7,
        image: cb,
        name: "ContraBureau Web ",
        category: "web",
        link:"https://aakarsh029.github.io/Collaberative-Project/",
        description:"Created a Clone of a Well Known Contra Bureau Website which is also hosted on Awwwards.com. Consistently wrote well-designed, efficient and testable code according to the specifications. Used languages like HTML, CSS, JAVASCRIPT and GSAP. Identified and resolved bugs efficiently."
    },
    {
        id:8,
        image: pp,
        name: "Placement Portal",
        category: "web",
        link:"https://talentboltz.netlify.app/",
        description:"On Collaberation with Seniors we have created a Placement Portal where TPR, TPO and companies can update information for students instead of verbal communication which creates a lot of problems due to communication gap among students. Frontend Of the Placement Portal is created in React Typescript and Backend is created in Django. It can ease a lot of work of faculty and students due to transparency among everyone. transparency among everyone. "
    },
    {
        id:9,
        image: ft,
        name: "Fashion Tip",
        category: "web",
        link:"https://alive-red-tunic.cyclic.app/",
        description:"Created a Ecommerce Website Fashion Tip with the MERN Stack( MONGODB , EXPRESSJS , REACTJS , NODEJS , CSS and SCSS ). The website provides a visually appealing and intuitive interface that enables users to navigate through product categories, view product details, and easily locate desired items. The website displays a comprehensive catalog of products or services available for purchase. Each item is typically accompanied by descriptions, images, pricing, and other relevant information to assist customers in making informed decisions."
    }, 
    {
        id: 10,
        image: dap,
        name: "Drug Abuse And Prevention",
        category: "web",
        link: "https://github.com/Drug-Abuse-and-Prevention/DrugAbusePreventionNew/tree/main",
        description: "Learn about the signs and symptoms of drug abuse. Understanding the early indicators can help in prevention and intervention.Discover effective prevention strategies, educational programs, and community initiatives that can help prevent drug abuse among individuals and communities.Reporting drug abuse is a powerful stand against the destruction of lives and dreams. Be the voice that speaks out, the hand that reaches out, and the heart that cares.Breaking Chains, a safe space where you can share your stories and seek support anonymously. "
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "C++ Paint Application",
        category: "C++",
        link: "https://github.com/Aakarsh029/C_GRAPHICS_PAINT_APPLICATION",
        description: "The C++ Paint Application is a versatile and user-friendly graphic software designed for creating digital art, illustrations, and designs. Developed using the powerful C++ programming language, this application offers a robust set of features and a seamless user interface, making it accessible to both beginners and experienced artists.Developed in C++, the paint application is designed to run smoothly on various operating systems, ensuring a consistent experience for users."
    },
    
]
export default projects;
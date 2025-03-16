/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Remya K R",
  title: "Hey, I'm Remya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 💻 skilled in building Web and Mobile applications using JavaScript, React.js, Node.js, Angular, and other cutting-edge libraries and frameworks. Always eager to explore new technologies and deliver innovative solutions.  "
  ),
  resumeLink:
    "https://docs.google.com/document/d/1KEfxSD50-V6gllk5ES36tR86EQjupErSsBBvHGpzrnQ/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/remya88",
  linkedin: "https://www.linkedin.com/in/remya-karthika-rajappan/",
  gmail: "remyamvk@gmail.com",
  medium: "https://medium.com/@remyavineesh",
  stackoverflow: "https://stackoverflow.com/users/18324120/remya-k-r",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Full Stack Developer with relentless curiosity, always exploring new technologies to build innovative and high-impact solutions. From crafting seamless user experiences to architecting scalable systems, every project is an opportunity to push boundaries and create something extraordinary.",
  skills: [
    emoji(
      "✨ Building robust and scalable Full Stack applications using modern technologies like Angular, React, and Node.js."
    ),
    emoji("✨ Designing seamless, responsive User Interfaces for web and mobile applications, ensuring excellent user experiences across all devices."
    ),
    emoji("✨ Developing Progressive Web Applications (PWA) and Single Page Applications (SPA) with a focus on performance and user engagement."),
    emoji(
      "✨ Integrating third-party services like Firebase, AWS, Azure, etc. for real-time data syncing, cloud storage, and deployment."
    ),
    emoji("✨ Implementing automated testing for frontend and backend using tools like Jasmine, Karma, etc. to ensure high-quality code."),
    emoji(
      "✨ Utilizing cloud platforms like AWS and Azure for efficient hosting, data storage, and DevOps automation."
    ),
    emoji("✨ Optimizing application performance through code splitting, lazy loading, and API optimization techniques.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-brands fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Master of Computer Applications",
      logo: require("./assets/images/harvardLogo.jpeg"),
      subHeader: "Amrita Viswa Vidyapeetham University",
      duration: "Jul 2009 - May 2012",
      desc: "",
      descBullets: [

      ]
    },
    {
      schoolName: "Bachelor of Science in Computer Science",
      logo: require("./assets/images/stanfordLogo.jpeg"),
      subHeader: "University of Kerala",
      duration: "Aug 2006 - May 2009",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Responsive Web Development & Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "Cloud & DevOps ",
      progressPercentage: "40%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Solution Architect",
      company: "IBS",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Oct 2023 – Oct 2024",
      desc: "",
      descBullets: [
        " Modernized the Dynamic Revenue Management Suite using Angular, NgRx, and front-end technologies to improve state management and UI performance",
        "Created a modular UI framework in Angular for Rule Engine development, streamlining integration and reducing development time.",
        "Developed a proof-of-concept (POC) for an intuitive interface to leverage Generative AI capabilities, using a Llama3-based Language Translation Engine to demonstrate seamless natural language processing."
      ]
    },
    {
      role: "Full Stack Engineering Specialist",
      company: "Accenture",
      companylogo: require("./assets/images/quoraLogo.jpeg"),
      date: "Jan 2022 – Oct 2023",
      desc: "",
      descBullets: [
        "Led UI development of a dynamic payment solution with Angular and NgRx, ensuring responsive, scalable interfaces and seamless backend integration.",
        "Delivered a user-centric solution by applying front-end best practices, tailored to business needs and optimized for performance.",
        "Managed end-to-end product delivery as Product Owner, prioritizing features, managing the backlog, and ensuring timely, high-quality releases through Agile processes."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "UST",
      companylogo: require("./assets/images/ust.png"),
      date: "Feb 2019 – Dec 2021",
      desc: "",
      descBullets: [
        "Led the development of high-performance UI applications with Angular, React, and Redux, ensuring scalable, maintainable solutions that met functional and business needs.",
        "Integrated Speech-to-Text and Audio playback features, enhancing functionality and user experience while contributing to the Innovation Engineering team.",
        "Defined solution architecture, ensured code quality through reviews and standards, and managed release planning for seamless deployments."
      ]
    },
    {
      role: "Technology Analyst",
      company: "Infosys",
      companylogo: require("./assets/images/infy.avif"),
      date: "Jul 2012 – Feb 2019",
      desc: "",
      descBullets: [
        "Led UI development with Angular, creating responsive, high-performance applications that met business requirements.",
        "Designed PoCs and demos for migrating legacy systems to modern web technologies using React and Angular to improve scalability and maintainability.",
        "Developed artist web pages for the USA’s top entertainment studio, integrating concert booking and using CSS3 to bring designs to life in responsive interfaces."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Awards 📜 "),
  subtitle:
    "From Learning to Winning – My Certifications and Achievements!",

  achievementsCards: [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      subtitle:
        "Scrum Alliance",
      image: require("./assets/images/scrum_alliance_logo.jpeg"),
      imageAlt: "cspo",
      footerLink: [
        {
          name: "Certification",
          url: "https://bcert.me/bc/html/show-badge.html?b=aoisaqtb"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Microsoft",
      image: require("./assets/images/microsoft_logo.jpeg"),
      imageAlt: "Azure",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/99b20f98-841e-4d95-9e29-bb8e8d59615d/linked_in_profile"
        }
      ]
    },
    {
      title: "Angular",
      subtitle: "HackerRank",
      image: require("./assets/images/hackerrank_logo.jpeg"),
      imageAlt: "Angular",
      footerLink: [

        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/f4b121cdcb5e"
        }
      ]
    },
    {
      title: "Frontend Development with React",
      subtitle: "The Hong Kong University of Science and Technology",
      image: require("./assets/images/hkust_logo.jpeg"),
      imageAlt: "React",
      footerLink: [

        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/PW8TM23FDTBQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },

    {
      title: "CSS",
      subtitle: "HackerRank",
      image: require("./assets/images/hackerrank_logo.jpeg"),
      imageAlt: "CSS",
      footerLink: [

        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/c6bd57ca023a"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Passionate about building cool things, sharing knowledge, and helping others grow!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@remyavineesh/migrating-to-angular-19-a-comprehensive-step-by-step-guide-3cda6a034688",
      title: "Migrating to Angular 19: A Comprehensive Step-by-Step Guide",
      description:
        "Angular 19 is here, introducing groundbreaking improvements that enhance performance, reactivity, and the overall developer experience. "
    },
    {
      url: "hhttps://medium.com/@remyavineesh/ai-powered-frontend-development-revolutionising-user-experiences-fd7cf3a594da",
      title: "AI-Powered Frontend Development: Revolutionising User Experiences",
      description:
        "The frontend development landscape is evolving rapidly, and artificial intelligence (AI) is at the forefront of this transformation. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let’s Connect! 🌟"),
  subtitle:
    "Got a project in mind, or just want to chat? My inbox is always open to exciting conversations.",
  email_address: "remyamvk@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

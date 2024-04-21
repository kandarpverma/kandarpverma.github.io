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
  username: "Kandarp Verma",
  title: "Hi all, I'm Kandarp",
  subTitle: emoji(
    "Full Stack developer with 3 years of Experience. Skilled in combining software development and data science expertise to build robust, scalable, and intelligent systems, driving efficiency and data-driven decision-making through cutting-edge technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eWSluQ0N76t24BDM8aieDurHsCdsno6e/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kandarpverma",
  linkedin: "https://www.linkedin.com/in/kandarp-verma/",
  gmail: "kandarp.verma@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A BLEND OF DATA SCIENTIST",
  skills: [
    emoji(
      "⚡ Led architecture and development of data pipelines that serve thousands of records per minute."
    ),
    emoji("⚡ Deployed scalable project for document recognition and parsing with the use of Machine Learning (ML) techniques like Computer Vision, Natural Language Processing (NLP) and LLMs reducing onboarding time by 70%.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    "Java",
    "Spring",
    "CSharp",
    "DotNET",
    "Python",
    "Powerbi",
    "Django",
    "JavaScript",
    "React",
    "TypeScript",
    "Angular",
    "MySQL",
    "Postgresql",
    "Azure",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "RabbitMQ",
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Exeter",
      logo: require("./assets/images/uoeLogo.png"),
      subHeader: "Master of Science in Data Science with AI",
      duration: "September 2022 - August 2023",
      descBullets: [
        "Graduated with Distinction.",
        "Specialized in Machine Learning, NLP, and AI applications in fintech."
      ]
    },
    {
      schoolName: "Netaji Subhas Institute of Technology, University of Delhi",
      logo: require("./assets/images/nsitLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2016 - July 2020",
      descBullets: [
        "Graduated with First Division.",
        "Focused on Database Management Systems, Data Structures, Algorithms, and Software Engineering."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming (Data Structures and Algorithms)",
      progressPercentage: "95%"
    },
    {
      Stack: "Databases",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps and MLOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Platforms",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "ELMS Aviation",
      companylogo: require("./assets/images/elmsLogo.jpeg"),
      date: "April 2023 – March 2024",
      descBullets: [
        "Built and deployed a document classification module using NLP, Computer Vision, and LLMs, streamlining customer onboarding and minimizing time from days to hours.",
        "Facilitated development team as a Full-Stack developer, focusing on Python, .NET, and Angular improving user experience and system performance by 30% in latency and response time.",
        "Integrated Cypress and Sonar into the CI/CD pipeline, improving code quality and deployment efficiency by 30% on Azure DevOps."

      ]
    },
    {
      role: "Associate Software Development Engineer 2",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/publicisSapientLogo.png"),
      date: "September 2020 – August 2022",
      descBullets: [
        "Designed a high-throughput ETL pipeline for supply chain logistics using Azure Cloud services, processing thousands of transactions per second ingested from distributed systems.",
        "As a Full-Stack developer, worked on the .NET framework, Azure, and Angular, to deliver quality and optimized code.",
        "Implemented CI/CD and DevOps practices, reducing deployment time by 25% and enhancing system reliability.",
        "Implemented a Power BI-based analysis tool for freight shipments, providing key logistics insights and supporting strategic decision-making."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Universal Mednet",
      companylogo: require("./assets/images/uMedNetLogo.jpeg"),
      date: "May 2020 – June 2020",
      descBullets: [
        "Developed and integrated REST APIs within Spring Boot-based microservices for secure clinical data exchange across healthcare facilities, enhancing interoperability and patient care through efficient, standardized data communication protocols."
      ]
    },
    {
      role: "Research and Development Intern",
      company: "ACCESS Health International",
      companylogo: require("./assets/images/accessHealthLogo.png"),
      date: "April 2019 – July 2019",
      descBullets: [
        "Analysed healthcare system building blocks, leading to the development of a Health Data Dictionary prototype for the Indian Healthcare System using Python (Django)."
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
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Wanna discuss a Software Developer/ Data Scientist role? My Inbox is open for all.",
  number: "+44-7923896447",
  email_address: "kandarp.verma@gmail.com"
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
  contactInfo,
  isHireable
};

/* Resume Data,
organized here for convenience in object format,
imported in as props for components to fill in data */
export const resumeData = {
  main: {
    firstName: "Andrei",
    lastName: "Kassiantchouk",
    occupation: "Full Stack Engineer",
    image: "headshot.png",
    bio:
      "I find adventure in my work ethic. I love breaking out of my comfort zone and picking up new things!\n Still, I take great pride in reliability. I tend to see things as ongoing - I'm always working to cleanup, improve, promote maintainability, and make things easier for future work. \n\n When I'm not coding, I enjoy games that involve theorycrafting and debatable strategies to keep me experimenting and keep things fresh.\n I love movies that lean towards sci-fi, fantasy, or simply break the mold. Shoot me some recommendations!",
    email: "akassian@berkeley.edu",
    phone: "(510) 589-8412",
    address: {
      city: "Hayward",
      state: "CA",
      zip: "94544",
    },
    resumeDownload:
      "https://docs.google.com/document/d/1tz9CDTwpOkvGkl7NDs7h35WoVq1pEgMOanENYMf9bUU/export?format=pdf",
    social: [
      {
        name: "github",
        url: "http://github.com/akassian",
        className: "fa fa-github",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/andrei-kassiantchouk/",
        className: "fa fa-linkedin",
      },
    ],
  },
  resume: {
    resumeDownload:
      "https://docs.google.com/document/d/1tz9CDTwpOkvGkl7NDs7h35WoVq1pEgMOanENYMf9bUU/export?format=pdf",
    education: [
      {
        school: "UC Berkeley",
        degree: "Computer Science",
        graduated: "December 2019",
        description: "Bachelor's in Computer Science • GPA 3.26",
      },
      {
        school: "Rithm School",
        degree: "Full Stack Web Development",
        graduated: "June 2020",
        description: "Full Stack Program in San Francisco, CA",
      },
    ],
    work: [
      {
        company: "Ziggurat Technologies, Inc",
        title: "Full Stack Engineer Intern",
        years: "09/2020 - Present",
        description:
          "React Native • Expo • Redux • JavaScript • HTML • CSS • RESTful API",
      },
      {
        company: "Clevercounsel, LLC",
        title: "Full Stack Engineer Intern",
        years: "05/2020 - 06/2020",
        description:
          "React • JavaScript • HTML • CSS • Jest • Flask • RESTful API • MySQL",
      },
      {
        company: "Premiertec US Corp",
        title: "Application Developer Intern",
        years: "06/2017 - 08/2017",
        description: "JavaScript • jQuery • HTML • CSS • Node.js • RESTful API",
      },
      {
        company: "UC Berkeley",
        title: "Computer Lab Assistant",
        years: "01/2017 - 05/2017",
        description: "Assisted 2 sections of CS 61B • Data Structures",
      },
    ],
    skills: [
      {
        Languages: [
          "Python",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "SQL",
          "Java",
        ],
      },
      {
        "Libraries & Frameworks": [
          "React",
          "Redux",
          "jQuery",
          "Bootstrap",
          "Material UI",
          "Node.js",
          "Express.js",
          "Flask",
          "Jest",
          "Jasmine",
        ],
      },
      { Databases: ["PostgreSQL", "MySQL", "MongoDB"] },
    ],
  },
  projects: {
    projects: [
      {
        title: "Bearcon.net",
        description:
          "Solo Project • MongoDB • Express • React • Redux • Node.js • AWS",
        expandedDescription:
          "• UC Berkeley pseudo social network\n• MERN stack; built with MongoDB, Express, React, Redux, Node.js\n• Deployed on AWS",
        image: "bearcon.gif",
        url: "http://bearcon.net/",
        urlSource:
          "https://github.com/akassian/Social-Network-Website-Bearcon.net",
      },
      {
        title: "Warbler",
        description:
          " Group Project • Jinja • Python • Flask • PostgreSQL • Heroku",
        expandedDescription:
          "• Twitter toy clone\n• Built using Jinja, Python, Flask, and PostgreSQL\n• Deployed on Heroku",
        image: "warbler.gif",
        url: "http://warbler.andreik.net/",
        urlSource: "https://github.com/akassian/Warbler",
      },
      {
        title: "Axe.gg",
        description: "Solo Project • Javascript • jQuery • Node.js • AWS",
        expandedDescription:
          "• Pseudo League of Legends analytics statistics site\n• Previously with daily updated data\n• Now with a fixed data set due to breaking Riot API changes\n• Built with Javascript, jQuery, Node.js\n• Deployed on AWS",
        image: "axe.gif",
        url: "http://axe.gg/",
        urlSource: "https://github.com/akassian/Analytical-Website-AxeGG",
      },
    ],
  },
};

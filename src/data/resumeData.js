export const resumeData = {
  main: {
    firstName: "Andrei",
    lastName: "Kassiantchouk",
    occupation: "Full Stack Engineer",
    image: "headshot2.png",
    bio:
      "I find adventure in my work ethic - I love breaking out of my comfort zone and picking up new things!\n I find my greatest pleasure in my ability to enable others. I tend to see things as ongoing - I'm always working to cleanup, improve, promote maintainability, and make things easier for future work.\n\n When I'm not coding away, I enjoy games that involve theorycrafting and debatable strategies to keep me experimenting and keep things fresh.\n I love movies that are heavily sci-fi, fantastical, or simply break the mold - shoot me some recommendations!",
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
    education: [
      {
        school: "UC Berkeley",
        degree: "Computer Science",
        graduated: "December 2019",
        description: "Bachelor's in Computer Science",
      },
      {
        school: "Rithm School",
        degree: "Full Stack Web Development",
        graduated: "June 2020",
        description: "San Francisco Bootcamp",
      },
    ],
    work: [
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
        title: "Academic Intern",
        years: "01/2017 - 05/2017",
        description: "Lab Assistant for 2 sections of CS 61B • Data Structures",
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
      // {
      //   title: "AndreiK.net",
      //   description: "description test",
      //   expandedDescription: "expanded description test",
      //   image: "demo2.gif",
      //   url: "https://www.yahoo.com",
      // },
      {
        title: "Bearcon.net",
        description:
          "Solo Project • MongoDB • Express • React • Redux • Node.js • AWS",
        expandedDescription:
          "A UC Berkeley pseudo social network. MERN stack; built with MongoDB, Express, React, Redux, Node.js. Deployed on AWS",
        image: "bearcon.png",
        url: "http://bearcon.net/",
        urlSource:
          "https://github.com/akassian/Social-Network-Website-Bearcon.net",
      },
      {
        title: "Warbler",
        description: " Group Project • Python • Flask • PostgreSQL • Heroku",
        expandedDescription:
          "Twitter toy clone built using Python, Flask, and PostgreSQL. Deployed on Heroku.",
        image: "warbler.png",
        url: "http://warbler.andreik.net/",
        urlSource: "https://github.com/akassian/Warbler",
      },
      {
        title: "Axe.gg",
        description: "Solo Project • Javascript • jQuery • Node.js • AWS",
        expandedDescription:
          "A pseudo League of Legends analytics statistics site. Previously with daily updated data, now with a fixed data set due to breaking Riot API changes. Built with Javascript, jQuery, Node.js Deployed on AWS.",
        image: "axe.png",
        url: "http://axe.gg/",
        urlSource: "https://github.com/akassian/Analytical-Website-AxeGG",
      },
    ],
  },
};

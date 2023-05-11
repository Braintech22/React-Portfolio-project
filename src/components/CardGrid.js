import React from 'react';
import Cards from './Cards';

const CardGrid = () => {
  const cardData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      title: "software Development",
      content: "Html5/Css3/Javascript, React, Bootstrap, typescript, node.js ES6, Python",
      buttonText: "Go somewhere",
    },

    {
      imageSrc: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "UI/UX",
      content: "UI/UX design and wireframing, siteMap, Prototyping and Animations ",
      buttonText: "Go somewhere",
    },

    {
        imageSrc: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Cloud Computing",
        content: "Azure cloud Administration, Data security, Application deployment, networking and cloud storage ",
        buttonText: "Go somewhere",
      },
      {
        imageSrc: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Project Management/Devops",
        content: "Jira, GitHub, CI/CD, Agile Scrum, Google analytics, Saleforce administration, Risk mgt",
        buttonText: "Go somewhere",
      },
      
    // Add more card objects as needed
  ];

  return (
    <div>
      <Cards cardData={cardData} />
      {/* Other components and content */}
    </div>
  );

  
};

export default CardGrid;

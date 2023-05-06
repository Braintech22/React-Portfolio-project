import React from 'react';
import Cards from './Cards';

const CardGrid = () => {
  const cardData = [
    {
      imageSrc: "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=600",
      title: "Frontend Development",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere",
    },
    {
        imageSrc: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Cloud Technology",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere",
      },
      {
        imageSrc: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Project Management",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere",
      },
      {
        imageSrc: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "UI/UX",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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

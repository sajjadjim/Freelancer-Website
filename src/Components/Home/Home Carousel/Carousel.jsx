import React, { useState, useEffect } from 'react';

const images = [
  "https://media.istockphoto.com/id/1661022917/photo/woman-typing-on-laptop-keyboard.jpg?s=2048x2048&w=is&k=20&c=YBdkZ9Vgeo2pjUh7C2cv_m3xkE_9u1a49P4M1KG9iLA=",
  "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel w-full h-[450px]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img src={img} className="w-full object-cover" alt={`slide-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
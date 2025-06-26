import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../../public/cerosel picture/image1.png'
import image2 from '../../../../public/cerosel picture/image2.png'
import image3 from '../../../../public/cerosel picture/image3.png'
function Banner_Carousel() {

  // Function to handle smooth scroll to next section
  const handleExploreMore = () => {
    const nextSection = document.getElementById('explore-more-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
      <div>
        <img src={image1} alt="carousel 1" />
      </div>
      <div>
        <img src={image2} alt="carousel 2" />
      </div>
      <div>
        <img src={image3} alt="carousel 3" />
      </div>
    </Carousel>
    <div className='grid justify-center'><button className='cursor-pointer text-semibold rounded-3xl py-3 px-5 bg-[#3a6d55] my-5 text-white hover:bg-[#3a6d55] hover:border-[#3a6d55] hover:text-white' onClick={handleExploreMore}>Explore More</button></div>
    </div>
  );
}

export default Banner_Carousel;
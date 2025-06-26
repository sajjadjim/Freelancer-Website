import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

const images = [
  { src: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Watch"  },
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "House" },
  { src: "https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Posters" },
  { src: "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cards" },
  { src: "https://plus.unsplash.com/premium_photo-1716603741224-d0c67609a5f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "achitecture" },
];

const GalleryCard = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <Link to={`/${alt.toLowerCase().replace(/\s+/g, '-')}`}
            href="#"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-200 transition"
          >
            Show More Details
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

const NewsPicture = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-10/12 mx-auto">
      {images.map((img, index) => (
        <GalleryCard key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default NewsPicture;

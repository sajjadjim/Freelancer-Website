import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";


const ReviewSection = () => {
      const [reviews, setReviews] = useState([])
    // Filter Data From the Database From  userDatabase Information  Show the name
    useEffect(() => {
        fetch('https://frelancer-server.vercel.app/reviews/top')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);


  return (
    <section className=" py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        What Clients Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <div className="mb-3 flex items-center gap-2 text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={1} />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{review.review}"</p>
            <div className="text-sm text-gray-500">
              — <span className="font-medium">{review.name}</span>, Client
            </div>
          </div>
        ))
        }
      </div>
    </section>
  );
};

export default ReviewSection;

import React, { useState, useEffect } from 'react';

const testimonials = [
  "LMCC has been a game-changer for my career.",
  "The events here are incredible and well-organized.",
  "LMCC gave me the network I needed to succeed.",
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className="testimonial">{testimonials[index]}</div>;
}

export default TestimonialCarousel;
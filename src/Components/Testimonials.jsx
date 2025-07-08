"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aman Patel",
    transformation: "Lost 18kg in 5 months",
    message:
      "Athlenix completely changed my lifestyle. The personalized training and meal plans kept me on track!",
    image: "/images/client1.png",
  },
  {
    name: "Riya Sharma",
    transformation: "Gained strength & confidence",
    message:
      "Joining this gym was the best decision I made. The equipment, trainers and atmosphere are top-notch.",
    image: "/images/client2.png",
  },
  {
    name: "Vikram Desai",
    transformation: "From slim to shredded",
    message:
      "I was never consistent until I joined Athlenix. The guidance helped me build muscle and discipline.",
    image: "/images/client1.png",
  },
];

const Testimonials = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for section cards
      ScrollTrigger.batch(".testimonial-card", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
          }),
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-gray-800 mb-6">
          Real <span className="text-[#FF2625]">Transformations</span>
        </h2>
        <p className="text-gray-600 text-[18px] sm:text-[20px] max-w-2xl mx-auto mb-16">
          Our members have achieved amazing results — and so can you. Here are
          just a few stories of real change.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col items-center text-center min-h-[420px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.name}
              </h3>
              <p className="text-[#FF2625] text-[18px] font-semibold mb-4">
                {item.transformation}
              </p>
              <p className="text-gray-600 text-[18px]">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

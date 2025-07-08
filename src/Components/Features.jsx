"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Personal Training",
    description: "One-on-one sessions to maximize your potential with expert guidance.",
    icon: "/images/training.png",
  },
  {
    title: "Nutrition Plans",
    description: "Customized diet programs to fuel your goals and recovery.",
    icon: "/images/NutritionPlan.png",
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art gear to support every style of training.",
    icon: "/images/equipment.png",
  },
  {
    title: "Flexible Memberships",
    description: "Plans that adapt to your schedule and commitment level.",
    icon: "/images/membership.png",
  },
];

const Features = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".feature-subtext", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      ScrollTrigger.batch(".feature-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.from(batch, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            delay: 0.6,
            duration: 1,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.inOut" });
        });
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="w-full bg-white py-20 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="feature-heading text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-gray-800 mb-6">
          Why Choose <span className="text-[#FF2625]">Athlenix Zone</span>
        </h2>
        <p className="feature-subtext text-gray-600 text-[16px] sm:text-[18px] lg:text-[20px] max-w-2xl mx-auto mb-16">
          Unlock your true potential with elite coaching, cutting-edge equipment,
          and a plan tailored to your success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 mb-4 mx-auto"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-[14px] sm:text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

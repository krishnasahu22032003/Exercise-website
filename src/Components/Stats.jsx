"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: "Members Trained", value: 10000, suffix: "+" },
  { label: "Weight Lifted", value: 2500000, suffix: " lbs" },
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Certified Trainers", value: 25, suffix: "+" },
  { label: "Classes/Month", value: 120, suffix: "+" },
  { label: "Lives Transformed", value: 5000, suffix: "+" },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const valueRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    valueRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stats[index].value,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
            onUpdate: function () {
              el.innerText = Math.floor(this.targets()[0].innerText);
            },
            onComplete: function () {
              el.innerText = stats[index].value + stats[index].suffix;
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-gray-800 mb-10">
          Our <span className="text-[#FF2625]">Impact</span> in Numbers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-100 rounded-2xl shadow-md py-10 px-4 flex flex-col items-center justify-center hover:shadow-lg transition-all"
            >
              <p
                ref={(el) => (valueRefs.current[index] = el)}
                className="text-[30px] sm:text-[36px] font-extrabold text-[#FF2625] mb-2"
              >
                0
              </p>
              <p className="text-[16px] sm:text-[18px] text-gray-700 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

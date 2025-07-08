"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to all gym equipment",
      "Free Wi-Fi",
      "Locker facility",
      "1 Group class/week"
    ],
  },
  {
    title: "Pro",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Unlimited Group classes",
      "Nutrition Guide",
      "Steam & Shower Access"
    ],
  },
  {
    title: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "Personal Training (3x/week)",
      "Custom Nutrition Plan",
      "Monthly Body Assessment"
    ],
  },
];

const MembershipPlans = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".plan-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".plan-subtext", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      ScrollTrigger.batch(".plan-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.from(batch, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            delay: 0.4,
            duration: 1,
            ease: "power3.out",
          }),
        start: "top 85%",
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
        <h2 className="plan-heading text-[32px] sm:text-[40px] font-extrabold text-gray-800 mb-6">
          Flexible <span className="text-[#FF2625]">Membership Plans</span>
        </h2>
        <p className="plan-subtext text-gray-600 text-[18px] sm:text-[20px] max-w-2xl mx-auto mb-16">
          Choose a plan that suits your lifestyle, goals, and schedule.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="plan-card bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-4xl font-extrabold text-[#FF2625] mb-6">
                {plan.price}
                <span className="text-base font-medium text-gray-600 ml-1">
                  {plan.period}
                </span>
              </p>
              <ul className="text-gray-600 text-[16px] space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#FF2625] mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#FF2625] text-white py-3 rounded-full font-semibold hover:bg-[#e02020] transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    // Reset initial states first
    gsap.set(q(".cta-heading, .cta-subtext, .cta-button"), {
      opacity: 0,
      y: 40,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true, // animate only once
      },
    });

    tl.to(q(".cta-heading"), {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        q(".cta-subtext"),
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        q(".cta-button"),
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-[#fef7f7] via-white to-[#fef7f7] py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="cta-heading text-[32px] sm:text-[40px] font-extrabold text-gray-800 mb-4 leading-tight">
          Ready to Transform <span className="text-[#ff4d4d]">Your Fitness?</span>
        </h2>

        <p className="cta-subtext text-gray-600 text-[17px] sm:text-[19px] max-w-2xl mx-auto mb-8">
          Join <span className="font-semibold text-[#ff4d4d]">Athlenix Zone</span> today and begin your journey to a stronger, healthier lifestyle — backed by elite trainers, personalized plans, and cutting-edge equipment.
        </p>

        <a
          href="#membership"
          className="cta-button inline-block bg-[#ff4d4d] hover:bg-[#e63946] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          💪 Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

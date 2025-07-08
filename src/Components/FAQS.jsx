"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What are your gym hours?",
    answer: "We’re open 24/7 to help you train whenever it fits your schedule!",
  },
  {
    question: "Do I need to book personal training in advance?",
    answer: "Yes, we recommend booking your session at least 24 hours in advance.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely! We offer a 3-day trial so you can experience Athlenix Zone risk-free.",
  },
  {
    question: "Can I pause my membership?",
    answer: "Yes, you can pause your membership for up to 60 days with no extra charges.",
  },
  {
    question: "Do you provide locker facilities?",
    answer: "Yes, we provide personal lockers for day use and monthly rentals.",
  },
  {
    question: "Are group classes included in the membership?",
    answer: "Yes, most group fitness classes are included with all memberships.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      
      gsap.from(".faq-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

     
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="faq-heading text-[32px] sm:text-[40px] font-extrabold text-gray-800 mb-10">
          Frequently Asked <span className="text-[#FF2625]">Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-5 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-[18px] sm:text-[20px] font-semibold text-gray-800"
              >
                {item.question}
                <span className="text-[#FF2625] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-[16px] sm:text-[17px] leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

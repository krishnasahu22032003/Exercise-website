"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="w-full bg-[#f9f9f9] py-16 px-6 sm:px-10 lg:px-20 border-t border-gray-200"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              Athlenix Zone
            </h3>
            <p className="text-sm leading-relaxed">
              Transform your fitness journey with expert coaching, modern equipment, and personalized plans designed for real results.
            </p>
          </div>

          <div className="footer-item">
            <h4 className="text-md font-semibold mb-3 text-gray-800">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-rose-500">Features</a></li>
              <li><a href="#membership" className="hover:text-rose-500">Pricing</a></li>
              <li><a href="#faq" className="hover:text-rose-500">FAQs</a></li>
              <li><a href="#contact" className="hover:text-rose-500">Contact</a></li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-md font-semibold mb-3 text-gray-800">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-rose-500">Help Center</a></li>
              <li><a href="#" className="hover:text-rose-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-rose-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-md font-semibold mb-3 text-gray-800">Subscribe</h4>
            <p className="text-sm mb-4">
              Get exclusive offers and fitness tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-400 text-white px-5 py-2 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 footer-item">
          © {new Date().getFullYear()} Athlenix Zone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

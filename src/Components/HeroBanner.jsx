'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';

gsap.registerPlugin(useGSAP);

const HeroBanner = () => {
  const bannerRef = useRef();
  const brandRef = useRef();
  const headingRef = useRef();
  const subtextRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from(brandRef.current, { y: -40, opacity: 0 })
      .from(headingRef.current, { y: 40, opacity: 0 }, '-=0.6')
      .from(subtextRef.current, { y: 30, opacity: 0 }, '-=0.5')
      .fromTo(
  buttonRef.current,
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5 }
)
      .from(imageRef.current, { x: 100, opacity: 0 }, '-=1');

  }, { scope: bannerRef });

  return (
    <div
      ref={bannerRef}
      className="relative px-5 sm:px-10 mt-[70px] sm:mt-[100px] lg:mt-[120px] max-w-[1440px] mx-auto"
    >
      {/* Brand Label */}
      <p
        ref={brandRef}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2625] via-[#B22222] to-black font-extrabold uppercase text-[24px] sm:text-[30px] lg:text-[45px] tracking-wider"
      >
        Athlenix Zone
      </p>

      {/* Main Headline */}
      <h1
        ref={headingRef}
        className="font-extrabold text-[48px] sm:text-[64px] lg:text-[52px] leading-tight mt-[16px] mb-[28px]"
      >
        Train Hard, Live Strong
      </h1>

      {/* Subtext */}
      <p
        ref={subtextRef}
        className="text-[22px] sm:text-[26px] lg:text-[28px] leading-[38px] font-[Alegreya] text-[#444] max-w-[700px]"
      >
        Discover workouts tailored to your goals — crafted for real results.
      </p>

      {/* CTA Button */}
      <div className="mt-[40px]">
        <a
          ref={buttonRef}
          href="#exercises"
          className="inline-block w-[220px] text-center bg-gradient-to-r from-[#FF3C3C] via-[#B22222] to-[#1B1B1B] text-white hover:from-[#FF2625] hover:to-black text-[18px] sm:text-[20px] px-[24px] py-[14px] rounded-full shadow-md hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
        >
          Explore Exercises
        </a>
      </div>

      {/* Background Image */}
      <img
        ref={imageRef}
        src="/images/banner.jpg"
        alt="hero-banner"
        className="hidden sm:block absolute right-0 top-0 w-[320px] sm:w-[460px] lg:w-[600px] h-auto rounded-[60px] sm:-mt-[160px] lg:-mt-[230px] z-10 object-cover"
      />
    </div>
  );
};

export default HeroBanner;

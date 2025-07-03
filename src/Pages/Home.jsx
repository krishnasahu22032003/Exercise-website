import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    className="flex-wrap px-5 mt-[20px] sm:mt-[32px] gap-[40px] sm:gap-[123px]"
  >
    <Link to="/">
      <img
        src='/images/Logo.png'
        alt="logo"
        className="w-[48px] h-[48px] mx-[20px]"
      />
    </Link>

    <Stack
      direction="row"
      alignItems="flex-end"
      className="gap-[40px] text-[24px] font-[Alegreya]"
    >
      <Link
        to="/"
        className="no-underline text-[#3A1212] border-b-[3px] border-[#FF2625]"
      >
        Home
      </Link>
      <a
        href="#exercises"
        className="no-underline text-[#3A1212]"
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;

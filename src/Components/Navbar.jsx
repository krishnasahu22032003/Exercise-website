import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    className="w-full max-w-[1440px] mx-auto px-6 sm:px-6 mt-[20px] sm:mt-[32px]"
  >
   
    <div className="flex flex-wrap items-center gap-5 sm:gap-10 text-[18px] sm:text-[24px] font-[Alegreya] text-[#2D0C57]">
 
      <Link to="/">
        <img
          src="/images/Logo.png"
          alt="logo"
          className="w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] object-contain"
        />
      </Link>

      <Link
        to="/"
        className="no-underline text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#1B1B1B] transition duration-200"
      >
        Home
      </Link>
      <a
        href="#exercises"
        className="no-underline transition duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF4D4D] hover:to-[#1B1B1B]"
      >
        Exercises
      </a>
    </div>
  </Stack>
);

export default Navbar;

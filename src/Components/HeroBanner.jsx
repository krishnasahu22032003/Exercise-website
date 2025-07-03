
import { Box, Stack, Typography } from '@mui/material';



const HeroBanner = () => (
  <Box
    className="relative px-5 mt-[70px] sm:ml-[50px] lg:mt-[212px]"
  >
    <Typography className="text-[#FF2625] font-semibold text-[26px]">
      Fitness Club
    </Typography>

    <Typography className="font-bold text-[40px] lg:text-[44px] mt-[30px] mb-[23px]">
      Sweat, Smile <br />
      And Repeat
    </Typography>

    <Typography className="text-[22px] leading-[35px] font-[Alegreya]">
      Check out the most effective exercises personalized to you
    </Typography>

    <Stack>
      <a
        href="#exercises"
        className="mt-[45px] no-underline w-[200px] text-center bg-[#FF2625] text-white text-[22px] p-[14px] rounded"
      >
        Explore Exercises
      </a>
    </Stack>

    <Typography className="font-semibold text-[#FF2625] opacity-10 text-[200px] hidden lg:block">
      Exercise
    </Typography>

    <img
      src='./images/banner.png'
      alt="hero-banner"
      className="hero-banner-img"
    />
  </Box>
);

export default HeroBanner;

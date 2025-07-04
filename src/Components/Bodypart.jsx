import React from 'react';
import { Stack, Typography } from '@mui/material';


const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className={`bodyPart-card bg-white rounded-bl-[20px] w-[270px] h-[282px] cursor-pointer gap-[47px] ${
      bodyPart === item ? 'border-t-[4px] border-[#FF2625]' : ''
    }`}
    sx={
      bodyPart === item
        ? {
            borderTop: '4px solid #FF2625',
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
          }
        : {
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img
      src='/images/gym.png'
      alt="dumbbell"
      className="w-[40px] h-[40px]"
    />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
      className="text-[24px] font-bold font-[Alegreya] text-[#3A1212] capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;

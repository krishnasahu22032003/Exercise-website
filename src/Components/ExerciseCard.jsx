
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card block rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200 bg-white"
    to={`/exercise/${exercise.id}`}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="w-full h-[300px] object-cover rounded-t-xl"
    />
    <Stack direction="row" className="flex items-center mt-3">
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
        className="!ml-[21px] !text-white !bg-[#FFA9A9] !text-[14px] !rounded-[20px] !capitalize"
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
        className="!ml-[21px] !text-white !bg-[#FCC757] !text-[14px] !rounded-[20px] !capitalize"
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
      className="!ml-[21px] !text-black !font-bold !mt-[11px] !pb-[10px] capitalize !text-[20px] lg:!text-[24px]"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

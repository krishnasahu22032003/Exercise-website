import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  console.log("🖼️ Rendering ExerciseCard:", exercise); // ✅ Debug log

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="exercise-card block rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200 bg-white w-[300px] mx-auto"
    >
      {/* ✅ Exercise Image */}
<img
  src={exercise.gifUrl}
  alt={exercise.name}
  loading="lazy"
  className="w-full h-[300px] object-cover rounded-t-xl"
/>

      {/* ✅ Tags */}
      <Stack direction="row" spacing={1} className="px-5 mt-3">
        <Button
          sx={{
            color: '#fff',
            background: '#FFA9A9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: '#fff',
            background: '#FCC757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      {/* ✅ Exercise Name */}
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

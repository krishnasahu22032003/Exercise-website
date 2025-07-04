
import  { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      console.log('Searching for:', search);
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      console.log('Matched Exercises:', searchedExercises);

      setExercises(searchedExercises);
      setSearch('');

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="mt-[100px] px-5"
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        className="text-[30px] lg:text-[44px] mb-[49px]"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" className="mb-[72px]">
        <TextField
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="bg-white rounded-[40px] w-[350px] lg:w-[1170px]"
          sx={{
            height: '76px',
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
              paddingLeft: '16px',
            },
          }}
        />

        <Button
          onClick={handleSearch}
          className="search-btn absolute right-0 bg-[#FF2625] text-white rounded text-center"
          sx={{
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            fontSize: { lg: '20px', xs: '14px' },
            textTransform: 'none',
          }}
        >
          Search
        </Button>
      </Box>

      <Box className="relative w-full px-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

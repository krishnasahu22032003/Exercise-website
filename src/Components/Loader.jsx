import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack
    className="w-full flex justify-center items-center py-10"
  >
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;

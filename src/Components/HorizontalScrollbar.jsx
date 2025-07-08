import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from './Bodypart';
import ExerciseCard from './ExerciseCard';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // Required

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={scrollPrev}
      sx={{
        cursor: 'pointer',
        fontSize: '28px',
        color: '#333',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        px: 1,
        userSelect: 'none',
      }}
    >
      ◀
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={scrollNext}
      sx={{
        cursor: 'pointer',
        fontSize: '28px',
        color: '#333',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        px: 1,
        userSelect: 'none',
      }}
    >
      ▶
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', px:0 }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{
              m: '0 12px',
              minWidth: '160px',
              display: 'inline-block',
            }}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;

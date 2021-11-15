import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function GoodAbout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          fontSize: '1.0em',
          fontFamily: 'Roboto',
          
        },
      }}
    >
      
      <Paper elevation={10}>
      Good Good started back in 2020. The world was in chaos, but these boys had one thing in mind, Golf. They joined forces in Dallas, TX and began to release unreal golf content. With the art and camera direction of Colin and Max, they have taken the golf game by storm. The squad consists of Bubbie, Micah, Grant, Stephen, Garrett, and Matt.
      
    </Paper>
      
      
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          fontSize: '1.7em',
          margin: '0 7%',
          color: 'darkcyan',
          fontFamily: 'Roboto',
          
        },
      }}
    >
      
      <Paper elevation={20}>
      Bubbie Golf (AKA Tom Broders) is a member of Good Good and a member of Team Stumps. He's a self-proclaimed Chicago boy. He is known for his tings and joints, along with his Bubbie draw and crushing tee shots. One of the most positive group members, Bubbie aims to keep the good thoughts flowing.
      
    </Paper>
      
      
    </Box>
  );
}

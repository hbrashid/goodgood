import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Good Good
          </Typography>
          <Button color="inherit" href="https://www.youtube.com/channel/UCfi-mPMOmche6WI-jkvnGXw">YouTube</Button>
          <Button color="inherit" href="https://goodgoodgolf.com/">Shop</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

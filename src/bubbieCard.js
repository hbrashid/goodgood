import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bubbiePic from './bubbiePic.jpg';

export default function BubbieCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="bubbie"
        height="420"
        src={bubbiePic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bubbie Golf
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bubbie Golf (AKA Tom Broders) is a member of Good Good and a member of Team Stumps. He's a self-proclaimed Chicago boy. He is known for his tings and joints, along with his Bubbie draw and crushing tee shots. Bubbie aims to keep the good thoughts flowing.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/c/BubbieGolf">YouTube</Button>
        <Button size="small" href="https://www.instagram.com/bubbiegolf/?hl=en">Instagram</Button>
      </CardActions>
    </Card>
  );
}

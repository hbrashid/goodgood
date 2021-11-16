import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import micahPic from './micahPic.jpeg';

export default function MicahCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="micah"
        height="420"
        src={micahPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Micah Morris
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Micah Morris is a member of Good Good and a member of Team Stumps. He may not know left from right, but he knows how to get the golf ball in the hole. He's on the road to pro and he can bomb some drives when the juices are flowing. Oh, and he loves him some coffee.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/channel/UCfdYeBYjouhibG64ep_m4Vw/featured">YouTube</Button>
        <Button size="small" href="https://www.instagram.com/micahtmorris/">Instagram</Button>
      </CardActions>
    </Card>
  );
}

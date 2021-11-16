import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import grantPic from './grantPic.jpeg';

export default function GrantCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="grant"
        height="420"
        src={grantPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Grant Horvat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Grant Horvat is a member of Good Good and a member of Team Twigs. He's a Florida guy who loves the water and everything to do with the water. He's also the host of Good Good Labs. Some call him Phil Jr. or Grant Lipout. One thing is for sure though, he's got one smooth swing.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/channel/UCgUueMmSpcl-aCTt5CuCKQw/featured">YouTube</Button>
        <Button size="small" href="https://www.instagram.com/granthorvat/?hl=en">Instagram</Button>
        <Button size="small" href="https://www.tiktok.com/@grant_horvat?">TikTok</Button>
      </CardActions>
    </Card>
  );
}

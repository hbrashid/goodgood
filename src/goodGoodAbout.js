import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import GGsquad from './GGsquadpic.jpg';

export default function GGCard() {
  return (
    <Card variant="outlined" style={{marginTop:"3%", marginBottom:"1%"}} sx={{ maxWidth: 550}}>
      {/* <CardMedia
        component="img"
        alt="GGsquad"
        height="450"
        src={GGsquad}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Good Good
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Good Good started back in 2020. The world was in chaos, but these boys had one thing in mind, Golf. They joined forces in Dallas, TX and began to release unreal golf content. With the art and camera direction of Colin and Max, they have taken the golf game by storm. The squad consists of Bubbie, Micah, Grant, Stephen, Garrett, and Matt.
        </Typography>
      </CardContent>
      <CardActions style={{flexWrap:"wrap"}}>
        <Button size="small" href="https://www.youtube.com/channel/UCfi-mPMOmche6WI-jkvnGXw">YouTube</Button>
        <Button size="small" href="https://www.youtube.com/channel/UCADVRJMuJV07vEhGn0DcO_Q">Podcast</Button>
        <Button size="small" href="https://www.facebook.com/GoodGoodSquad/">Facebook</Button>
        <Button size="small" href="https://www.instagram.com/goodgood/?hl=en">Instagram</Button>
        <Button size="small" href="https://www.youtube.com/channel/UCbY_v56iMzSGvXK79X6f4dw">Labs</Button>
        <Button size="small" href="https://goodgoodgolf.com/">Shop</Button>
      </CardActions>
    </Card>
  );
}

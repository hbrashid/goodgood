import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mattPic from './mattPic.jpeg';

export default function MattCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="matt"
        height="420"
        src={mattPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Matt Scharff
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Matt Scharff (AKA Mr. Hole In One) is a member of Good Good and a member of Team Stumps. He's a Kansas guy and he's got a lot of energy on the course. He's made a hole in one on a par 4, and he let's you know it every chance he gets. Did I mention he's made a hole in one on a par 4. And one thing is for sure, he's made a hole in one on a par 4.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/channel/UCY0E4ica6wu4I8kXXyouB6w">YouTube</Button>
        <Button size="small" href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbEliUnB3VUJNYW9BYzE2TTVtdTA1d1JId1ZJUXxBQ3Jtc0tsVk9RNERxd29WUDRxX1Fqd215di1iamVZcEtzU29kREZ5RHpNWDRqSjhKd2xjS0xZQW1JdHRQTGFNa2RpQ3kxUVk5MTdqaHUzMjNDSmR4Zm5CTGJWaVo2dU1KczNTVDdtUjZtSC1YTzRYckFTM3RkTQ&q=https%3A%2F%2Fwww.instagram.com%2Fmattscharff%2F%3Fhl%3Den">Instagram</Button>
        <Button size="small" href="https://twitter.com/realmattscharff?lang=en">Twitter</Button>
        <Button size="small" href="https://www.tiktok.com/@mattscharff?lang=en">TikTok</Button>
      </CardActions>
    </Card>
  );
}

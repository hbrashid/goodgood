import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import stephenPic from './stephenPic.jpeg';

export default function StephenCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="stephen"
        height="420"
        src={stephenPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stephen Castaneda
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Stephen Castaneda is a member of Good Good and a member of Team Twigs. He's from Kansas and is building a golf course in his spare time and he likes to wear sunglasses indoors. Some say he can feel putts in his toes, we'll let you be the judge. One thing is for sure though, his game has leveled up.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/channel/UCFYIH1AYIMrjm8ncRLcFzyg">YouTube</Button>
        <Button size="small" href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa1h6UDNmTjF2WDFwdkJYSnBIMnlrM0gybGVlQXxBQ3Jtc0trZnNmQXdWZU92S1JHdk9FLTZPaWVOTlhXWlNFaXc4Ymh3WFZMYkluVzBtX0JLRlNMWWRQaWlUV0t4cWV1YlZsTVVvRGVjV01EMk5QdWp4dkU3VFpkMmYwQXVVb2hmZzBrSHZFbmtIZkxkQ043bTlPUQ&q=https%3A%2F%2Fwww.instagram.com%2Fstephen_lucilo%2F%3Fhl%3Den">Instagram</Button>
        <Button size="small" href="https://twitter.com/Stephen_Lucilo">Twitter</Button>
      </CardActions>
    </Card>
  );
}

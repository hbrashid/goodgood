import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import garrettPic from './garrettPic.jpeg';

export default function GarrettCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt="garrett"
        height="420"
        src={garrettPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Garrett Clark
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Garrett Clark (AKA GM_Golf) is a member of Good Good and a member of Team Twigs. He was doing trick shots long before he matured into a solid golfer. He can shove his 54 in the door and can clutch up on putts when needed. He can also be seen constantly eating on the course.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/c/gmgolf">YouTube</Button>
        <Button size="small" href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbnNxVzNWeTF5UlRCbFlqRXREQmdaRFVfSUZqd3xBQ3Jtc0trNDJ3bjRqR1BKWXE5eDJNb19waGFja0xaX0F3dE55alpZNldySldMR3hDMnpHYjBIVnEtS0ZsbXA5UTAteEtlWmFacWQxZS1pc2hFSUtSeXhCRmx2TnhUTzNzZzB6dENlOVktQ1hvaG9nckNkUXpCOA&q=https%3A%2F%2Fwww.instagram.com%2Fgm__golf%2F">Instagram</Button>
        <Button size="small" href="https://twitter.com/gm__golf">Twitter</Button>
      </CardActions>
    </Card>
  );
}

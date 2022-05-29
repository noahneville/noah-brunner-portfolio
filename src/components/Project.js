import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// export default function Project({ projectCards }) {
//   return (
//     <div>
//       <img src={projectCards.image} alt="screenshot of project" />
//     </div>
//   );
// }




export default function Project({image, title, description, github, deployedSite}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="screenshot of project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={github}>Github</Button>
        <Button size="small" href={deployedSite}>Deployed Site</Button>
      </CardActions>
    </Card>
  );
}
import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// export default function Project({ projectCards }) {
//   return (
//     <div>
//       <img src={projectCards.image} alt="screenshot of project" />
//     </div>
//   );
// }




function Project(props) {
  return props.projectData.map((item) => (
    <Grid item>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="screenshot of project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined"  href={item.github}>Github</Button>
        <Button size="small" variant="outlined"  href={item.deployedSite}>Deployed Site</Button>
      </CardActions>
    </Card>
    </Grid>
  ));
}

export default Project;
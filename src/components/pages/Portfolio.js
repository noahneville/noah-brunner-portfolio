import React from 'react';
import Project from '../Project';
import projectData from '../../projectData.json'
import Grid from '@mui/material/Grid';

export default function Portfolio() {

  // const tempData = {
  //   title: 'NAME',
  //   image: 'https://preview.redd.it/t900r2m5uf191.png?width=1024&auto=webp&s=079c3f18ec9359b4f3587cb3c3142a2352e747d2',
  //   github: 'https://github.com/oliviertassinari/react-swipeable-views',
  //   deployedSite: 'https://miro.medium.com/max/1400/1*2mEBcFqcQ8hDiX8hvvG9ug.png'
  // }

  

  return (
    <div className='container-fluid'>
      <Grid container spacing={3}>
        < Project projectData={projectData}/>
      </Grid>
    </div>
  )
}

// title={projectData.title} image={projectData.image} description={projectData.description} github={projectData.github} deployedSite={projectData.deployedSite
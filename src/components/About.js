import { Card, Typography } from '@mui/material';
import React from 'react';

function About() {
  return (
    <div>
      <h1><center>About Our Page </center></h1>
    <Card sx={{minWidth:75}}><center>
    <Typography sx={{mb:1.5,fontSize:20}} color="text.secondary">
      At Our Store,We are more than just a store.We are Community that describes our audience in fashion,tech etc.
    </Typography>
    <br></br>
    </center>
    </Card>
<div className='contact'><center>
  <img src='https://images01.nicepagecdn.com/page/64/21/website-template-preview-64211.webp'>
  </img></center></div>

    <h1><center>Thank You</center></h1>
    </div>
  );
}

export default About;
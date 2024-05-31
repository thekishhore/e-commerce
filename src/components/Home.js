import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Home() {
  return (
    <div className='container'>
      <div className='sub-container'>
        <h1><center>WELCOME TO OUR STORE</center></h1>
        <p>Discover the best product at unbeatable prices</p>
        <Button variant="contained" endIcon={<SendIcon />}>
        SHOP NOW      </Button>
      </div>

      <div className='sub-container'>
        <img src='https://www.pixel-studios.com/ecommerce-website-development/images/hero-illustration-2.png'></img>
      </div>
    </div>
  );
}

export default Home;
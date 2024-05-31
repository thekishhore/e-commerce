import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Transform } from "@mui/icons-material";

function Products() {

  const {categoryName}=useParams();
  const [pdata,setPdata]=useState([])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${categoryName}/`)
    .then((res)=>{
      console.log(res.data.products);
      setPdata(res.data.products)
    })      
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {pdata.map((product)=>(
            <Card sx={{ maxWidth: 345}}>

            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              width="200"
              image={product.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="h5">₹{product.price}</Typography>
  
              <Typography
                variant="h5"
                style={{ textAlign: "end", width: "100%" }}
              >
                {product.brand}
              </Typography>
            </CardActions>
          </Card>    
        ))}    
      </Grid>
    </div>
  );
}

export default Products;

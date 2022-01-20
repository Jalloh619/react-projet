import Card from '@mui/material/Card';
import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';


//import './App.css';




export default function CardComponent({name,club, country,age,net_Worth,sport,Image}){

    const data = [age, club, country, sport, net_Worth];
    return (
        
        <Card sx={{ }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={Image}
          
        />
        <CardContent>
            <Typography variant="h2" color="text.secondary" component="div">
                {name}
            </Typography>
            {
                data.map(element=>{
                    return (
                        <Typography variant="body1" color="text.secondary" component='div'>
                            {element}
                        </Typography>
                    )
                })
            }
        </CardContent>
        
        
        </Box>
        </Card>
    );
}
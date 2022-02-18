import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect,useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center', 
  color: theme.palette.text.secondary,
  
}
));

export default function Countries() {
    const [Data, setData]=useState([])
 useEffect(() => {
     async function covidApi() {
    let covInfo =await fetch("https://api.covidtracking.com/v1/us/current.json")
    let xyz=await covInfo.json()
       const xyx = xyz[0];
        setData(xyx);
     }
                  
      covidApi();
 }, [])
 
  return ( 
         <Box sx ={{ flexGrow: 1 }}>

       <Grid container spacing={3}>
          
           {Object.keys(Data).map((val,index)=>{
               return <Grid item xs={4} key={index}>
               <Item>
                   <span style={{color:'blue'}}>{val.toUpperCase()}</span>
                   <div style={{fontWeight:'bold'}}>{Data[val]}</div>
                   </Item>
               
               
             </Grid>
           })}
           
        <Grid item xs={4}>
          <Item></Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}

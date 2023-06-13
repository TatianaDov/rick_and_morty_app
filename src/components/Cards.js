import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button,Card,CardHeader,CardMedia,CardContent,Typography} from "@mui/material";
function Cards({card}){
    console.log(card);
    return(
        <>
    <Button>All Cards</Button>
    <Box>
 <Card>
 <CardHeader title={card.name} />
 <CardMedia 
 //component={}
 image=''/>
 <CardContent>
     <Typography>{'text'}</Typography>
 <FavoriteBorderIcon/>
 </CardContent>
         </Card>
    </Box>
   </> )
}
export default Cards
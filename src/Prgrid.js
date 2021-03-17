import React from 'react';
import Product from "./Product";
import Product1 from "./Product1";
import Product2 from "./Product2";
import {Grid} from "@material-ui/core";

export default function Prgrid(){

    return(
<Grid container>
    <Grid item xs={4}>
        <Product />    
    </Grid>
    <Grid item xs={4}>
        <Product1 />    
    </Grid>
    <Grid item xs={4}>
        <Product2 />    
    </Grid>




</Grid>

    );
}
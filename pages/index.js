import Head from 'next/head'
import Grid from "@material-ui/core/Grid"
export default function first()
{
 return <div>
   <Grid container spacing={3}>
 <Grid item xs={12}>
   <h1>Hello World</h1>
 </Grid>
 <Grid item xs={12} sm={6}>
    <h4 className="main-heading">Im NIKHIL</h4>
   </Grid>
   <Grid item xs={12} sm={6}>
   <h4 className="main-heading">BIT Mesra</h4>
   </Grid>
</Grid>
 </div>
}
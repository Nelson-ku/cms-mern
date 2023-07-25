import React from 'react'
import Navbar from '../components/navbar';
import { Grid,Paper,Typography , Container,Link } from '@mui/material';
import { useParams } from 'react-router-dom';



function CustomerPage() {
  const{firstname}=useParams;


  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  return (
    <>
    <Navbar/>
    <Grid container spacing={12} justify="center">
      <Grid item xs={10} sm={8} md={12}>
        <Paper elevation={12} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Welcome !{firstname}
          </Typography>
          <Typography variant="body1" gutterBottom>
            
          </Typography>
          <Typography variant="body1" gutterBottom>
            For example, you can display user-specific data or provide links to different parts of the application.
          </Typography>
 
        </Paper>
      </Grid>
    </Grid>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
    <Grid>
    <Container maxWidth="sm">
            <Typography variant="body1">
              Constact Support
            </Typography>
            <Copyright />
          </Container>
    </Grid>


      </>
  )
}

export default CustomerPage;
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../Components/Navbar';
const VehicleInfo = () => {
    const spareParts = [
        { id: 1, name: 'Chain And Sproket Honda Civic 8th GEN', brand: 'Brand: SSBC', price: '320 Rs', image: 'https://i.postimg.cc/dtpKBy1n/813365a27b5e5565e40f865a6434e78b.png', reviews: 42 },
        { id: 2, name: 'Air Filter Honda Civic 8th GEN', brand: 'Brand: K&N', price: '890 Rs', image: 'https://i.postimg.cc/fbvyw2zp/da13a1b1cb73e9ed0fbfdf59c05983ad.png', reviews: 38 },
        { id: 3, name: 'Wiring Kit For Honda Civic 8th GEN', brand: 'Brand: Bosch', price: '3000 Rs', image: 'https://i.postimg.cc/HsCLy1rR/c6b68a51689f871ac29735f81bfb970c.png', reviews: 27 },
        { id: 4, name: 'Shock Absorber Honda Civic 8th GEN', brand: 'Brand: KYB', price: '3266 Rs', image: 'https://i.postimg.cc/Bb54gtjy/780b886a59a266ddeccebfca68fb7150.png', reviews: 55 },
        { id: 5, name: 'Fuel Tank Cover Honda Civic 8th GEN', brand: 'Brand: OEM', price: '1200 Rs', image: 'https://i.postimg.cc/7PSHDtKV/b70ccceab66a063a0c8f8ea92da8633c.png', reviews: 31 },
        { id: 6, name: 'Brake Pads For Honda Civic 8th GEN', brand: 'Brand: Brembo', price: '1099 Rs', image: 'https://i.postimg.cc/wjZZ1gvs/35357192fc3c7e7ab0f4aff39aecf09b.png', reviews: 47 },
        { id: 7, name: 'Crank Shaft for Honda Civic 8th GEN', brand: 'Brand: ACL', price: '989 Rs', image: 'https://i.postimg.cc/3wG6pV4f/2789c66b39ed7d9d47e9fbfe67e22740.png', reviews: 33 },
        { id: 8, name: 'Speedometer For Honda Civic 8th GEN', brand: 'Brand: VDO', price: '2200 Rs', image: 'https://i.postimg.cc/C5c6SVX5/27ce14abd5c12479d7cac9aef66e07e0.png', reviews: 29 },
        { id: 9, name: 'Fuel Pump For Honda Civic 8th GEN', brand: 'Brand: Denso', price: '1500 Rs', image: 'https://i.postimg.cc/P5pFs94f/1fc92be4bdd631142052ed7eeabbdbb1.png', reviews: 36 },
        { id: 10, name: 'Engine Oil Honda Civic 8th GEN', brand: 'Brand: Castrol', price: '2220 Rs', image: 'https://i.postimg.cc/Jnqp5L1x/31ba00d9779736d26fbd5d050b09a714.png', reviews: 52 }
      ];
  return (
    <div>
        <NavbarComponent></NavbarComponent>
        <Box sx={{ width: '100%', bgcolor: 'white', p: 2 }}>
          <Typography variant="h6" gutterBottom>
            <b>My Vehicle</b>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img
                src="https://i.postimg.cc/TP7j2yvd/Screenshot-2024-07-04-095932.png"
                alt="Honda Civic"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h5" gutterBottom>
               <b> HONDA CIVIC 8th GEN</b>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              <b>2016-2017</b>
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2">Engine</Typography>
                  <Typography variant="body2" color="text.secondary">1597 cc - 1799 cc</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Torque</Typography>
                  <Typography variant="body2" color="text.secondary">300 Nm - 174@4300rpm</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Mileage</Typography>
                  <Typography variant="body2" color="text.secondary">16.5 - 26.8 kmpl</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Power</Typography>
                  <Typography variant="body2" color="text.secondary">118 - 139.46 bhp</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Transmission</Typography>
                  <Typography variant="body2" color="text.secondary">Manual</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Fuel Type</Typography>
                  <Typography variant="body2" color="text.secondary">Petrol</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'black' }}>
           <b> HONDA CIVIC 8th GEN - Spare Parts </b>
          </Typography>
       <Container>   <Grid container spacing={2}>
            {spareParts.map(part => (
              <Grid item xs={12} sm={6} md={3} key={part.id}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 160, objectFit: 'contain', bgcolor: '#fff', p: 2 }}
                    image={part.image}
                    alt={part.name}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, bgcolor: '#fff' }}>
                    <Box>
                      <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', mb: 0.5, color: '#333' }}>
                        {part.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666', mb: 1, display: 'block' }}>
                        {part.brand}
                      </Typography>
                      <Link href="#" underline="hover" style={{textDecoration:"none"}}  sx={{ color: '#1976D2', fontSize: '0.75rem' }}>
                        <span style={{color:"black"}}>{part.reviews}</span> Reviews
                      </Link>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                      <Typography variant="body2" fontWeight="bold"  sx={{  }}>
                        {part.price}
                      </Typography>
                      <Box sx={{ p: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingCartIcon sx={{ color: '#186865', fontSize: 16 }} style={{backgroundColor:""}} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid></Container>
        </Box>
    </div>
  );
};
export default VehicleInfo;
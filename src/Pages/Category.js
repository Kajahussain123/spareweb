import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';

const partsData = [
    { id: 1, name: 'Chain And Sproket', brand: 'Motul', price: '320.Rs', reviews: '33 Reviews', imageUrl: 'https://i.postimg.cc/C17RFsbJ/Whats-App-Image-2024-06-26-at-10-40-36-dc9760a3.jpg' },
    { id: 2, name: 'Air Filter', brand: 'Continental', price: '890.Rs', reviews: '42 Reviews', imageUrl: 'https://i.postimg.cc/HLpHpD3D/Whats-App-Image-2024-06-26-at-10-41-06-1428561a.jpg' },
    { id: 3, name: 'Wiring Kit', brand: 'OEM', price: '3000.Rs', reviews: '23 Reviews', imageUrl: 'https://i.postimg.cc/N0yD2Ld1/du.png' },
    { id: 4, name: 'Shock Absorber', brand: 'Ergon', price: '3266.Rs', reviews: '13 Reviews', imageUrl: 'https://i.postimg.cc/Qt1qSwGC/g.png' },
    { id: 5, name: 'Fuel Tank Cover', brand: 'CMR', price: '1200.Rs', reviews: '18 Reviews', imageUrl: 'https://i.postimg.cc/1XSrdBsH/Rectangle-244.png' },
    { id: 6, name: 'Brake Pads', brand: 'Romanoe', price: '1099.Rs', reviews: '35 Reviews', imageUrl: 'https://i.postimg.cc/t4BvVKpH/dd.png' },
    { id: 7, name: 'Crank Shaft', brand: 'Lizard', price: '989.Rs', reviews: '16 Reviews', imageUrl: 'https://i.postimg.cc/N0yD2Ld1/du.png' },
    { id: 8, name: 'Speedometer', brand: 'Continental', price: '2200.Rs', reviews: '16 Reviews', imageUrl: 'https://i.postimg.cc/RZZX9gfp/drd.png' },
];

const Category = () => {
    return (
        <div>
          <NavbarComponent />
          <Container className='mt-4'>
              <Typography variant="h4" gutterBottom>
                  Spares for Bajaj Dominar 400
              </Typography>
              
              <Grid container spacing={3} style={{ marginTop: 20 }}>
                  {partsData.map((part) => (
                      <Grid item xs={12} sm={6} md={3} key={part.id}>
                          <Link to={'/product'} style={{ textDecoration: "none" }}>
                              <Card>
                                  <CardMedia
                                      component="img"
                                      height="200"
                                      image={part.imageUrl}
                                      title={part.name}
                                  />
                                  <CardContent>
                                      <Typography variant="h6" component="div">
                                          {part.name}
                                      </Typography>
                                      <Typography variant="body2" color="textSecondary">
                                          Brand: {part.brand}
                                      </Typography>
                                      <Typography variant="body2" color="textSecondary">
                                          {part.reviews}
                                      </Typography>
                                      <Typography variant="h6" component="div">
                                          {part.price}
                                      </Typography>
                                      <Link to={'/cart'} style={{ textDecoration: "none" }}>
                                          <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                                              Add to Cart
                                          </Button>
                                      </Link>
                                  </CardContent>
                              </Card>
                          </Link>
                      </Grid>
                  ))}
              </Grid>
          </Container>
        </div>
    );
};

export default Category;

import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarComponent from '../Components/Navbar';
import { BASE_URL } from '../services/baseUrl';
import { fetchCarAccessories } from '../services/allApi';

const CarAccessories = () => {
    const [partsData, setPartsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCarAccessories();
            setPartsData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavbarComponent />
            <Container className='mt-4'>
                <Typography variant="h4" gutterBottom>
                    Car Accessories
                </Typography>
                
                <Grid container spacing={3} style={{ marginTop: 20 }}>
                    {partsData.map((part) => (
                        <Grid item xs={12} sm={6} md={3} key={part.id}>
                            <Link to={`/product/${part.id}`} style={{ textDecoration: "none" }}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={part.accessory_images.length > 0 ? `${BASE_URL}${part.accessory_images[0].image}` : ''} // Update image URL as per your API response
                                        title={part.accessory_name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {part.accessory_name.length > 30 ? `${part.accessory_name.substring(0, 30)}...` : part.accessory_name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Brand: {part.brand}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {part.reviews} Reviews
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            <span style={{ textDecoration: 'line-through' }}>{part.price} Rs</span>&nbsp;
                                            <span style={{ color: 'red' }}>{part.offer_price} Rs</span>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Discount: {part.discount_percentage}%
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

export default CarAccessories;

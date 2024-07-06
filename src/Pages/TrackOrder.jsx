import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import NavbarComponent from '../Components/Navbar';
const TrackingOrder = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div style={{ backgroundColor: '#F8F9FA', padding: '20px',minHeight:"100vh" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="h6" gutterBottom>Track your Order</Typography>
                                <Typography variant="body2" gutterBottom>Placed on January 18 2024</Typography>
                                <Box position="relative" mt={4} mb={4} ml={1}>
                                    <Box position="absolute" left="10px" top="0" bottom="0" width="2px" bgcolor="#E0E0E0" />
                                    <Box position="absolute" left="10px" top="0" height="75%" width="2px" bgcolor="#4CAF50" />
                                    {[
                                        { status: 'Placed', details: 'Order placed from Denco Pvt., Hyderabad', completed: true },
                                        { status: 'Picked', details: 'Order Picked from Denco Pvt., Hyderabad', completed: true },
                                        { status: 'Shipped', details: 'Order Shipped to Calicut warehouse, kakkanjeri', completed: true },
                                        { status: 'Delivered', details: 'Delivery on Tomorrow 11 am', completed: false },
                                    ].map((step, index) => (
                                        <Box key={step.status} display="flex" mb={3} alignItems="flex-start">
                                            <Box mr={2} zIndex={1}>
                                                {step.completed ?
                                                    <CheckCircleIcon style={{ color: '#4CAF50', fontSize: 22, backgroundColor: 'white', borderRadius: '50%' }} /> :
                                                    <RadioButtonUncheckedIcon style={{ color: '#E0E0E0', fontSize: 22, backgroundColor: 'white', borderRadius: '50%' }} />
                                                }
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" style={{ fontWeight: 'bold' }}>{step.status}</Typography>
                                                <Typography variant="body2" color="textSecondary">{step.details}</Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Typography variant="body2">Expected Delivery on 21/07/2024 at 08:00 AM</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="subtitle1" gutterBottom><strong>ORDER ID : 2527284</strong></Typography>
                                <Typography variant="body2" gutterBottom>2527284</Typography>
                                <Typography variant="body2" gutterBottom>Address:</Typography>
                                <Typography variant="body2" gutterBottom>Ponnadath House, Aatoor, Trissur, Kerala 65735</Typography>
                                <Box mt={2}>
                                    <Typography variant="subtitle2" gutterBottom>Product Price</Typography>
                                    {[
                                        { label: 'Price', value: '₹ 40' },
                                        { label: 'Product Packing', value: '₹ 20' },
                                        { label: 'Product Shipping', value: '₹ 100' },
                                        { label: 'Discount', value: '-₹ 40' },
                                    ].map(item => (
                                        <Box key={item.label} display="flex" justifyContent="space-between" mb={1}>
                                            <Typography variant="body2">{item.label}</Typography>
                                            <Typography variant="body2">{item.value}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Box mt={2} pt={2} borderTop="1px solid #E0E0E0" display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2"><strong>Total Amount</strong></Typography>
                                    <Typography variant="subtitle2"><strong>130.Rs</strong></Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
export default TrackingOrder;
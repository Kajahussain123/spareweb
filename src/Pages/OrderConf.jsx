import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import NavbarComponent from '../Components/Navbar';
const OrderConfirmation = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <Container maxWidth="lg">
                    <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                        <img src="https://i.postimg.cc/CxZR30fP/3582346-1.png" alt="Order Confirmed" style={{ width: '300px', marginBottom: '20px' }} />
                        <Typography variant="h4" gutterBottom>THANK YOU</Typography>
                        <Typography variant="h5">YOUR ORDER IS CONFIRMED</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                                <Typography variant="h6" gutterBottom>Track your Order</Typography>
                                <Typography variant="body2" gutterBottom>Placed on January 18 2024</Typography>
                                <Box position="relative" mt={3} mb={5}>
                                    <Box position="absolute" top="10px" left="0" right="0" height="4px" bgcolor="#E0E0E0" />
                                    <Box position="absolute" top="10px" left="0" width="75%" height="4px" bgcolor="#4CAF50" />
                                    <Box display="flex" justifyContent="space-between" position="relative">
                                        {['Placed', 'Picked', 'Shipped', 'Delivered'].map((step, index) => (
                                            <Box key={step} textAlign="center">
                                                <Box
                                                    width={20}
                                                    height={20}
                                                    borderRadius="50%"
                                                    bgcolor={index < 3 ? '#4CAF50' : '#E0E0E0'}
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    margin="auto"
                                                >
                                                    {index < 3 && <CheckIcon style={{ color: 'white', fontSize: 16 }} />}
                                                </Box>
                                                <Typography variant="caption" style={{ marginTop: '5px', display: 'block' }}>
                                                    {step}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Typography variant="body2">Expected Delivery on 21/07/2024 at 08:00 AM</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="subtitle1" gutterBottom><strong>ORDER ID : 2527284</strong></Typography>
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
                                <Box mt={2} display="flex" justifyContent="space-between">
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
export default OrderConfirmation;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Grid, Typography, Paper, Box } from '@mui/material';
import styled from '@emotion/styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #573085 0%, #674974 50%, #784e60 100%);
`;

const StyledPaper = styled(Paper)`
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const StyledButton = styled(Button)`
  background-color: #2196f3;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #1976d2;
  }
`;

const OTPVerificationPage = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {}; // Extract email from location state

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification
    if (otp === '123456') { // Simulated OTP verification
      toast.success('Registration successful!');
      navigate('/login'); // Redirect to login page after successful OTP verification
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <BackgroundContainer>
      <ToastContainer />
      <Container maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography variant="h4" align="center" gutterBottom>
            <b>Verify OTP</b>
          </Typography>
          <form onSubmit={handleOTPSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Enter OTP"
                  variant="outlined"
                  fullWidth
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  required
                />
                <StyledButton type="submit" variant="contained" fullWidth>
                  Verify OTP
                </StyledButton>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error" align="center">
                    {error}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>
          <Box textAlign="center" marginTop="10px">
            <Typography>
              Didn't receive the OTP?{' '}
              <Button onClick={() => toast.info('Resend OTP functionality not implemented yet')} style={{ color: '#2196f3' }}>
                Resend OTP
              </Button>
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </BackgroundContainer>
  );
};

export default OTPVerificationPage;

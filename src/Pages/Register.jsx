import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Grid, Typography, Paper, Box } from '@mui/material';
import styled from '@emotion/styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../services/allApi';

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
  background-color: #673ab7;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #5e35b1;
  }
`;

const RegisterPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register({
        firstname,
        lastname,
        email,
        phone_number,
        password,
        confirm_password,
      });
  
      console.log('Full API response:', response); // Debugging line
  
      // Check response structure
      if (response && response.status === 201) {
        toast.success('User registered successfully. OTP sent to email.');
        console.log('Navigating to /otp-verification'); // Debugging line
        navigate('/otp-verification', { state: { email } }); // Pass email to OTP page
      } else {
        const errorMessage = response && response.data && response.data.message ? response.data.message : 'Registration failed. Please try again.';
        console.log('Registration failed:', errorMessage); // Debugging line
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Registration error:', error); // Debugging line
      setError('Registration failed. Please try again.');
    }
  };
    
  

  return (
    <BackgroundContainer>
      <ToastContainer />
      <Container maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography variant="h4" align="center" gutterBottom>
            <b>Register</b>
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={phone_number}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton type="submit" variant="contained" fullWidth>
                  Register
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
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#673ab7' }}>
                Login here
              </Link>
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </BackgroundContainer>
  );
};

export default RegisterPage;

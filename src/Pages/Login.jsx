import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TextField, Button as MUIButton, Container as MUIContainer, Paper, Typography, Box } from '@mui/material';
import { loginApi } from '../services/allApi';

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(135deg, #573085 0%, #674974 50%, #784e60 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-size: contain;
  }
  @media (max-width: 480px) {
    background-size: cover;
    padding: 20px;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  background-color: #fff;
`;

const StyledButton = styled(MUIButton)`
  background-color: #673ab7;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #5e35b1;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    try {
      const response = await loginApi(email, password);
      console.log('Login response:', response); // For debugging

      // Verify if the response indicates success
      if (response.success) {
        console.log('Login successful'); // Log successful login
        navigate('/'); // Redirect to home page or dashboard upon successful login
      } else {
        console.log('Login failed:', response); // Log failure details
        setError('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Login error:', error); // For debugging
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <BackgroundContainer>
      <MUIContainer maxWidth="sm">
        <StyledPaper elevation={3}>
          <Typography variant="h4" align="center" gutterBottom>
            <b>Login</b>
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <StyledButton type="submit" variant="contained" fullWidth>
              Login
            </StyledButton>
          </form>
          <Box textAlign="center" marginTop="10px">
            <Typography>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#673ab7' }}>
                Register here
              </Link>
            </Typography>
          </Box>
          {error && (
            <Box textAlign="center" marginTop="10px">
              <Typography color="error">
                {error}
              </Typography>
            </Box>
          )}
        </StyledPaper>
      </MUIContainer>
    </BackgroundContainer>
  );
};

export default Login;

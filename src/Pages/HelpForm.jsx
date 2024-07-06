import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import NavbarComponent from '../Components/Navbar';

const HelpForm = () => {
  const [formData, setFormData] = useState({
    problem: '',
    screenshot: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      screenshot: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission logic
  };

  return (
    <div>
        <NavbarComponent></NavbarComponent>
        <Container maxWidth="sm" className='mt-5'>
          <Typography variant="h4" gutterBottom align="center">
            Hi, How can I help?
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom>
              Problem
            </Typography>
            <TextField
              name="problem"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.problem}
              onChange={handleChange}
            />
            <Typography variant="body1" gutterBottom>
              Screenshot
            </Typography>
            <TextField
              name="screenshot"
              type="file"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleFileChange}
              InputLabelProps={{ shrink: true }}
            />
            <Typography variant="body1" gutterBottom>
              Message
            </Typography>
            <TextField
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={formData.message}
              onChange={handleChange}
            />
            <Box mt={2} display="flex" justifyContent="center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
    </div>
  );
};

export default HelpForm;

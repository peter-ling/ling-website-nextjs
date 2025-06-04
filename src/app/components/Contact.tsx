'use client';

import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" style={{ 
      padding: '40px 0',
      backgroundColor: 'white'
    }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ 
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 800,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'rgb(44, 62, 80)',
          marginBottom: 2,
          textAlign: 'center'
        }}>
          Get in Touch
        </Typography>
        <Typography variant="h6" sx={{
          color: 'rgb(44, 62, 80)',
          textAlign: 'center',
          fontWeight: 800,
          marginBottom: 3
        }}>
          I&apos;m always interested in hearing about new projects<br />
          and opportunities.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Button
            variant="contained"
            size="large"
            href="mailto:pling1@stanford.edu"
            sx={{
              backgroundColor: 'rgb(44, 62, 80)',
              color: 'white',
              fontWeight: 800,
              fontSize: '1.5rem',
              borderRadius: '16px',
              px: 5,
              py: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              '&:hover': {
                backgroundColor: 'rgb(34, 52, 70)',
                color: 'white'
              }
            }}
          >
            Send me an email
          </Button>
          <Button
            variant="contained"
            size="large"
            href="https://www.linkedin.com/in/ling-peter/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'rgb(44, 62, 80)',
              color: 'white',
              fontWeight: 800,
              fontSize: '1.5rem',
              borderRadius: '16px',
              px: 5,
              py: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              '&:hover': {
                backgroundColor: 'rgb(34, 52, 70)',
                color: 'white'
              }
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Container>
    </section>
  );
} 
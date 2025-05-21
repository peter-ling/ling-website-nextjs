'use client';

import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home() {
  return (
    <section id="home-section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '64px',
      backgroundColor: 'var(--grey-color)'
    }}>
      {/* Background image with overlay */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundImage: 'url(/images/palisades-sunset-min.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'brightness(0.6)'
      }}></div>
      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              fontFamily: '"LeagueSpartan", sans-serif',
              color: 'var(--almond-color)',
              marginBottom: 2,
              textTransform: 'none',
              textShadow: '2px 2px 8px rgba(0,0,0,0.18)'
            }}>
              Hi, I&apos;m Peter!
            </Typography>
            <Typography variant="h3" sx={{ 
              fontSize: { xs: '1.3rem', md: '2rem' },
              fontWeight: 600,
              color: 'var(--almond-color)',
              marginBottom: 2,
              textTransform: 'none',
              textShadow: '1px 1px 6px rgba(0,0,0,0.12)'
            }}>
              <Typewriter
                options={{
                  strings: ['Builder', 'Engineer', 'Developer', 'Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'var(--almond-color)',
              fontSize: '1.2rem',
              marginBottom: 4,
              textShadow: '1px 1px 6px rgba(0,0,0,0.10)'
            }}>
              Learn more about my journey making things happen with tech
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'var(--almond-color)',
                  color: 'var(--grey-color)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  px: 4,
                  py: 1.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  '&:hover': {
                    backgroundColor: 'var(--green-color)',
                    color: 'var(--almond-color)'
                  }
                }}
                href="#about"
              >
                More About Me
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'var(--almond-color)',
                  color: 'var(--grey-color)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  px: 4,
                  py: 1.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  '&:hover': {
                    backgroundColor: 'var(--green-color)',
                    color: 'var(--almond-color)'
                  }
                }}
                href="#contact"
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{
              width: { xs: 220, sm: 280, md: 350 },
              height: { xs: 220, sm: 280, md: 350 },
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)'
            }}>
              <Image
                src="/images/ling-photo.jpg"
                alt="Peter Ling"
                width={350}
                height={350}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
} 
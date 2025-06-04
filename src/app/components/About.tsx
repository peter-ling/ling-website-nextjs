'use client';

import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 0',
      backgroundColor: '#fff'
    }}>
      <Container maxWidth="lg" sx={{ color: 'rgb(44, 62, 80)' }}>
        <Typography variant="h2" sx={{
          fontSize: { xs: '2.2rem', md: '2.7rem' },
          fontWeight: 800,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'rgb(44, 62, 80)',
          marginBottom: 6,
          textAlign: 'center',
        }}>
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="body1" sx={{ 
              fontSize: '1.3rem',
              lineHeight: 1.8,
              color: 'rgb(44, 62, 80)',
              marginBottom: 2
            }}>
              I grew up in Pacific Palisades, CA and now attend Stanford University, where I&apos;ve become passionate about building products and tools to help individuals live more efficient and socially connected lives.
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.3rem',
              lineHeight: 1.8,
              color: 'rgb(44, 62, 80)'
            }}>
              When I&apos;m not coding, you can find me on the golf course, surfing, exploring the outdoors, or walking backwards around campus as a tour guide.
            </Typography>

            {/* Education Section */}
            <Box sx={{ mt: 3 }}>
              {/* Stanford */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', mb: '2rem', border: 'none' }}>
                <a href="https://www.stanford.edu" target="_blank" rel="noopener noreferrer">
                  <img src="/images/stanford-logo.png" alt="Stanford Logo" style={{ width: '100px', height: 'auto' }} />
                </a>
                <Box sx={{ border: 'none' }}>
                  <Typography sx={{ fontWeight: 600, mb: '0.5rem', fontSize: '1.15rem', color: 'rgb(44, 62, 80)', fontFamily: '"LeagueSpartan", sans-serif' }}>
                    Stanford University
                  </Typography>
                  <Typography sx={{ mb: '0.3rem', color: 'rgb(44, 62, 80)', fontFamily: '"LeagueSpartan", sans-serif', fontSize: '1.05rem' }}>
                    B.S. Computer Science &apos;24
                  </Typography>
                  <Typography sx={{ mb: '0.3rem', color: 'rgb(44, 62, 80)', fontFamily: '"LeagueSpartan", sans-serif', fontSize: '1.05rem' }}>
                    M.S. Computer Science &apos;25
                  </Typography>
                  <Typography sx={{ color: '#666', fontSize: '1.05rem', fontFamily: '"LeagueSpartan", sans-serif' }}>
                    Concentration in Human-Computer Interaction
                  </Typography>
                </Box>
              </Box>
              {/* Phillips Academy */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', border: 'none' }}>
                <a href="https://www.andover.edu" target="_blank" rel="noopener noreferrer">
                  <img src="/images/andover-logo.png" alt="Phillips Academy Logo" style={{ width: '100px', height: 'auto' }} />
                </a>
                <Box sx={{ border: 'none' }}>
                  <Typography sx={{ fontWeight: 600, mb: '0.5rem', fontSize: '1.15rem', color: 'rgb(44, 62, 80)', fontFamily: '"LeagueSpartan", sans-serif' }}>
                    Phillips Academy
                  </Typography>
                  <Typography sx={{ mb: '0.3rem', color: 'rgb(44, 62, 80)', fontFamily: '"LeagueSpartan", sans-serif', fontSize: '1.05rem' }}>
                    High School
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* View Resume Button */}
            <Box sx={{ mt: '2rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Button
                disableRipple
                disableElevation
                onClick={() => window.open('/assets/peter-ling-resume.pdf', '_blank')}
                className="resume-btn"
                sx={{
                  fontFamily: '"LeagueSpartan", sans-serif',
                  textTransform: 'none',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  padding: '10px 40px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                }}
              >
                View Resume
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{
              width: { xs: 280, sm: 320, md: 350 },
              height: { xs: 400, sm: 480, md: 540 },
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)'
            }}>
              <Image
                src="/images/grad-photo-crop.JPG"
                alt="Peter Ling Graduation"
                width={350}
                height={540}
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
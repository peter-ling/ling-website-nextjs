'use client';

import { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Modal } from '@mui/material';
import Image from 'next/image';

interface JobExperience {
  title: string;
  company: string;
  period: string;

  image?: string;
  details: string;
  location: string;
  caption?: string;
}

const experiences: JobExperience[] = [
  {
    title: 'Software Engineer',
    company: 'TikTok',
    period: '2022 - Present',
    image: '/images/tiktok-team-image.webp',
    details: `At TikTok, the Solutions Engineering team works to help advertisers maximize their success on the platform. Here I had two main projects.

I first built a tool to automate the process of closing poor performing ad groups for clients. While they could previously see which groups were not performing well, clients would need to manually go onto the TikTok ads platform and close them all individually, causing inefficiencies in optimizing ad group performance. Using Python, TikTok Marketing API, and different in-house Cloud APIs, I built this service that clients were beginning to be onboarded onto towards the end of my internship.

Additionally, I took on a data engineering project to create new dashboards for solutions engineers at TikTok. Previously, SEs needed to go to several different tables and dashboards to get info on specific ad performance metrics and conversion rates. Putting them all together, I made it easier for SEs to quickly access the data they need to make informed decisions for their clients.`,
    location: 'New York, NY',
    caption: "My team's farewell party for my on my last day as an intern"
  },
  {
    title: 'Software Engineer',
    company: 'FanDuel',
    period: '2020 - 2022',
    image: '/images/fanduel-photo.JPEG',
    details: `As a software engineering intern, I worked on a backend team responsible for receiving and constructing data from 3rd party sources into FanDuel's daily fantasy sports platform. My work included:\n\nWriting numerous API endpoints in Java to handle sports data while operating on the agile software development cycle.\n\nGaining an understanding of the company's engineering architecture to update services to new development stacks.\n\nUndergoing thorough testing and code review prior to releasing features onto production.\n\nParticipating in an intern hackathon team which conducted product research and presented new cross-selling features.`,
    location: 'New York, NY',
    caption: 'FanDuel NYC office',
  }, 
  {
    title: 'Software Engineer',
    company: 'Mercury Systems',
    period: 'June 2022 - August 2022',
    details: 'Spending a summer as a software engineering intern at Mercury introduced me to the world of aerospace and defense engineering. In my first professional software engineering experience, I learned how to communicate with other engineers on a scrum team. I completed my project, which was to create a packaging app in C/C++ that takes in a binary file representing the internal system of the V-22 Osprey plane, and to gain an understanding of public/private key encryption by using the OpenSSL library to ensure secure file loading.',
    location: 'Torrance, CA',
  }
];

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState<JobExperience | null>(null);

  const handleOpen = (job: JobExperience) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  return (
    <section id="experience" style={{ 
      padding: '48px 0',
      backgroundColor: 'var(--grey-color)'
    }}>
      <Container maxWidth="lg" sx={{ color: 'var(--grey-color)' }}>
        <Typography variant="h2" sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'var(--almond-color)',
          marginBottom: 4,
          textAlign: 'center'
        }}>
          Work Experience
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '32px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                p: 2.5,
                textAlign: 'center',
                color: 'rgb(44, 62, 80)',
                minHeight: 0,
              }}>
                <Typography sx={{ fontWeight: 800, color: 'rgb(44, 62, 80)', mb: 0.75, fontSize: '2rem', lineHeight: 1.1 }}>
                  {job.company}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: 'rgb(44, 62, 80)', mb: 0.5, fontSize: '1.15rem', lineHeight: 1. }}>
                  {job.title}
                </Typography>
                <Typography sx={{ color: '#666', fontWeight: 500, mb: 0.1, fontSize: '0.95rem', lineHeight: 1.1 }}>
                  {job.period}
                </Typography>
                <Typography sx={{ color: '#666', fontWeight: 500, mb: 1.5, fontSize: '0.95rem', lineHeight: 1.1 }}>
                  {job.location}
                </Typography>
                <Button 
                  variant="contained" 
                  onClick={() => handleOpen(job)}
                  sx={{ 
                    backgroundColor: 'var(--almond-color)',
                    color: 'rgb(44, 62, 80)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '14px',
                    px: 3,
                    py: 1,
                    minHeight: 'unset',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    mt: 1,
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={!!selectedJob}
          onClose={handleClose}
          aria-labelledby="job-details-modal"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2
          }}
        >
          <Box sx={{
            position: 'relative',
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxWidth: 800,
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            color: 'rgb(44, 62, 80)'
          }}>
            {selectedJob && (
              <>
                <Typography variant="h4" component="h2" sx={{ 
                  fontWeight: 800,
                  color: 'rgb(44, 62, 80)',
                  marginBottom: 2,
                  textAlign: 'center'
                }}>
                  My time at {selectedJob.company}
                </Typography>
                {selectedJob.details.split('\n\n').map((para, idx) => (
                  <Typography key={idx} variant="body1" sx={{
                    color: 'rgb(44, 62, 80)',
                    lineHeight: 1.8,
                    marginBottom: 2,
                    textAlign: 'left',
                    fontSize: '1.3rem',
                  }}>
                    {para}
                  </Typography>
                ))}
                {selectedJob.image && (
                  <>
                    <Image
                      src={selectedJob.image}
                      alt={`${selectedJob.company} office`}
                      width={400}
                      height={220}
                      style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', marginTop: 16 }}
                    />
                    {selectedJob.caption && (
                      <Typography sx={{
                        fontStyle: 'italic',
                        color: 'var(--grey-color)',
                        fontSize: '0.95rem',
                        textAlign: 'center',
                        mt: 1,
                        mb: 2
                      }}>
                        {selectedJob.caption}
                      </Typography>
                    )}
                  </>
                )}
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </section>
  );
} 
'use client';

import { Box, Typography, Container, Grid, Card, CardContent, Button, Modal } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  modal?: {
    details: string; // Can be plain text or markdown
    links?: { label: string; url: string }[]; // Optional array of links
    image?: string; // Optional image for the modal
  };
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: 'daha',
    description: 'An Online Campus Lending Marketplace',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://your-ecommerce-url.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
    modal: {
      details: 'designed, itereated, and coded an app to create a lending market on campuses with a team of 3 other stanford students. helped prototype throughout the design process, co-wrote the full-stack, and also coded the landing/information page.',
      links: [
        { label: 'Demo Video', url: 'https://youtu.be/Lze8IVCYgMc' },
        { label: 'GitHub Repository', url: 'https://github.com/dsilva2/cs147-final-project' }
      ]
    }
  },
  {
    title: 'Portfolio Website',
    description: 'My personal website: taught myself react in order to build it and transferred it over from javascript to typescript with Next.Js',
    technologies: ['React', 'Next.js', 'Material-UI', 'TypeScript'],
    githubLink: 'https://github.com/peter-ling/ling-website-nextjs'
  }, 
  {
    title: 'Quad Contest',
    description: 'Rogue-Like 2d Survival Game',
    technologies: ['React', 'Next.js', 'Material-UI', 'TypeScript'],
    githubLink: 'https://github.com/peter-ling/ling-website-nextjs'
  }

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    if (project.modal) setSelectedProject(project);
  };

  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects" style={{ 
      // minHeight: '100vh',
      padding: '80px 0',
      backgroundColor: '#fff'
    }}>
      <Container maxWidth="lg" sx={{ color: 'var(--almond-color)' }}>
        <Typography variant="h2" sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'var(--grey-color)',
          marginBottom: 4,
          textAlign: 'center'
        }}>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                  {project.title}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: 'rgb(44, 62, 80)', mb: 0.5, fontSize: '1.15rem', lineHeight: 1. }}>
                  {project.description}
                </Typography>
                <Typography sx={{ color: '#888', fontWeight: 500, mb: 2, fontSize: '1.05rem', lineHeight: 1.1 }}>
                  {project.technologies.join(', ')}
                </Typography>
                {project.modal ? (
                  <Button 
                    variant="contained" 
                    onClick={() => handleOpen(project)}
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
                ) : (
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    {project.githubLink && (
                      <Button
                        variant="contained"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        }}
                      >
                        Github Repo
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        variant="contained"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        }}
                      >
                        Live Link
                      </Button>
                    )}
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={!!selectedProject}
          onClose={handleClose}
          aria-labelledby="project-details-modal"
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
            maxWidth: 700,
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            color: 'rgb(44, 62, 80)'
          }}>
            {selectedProject && selectedProject.modal && (
              <>
                <Typography variant="h4" component="h2" sx={{ 
                  fontWeight: 800,
                  color: 'rgb(44, 62, 80)',
                  marginBottom: 2,
                  textAlign: 'center'
                }}>
                  {selectedProject.title}
                </Typography>
                {selectedProject.modal.image && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Image
                      src={selectedProject.modal.image}
                      alt={selectedProject.title}
                      width={400}
                      height={220}
                      style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto', borderRadius: 12 }}
                    />
                  </Box>
                )}
                {selectedProject.modal.details.split('\n\n').map((para, idx) => (
                  <Typography key={idx} variant="body1" sx={{
                    color: 'rgb(44, 62, 80)',
                    lineHeight: 1.8,
                    marginBottom: 2,
                    textAlign: 'left',
                    fontSize: '1.2rem',
                  }}>
                    {para}
                  </Typography>
                ))}
                {selectedProject.modal.links && selectedProject.modal.links.length > 0 && (
                  <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                    {selectedProject.modal.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="contained"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Box>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button onClick={handleClose} sx={{ fontWeight: 700, fontSize: '1.1rem', borderRadius: '10px', px: 4, py: 1, backgroundColor: '#eee', color: 'rgb(44, 62, 80)' }}>Close</Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </section>
  );
} 
'use client';

import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Material-UI.',
    image: '/images/portfolio-preview.jpg',
    technologies: ['React', 'Material-UI', 'TypeScript'],
    liveLink: 'https://your-portfolio-url.com',
    githubLink: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication and payment processing.',
    image: '/images/ecommerce-preview.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://your-ecommerce-url.com',
    githubLink: 'https://github.com/yourusername/ecommerce'
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ 
      minHeight: '100vh',
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
                transition: 'transform 0.2s',
                backgroundColor: 'var(--almond-color)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ position: 'relative', height: 200 }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" sx={{ 
                    fontWeight: 600,
                    color: 'var(--grey-color)',
                    marginBottom: 1
                  }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'var(--grey-color)',
                    marginBottom: 2
                  }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Typography
                        key={techIndex}
                        component="span"
                        sx={{
                          display: 'inline-block',
                          backgroundColor: 'var(--grey-color)',
                          color: 'var(--almond-color)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          marginRight: 1,
                          marginBottom: 1,
                          fontSize: '0.875rem'
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {project.liveLink && (
                      <Button
                        variant="contained"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'var(--grey-color)',
                          color: 'var(--almond-color)',
                          '&:hover': {
                            backgroundColor: 'var(--green-color)'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outlined"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: 'var(--grey-color)',
                          color: 'var(--grey-color)',
                          '&:hover': {
                            borderColor: 'var(--green-color)',
                            color: 'var(--green-color)'
                          }
                        }}
                      >
                        GitHub
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
} 
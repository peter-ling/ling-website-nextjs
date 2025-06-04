import { Box, Typography, Container, Grid, Card, Button } from '@mui/material';
import Link from 'next/link';

// This would typically come from your data source
const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  return (
    <section id="blog" style={{ 
      padding: '80px 0',
      backgroundColor: 'var(--grey-color)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, textAlign: 'left' }}>
          <Button
            variant="contained"
            href="/"
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
            ← Back to Home
          </Button>
        </Box>

        <Typography variant="h2" sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'var(--almond-color)',
          marginBottom: 4,
          textAlign: 'center'
        }}>
          Blog Posts
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post}>
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
                  Sample Blog Post {post}
                </Typography>
                <Typography sx={{ color: '#666', fontWeight: 500, mb: 1.5, fontSize: '0.95rem', lineHeight: 1.1 }}>
                  March {post}, 2024
                </Typography>
                <Typography sx={{ color: 'rgb(44, 62, 80)', mb: 2, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  This is a preview of the blog post content. It would show a brief excerpt...
                </Typography>
                <Button 
                  variant="contained" 
                  href={`/blog/post-${post}`}
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
                  Read More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
} 
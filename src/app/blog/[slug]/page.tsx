import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // This would typically fetch the blog post data based on the slug
  const post = {
    title: "Sample Blog Post",
    date: "March 15, 2024",
    content: "This is where the full blog post content would go...",
  };

  return (
    <section style={{ 
      padding: '80px 0',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, display: 'flex', gap: 2 }}>
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
            ← Home
          </Button>
          <Button
            variant="contained"
            href="/blog"
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
            ← All Posts
          </Button>
        </Box>
        
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 800,
            color: 'rgb(44, 62, 80)',
            marginBottom: 2,
            fontFamily: '"LeagueSpartan", sans-serif',
          }}>
            {post.title}
          </Typography>
          
          <Typography sx={{ 
            color: 'rgb(44, 62, 80)',
            fontSize: '1.2rem',
            marginBottom: 6,
            opacity: 0.8
          }}>
            {post.date}
          </Typography>
          
          <Typography sx={{ 
            color: 'rgb(44, 62, 80)',
            fontSize: '1.3rem',
            lineHeight: 1.8,
            textAlign: 'left',
            '& p': {
              marginBottom: '1.5rem'
            }
          }}>
            {post.content}
          </Typography>
        </Box>
      </Container>
    </section>
  );
} 
import Link from 'next/link';
import { Box, Typography, Container, Grid, Card, Button } from '@mui/material';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
  showAllLink?: boolean;
}

export default function BlogPreview({ posts, showAllLink = true }: BlogPreviewProps) {
  // Only show the first three posts
  const previewPosts = posts.slice(0, 3);

  return (
    <section id="blog" style={{ 
      backgroundColor: 'var(--grey-color)',
      padding: '80px 0'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          fontFamily: '"LeagueSpartan", sans-serif',
          color: 'var(--almond-color)',
          marginBottom: 2,
          textAlign: 'center'
        }}>
          Blog
        </Typography>
        {showAllLink && (
          <Box sx={{ textAlign: 'center', mb: 4 }}>
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
              See all {posts.length} posts →
            </Button>
          </Box>
        )}

        <Grid container spacing={4}>
          {previewPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
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
                  {post.title}
                </Typography>
                <Typography sx={{ color: '#666', fontWeight: 500, mb: 1.5, fontSize: '0.95rem', lineHeight: 1.1 }}>
                  {post.date}
                </Typography>
                <Typography sx={{ color: 'rgb(44, 62, 80)', mb: 2, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  {post.excerpt}
                </Typography>
                <Button 
                  variant="contained" 
                  href={`/blog/${post.slug}`}
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
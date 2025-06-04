'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Container, IconButton, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

// Import sections
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BlogPreview from './components/BlogPreview';

// Sample blog data
const sampleBlogPosts = [
  {
    id: '1',
    title: 'Building a Modern Portfolio with Next.js',
    excerpt: 'A deep dive into creating a responsive portfolio website using Next.js, Material-UI, and Tailwind CSS. Learn about the architecture decisions and best practices...',
    date: 'March 15, 2024',
    slug: 'building-modern-portfolio-nextjs'
  },
  {
    id: '2',
    title: 'The Evolution of Web Development',
    excerpt: 'Exploring how web development has evolved from static HTML pages to dynamic, interactive applications. Understanding the key technologies that shaped modern web development...',
    date: 'March 10, 2024',
    slug: 'evolution-of-web-development'
  },
  {
    id: '3',
    title: 'Mastering TypeScript in React Applications',
    excerpt: 'Learn how to leverage TypeScript to build more robust React applications. From basic type definitions to advanced patterns and best practices...',
    date: 'March 5, 2024',
    slug: 'mastering-typescript-react'
  },
  {
    id: '4',
    title: 'Optimizing Performance in Next.js Applications',
    excerpt: 'Discover techniques for improving the performance of your Next.js applications. From image optimization to code splitting and server-side rendering...',
    date: 'February 28, 2024',
    slug: 'optimizing-nextjs-performance'
  }
];

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 64; // navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <main>
      <AppBar position="fixed" sx={{ 
        backgroundColor: '#f8fafb',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        color: 'var(--grey-color)',
        backdropFilter: 'none',
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 80 }}>
            <Box
              component="div"
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--grey-color)',
                fontFamily: '"LeagueSpartan", sans-serif',
                textTransform: 'none',
                letterSpacing: 0.5
              }}
            >
              Peter Ling
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'var(--grey-color)' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    disableRipple
                    className="nav-link"
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Home />
      <About />
      <Experience />
      <Projects />
      <BlogPreview posts={sampleBlogPosts} />
      <Contact />
    </main>
  );
}

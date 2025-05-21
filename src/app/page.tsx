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

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
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
      <Contact />
    </main>
  );
}

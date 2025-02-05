import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { EmojiObjects, Groups, TrendingUp } from '@mui/icons-material';

const Home = () => {
  return (
    <Box sx={{ typography: 'body1', fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          background: 'linear-gradient(135deg, #013378 0%, #006d9e 50%, #00C2CB 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)',
          }
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(to right, #fff 20%, #00C2CB 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.05em',
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '120px',
                    height: '4px',
                    background: '#00C2CB',
                    margin: '2rem 0',
                  }
                }}
              >
                Empower Africa Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 6,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                }}
              >
                {company.mission}
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  href="#services"
                  sx={{
                    px: 6,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #00C2CB 0%, #006d9e 100%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  sx={{
                    px: 6,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Schedule Consultation
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="../img/hero-image.png"
                alt="Business growth"
                sx={{
                  width: '100%',
                  borderRadius: '24px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  transform: 'rotate3d(0.5, 1, 0, 10deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate3d(0.5, 1, 0, 5deg)',
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Value Proposition Section */}
      <Box sx={{ backgroundColor: '#f9fbfd', py: 10 }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              mb: 8,
              color: '#013378',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                background: '#00C2CB',
                margin: '1rem auto',
              }
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <EmojiObjects sx={{ fontSize: 40 }} />,
                title: 'Innovative Solutions',
                content: 'Cutting-edge strategies leveraging emerging technologies'
              },
              {
                icon: <Groups sx={{ fontSize: 40 }} />,
                title: 'Expert Team',
                content: 'Industry veterans with proven track records across Africa'
              },
              {
                icon: <TrendingUp sx={{ fontSize: 40 }} />,
                title: 'Proven Results',
                content: '40% average revenue growth for our clients in 2023'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 72,
                    height: 72,
                    background: 'linear-gradient(135deg, #00C2CB 0%, #013378 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0, 194, 203, 0.3)',
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#013378',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#555',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </Box>
  );
};

export default Home;
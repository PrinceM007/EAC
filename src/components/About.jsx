import React from 'react';
import { Box, Typography, Container, Grid, useTheme, styled } from '@mui/material';
import { Business, Public, EmojiObjects, Group, Flag } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const features = [
    {
      icon: Business,
      title: 'Strategic Trade Guidance',
      content: 'Expertise in cross-border trade facilitation and market entry strategies',
      color: '#00C2CB'
    },
    {
      icon: Public,
      title: 'Sustainable Development',
      content: 'ESG compliance strategies and green business practice implementation',
      color: '#013378'
    },
    {
      icon: EmojiObjects,
      title: 'Digital Transformation',
      content: 'Cutting-edge technology integration for operational excellence',
      color: '#006d9e'
    },
    {
      icon: Group,
      title: 'Inclusive Growth',
      content: 'Empowering youth and women through entrepreneurship programs',
      color: '#00C2CB'
    }
  ];

  return (
    <Box id="about" sx={{
      py: 10,
      position: 'relative',
      backgroundColor: '#f8faff',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -50,
        left: 0,
        width: '100%',
        height: '100px',
        background: 'linear-gradient(135deg, #013378 0%, #006d9e 50%, #00C2CB 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)',
      }
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{
          fontWeight: 800,
          textAlign: 'center',
          mb: 8,
          color: '#013378',
          position: 'relative',
          fontFamily: "'Inter', sans-serif",
          '&::after': {
            content: '""',
            display: 'block',
            width: '60px',
            height: '4px',
            background: '#00C2CB',
            margin: '1rem auto',
            borderRadius: '2px',
          }
        }}>
          Our Value Proposition
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{
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
              }}>
                <Box sx={{
                  width: 72,
                  height: 72,
                  background: `linear-gradient(135deg, ${item.color} 0%, #013378 100%)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 194, 203, 0.3)',
                }}>
                  <item.icon sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#013378',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {item.title}
                </Typography>
                <Typography sx={{
                  color: '#555',
                  lineHeight: 1.6,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                }}>
                  {item.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          p: 6,
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
          textAlign: 'center',
          maxWidth: 800,
          mx: 'auto'
        }}>
          <Flag sx={{
            fontSize: 56,
            color: '#00C2CB',
            mb: 3,
            background: 'linear-gradient(135deg, #013378 0%, #006d9e 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }} />
          <Typography variant="h4" sx={{
            fontWeight: 700,
            mb: 3,
            color: '#013378',
            fontFamily: "'Inter', sans-serif",
          }}>
            Africa-Focused Expertise
          </Typography>
          <Typography sx={{
            color: '#555',
            lineHeight: 1.6,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
          }}>
            With deep understanding of local markets and global best practices, we bridge the gap between 
            African businesses and international opportunities through strategic partnerships and 
            innovative growth strategies.
          </Typography>
        </Box>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        `}</style>
      </Container>
    </Box>
  );
};

export default About;
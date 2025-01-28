import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { Business, Public, EmojiObjects, Group } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const featureItems = [
    {
      icon: Business,
      title: 'Strategic Guidance',
      content: 'We help businesses develop and implement winning strategies to achieve their goals.',
    },
    {
      icon: Public,
      title: 'Sustainable Growth',
      content: 'We focus on long-term sustainability to build positive environmental and social impact.',
    },
    {
      icon: EmojiObjects,
      title: 'Innovative Solutions',
      content: 'We leverage cutting-edge approaches to solve complex business challenges.',
    },
    {
      icon: Group,
      title: 'Collaborative Partnerships',
      content: 'We work hand-in-hand with clients to achieve shared success and mutual growth.',
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          About Us
        </Typography>
        
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {featureItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <item.icon
                  aria-hidden="false"
                  aria-label={item.title}
                  sx={{
                    fontSize: 56,
                    color: 'primary.main',
                    mb: 3,
                    mx: 'auto',
                    display: 'block',
                  }}
                />
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    maxWidth: 380,
                    mx: 'auto',
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'text.secondary',
            mt: 7,
            textAlign: 'center',
            fontSize: '1.1rem',
            maxWidth: 600,
            mx: 'auto',
            '& strong': {
              color: 'primary.main',
              fontWeight: 600,
            },
          }}
        >
          Let's build a <strong>brighter future</strong> for Africa together.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
import React from 'react';
import { Grid, Typography, Button, Card, CardContent, Box, styled, Container } from '@mui/material';
import { Business, School, Nature, Terminal, Groups, Event } from '@mui/icons-material';

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.",
};

const services = [
  { title: "Business Consulting", icon: Business, 
    description: "Strategic guidance to refine operations, optimize strategies, and maximize profitability." },
  { title: "Leadership Development", icon: School, 
    description: "Transformative coaching and workshops to cultivate exceptional leadership capabilities." },
  { title: "Sustainability Strategy", icon: Nature, 
    description: "Create lasting impact through ESG frameworks and community-driven initiatives." },
  { title: "Digital Transformation", icon: Terminal, 
    description: "Next-gen tech solutions with AI integration, cloud systems, and data analytics." },
  { title: "Corporate Training", icon: Groups, 
    description: "Specialized programs to upskill teams in emerging technologies and methodologies." },
  { title: "Event Curation", icon: Event, 
    description: "End-to-end management for impactful corporate events and experiential activations." },
];

const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: '#FFFFFF',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '& .serviceIcon': {
      transform: 'scale(1.2) rotate(-5deg)',
      background: 'linear-gradient(135deg, #013378 0%, #00C2CB 100%)',
    }
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  transition: 'all 0.3s ease',
  fontSize: '2.5rem',
  color: '#FFFFFF',
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(45deg,rgb(255, 255, 255) 0%, #013378 100%)',
}));

const Services = () => {
  return (
    <Box component="section" sx={{ 
      backgroundColor: '#F7F7F7',
      overflow: 'hidden',
      pb: 10,
      position: 'relative',
    }}>
      {/* Header Section */}
      <Box sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #001F4D 0%, #013378 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        mb: 10,
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            lineHeight: 1.2,
            maxWidth: 1200,
            mx: 'auto',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            Accelerating Business Excellence
          </Typography>
          <Typography variant="h6" component="p" sx={{
            color: '#FFFFFF',
            opacity: 0.9,
            textAlign: 'center',
            mt: 4,
            maxWidth: 800,
            mx: 'auto',
            fontSize: '1.1rem',
          }}>
            {company.mission}
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <AnimatedCard sx={{
                height: '100%',
                borderRadius: 4,
                border: '1px solid #E0E0E0',
              }}>
                <CardContent sx={{ 
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <ServiceIcon className="serviceIcon" sx={{ mb: 3 }}>
                    <service.icon fontSize="inherit" />
                  </ServiceIcon>
                  <Typography variant="h5" component="h3" sx={{ 
                    fontWeight: 700,
                    color: '#2D3436',
                    mb: 2,
                    textAlign: 'center',
                  }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#888888',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ 
          mt: 10,
          textAlign: 'center',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150%',
            height: '200px',
            background: 'linear-gradient(135deg, #80E1E5 0%, #00C2CB 100%)',
            borderRadius: '50%',
            zIndex: 0,
          }
        }}>
          <Box position="relative" zIndex={1} sx={{ py: 6 }}>
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 700,
              color: '#FFFFFF',
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.125rem' }
            }}>
              Ready to Transform Your Business?
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                boxShadow: 3,
                background: 'linear-gradient(45deg, #00C2CB 0%, #009BA3 100%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 6,
                  background: 'linear-gradient(45deg, #009BA3 0%, #00C2CB 100%)',
                }
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
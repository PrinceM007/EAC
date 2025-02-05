import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Button, Grid, Image } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.",
  services: [
    {
      title: 'Business Strategy Consulting',
      description: 'Tailored solutions to refine your business strategies and achieve long-term success.',
    },
    {
      title: 'Leadership Development',
      description: 'Training programs to develop effective leaders who inspire and empower your teams.',
    },
    {
      title: 'Market Analysis',
      description: 'In-depth research to understand your target market, identify opportunities, and gain a competitive edge.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlining processes to maximize productivity, reduce costs, and improve overall business performance.',
    },
  ],
};

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: '#F7F7F7', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ color: '#013378', fontWeight: 'bold', mb: 4 }}>
          {company.name} Services
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 4 }}>
          {company.mission} We offer a comprehensive suite of services designed to help your business thrive.
        </Typography>

        <Grid container spacing={4}>
          {company.services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Image
                  src="https://source.unsplash.com/300x200?business+strategy"
                  alt={service.title}
                  style={{ width: '100px', height: '100px', borderRadius: '10px', marginRight: '20px' }}
                />
                <Box>
                  <Typography variant="h5" sx={{ color: '#013378', fontWeight: 'bold', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#013378',
              color: 'white',
              padding: '12px 24px',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#00C2CB',
              },
            }}
          >
            Learn More About Our Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, useTheme, styled } from '@mui/material';
import { Email, Phone, LocationOn, Schedule } from '@mui/icons-material';

const company = {
  name: 'Empower Africa Consulting',
  mission: 'Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.',
  contactInfo: {
    email: 'support@empowerafrica.com',
    phone: '+123 456 7890',
    address: '123 Empower Africa Street, Johannesburg, South Africa',
  },
  businessHours: {
    weekdays: '9:00 AM - 5:00 PM',
    weekends: 'Closed',
  },
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&.Mui-focused fieldset': {
      borderWidth: '2px',
    },
  },
}));

const Contact = () => {
  const theme = useTheme();

  return (
    

    
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      
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
            Contact Us Now!
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
      <Container maxWidth="lg"
      >
      


        {/* Contact Cards Grid */}
        <Grid container spacing={4} sx={{py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },}}>
          {[
            {
              icon: Email,
              title: 'Contact Information',
              items: [
                { label: 'Email', value: company.contactInfo.email },
                { label: 'Phone', value: company.contactInfo.phone },
                { label: 'Address', value: company.contactInfo.address },
              ],
            },
            {
              icon: Schedule,
              title: 'Business Hours',
              items: [
                { label: 'Monday - Friday', value: company.businessHours.weekdays },
                { label: 'Saturday - Sunday', value: company.businessHours.weekends },
              ],
            },
          ].map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: theme.shadows[4],
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <card.icon
                  sx={{
                    fontSize: 48,
                    color: 'primary.main',
                    mb: 3,
                    display: 'block',
                    mx: 'auto',
                  }}
                  aria-hidden="true"
                />
                <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 3, textAlign: 'center' }}>
                  {card.title}
                </Typography>
                {card.items.map((item, itemIndex) => (
                  <Box key={itemIndex} sx={{ mb: 2, textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 0 },
            maxWidth: 800,
            mx: 'auto',
            p: { xs: 3, md: 6 },
            backgroundColor: 'background.paper',
            borderRadius: 4,
            boxShadow: theme.shadows[4],
          }}
        >
          <Typography variant="h4" component="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 5, textAlign: 'center' }}>
            Send a Message
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField
                fullWidth
                label="Name"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '8px' } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: '16px',
                    '& textarea': { resize: 'vertical' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
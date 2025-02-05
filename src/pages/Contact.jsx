import React from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box id="contact" sx={{
      py: 10,
      position: 'relative',
      background: 'linear-gradient(135deg, #013378 0%, #006d9e 50%, #00C2CB 100%)',
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
          color: 'white',
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
          Contact Us
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              backdropFilter: 'blur(10px)',
              height: '100%'
            }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 700,
                mb: 4,
                color: 'white',
                fontFamily: "'Inter', sans-serif",
              }}>
                Contact Information
              </Typography>
              
              <Box sx={{ "& > div": { mb: 3, display: 'flex', alignItems: 'center' } }}>
                <div>
                  <LocationOn sx={{ mr: 2, color: '#00C2CB' }} />
                  <Typography sx={{ color: 'white', fontFamily: "'Inter', sans-serif" }}>
                    123 Innovation Drive, Mbabane, Eswatini
                  </Typography>
                </div>
                <div>
                  <Phone sx={{ mr: 2, color: '#00C2CB' }} />
                  <Typography sx={{ color: 'white', fontFamily: "'Inter', sans-serif" }}>
                    +268 1234 5678
                  </Typography>
                </div>
                <div>
                  <Email sx={{ mr: 2, color: '#00C2CB' }} />
                  <Typography sx={{ color: 'white', fontFamily: "'Inter', sans-serif" }}>
                    contact@empowerafrica.co.sz
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="form" sx={{
              p: 4,
              backgroundColor: 'white',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{ mb: 3, borderRadius: '12px' }}
                InputProps={{
                  sx: {
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: '#00C2CB',
                    },
                  }
                }}
              />

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{ mb: 3, borderRadius: '12px' }}
                InputProps={{
                  sx: {
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: '#00C2CB',
                    },
                  }
                }}
              />

              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                sx={{ mb: 3, borderRadius: '12px' }}
                InputProps={{
                  sx: {
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: '#00C2CB',
                    },
                  }
                }}
              />

              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<Send />}
                sx={{
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #00C2CB 0%, #013378 100%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        `}</style>
      </Container>
    </Box>
  );
};

export default Contact;
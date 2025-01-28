import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.",
};

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(120deg, #00C2CB, #013378)",
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: 'white', // Ensuring text color is white
            mb: 4,
            fontSize: { xs: '2rem', sm: '2.5rem' }
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'white',
            mb: 4,
            maxWidth: '300px',
            mx: 'auto',
          }}
        >
          {company.mission}
        </Typography>

        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            sx={{
              mb: 3,
              '& .MuiInputLabel-root': {
                color: 'white', // Label color white
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'white', // Border color white
                '&:hover': {
                  borderColor: 'white', // On hover border color
                },
              },
            }}
            InputProps={{
              style: { color: 'white' }, // Text inside the field is white
            }}
          />

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{
              mb: 3,
              '& .MuiInputLabel-root': {
                color: 'white', // Label color white
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'white', // Border color white
                '&:hover': {
                  borderColor: 'white', // On hover border color
                },
              },
            }}
            InputProps={{
              style: { color: 'white' }, // Text inside the field is white
            }}
          />

          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            sx={{
              mb: 3,
              '& .MuiInputLabel-root': {
                color: 'white', // Label color white
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'white', // Border color white
                '&:hover': {
                  borderColor: 'white', // On hover border color
                },
              },
            }}
            InputProps={{
              style: { color: 'white' }, // Text inside the field is white
            }}
          />

          <Box textAlign="center">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#013378',
                color: 'white',
                paddingX: 5,
                paddingY: 2,
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#00C2CB',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
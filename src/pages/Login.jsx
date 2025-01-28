import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? 'Signed up' : 'Signed in'} successfully!`);
  };

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #001F4D 0%, #013378 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
          mb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              color: '#FFFFFF',
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              maxWidth: 1200,
              mx: 'auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Welcome to Our Platform!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#FFFFFF',
              opacity: 0.9,
              textAlign: 'center',
              mt: 4,
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Join us today or log in to continue your journey.
          </Typography>
        </Container>
      </Box>

      {/* Authentication Section */}
      <Container maxWidth="sm" sx={{ mt: -8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          {/* Toggle Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
              gap: 2,
            }}
          >
            <Button
              onClick={() => setIsSignUp(false)}
              variant={!isSignUp ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 4,
                borderRadius: 8,
                bgcolor: !isSignUp ? '#013378' : 'transparent',
                color: !isSignUp ? '#FFFFFF' : '#013378',
                borderColor: '#013378',
                '&:hover': {
                  bgcolor: !isSignUp ? '#001F4D' : 'rgba(1, 51, 120, 0.1)',
                },
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => setIsSignUp(true)}
              variant={isSignUp ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 4,
                borderRadius: 8,
                bgcolor: isSignUp ? '#001F4D' : 'transparent',
                color: isSignUp ? '#FFFFFF' : '#013378',
                borderColor: '#013378',
                '&:hover': {
                  bgcolor: isSignUp ? '#013378' : 'rgba(1, 31, 77, 0.1)',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* Form */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: 'center', color: '#02255b' }}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {isSignUp && (
              <TextField
                label="Full Name"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            )}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            {isSignUp && (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            )}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                textTransform: 'none',
                backgroundColor: '#007bff',
                '&:hover': { backgroundColor: '#0056b3' },
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default AuthPage;

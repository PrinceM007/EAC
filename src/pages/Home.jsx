import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.",
};

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #013378 40%, #00C2CB 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", lg: "left" },
          py: { xs: 6, lg: 12 },
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Text Content */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h2" sx={{ color: "#F7F7F7", fontWeight: "bold", mb: 4 }}>
                {company.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#F7F7F7", mb: 4 }}>
                {company.mission}
              </Typography>
              <Box>
                <Button
                  href="#services"
                  variant="contained"
                  sx={{
                    backgroundColor: "#013378",
                    color: "white",
                    fontSize: "1.2rem",
                    mr: 2,
                    "&:hover": { backgroundColor: "#00C2CB" },
                  }}
                >
                  Learn More
                </Button>
                <Button
                  href="#contact"
                  variant="outlined"
                  sx={{
                    color: "#013378",
                    borderColor: "#013378",
                    fontSize: "1.2rem",
                    "&:hover": { borderColor: "#00C2CB", color: "#00C2CB" },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>

            {/* Image/Visual Content */}
            <Grid item xs={12} lg={6}>
              <img
                src="../img/hero-image.png"
                alt="Empower Africa Hero"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ backgroundColor: "#F7F7F7", py: 6 }}>
        <Container textAlign="center">
          <Typography variant="h4" sx={{ color: "#013378", fontWeight: "bold", mb: 4 }}>
            Why Choose Us?
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#013378", mb: 2 }}>
                  Innovative Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  We offer cutting-edge solutions tailored to your business needs.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#013378", mb: 2 }}>
                  Expert Team
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Our team is made up of experienced professionals across various fields.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#013378", mb: 2 }}>
                  Proven Results
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  We deliver measurable results that drive growth and success.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
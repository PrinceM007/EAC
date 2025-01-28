import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { EmojiObjects, TrendingUp, Spa, Groups } from "@mui/icons-material";

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering African businesses to achieve sustainable growth through strategic guidance and innovative solutions.",
  vision: "To be the leading provider of consulting services that drive positive change across Africa.",
};

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundImage: `url('../src/img/bg.png')`,
    backgroundSize: 'cover', // Ensures the image scales to cover the entire container
    backgroundPosition: 'center', // Keeps the image centered
    backgroundRepeat: 'no-repeat', // Prevents tiling of the image
    backgroundAttachment: 'fixed', // Optional: Parallax effect for better responsiveness
    color: 'white',
    py: { xs: 8, md: 12 },
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
     
      pointerEvents: 'none',
        },
      }}
    >
      {/* Animated background elements */}
      <Box sx={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(0,194,203,0.1) 0%, rgba(0,194,203,0) 70%)",
        animation: "float 6s ease-in-out infinite",
      }} />
      
      <Container>
        {/* Hero Title */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            mb: 4,
            background: "linear-gradient(to right, #fff 20%, #00C2CB 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "4.5rem" },
            lineHeight: 1.2,
            letterSpacing: "-0.05em",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            position: "relative",
            zIndex: 1,
            fontFamily: "'Inter', sans-serif",
            '&::after': {
              content: '""',
              display: "block",
              width: "120px",
              height: "4px",
              background: "#00C2CB",
              margin: "2rem auto",
              borderRadius: "2px",
            }
          }}
        >
          {company.name}
        </Typography>

        {/* Hero Subtitle */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 8,
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
            position: "relative",
            zIndex: 1,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
          }}
        >
          {company.mission}
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            justifyContent: "center",
            mb: 8,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: 700,
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              fontSize: "1.1rem",
              textTransform: "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(45deg, #00C2CB 0%, #006d9e 100%)",
              fontFamily: "'Inter', sans-serif",
              '&:hover': {
                transform: "translateY(-2px) scale(1.02)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
            href="#services"
          >
            Explore Services
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              fontWeight: 700,
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              fontSize: "1.1rem",
              textTransform: "none",
              borderWidth: "2px",
              transition: "all 0.3s ease",
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              fontFamily: "'Inter', sans-serif",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
                transform: "translateY(-2px)",
              },
            }}
            href="#contact"
          >
            Schedule Consultation
          </Button>
        </Box>
      </Container>

      {/* Services Section */}
      <Box id="services" sx={{ backgroundColor: "white", py: 10 }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: "#013378",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem" },
              position: "relative",
              fontFamily: "'Inter', sans-serif",
              '&::after': {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                background: "#00C2CB",
                margin: "1rem auto",
                borderRadius: "2px",
              },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              color: "#555",
              textAlign: "center",
              fontSize: "1.1rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            Tailored solutions for Africa's unique business challenges
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <EmojiObjects sx={{ fontSize: 40 }} />, title: "Strategic Planning", description: "Data-driven strategies for sustainable organizational growth" },
              { icon: <TrendingUp sx={{ fontSize: 40 }} />, title: "Digital Innovation", description: "Future-proof technology solutions for digital transformation" },
              { icon: <Spa sx={{ fontSize: 40 }} />, title: "Sustainable Growth", description: "Eco-conscious strategies for long-term business success" },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(0, 194, 203, 0.1)",
                    '&:hover': {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box sx={{
                    width: 72,
                    height: 72,
                    background: "linear-gradient(135deg, #00C2CB 0%, #013378 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "white",
                    boxShadow: "0 4px 12px rgba(0, 194, 203, 0.3)",
                  }}>
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#013378",
                      fontSize: "1.5rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: 1.6,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ backgroundColor: "#f9fbfd", py: 10 }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 6,
              color: "#013378",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem" },
              position: "relative",
              fontFamily: "'Inter', sans-serif",
              '&::after': {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                background: "#00C2CB",
                margin: "1rem auto",
                borderRadius: "2px",
              },
            }}
          >
            Client Success Stories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                quote: "The strategic guidance we received transformed our operations and doubled our market reach within a year.",
                author: "John D. - Tech CEO",
                role: "Leading Tech Company"
              },
              {
                quote: "Their innovative approach helped us streamline processes and increase efficiency by 40%.",
                author: "Sarah M. - NGO Director",
                role: "Environmental Organization"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: "white",
                    borderRadius: "24px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(0, 194, 203, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    '&:hover': {
                      transform: "translateY(-5px)",
                    },
                    '&::before': {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "4px",
                      height: "100%",
                      background: "linear-gradient(to bottom, #00C2CB, #013378)",
                    }
                  }}
                >
                  <Groups sx={{ 
                    fontSize: 40, 
                    color: "#00C2CB", 
                    mb: 3,
                    opacity: 0.8,
                  }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      mb: 3,
                      color: "#555",
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      position: "relative",
                      pl: 3,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      '&::before': {
                        content: '"“"',
                        position: "absolute",
                        left: 0,
                        top: "-0.5rem",
                        fontSize: "3rem",
                        color: "#00C2CB",
                        opacity: 0.3,
                      }
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ 
                      fontWeight: 700, 
                      color: "#013378", 
                      mb: 0.5,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {testimonial.author}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "#777", 
                      fontSize: "0.9rem",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Global animations and fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
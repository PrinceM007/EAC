import React from "react";
import { Box, Container, Typography, Button, Grid, useTheme, alpha } from "@mui/material";
import { Description, School, Groups, Build, LocalHospital, Assignment, Store, Business } from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const company = {
  name: "Empower Africa Consulting",
  mission: "Empowering youth and women through trade growth facilitation, digital transformation, and sustainable business solutions",
  coreValues: ["Excellence", "Integrity", "Innovation", "Inclusivity", "Sustainability"],
  services: [
    { icon: <Description />, title: "Company Registration", description: "End-to-end business registration and compliance services" },
    { icon: <School />, title: "Business Seminars", description: "Capacity-building workshops for entrepreneurs & SMEs" },
    { icon: <Groups />, title: "Training Programs", description: "Specialized workforce development initiatives" },
    { icon: <Build />, title: "Value Added Services", description: "Supply chain optimization & market expansion strategies" }
  ],
  projects: [
    { icon: <LocalHospital />, title: "Lifespan Diagnostics", result: "25% higher patient volume", sector: "Healthcare Infrastructure" },
    { icon: <Assignment />, title: "Cerium Scientific", result: "30% faster procurement", sector: "Medical Supply Chain" },
    { icon: <Store />, title: "Stone & Wood", result: "40% sales increase", sector: "Retail Expansion" },
    { icon: <Business />, title: "Swazipharm", result: "Improved efficiency", sector: "Pharmaceutical Distribution" }
  ]
};
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      {/* Modernized Hero Section */}
      <Box
        id="home"
        sx={{
          background: `
            linear-gradient(45deg, ${alpha(theme.palette.primary.dark, 0.9)} 0%, 
            ${alpha(theme.palette.secondary.main, 0.8)} 100%),
            url('../src/img/bg.png') center/cover
          `,
          color: 'white',
          py: { xs: 8, md: 12 },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '40px',
            background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 4,
              background: "linear-gradient(to right, #fff 20%, #00F7FF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "4.5rem" },
              lineHeight: 1.2,
              letterSpacing: "-0.05em",
              animation: `${fadeIn} 1s ease-out`,
              textShadow: "0 4px 12px rgba(0,0,0,0.15)",
              '&::after': {
                content: '""',
                display: "block",
                width: "120px",
                height: "4px",
                background: theme.palette.secondary.main,
                margin: "2rem auto",
                borderRadius: "2px",
              }
            }}
          >
            {company.name}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 8,
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {company.mission}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, justifyContent: "center" }}>
            <Button variant="contained" size="large" sx={{
              fontWeight: 700,
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              background: "linear-gradient(45deg, #00C2CB 0%, #006d9e 100%)",
              '&:hover': { transform: "translateY(-2px)" },
            }} href="#services">
              Explore Services
            </Button>
            <Button variant="outlined" size="large" sx={{
              fontWeight: 700,
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              borderWidth: "2px",
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              '&:hover': { borderColor: "white" },
            }} href="#contact">
              Schedule Consultation
            </Button>
          </Box>

        </Container>
      </Box>

{/* Modern About Section */}
<Box id="about" sx={{ py: 10 }}>
        <Container>
          <Typography 
            variant="h2" 
            sx={{ 
              color: "text.primary", 
              mb: 6, 
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800
            }}
          >
            Our Foundation
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ color: "secondary.main", mb: 2, fontWeight: 700 }}>
                  Mission
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: '1.1rem' }}>
                  {company.mission}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: "secondary.main", mb: 2, fontWeight: 700 }}>
                  Core Values
                </Typography>
                <Grid container spacing={2}>
                  {company.coreValues.map((value, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: alpha(theme.palette.primary.light, 0.1),
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateX(8px)',
                          background: alpha(theme.palette.primary.light, 0.2)
                        }
                      }}>
                        <Box sx={{ 
                          width: 24, 
                          height: 24, 
                          background: theme.palette.secondary.main, 
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          ✓
                        </Box>
                        <Typography sx={{ color: "text.primary", fontWeight: 500 }}>
                          {value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                p: 4,
                borderRadius: 4,
                height: '100%',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                backdropFilter: 'blur(12px)'
              }}>
                <Typography variant="h5" sx={{ color: "primary.main", mb: 3, fontWeight: 700 }}>
                  Unique Value Proposition
                </Typography>
                <Grid container spacing={2}>
                  {['Trade Strategy Development', 'Sustainability Consulting', 'Digital Transformation', 'Business Advisory Services'].map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: theme.palette.secondary.main,
                          flexShrink: 0
                        }}/>
                        <Typography sx={{ color: "text.primary", fontSize: '1.1rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Services Section */}
      <Box id="services" sx={{ py: 10, background: alpha(theme.palette.primary.light, 0.05) }}>
        <Container>
          <Typography variant="h2" sx={{ 
            color: "text.primary", 
            textAlign: 'center', 
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 800
          }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {company.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{
                  p: 4,
                  height: "100%",
                  background: 'white',
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow: theme.shadows[4],
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8]
                  },
                }}>
                  <Box sx={{
                    width: 72,
                    height: 72,
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "white",
                    fontSize: 40
                  }}>
                    {React.cloneElement(service.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    color: "text.primary", 
                    mb: 2,
                    fontWeight: 700,
                    fontSize: '1.5rem'
                  }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: "text.secondary",
                    lineHeight: 1.6
                  }}>
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modern Projects Section */}
      <Box id="projects" sx={{ py: 10 }}>
        <Container>
          <Typography variant="h2" sx={{ 
            color: "text.primary", 
            textAlign: 'center', 
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 800
          }}>
            Impactful Projects
          </Typography>
          <Grid container spacing={4}>
            {company.projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{
                  p: 4,
                  background: alpha(theme.palette.primary.light, 0.05),
                  borderRadius: 4,
                  transition: 'all 0.3s',
                  position: "relative",
                  overflow: 'hidden',
                  '&:hover': { 
                    transform: "translateY(-5px)",
                    background: 'white',
                    boxShadow: theme.shadows[4]
                  },
                  '&::before': {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.dark})`,
                  }
                }}>
                  <Box sx={{ 
                    color: theme.palette.secondary.main,
                    mb: 3,
                    fontSize: 40
                  }}>
                    {React.cloneElement(project.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    color: "text.primary", 
                    mb: 1,
                    fontWeight: 700,
                    fontSize: '1.5rem'
                  }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: "text.secondary", 
                    mb: 2,
                    fontWeight: 500
                  }}>
                    {project.result}
                  </Typography>
                  <Box sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 1,
                    background: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 2,
                    color: theme.palette.primary.dark,
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    {project.sector}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </>
  );
};

export default Hero;
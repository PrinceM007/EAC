import React, { useState } from 'react';
import { Grid, Typography, Button, Card, CardContent, Box, Container, useTheme, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import { Assignment, School, Groups, Description, EmojiObjects, TrendingUp, AttachMoney, Lightbulb, BusinessCenter } from '@mui/icons-material';

// Service Data
const services = [
  { 
    title: "Company Registration", 
    icon: Assignment, 
    details: [
      { text: "Company name reservation, registration, and compliance assistance.", icon: <Assignment /> },
      { text: "Includes tax registration, memorandum of incorporation, and business bank account setup.", icon: <Description /> },
      { text: "Comprehensive services, including branding consultation, logo design, and website setup.", icon: <BusinessCenter /> },
      { text: "Simplified, end-to-end support for starting and formalizing businesses.", icon: <EmojiObjects /> }
    ]
  },
  { 
    title: "Company Registration Documents", 
    icon: Description, 
    details: [
      { text: "Business planning, funding strategies, and market entry tactics.", icon: <Lightbulb /> },
      { text: "Workshops on scaling, market expansion, and technology adoption.", icon: <TrendingUp /> },
      { text: "Sessions on leadership, innovation, and competitive strategy.", icon: <EmojiObjects /> },
      { text: "Practical insights delivered by industry experts.", icon: <AttachMoney /> }
    ]
  },
  { 
    title: "Business Seminars", 
    icon: School, 
    details: [
      { text: "Training for mid-level and senior managers to enhance decision-making.", icon: <EmojiObjects /> },
      { text: "Covering budgeting, cost control, and investment planning.", icon: <AttachMoney /> },
      { text: "Skills in emerging technologies, digital marketing, and IT tools.", icon: <Lightbulb /> },
      { text: "Tailored content to bridge skill gaps and increase organizational effectiveness.", icon: <BusinessCenter /> }
    ]
  },
  { 
    title: "Training Programs", 
    icon: Groups, 
    details: [
      { text: "Professional preparation of documents to secure investor funding.", icon: <AttachMoney /> },
      { text: "Ensuring adherence to regulatory standards and improving operational efficiency.", icon: <Assignment /> },
      { text: "Follow-up consultations and digital resources for continuous learning.", icon: <Lightbulb /> },
      { text: "Connecting clients with experienced mentors for ongoing guidance.", icon: <Groups /> }
    ]
  },
  { 
    title: "Value Added Services", 
    icon: Description, 
    details: [
      { text: "Articles on industry trends, policy updates, and business strategies.", icon: <Description /> },
      { text: "Success stories showcasing business transformation.", icon: <TrendingUp /> },
      { text: "Insights from experts and stakeholders.", icon: <EmojiObjects /> }
    ]
  },
  { 
    title: "Projects & Impact", 
    icon: TrendingUp, 
    details: [
      { text: "Lifespan Diagnostics: Establishing a high-demand diagnostics lab.", icon: <TrendingUp /> },
      { text: "Cerium Scientific: Optimizing medical supply chains.", icon: <Lightbulb /> },
      { text: "Stone & Wood: Market expansion, increasing sales by 40%.", icon: <BusinessCenter /> },
      { text: "Swazipharm: Strengthening pharmaceutical distribution.", icon: <AttachMoney /> },
      { text: "Complete Health Eswatini: Setting up an ISO-compliant medical warehouse.", icon: <EmojiObjects /> }
    ]
  }
];

const Services = () => {
  const theme = useTheme();

  // State to handle modal open/close
  const [openModal, setOpenModal] = useState(false);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box id="services" sx={{ 
      py: 12, 
      backgroundColor: '#f9fbfd',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -80,
        right: -100,
        width: 350,
        height: 350,
        background: 'linear-gradient(45deg, #00C2CB20, #01337820)',
        borderRadius: '50%',
        zIndex: 0
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 700,
          fontSize: '2.5rem',
          textAlign: 'center',
          mb: 6,
          color: '#013378',
          lineHeight: '1.4',
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: 90,
            height: 4,
            backgroundColor: '#00C2CB',
            margin: '20px auto 0',
            borderRadius: 2
          }
        }}>
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} key={index}>
                <Card sx={{
                  p: 5,
                  borderRadius: '20px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', 
                  transition: 'all 0.3s ease-in-out',
                  minHeight: 520,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.15)',
                    backgroundColor: '#f1f1f1'
                  }
                }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{
                      width: 85,
                      height: 85,
                      backgroundColor: '#00C2CB',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 4,
                      color: 'white',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}>
                      <IconComponent sx={{ fontSize: 42 }} />
                    </Box>
                    <Typography variant="h5" sx={{
                      fontWeight: 700, 
                      fontSize: '1.6rem',
                      textAlign: 'center', 
                      mb: 3,
                      color: '#013378',
                      lineHeight: '1.5',
                    }}>
                      {service.title}
                    </Typography>
                    <Box sx={{
                      pl: 3,
                      color: '#444',
                    }}>
                      {service.details.map((detail, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {detail.icon}
                          <Typography sx={{ ml: 1, fontSize: '1rem', fontWeight: 500 }}>
                            {detail.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#013378', fontSize: '1.8rem' }}>
            Ready to Accelerate Your Business?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenModal}  // Trigger the modal on click
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #00C2CB, #013378)',
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': { 
                transform: 'scale(1.03)',
                boxShadow: '0px 8px 20px rgba(0, 194, 203, 0.4)'
              }
            }}
          >
            Schedule Consultation
          </Button>
        </Box>
      </Container>

      {/* Modal Dialog for Appointment Form */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent sx={{ padding: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Schedule Your Appointment
          </Typography>

          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email Address"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Preferred Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{ mb: 3 }}
          />

        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
          <Button onClick={handleCloseModal} color="primary">Cancel</Button>
          <Button onClick={handleCloseModal} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Services;

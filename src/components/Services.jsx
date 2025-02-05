import React from 'react';
import { Grid, Typography, Button, Card, CardContent, Box, Container, useTheme } from '@mui/material';
import { Assignment, School, Groups, Description, EmojiObjects, TrendingUp } from '@mui/icons-material';

// Service Data
const services = [
  { 
    title: "Company Registration", 
    icon: Assignment, 
    details: [
      "**Basic Package**: Company name reservation, registration, and compliance assistance.",
      "**Standard Package**: Includes tax registration, memorandum of incorporation, drafting, and business bank account setup.",
      "**Premium Package**: Comprehensive services, including branding consultation, logo design, and website setup.",
      "**Value Proposition**: Simplified, end-to-end support for starting and formalizing businesses, ensuring compliance and professionalism from the outset."
    ]
  },
  { 
    title: "Company Registration Documents (2025)", 
    icon: Description, 
    details: [
      "**Startup Essentials**: Business planning, funding strategies, and market entry tactics.",
      "**SME Growth Strategies**: Workshops on scaling, market expansion, and technology adoption.",
      "**Corporate Excellence**: Targeted sessions for established companies on leadership, innovation, and competitive strategy.",
      "**Value Proposition**: Practical, actionable insights delivered by industry experts to foster learning and collaboration."
    ]
  },
  { 
    title: "Business Seminars", 
    icon: School, 
    details: [
      "**Leadership Development**: Training for mid-level and senior managers to enhance decision-making and strategic thinking.",
      "**Financial Literacy**: Covering budgeting, cost control, and investment planning.",
      "**Digital Transformation**: Skills in emerging technologies, digital marketing, and IT tools.",
      "**Value Proposition**: Tailored, sector-specific content to bridge skill gaps and increase organizational effectiveness."
    ]
  },
  { 
    title: "Training Programs", 
    icon: Groups, 
    details: [
      "**Business Plans & Funding Proposals**: Professional preparation of documents to secure investor funding and bank loans.",
      "**Compliance & Governance Audits**: Ensuring adherence to regulatory standards and improving operational efficiency.",
      "**Post-Seminar/Training Support**: Follow-up consultations and digital resources for continuous learning.",
      "**Mentorship Programs**: Connecting clients with experienced mentors for ongoing guidance and support."
    ]
  },
  { 
    title: "Value Added Services", 
    icon: Description, 
    details: [
      "**Blog**: Articles on industry trends, policy updates, and business strategies.",
      "**Case Studies**: Success stories showcasing business transformation.",
      "**Thought Leadership Videos & Interviews**: Insights from experts and stakeholders."
    ]
  },
  { 
    title: "Projects & Impact", 
    icon: TrendingUp, 
    details: [
      "**Lifespan Diagnostics**: Establishing a high-demand diagnostics lab, achieving a 25% higher patient volume than projected.",
      "**Cerium Scientific**: Optimizing medical supply chains, reducing procurement lead times by 30%.",
      "**Stone & Wood**: Market expansion, increasing sales by 40% in the first quarter.",
      "**Swazipharm**: Strengthening pharmaceutical distribution and improving operational efficiency.",
      "**Complete Health Eswatini**: Setting up an ISO-compliant medical warehouse for efficient distribution."
    ]
  }
];

const Services = () => {
  const theme = useTheme();

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
          fontWeight: 800,
          textAlign: 'center',
          mb: 6,
          color: '#013378',
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
              <Grid item xs={12} key={index}> {/* One card per row */}
                <Card sx={{
                  p: 3,
                  borderRadius: '20px',
                  boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s ease-in-out',
                  minHeight: 480,
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
                      width: 74,
                      height: 74,
                      backgroundColor: '#00C2CB',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'white',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'rotate(10deg)'
                      }
                    }}>
                      <IconComponent sx={{ fontSize: 36 }} />
                    </Box>
                    <Typography variant="h5" sx={{
                      fontWeight: 700, 
                      textAlign: 'center', 
                      mb: 3, 
                      color: '#013378'
                    }}>
                      {service.title}
                    </Typography>
                    <Box component="ul" sx={{
                      pl: 2.5,
                      color: '#444',
                      '& li': {
                        position: 'relative',
                        pl: 3,
                        mb: 2,
                        fontSize: '1rem',
                        fontWeight: 500,
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '0.6em',
                          width: 8,
                          height: 8,
                          backgroundColor: '#00C2CB',
                          borderRadius: '50%'
                        }
                      }
                    }}>
                      {service.details.map((detail, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ 
          mt: 10, 
          textAlign: 'center'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#013378' }}>
            Ready to Accelerate Your Business?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #00C2CB, #013378)',
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': { 
                transform: 'translateY(-3px) scale(1.02)',
                boxShadow: '0px 8px 25px rgba(0, 194, 203, 0.4)'
              }
            }}
          >
            Schedule Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

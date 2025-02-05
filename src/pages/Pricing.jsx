import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  styled,
  alpha,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { CheckCircle, Diamond } from "@mui/icons-material";

// Custom theme with specified colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#013378",
    },
    secondary: {
      main: "#00C2CB",
    },
    text: {
      secondary: "#888888",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },
  },
});

const consultingPlans = [
  {
    title: "Strategic Advisory",
    price: "2900",
    features: [
      "10 hours/month expert consultation",
      "Strategic roadmap development",
      "Sector-specific market analysis",
      "Monthly performance review",
      "Email support (24h response)",
      "Regulatory compliance check",
    ],
    cta: "Begin Consultation",
    popular: false,
  },
  {
    title: "Growth Accelerator",
    price: "7900",
    features: [
      "40 hours/month dedicated support",
      "Priority executive access",
      "Financial modeling & forecasting",
      "Weekly operational reviews",
      "Market entry strategy",
      "Competitive landscape analysis",
    ],
    cta: "Start Growth Plan",
    popular: true,
  },
  {
    title: "Enterprise Transformation",
    price: "Custom",
    features: [
      "Dedicated cross-functional team",
      "End-to-end implementation support",
      "Organizational redesign",
      "Leadership development program",
      "Real-time KPI dashboard",
      "24/7 VIP support",
    ],
    cta: "Contact Executives",
    popular: false,
  },
];

const EliteBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -18,
  right: 20,
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${alpha(
    theme.palette.secondary.main,
    0.8
  )} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 3),
  borderRadius: 20,
  fontSize: "0.875rem",
  fontWeight: 700,
  boxShadow: theme.shadows[4],
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ConsultingCard = styled(Card)(({ theme }) => ({
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 24px 48px -12px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

const PricingSection = () => {
  const [engagementTerm, setEngagementTerm] = useState("annual");

  return (
    <ThemeProvider theme={theme}>
      {/* Header Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #001F4D 0%, #013378 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          mb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              maxWidth: 1200,
              mx: "auto",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Explore The Best Prices!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#FFFFFF",
              opacity: 0.9,
              textAlign: "center",
              mt: 4,
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            Partner with industry experts to unlock sustainable growth and
            operational excellence
          </Typography>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                color: "primary.main",
              }}
            >
              Value-Driven Consulting Engagements
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 680,
                mx: "auto",
                fontSize: "1.125rem",
                mb: 4,
              }}
            >
              Partner with industry experts to unlock sustainable growth and
              operational excellence.
            </Typography>

            {/* Engagement Term Toggle */}
            <Box
              sx={{
                display: "inline-flex",
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                borderRadius: "12px",
                p: 1,
              }}
            >
              <Button
                onClick={() => setEngagementTerm("annual")}
                variant={engagementTerm === "annual" ? "contained" : "text"}
                sx={{
                  borderRadius: "8px",
                  px: 5,
                  fontWeight: 700,
                  textTransform: "none",
                  color:
                    engagementTerm === "annual" ? "#fff" : "text.primary",
                  bgcolor:
                    engagementTerm === "annual" ? "primary.main" : "transparent",
                  "&:hover": {
                    bgcolor:
                      engagementTerm === "annual"
                        ? alpha(theme.palette.primary.main, 0.9)
                        : alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Annual Commitment
              </Button>
              <Button
                onClick={() => setEngagementTerm("quarterly")}
                variant={engagementTerm === "quarterly" ? "contained" : "text"}
                sx={{
                  borderRadius: "8px",
                  px: 5,
                  fontWeight: 700,
                  textTransform: "none",
                  color:
                    engagementTerm === "quarterly" ? "#fff" : "text.primary",
                  bgcolor:
                    engagementTerm === "quarterly"
                      ? "primary.main"
                      : "transparent",
                  "&:hover": {
                    bgcolor:
                      engagementTerm === "quarterly"
                        ? alpha(theme.palette.primary.main, 0.9)
                        : alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Quarterly Engagement
              </Button>
            </Box>
          </Box>

          {/* Pricing Grid */}
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {consultingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ConsultingCard
                  sx={{
                    borderColor: plan.popular ? "secondary.main" : undefined,
                    bgcolor: "background.paper",
                  }}
                >
                  {plan.popular && (
                    <EliteBadge>
                      <Diamond sx={{ fontSize: 18 }} />
                      Preferred by Executives
                    </EliteBadge>
                  )}

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        fontSize: "1.75rem",
                        color: "primary.main",
                      }}
                    >
                      {plan.title}
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      {plan.price === "Custom" ? (
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: "2.5rem",
                            fontWeight: 800,
                            color: "secondary.main",
                          }}
                        >
                          Tailored Solutions
                        </Typography>
                      ) : (
                        <>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: "3rem",
                              fontWeight: 800,
                              color: "primary.main",
                              lineHeight: 1,
                            }}
                          >
                            ${plan.price}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: "text.secondary",
                              ml: 1,
                              fontSize: "1.125rem",
                            }}
                          >
                            /
                            {engagementTerm === "annual" ? "year" : "quarter"}
                          </Typography>
                        </>
                      )}
                    </Box>

                    <Box
                      component="ul"
                      sx={{
                        listStyle: "none",
                        p: 0,
                        m: 0,
                        mb: 4,
                        "& li": {
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2.5,
                          py: 0.5,
                        },
                      }}
                    >
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <CheckCircle
                            sx={{
                              color: "secondary.main",
                              mr: 2,
                              mt: "2px",
                              fontSize: "1.4rem",
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: "text.secondary",
                              fontSize: "1rem",
                            }}
                          >
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      fullWidth
                      sx={{
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 10,
                        textTransform: "none",
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </ConsultingCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PricingSection;

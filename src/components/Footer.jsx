import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const company = {
  name: "Empower Africa Consulting",
  copyright: "© 2023", // Assuming the copyright year is 2023
  socialMediaLinks: {
    facebook: "https://www.facebook.com/empowerafrica", // Replace with actual Facebook URL
    twitter: "https://twitter.com/empowerafrica", // Replace with actual Twitter URL
    linkedin: "https://www.linkedin.com/company/empower-africa-consulting", // Replace with actual LinkedIn URL
  },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "#013378",
        color: "#F7F7F7",
        textAlign: "center",
      }}
    >
      <Container>
        {/* Copyright Text */}
        <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
          {company.copyright} {company.name}. All rights reserved.
        </Typography>

        {/* Privacy and Terms Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <Link
            href="#privacy"
            sx={{
              color: "#00C2CB",
              textDecoration: "none",
              "&:hover": {
                color: "#F7F7F7",
                textDecoration: "underline",
              },
            }}
          >
            Privacy Policy
          </Link>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            |
          </Typography>
          <Link
            href="#terms"
            sx={{
              color: "#00C2CB",
              textDecoration: "none",
              "&:hover": {
                color: "#F7F7F7",
                textDecoration: "underline",
              },
            }}
          >
            Terms of Service
          </Link>
        </Stack>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          <Link
            href={company.socialMediaLinks.facebook}
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#00C2CB",
              "&:hover": {
                color: "#F7F7F7",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Facebook fontSize="large" />
          </Link>
          <Link
            href={company.socialMediaLinks.twitter}
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#00C2CB",
              "&:hover": {
                color: "#F7F7F7",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Twitter fontSize="large" />
          </Link>
          <Link
            href={company.socialMediaLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#00C2CB",
              "&:hover": {
                color: "#F7F7F7",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <LinkedIn fontSize="large" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
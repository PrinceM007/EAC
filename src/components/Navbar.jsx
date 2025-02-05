import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  styled,
  Collapse
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Login" },
    
   
  ];

  const AnimatedLink = styled(Button)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "2px",
      backgroundColor: "#00C2CB",
      transition: "width 0.3s ease",
    },
    "&:hover:after": {
      width: "100%",
    },
  }));

  const drawer = (
    <Box sx={{ width: { xs: "100vw", sm: 320 }, p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#013378" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ py: 2 }}>
        {navLinks.map(({ to, label }) => (
          <ListItem 
            button 
            key={to} 
            component={Link} 
            to={to}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgba(0, 194, 203, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={label}
              sx={{
                color: location.pathname === to ? "#00C2CB" : "#013378",
                fontWeight: 600,
                "& .MuiTypography-root": {
                  fontSize: "1.1rem",
                },
              }}
            />
            {location.pathname === to && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#00C2CB",
                  ml: 2,
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: "rgba(247, 247, 247, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(1, 51, 120, 0.1)",
      }}
    >
      <Toolbar sx={{ py: 1, px: { xs: 2, md: 6 } }}>
        {/* Logo and Brand Name */}
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            textDecoration: "none",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Box
        
          >
            <img 
              src="../src/img/logo.png" 
              width="70" 
              height="70" 
       
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: "#013378",
              fontWeight: 800,
              ml: 2,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              letterSpacing: "-0.5px",
            }}
          >
            Empower Africa
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", ml: "auto", gap: 1 }}>
            {navLinks.map(({ to, label }) => (
              <AnimatedLink
                key={to}
                component={Link}
                to={to}
                sx={{
                  color: location.pathname === to ? "#00C2CB" : "#013378",
                  fontWeight: location.pathname === to ? 700 : 500,
                  fontSize: "0.95rem",
                  px: 2,
                  "&:after": {
                    backgroundColor: location.pathname === to ? "#00C2CB" : "#013378",
                  },
                }}
              >
                {label}
              </AnimatedLink>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ 
              ml: "auto",
              color: "#013378",
              "&:hover": {
                backgroundColor: "rgba(0, 194, 203, 0.1)",
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100vw", sm: 320 },
            borderLeft: "2px solid #00C2CB",
            borderRadius: "16px 0 0 16px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
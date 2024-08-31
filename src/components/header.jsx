import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
//import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1E9OFF", padding: "10px", width: '100%' }}>
        <Toolbar>
           <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontFamily: "Commissioner",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "24.46px",
                mr: 0.5,
              }}
            >
              Welcome to
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontFamily: "Commissioner",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "24.46px",
              }}
            >
              Study Buddy!
            </Typography>
          </Box>
        <Box
            sx={{
              display: "flex",
            //   flexGrow: 1,
            //   justifyContent: "center",
              ml: "auto", 
            }}
          >
         <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/" color="inherit">
            Sign In
          </Button>
          <Button component={Link} to="/" color="inherit">
            Sign Up
          </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

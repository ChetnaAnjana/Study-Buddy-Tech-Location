import { Box, Button, Typography } from '@mui/material';
import React from 'react';
function Home() {
  return (
    <Box
        sx={{
        alignItems: 'center',
        mt: 0,
         my: 4,
        }}
      >
        <Typography variant="h4"gutterBottom >
          Find Your Perfect Study Buddy and Uncover the Latest Tech Events Near You!"
        </Typography>
         <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mr: 2 , height: "50px",
          fontSize: "16px",}}
          href="/users-profile"
        >
          {" "}
          Find a Study Buddy
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 ,
         height: "50px", // Increase button height
          fontSize: "16px", // Adjust font size if needed
        }}
          href="/create"
        >
          {" "}
          Latest Tech Conferences
        </Button>
    </Box>
  )
}

export default Home
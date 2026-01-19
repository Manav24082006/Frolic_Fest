import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/AuthRegister';

// ================================|| JWT - REGISTER ||================================ //

// export default function Register() {
//   return (
//     <AuthWrapper>
//       <Grid container spacing={3}>
//         <Grid size={12}>
//           <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
//             <Typography variant="h3">Sign up</Typography>
//             <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//               Already have an account?
//             </Typography>
//           </Stack>
//         </Grid>
//         <Grid size={12}>
//           <FirebaseRegister />
//         </Grid>
//       </Grid>
//     </AuthWrapper>
//   );
// }








import React from "react";
import { Box, Button, Divider, TextField, } from "@mui/material";

function Register() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 4, sm: 6, lg: 8 },
        background: "linear-gradient(to bottom right, #42047E1A, #ffffff, #07F49E1A)",
        overflow: "hidden", // ensures the background blur doesn't overflow
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px", // increased max width to fit left hero
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          gap: { xs: 8, lg: 12 },
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Background blur */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "3rem",
            background: "linear-gradient(to right, #42047E33, #07F49E33)",
            filter: "blur(4rem)",
            zIndex: -10,
          }}
        />

        {/* Left Side - Hero */}
        <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" }, px: { xs: 0, lg: 4 } }}>
          <Box
            sx={{
              p: { xs: 6, lg: 12 },
              borderRadius: "3rem",
              background: "linear-gradient(to bottom right, #42047E, #07F49E)",
              boxShadow: 6,
              transition: "all 0.5s",
              "&:hover": { transform: "translateY(-8px)", boxShadow: 12 },
              textAlign: "center",
              color: "white",
              width: "100%",
              maxWidth: { xs: "100%", lg: 500 },
              overflow: "visible", // ensures content isn't clipped
            }}
          >
            <Box
              sx={{
                width: 112,
                height: 112,
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: 2,
                mx: "auto",
                mb: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
                boxShadow: 3,
              }}
            >
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 32, lg: 40 },
                fontWeight: 900,
                mb: 6,
                background: "linear-gradient(to right, #ffffff, #e5e7eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
              }}
            >
              Join Frolic
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, lg: 20 },
                mb: 8,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.5,
              }}
            >
              Create your account and start managing events for institutes seamlessly.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 3,
                maxWidth: 400,
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
                <Typography fontWeight={600}>500+ Institutes</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Box>
                <Typography fontWeight={600}>Real-time Tracking</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Signup Form */}
        <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, px: { xs: 0, lg: 4 } }}>
          <Box
            sx={{
              mt: { xs: 0, md: 3 },
              mb: { xs: 0, md: 4},
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "3rem",
              p: { xs: 6, lg: 12 },
              boxShadow: 6,
              border: "1px solid rgba(255,255,255,0.3)",
              maxWidth: 520,
              width: "100%",
            }}
          >
            {/* Form content remains the same */}
            <Box textAlign="center" mb={10}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  background: "linear-gradient(to right, #42047E, #07F49E)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 6,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h1" fontWeight="bold" color="#fff">
                  F
                </Typography>
              </Box>
              <Typography variant="h2" fontWeight="bold" mb={1}>
                Create Account
              </Typography>
              <Typography color="text.secondary" variant='h4'>Join thousands of event organizers</Typography>
            </Box>

            <Stack spacing={4} >
              <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} gap={2}>
                <TextField label="First Name" placeholder="First Name" fullWidth required />
                <TextField label="Last Name" placeholder="Last Name" fullWidth required />
              </Box>
              <TextField label="Email Address" placeholder="your@email.com" type="email" fullWidth required />
              <TextField label="Institute / College" placeholder="e.g., XYZ University" fullWidth />
              <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} gap={2}>
                <TextField label="Password" placeholder="••••••••" type="password" fullWidth required />
                <TextField label="Confirm Password" placeholder="••••••••" type="password" fullWidth required />
              </Box>
              <Button
                fullWidth
                sx={{
                  py: 1.5,
                  background: "linear-gradient(to right, #42047E, #07F49E)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 3,
                  fontSize: "1.125rem",
                  "&:hover": { transform: "scale(1.04)", boxShadow: 6 , color: "#fff" },
                }}
              >
                Create Account
              </Button>
            </Stack>

            <Box display="flex" alignItems="center" my={4}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography sx={{ mx: 2, color: "text.secondary" }}>OR</Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                py: 1.5,
                borderRadius: 3,
                borderColor: "#D1D5DB",
                color: "#374151",
                "&:hover": { boxShadow: 3, backgroundColor: "#F9FAFB" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <GoogleIcon />
              Continue with Google
            </Button>

            <Typography textAlign="center" mt={5} color="text.secondary">
              Already have an account?{" "}
              <Box component="span" sx={{ fontWeight: "bold", color: "#42047E", cursor: "pointer", "&:hover": { color: "#07F49E" } }}>
                Sign in here
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;






  


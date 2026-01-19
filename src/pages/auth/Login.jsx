import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/AuthLogin';

// ================================|| JWT - LOGIN ||================================ //

// export default function Login() {
//   return (
//     <AuthWrapper>
//       <Grid container spacing={3}>
//         <Grid size={12}>
//           <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
//             <Typography variant="h3">Login</Typography>
//             <Typography component={Link} to={'/register'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//               Don&apos;t have an account?
//             </Typography>
//           </Stack>
//         </Grid>
//         <Grid size={12}>
//           <AuthLogin />
//         </Grid>
//       </Grid>
//     </AuthWrapper>
//   );
// }







import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import Stack from "@mui/material/Stack";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        px: 2,
        bgcolor: "#f0f2f5"
      }}
    >
      {/* BACKGROUND IMAGE WITH GRADIENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://img.freepik.com/free-psd/carnival-celebration-landing-page_23-2151149984.jpg?semt=ais_hybrid&w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          display: { xs: "none", md: "block" }
        }}
      />

      {/* GLASSMORPHISM CARD */}
      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: 420,
          p: 5,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
          animation: "fadeIn 0.8s ease-in-out"
        }}
      >
        {/* Header */}
        <Box mb={4}>
          <Typography variant="h4" fontWeight="bold" color="#111827">
            Login
          </Typography>
          <Typography color="#374151" mt={1}>
            If you have an account, please login
          </Typography>
        </Box>

        {/* Form */}
        <Stack spacing={3}>
          <Box>
            <Typography fontWeight={500} mb={1} color="#111827">
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Email Address"
              type="email"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{
                bgcolor: "rgba(229,231,235,0.85)",
                borderRadius: 2,
                color: "#111827"
              }}
            />
          </Box>

          <Box>
            <Typography fontWeight={500} mb={1} color="#111827">
              Password
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Password"
              type="password"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{
                bgcolor: "rgba(229,231,235,0.85)",
                borderRadius: 2,
                color: "#111827"
              }}
            />
            <Box textAlign="right" mt={1}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", fontWeight: 600, color: "#2563EB" }}
              >
                Forgot Password?
              </Typography>
            </Box>
          </Box>

          <Button
            fullWidth
            sx={{
              bgcolor: "#2563EB",
              color: "#fff",
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": { bgcolor: "darkblue", color: "#fff"}
            }}
          >
            Log In
          </Button>
        </Stack>

        {/* Divider */}
        <Box my={4}>
          <Divider>
            <Typography variant="caption" color="#6B7280">
              OR
            </Typography>
          </Divider>
        </Box>

        {/* Google Login */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            display: "flex",
            gap: 1,
            bgcolor: "blue",
            color: "#fff",
            "&:hover": { bgcolor: "darkblue" }
          }}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <Typography fontWeight={500} color="#fff">
            Login with Google
          </Typography>
        </Button>

        {/* Register */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Typography variant="body2" color="#6B7280">
            If you don't have an account...
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#10B981",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 3,
              px: 3,
              textTransform: "none",
              "&:hover": { bgcolor: "#059669" }
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>

      {/* FADE-IN ANIMATION KEYFRAMES */}
      <Box
        component="style"
        children={`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      />
    </Box>
  );
}

export default Login;



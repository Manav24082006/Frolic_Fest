// material-ui
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Footer() {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #111827, #1f2937)', color: 'white' }}>
      

      {/* Main Footer - EXACT grid structure preserved */}
      <Container sx={{ maxWidth: '1280px', px: { xs: '1.5rem', md: '1.5rem' }, py: '4rem' }}>
        <Grid container spacing={12} md={4}>
          {/* About Frolic - EXACT */}
          <Grid item xs={16} md={4}>
            <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: '1.5rem' }}>
              <Box
                sx={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(to right, #42047e, #07f49e)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>F</Typography>
              </Box>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Frolic</Typography>
            </Stack>
            <Typography
              sx={{
                color: '#d1d5db',
                lineHeight: '1.625',
                mb: '1.5rem'
              }}
            >
              Simplifying event management for educational institutes with powerful, intuitive tools.
            </Typography>
          </Grid>

          {/* Quick Links - EXACT */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: '1.5rem' }}>Quick Links</Typography>
            <Stack spacing={3}>
              <Link href="/free/Dashboard" sx={{ color: '#d1d5db', '&:hover': { color: 'white' } }}>
                Dashboard
              </Link>
              <Link href="/free/Institutes" sx={{ color: '#d1d5db', '&:hover': { color: 'white' } }}>
                Institutes
              </Link>
              <Link href="/free/Departments" sx={{ color: '#d1d5db', '&:hover': { color: 'white' } }}>
                Departments
              </Link>
              <Link href="/free/events" sx={{ color: '#d1d5db', '&:hover': { color: 'white' } }}>
                Events
              </Link>
            </Stack>
          </Grid>

          {/* Contact - EXACT empty structure */}
          <Grid item xs={12} md={3}>
            <Typography fontSize={20} fontWeight={700} mb={3}>
                Contact Us
              </Typography>
              <Typography sx={{ color: "#cbd5f5" }}>
                Email: support@frolicevent.com
              </Typography>
              <Typography sx={{ color: "#cbd5f5" }}>
                Phone: +91 90000 00000
              </Typography>
          </Grid>

          {/* Social Media - EXACT SVG icons */}
          <Grid item xs={12} md={3} sx={{px:45}}>
            <Typography sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: '1.5rem',px:15 }}>Follow Us</Typography>
            <Stack direction="row" spacing={6}>
              <IconButton
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <FacebookSharpIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright - EXACT */}
        <Box
          sx={{
            borderTop: '1px solid #374151',
            pt: '2rem',
            mt: '3rem',
            textAlign: 'center'
          }}
        >
          <Typography sx={{ color: '#9ca3af' }}>© 2025 Frolic Event Management System. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

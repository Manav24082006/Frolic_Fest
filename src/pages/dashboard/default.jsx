import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, LinearProgress, Avatar } from '@mui/material';

// --- Custom Minimalist SVGs ---
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
const IconAlert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const DashboardLayout = () => {
  const [isDark, setIsDark] = useState(false);

  const stats = [
    { label: "Active Nodes", count: "342", status: "Operational", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
    { label: "Pending Tasks", count: "18", status: "In Progress", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    { label: "System Errors", count: "2", status: "Critical", color: "#f43f5e", bg: "rgba(244,63,94,0.1)" },
    { label: "Total Uptime", count: "99.2%", status: "Monthly", color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  ];

  const activities = [
    { id: 1, user: "Admin_Alpha", action: "Database Migration", time: "2 mins ago", status: "Completed", type: "success" },
    { id: 2, user: "System_Bot", action: "API Security Headers Update", time: "15 mins ago", status: "Failed", type: "error" },
    { id: 3, user: "Dev_User_04", action: "Deployment: V2.4.1", time: "1 hour ago", status: "Processing", type: "pending" },
    { id: 4, user: "Manager_X", action: "Access Level Change", time: "3 hours ago", status: "Completed", type: "success" },
  ];

  const ActivityChip = ({ type, children }) => {
    const styles = {
      success: { color: "#10b981", border: "1px solid rgba(16,185,129,0.2)", backgroundColor: "rgba(16,185,129,0.1)" },
      error: { color: "#f43f5e", border: "1px solid rgba(244,63,94,0.2)", backgroundColor: "rgba(244,63,94,0.1)" },
      pending: { color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)", backgroundColor: "rgba(245,158,11,0.1)" },
    };
    return (
      <Box sx={{ fontSize: "10px", fontWeight: "bold", px: 1.5, py: 0.5, borderRadius: "9999px", textAlign: "center", ...styles[type] }}>
        {children}
      </Box>
    );
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      fontFamily: "sans-serif",
      transition: "all 0.7s",
      backgroundColor: isDark ? "#0a0a0c" : "#f3f4f6",
      color: isDark ? "#cbd5e1" : "#374151"
    }}>
      {/* HEADER */}
      <Box sx={{
        p: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${isDark ? "#1c1c1e" : "#e5e7eb"}`,
        backgroundColor: isDark ? "rgba(10,10,12,0.8)" : "rgba(255,255,255,0.8)"
      }}>
        <Box>
          <Typography sx={{fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "1.25rem", color: isDark ? "#fff" : "#111827" }}>
            Frolic<span style ={{ color: "#3b82f6" }}>Event</span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", animation: "pulse 2s infinite" }} />
            <Typography sx={{ fontSize: "10px", fontWeight: "bold", opacity: 0.5, textTransform: "uppercase" }}>Live System Status</Typography>
          </Box>
        </Box>
        <Button
          onClick={() => setIsDark(!isDark)}
          sx={{
            px: 2, py: 1, borderRadius: 1, fontSize: "0.7rem", fontWeight: "bold",
            border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
            backgroundColor: isDark ? "#1f1f23" : "#fff",
            color: isDark ? "#fff" : "#111827",
            boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.1)"
          }}
        >
          {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
        </Button>
      </Box>

      <Box sx={{ maxWidth: 1400, mx: "auto", p: 3, display: "flex", flexDirection: "column", gap: 24 }}>
        {/* STATUS GRID */}
        <Grid container spacing={3}>
          {stats.map((item, idx) => (
            <Grid item xs={12} md={6} lg={3} key={idx}>
              <Paper sx={{
                p: 5, borderRadius: "1.5rem",
                border: isDark ? "1px solid #1c1c1e" : "1px solid #fff",
                backgroundColor: isDark ? "#121215" : "#fff",
                boxShadow: isDark ? "0 20px 50px rgba(0,0,0,0.5)" : "0 1px 3px rgba(0,0,0,0.1)",
                transition: "all 0.3s"
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 4 }}>
                  <Box sx={{ p: 2, borderRadius: 1, color: item.color, backgroundColor: item.bg }}>
                    {idx === 0 ? <IconCheck /> : idx === 2 ? <IconAlert /> : <IconClock />}
                  </Box>
                  <Box sx={{ fontSize: "10px", fontWeight: "bold", px: 1.5, py: 0.5, borderRadius: "9999px", color: item.color, backgroundColor: item.bg }}>
                    {item.status}
                  </Box>
                </Box>
                <Typography sx={{ fontSize: "1.875rem", fontWeight: "bold", color: isDark ? "#fff" : "#111827" }}>{item.count}</Typography>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 500, opacity: 0.5, mt: 1 }}>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* MAIN ACTIVITY AND SUMMARY */}
        <Grid container spacing={3}>
          {/* Activity Table */}
          <Grid item xs={12} lg={8}>
            <Paper sx={{ borderRadius: "2rem", overflow: "hidden", border: isDark ? "1px solid #1c1c1e" : "1px solid #e5e7eb" }}>
              <Box sx={{ p: 6, borderBottom: `1px solid ${isDark ? "#1c1c1e" : "#e5e7eb"}` }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.125rem" }}>Activity Stream</Typography>
                <Typography sx={{ fontSize: "0.75rem", opacity: 0.5 }}>Detailed log of recent system events and user actions.</Typography>
              </Box>
              <TableContainer sx={{ px: 6, pb: 6, mt: 4 }}>
                <Table sx={{ minWidth: "100%" }}>
                  <TableHead>
                    <TableRow sx={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", opacity: 0.4, borderBottom: `1px solid ${isDark ? "#1c1c1e" : "#e5e7eb"}` }}>
                      <TableCell>User</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {activities.map((act) => (
                      <TableRow key={act.id} hover sx={{ '&:hover': { backgroundColor: isDark ? "rgba(59,130,246,0.05)" : "rgba(59,130,246,0.05)" } }}>
                        <TableCell sx={{ py: 1.5, fontSize: "0.875rem", fontWeight: 600 }}>{act.user}</TableCell>
                        <TableCell sx={{ py: 1.5, fontSize: "0.875rem", opacity: 0.8 }}>{act.action}</TableCell>
                        <TableCell sx={{ py: 1.5, fontSize: "0.7rem", fontFamily: "monospace", opacity: 0.5 }}>{act.time}</TableCell>
                        <TableCell align="right" sx={{ py: 1.5 }}><ActivityChip type={act.type}>{act.status}</ActivityChip></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Side Summary */}
          <Grid item xs={12} lg={4} container direction="column" spacing={3}>
            <Grid item>
              <Paper sx={{
                p: 6,
                borderRadius: "2rem",
                backgroundColor: isDark ? "rgba(59,130,246,0.1)" : "#3b82f6",
                color: isDark ? "#fff" : "#fff",
                border: isDark ? "1px solid rgba(59,130,246,0.3)" : "none"
              }}>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>Performance Summary</Typography>
                <Typography sx={{ fontSize: "0.75rem", opacity: 0.8, mb: 6 }}>System response time is optimized. 98% of processes completed in under 200ms.</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: "bold", mb: 1 }}>
                  <span>Server Capacity</span>
                  <span>72%</span>
                </Box>
                <Box sx={{ height: 8, width: "100%", backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 999 }}>
                  <Box sx={{ width: "72%", height: "100%", backgroundColor: "#fff", transition: "all 0.3s" }} />
                </Box>
              </Paper>
            </Grid>

            <Grid item>
              <Paper sx={{
                p: 6,
                borderRadius: "2rem",
                backgroundColor: isDark ? "#121215" : "#fff",
                border: isDark ? "1px solid #1c1c1e" : "1px solid #e5e7eb",
                boxShadow: isDark ? "0 20px 50px rgba(0,0,0,0.5)" : "0 1px 3px rgba(0,0,0,0.1)"
              }}>
                <Typography sx={{ fontWeight: "bold", mb: 4 }}>Quick Insights</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <Box sx={{ display: "flex", gap: 3, p: 3, borderRadius: "1rem", backgroundColor: "rgba(203,213,225,0.05)", '&:hover': { backgroundColor: "rgba(203,213,225,0.1)" } }}>
                    <Avatar sx={{ bgcolor: "rgba(59,130,246,0.2)", width: 32, height: 32, fontSize: 12 }}>A</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>New Alert Configuration</Typography>
                      <Typography sx={{ fontSize: "0.625rem", opacity: 0.5 }}>Set by Admin via Mobile</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 3, p: 3, borderRadius: "1rem", backgroundColor: "rgba(203,213,225,0.05)" }}>
                    <Avatar sx={{ bgcolor: "rgba(139,92,246,0.2)", width: 32, height: 32, fontSize: 12 }}>M</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Maintenance Window</Typography>
                      <Typography sx={{ fontSize: "0.625rem", opacity: 0.5 }}>Starts in 4 hours</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;


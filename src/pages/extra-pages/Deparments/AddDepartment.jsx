import React, { useState } from 'react'
// import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function AddDepartment() {
    const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    title: "",
    description: "",
    members: "",
  });


  // Snackbar state
    const [openSave, setOpenSave] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);

  const handleChange= (e)=>{
       setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit= (e)=>{
        e.preventDefault();

        // post API here
        console.log(form);

        // Show success snackbar
    setOpenSave(true);

        setTimeout(() => {
      navigate("/Departments");
    }, 1000);
    };


    // Open cancel snackbar
  const handleCancelSnack = () => {
    setOpenCancel(true);
  };

  // Go back on cancel confirmation
  const handleGoBack = () => {
    window.history.back();
  };




  return (
     <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #fff1f2, #fff7ed, #fffbeb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      {/* Card */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 4,
          boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 3,
            color: "#fff",
            background: "linear-gradient(to right, #f43f5e, #fb923c)",
          }}
        >
          <Box
            sx={{
              height: 48,
              width: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.2)",
              fontSize: 22,
            }}
          >
            🎭
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={600}>
              Frolic Fest Department
            </Typography>
            <Typography variant="body2" sx={{ color: "#ffe4e6" }}>
              Create a new department for the fest
            </Typography>
          </Box>
        </Box>

        {/* Form */}
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={3}>
            {/* Department Name */}
            <Box>
              <Typography variant="body2" fontWeight={500} mb={0.5}>
                🎨 Department Name
              </Typography>
              <TextField

                label="Department title"
                name='title'
                value={form.title}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "&.Mui-focused fieldset": {
                      borderColor: "#fb923c",
                    },
                  },
                }}
              />
            </Box>

            {/* Core Responsibility */}
            <Box>
              <Typography variant="body2" fontWeight={500} mb={0.5}>
                🎯 Core Responsibility
              </Typography>
              <TextField
                label="Department description"
                name='description'
                value={form.description}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                multiline
                rows={3}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "&.Mui-focused fieldset": {
                      borderColor: "#fb923c",
                    },
                  },
                }}
              />
            </Box>

            {/* Team Strength */}
            <Box>
              <Typography variant="body2" fontWeight={500} mb={0.5}>
                👥 Members
              </Typography>
              <TextField
                label="Total Members"
                name='members'
                value={form.members}
                onChange={handleChange}
                type="number"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "&.Mui-focused fieldset": {
                      borderColor: "#fb923c",
                    },
                  },
                }}
              />
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                pt: 2,
                borderTop: "1px solid #e5e7eb",
              }}
            >
              <Button
                onClick={handleCancelSnack}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  px: 3,
                  color: "#4b5563",
                  borderColor: "#d1d5db",
                  "&:hover": {
                    backgroundColor: "#f3f4f6",
                    borderColor: "#d1d5db",
                  },
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                onClick={handleSubmit}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  color: "#fff",
                  fontWeight: 500,
                  background:
                    "linear-gradient(to right, #14b8a6, #10b981)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(to right, #10b981, #14b8a6)",
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  },
                }}
              >
                🎭 Add Department
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>

                {/* Success Snackbar */}
                      <Snackbar
                        open={openSave}
                        autoHideDuration={3000}
                        onClose={() => setOpenSave(false)}
                        anchorOrigin={{ vertical: "center", horizontal: "center" }}
                      >
                        <Alert severity="success" variant="filled">
                          Your Department saved successfully
                        </Alert>
                      </Snackbar>


                      {/* Cancel Confirmation Snackbar */}
                            <Snackbar
                              open={openCancel}
                              anchorOrigin={{ vertical: "center", horizontal: "center" }}
                            >
                              <Alert
                                severity="warning"
                                variant="filled"
                                action={
                                  <>
                                    <Button color="inherit" size="small" onClick={handleGoBack}>
                                      YES
                                    </Button>
                                    <Button color="inherit" size="small" onClick={() => setOpenCancel(false)}>
                                      NO
                                    </Button>
                                  </>
                                }
                              >
                                Do you want to go back?
                              </Alert>
                            </Snackbar>


    </Box>
  )
}

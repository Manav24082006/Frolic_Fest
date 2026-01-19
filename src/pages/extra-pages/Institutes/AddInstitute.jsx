// import { Box, Button, TextField } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router';

// function AddInstitute() {

//     const navigate = useNavigate();

//     const [form,setform] = useState({
//         Institutes:"",
//         Event_Type:"",
//         Frolic_role:"",
//         Participants:"",
//         Revenue:"",
//         Time_Line:""
//     });


//     const handleChange= (e)=>{
//        setform({...form,[e.target.name]:e.target.value});
//     };

//     const handleSubmit= (e)=>{
//         e.preventDefault();

//         // post API here
//         console.log(form);

//         navigate('/Institutes');
//     };

//   return (
//     <>
      
//     <Box maxWidth={500} mx="auto" mt={6}>

//         <TextField
//             label="Institute Name"
//             name='Institutes'
//             value={form.Institutes}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />

//             <TextField
//             label="Event Type"
//             name='Event_Type'
//             value={form.Event_Type}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />

//             <TextField
//             label="Frolic Role"
//             name='Frolic_role'
//             value={form.Frolic_role}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />

//             <TextField
//             label="participants"
//             name='Participants'
//             value={form.Participants}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />

//             <TextField
//             label="Revenue"
//             name='Revenue'
//             value={form.Revenue}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />

//             <TextField
//             label="Time Line"
//             name='Time_Line'
//             value={form.Time_Line}
//             onChange={handleChange}
//             fullWidth
//             required
//             margin="normal"
//             />


//             {/*  save button */}

//             <Button
//                 variant='contained'
//                 fullWidth
//                 sx={{mt:2}}
//                 onClick={handleSubmit}
//             >

//                 Save Institute
//             </Button>


//     </Box>

//     </>
//   )
// }

// export default AddInstitute









import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Snackbar,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddEventDetails() {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    Institutes: "",
    Event_Type: "",
    Frolic_role: "",
    Participants: "",
    Revenue: "",
    Time_Line: ""
  });

  // Snackbar state
  const [openSave, setOpenSave] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Call your API here
    console.log(form);

    // Show success snackbar
    setOpenSave(true);

    // Navigate to /Institutes after a short delay
    setTimeout(() => {
      navigate("/Institutes");
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
        bgcolor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <Box sx={{ p: 3, bgcolor: "#eef2ff", borderBottom: "1px solid #e5e7eb" }}>
          <Typography variant="h6" sx={{ color: "#4338ca", fontWeight: 600 }}>
            📋 Add Event Details
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", mt: 0.5 }}>
            Fill the information carefully
          </Typography>
        </Box>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit} // handles Enter key as well
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          {/* Institutes */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              🏫 Institutes
            </Typography>
            <TextField
              fullWidth
              label="Institute Name"
              name="Institutes"
              value={form.Institutes}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          {/* Event Type */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              🎉 Event Type
            </Typography>
            <TextField
              fullWidth
              label="Event Type"
              name="Event_Type"
              value={form.Event_Type}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          {/* Frolic Role */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              🧑‍💼 Frolic Role
            </Typography>
            <TextField
              fullWidth
              label="Frolic Role"
              name="Frolic_role"
              value={form.Frolic_role}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          {/* Participants */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              👥 Participants
            </Typography>
            <TextField
              fullWidth
              type="number"
              label="Participants"
              name="Participants"
              value={form.Participants}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          {/* Revenue */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              💰 Revenue
            </Typography>
            <TextField
              fullWidth
              label="Revenue"
              name="Revenue"
              value={form.Revenue}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          {/* Timeline */}
          <Box>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              ⏳ Timeline
            </Typography>
            <TextField
              fullWidth
              label="Timeline"
              name="Time_Line"
              value={form.Time_Line}
              onChange={handleChange}
              required
              margin="normal"
              size="small"
            />
          </Box>

          <Divider />

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              color="inherit"
              onClick={handleCancelSnack} // show cancel confirmation
            >
              Cancel
            </Button>

            <Button
              type="submit" // form submission triggers handleSubmit
              variant="contained"
              sx={{ mt: 2 }}
            >
              Save Institute
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={openSave}
        autoHideDuration={3000}
        onClose={() => setOpenSave(false)}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Your institute saved successfully
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
  );
}

export default AddEventDetails;

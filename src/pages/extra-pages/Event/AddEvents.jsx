// import React, { useState } from 'react';

// export default function AddEvents() {

//     const [form,setForm]=useState({
//         Event_Name:'',
//         Event_Date:'',
//         Venue:'',
//         Capacity:'',
//         Event_Description:''
//     })

//     // Handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//     const handleSubmit = (e) => {
//     e.preventDefault();

//     // TODO: Call API to save event
//     console.log(form);
    
//   };


//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: 'linear-gradient(180deg, #3b2f8f 0%, #1e3a8a 60%, #1e3a8a 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//         px: 2,
//         py: 6
//       }}
//     >
//       <Box sx={{ width: '100%', maxWidth: 720 }}>
//         {/* Heading */}
//         <Typography
//           sx={{
//             textAlign: 'center',
//             fontSize: 36,
//             fontWeight: 700,
//             color: '#ff9f43',
//             mb: 1
//           }}
//         >
//           Create Your Event
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: 'center',
//             fontSize: 16,
//             opacity: 0.9,
//             mb: 6
//           }}
//         >
//           Plan your dream event with our intuitive creator
//         </Typography>

//         {/* Glass Card */}
//         <Box
//             component="form"
//             onSubmit={handleSubmit}
//           sx={{
//             background: 'rgba(255,255,255,0.08)',
//             backdropFilter: 'blur(16px)',
//             borderRadius: '24px',
//             p: 4,
//             border: '1px solid rgba(255,255,255,0.15)',
//             boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
//           }}
//         >
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: 3
//             }}
//           >
//             {/* ROW 1 */}
//             <Box>
//               <Typography sx={{ fontSize: 14, mb: 1 }}>Event Name</Typography>
//               <TextField
//                 label="Event Name"
//                 name="Event_Name"
//                 value={form.Event_Name}
//                 onChange={handleChange}
//                 required
//                 // placeholder="e.g. Summer Music Festival"
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.25)',
//                     borderRadius: '14px',
//                     color: '#fff'
//                   }
//                 }}
//               />
//             </Box>

//             <Box>
//               <Typography sx={{ fontSize: 14, mb: 1 }}>Event Date</Typography>
//               <TextField
//                 fullWidth
//                 placeholder="dd-mm-yyyy"
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.25)',
//                     borderRadius: '14px',
//                     color: '#fff'
//                   }
//                 }}
//               />
//             </Box>

//             {/* ROW 2 */}
//             <Box>
//               <Typography sx={{ fontSize: 14, mb: 1 }}>Venue</Typography>
//               <TextField
//                 fullWidth
//                 placeholder="e.g. Central Park"
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.25)',
//                     borderRadius: '14px',
//                     color: '#fff'
//                   }
//                 }}
//               />
//             </Box>

//             <Box>
//               <Typography sx={{ fontSize: 14, mb: 1 }}>Capacity</Typography>
//               <TextField
//                 fullWidth
//                 placeholder="500"
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.25)',
//                     borderRadius: '14px',
//                     color: '#fff'
//                   }
//                 }}
//               />
//             </Box>

//             {/* ROW 3 — FULL WIDTH */}
//             <Box sx={{ gridColumn: '1 / -1' }}>
//               <Typography sx={{ fontSize: 14, mb: 1 }}>Event Description</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 placeholder="Tell us about your amazing event..."
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.25)',
//                     borderRadius: '14px',
//                     color: '#fff'
//                   }
//                 }}
//               />
//             </Box>

//             {/* ROW 4 — FULL WIDTH */}
//             <Box sx={{ gridColumn: '1 / -1' }}>
//               <Button
//                 fullWidth
//                 sx={{
//                   py: 2,
//                   fontSize: 16,
//                   fontWeight: 700,
//                   borderRadius: '18px',
//                   background: 'linear-gradient(90deg, #fbbf24, #fb7185)',
//                   color: '#fff',
//                   textTransform: 'none',
//                   '&:hover': {
//                     background: 'linear-gradient(90deg, #facc15, #f472b6)'
//                   }
//                 }}
//               >
//                 🚀 Launch Your Event
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }




















import React, { useState } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router";

export default function AddEvents() {

  const navigate = useNavigate(); 

    const initialForm = {
    eventName: "",
    eventDate: "",
    venue: "",
    capacity: "",
    description: "",
  }
    
  // Form state
  const [form, setForm] = useState(initialForm);

  // Snackbar state
    const [openSave, setOpenSave] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Call API to save event
    console.log(form);
    setForm(initialForm);

    // Show success snackbar
    setOpenSave(true);

    // Navigate to /Institutes after a short delay
    setTimeout(() => {
      navigate("/Events");
    }, 1000);
    
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #3b2f8f 0%, #1e3a8a 60%, #1e3a8a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        px: 2,
        py: 3,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 720 }}>
        {/* Heading */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 36,
            fontWeight: 700,
            color: "#ff9f43",
            mb: 1,
          }}
        >
          Create Your Event
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 16,
            opacity: 0.9,
            mb: 6,
          }}
        >
          Plan your dream event with our intuitive creator
        </Typography>

        {/* Glass Card Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            borderRadius: "24px",
            p: 4,
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}
        >
          {/* Event Name */}
          <Box>
            <Typography sx={{ fontSize: 14, mb: 1 }}>Event Name</Typography>
            <TextField
            label="Event Name"
              name="eventName"
              value={form.eventName}
              onChange={handleChange}
              fullWidth
              required
              placeholder="e.g. Summer Music Festival"
              margin="normal"
              size="small"
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: "14px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* Event Date */}
          <Box>
            <Typography sx={{ fontSize: 14, mb: 1 }}>Event Date</Typography>
            <TextField
            label="Event Date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              fullWidth
              required
              placeholder="dd-mm-yyyy"
              margin="normal"
              size="small"
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: "14px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* Venue */}
          <Box>
            <Typography sx={{ fontSize: 14, mb: 1 }}>Venue</Typography>
            <TextField
            label="Venue"
              name="venue"
              value={form.venue}
              onChange={handleChange}
              fullWidth
              required
              placeholder="e.g. Central Park"
              margin="normal"
              size="small"
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: "14px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* Capacity */}
          <Box>
            <Typography sx={{ fontSize: 14, mb: 1 }}>Capacity</Typography>
            <TextField
            label="Capacity"
              name="capacity"
              value={form.capacity}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="500"
                margin="normal"
              size="small"
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: "14px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* Event Description - full width */}
          <Box sx={{ gridColumn: "1 / -1" }}>
            <Typography sx={{ fontSize: 14, mb: 1 }}>Event Description</Typography>
            <TextField
            label="Event Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              placeholder="Tell us about your amazing event..."
              margin="normal"
              size="small"
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: "14px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* Submit Button - full width */}
          <Box sx={{ gridColumn: "1 / -1" }}>
            <Button
              type="submit"
              fullWidth
              sx={{
                py: 2,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: "18px",
                background: "linear-gradient(90deg, #fbbf24, #fb7185)",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, #facc15, #f472b6)",
                },
              }}
            >
              🚀 Launch Your Event
            </Button>
          </Box>
        </Box>
      </Box>

              {/* Success Snackbar */}
                    <Snackbar
                      open={openSave}
                      autoHideDuration={3000}
                      onClose={() => setOpenSave(false)}
                      anchorOrigin={{ vertical: "center", horizontal: "center" }}
                    >
                      <Alert severity="success" variant="filled">
                        Your Events saved successfully
                      </Alert>
                    </Snackbar>

    </Box>
  );
}

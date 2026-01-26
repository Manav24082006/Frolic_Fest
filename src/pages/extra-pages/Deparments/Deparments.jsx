// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper,
// } from "@mui/material";

// function Department() {
//   return (
//     <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
//       {/* Header */}
//       <Box
//         sx={{
//           px: { xs: 2, sm: 3, lg: 4 },
//           py: 2.5,
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           justifyContent: "space-between",
//           alignItems: { xs: "flex-start", sm: "center" },
//           gap: 2,
//         }}
//       >
//         <Box>
//           <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
//             Departments
//           </Typography>
//           <Typography sx={{ fontSize: 14, color: "#64748b", mt: 0.5 }}>
//             Manage department members and responsibilities
//           </Typography>
//         </Box>

//         <Button
//           sx={{
//             backgroundColor: "#7c3aed",
//             color: "#fff",
//             px: 2.5,
//             py: 1,
//             borderRadius: 1,
//             fontSize: 14,
//             width: { xs: "100%", sm: "auto" },
//             textTransform: "none",
//             "&:hover": { backgroundColor: "#6d28d9", color: "#fff" },
//           }}
//         >
//           + Add Department
//         </Button>
//       </Box>

//       {/* Cards Grid */}
//       <Box sx={{ px: { xs: 2, sm: 3, lg: 4 }, py: 4 }}>
//         <Grid
//           container
//           spacing={{ xs: 2, sm: 3 }}
//           columns={{ xs: 1, md: 2, lg: 2, xl: 3 }}
//         >
//           {[
//             {
//               title: "Decoration Team",
//               desc: "Stage setup, venue decor, and themes",
//               members: "12 Members",
//             },
//             {
//               title: "Logistics Team",
//               desc: "Transport, equipment, and scheduling",
//               members: "8 Members",
//             },
//             {
//               title: "Marketing Team",
//               desc: "Promotion, posters, and social media",
//               members: "10 Members",
//             },
//             {
//               title: "Finance Team",
//               desc: "Budget planning and expense tracking",
//               members: "5 Members",
//             },
//           ].map((dept, index) => (
//             <Grid item xs={1} key={index}>
//               <Paper
//                 elevation={0}
//                 sx={{
//                   border: "1px solid #e5e7eb",
//                   borderRadius: 2,
//                   p: { xs: 2, sm: 3 },
//                   transition: "box-shadow 0.2s",
//                   "&:hover": {
//                     boxShadow:
//                       "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
//                   },
//                 }}
//               >
//                 {/* Card Header */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column", sm: "row" },
//                     justifyContent: "space-between",
//                     alignItems: { xs: "flex-start", sm: "center" },
//                     gap: { xs: 1.5, sm: 0 },
//                     mb: 2,
//                   }}
//                 >
//                   <Box>
//                     <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
//                       {dept.title}
//                     </Typography>
//                     <Typography
//                       sx={{ fontSize: 14, color: "#64748b", mt: 0.5 }}
//                     >
//                       {dept.desc}
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       fontSize: 14,
//                       backgroundColor: "#f1f5f9",
//                       px: 1.5,
//                       py: 0.5,
//                       borderRadius: "9999px",
//                     }}
//                   >
//                     {dept.members}
//                   </Box>
//                 </Box>

//                 {/* Buttons */}
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       flex: { xs: 1, sm: "unset" },
//                       px: 1.5,
//                       py: 1,
//                       fontSize: 14,
//                       borderRadius: 1,
//                       textTransform: "none",
//                       borderColor: "#0c5af6",
//                       color: "#000",
//                       "&:hover": { backgroundColor: "#5ea5eb" },
//                     }}
//                   >
//                     View Members
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     sx={{
//                       flex: { xs: 1, sm: "unset" },
//                       px: 1.5,
//                       py: 1,
//                       fontSize: 14,
//                       borderRadius: 1,
//                       textTransform: "none",
//                       borderColor: "#16a34a",
//                       color: "#15803d",
//                       "&:hover": { backgroundColor: "#dcfce7" },
//                     }}
//                   >
//                     Add Member
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     sx={{
//                       flex: { xs: 1, sm: "unset" },
//                       px: 1.5,
//                       py: 1,
//                       fontSize: 14,
//                       borderRadius: 1,
//                       textTransform: "none",
//                       borderColor: "#dc2626",
//                       color: "#b91c1c",
//                       "&:hover": { backgroundColor: "#fee2e2" },
//                     }}
//                   >
//                     Remove Member
//                   </Button>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Department;




import React, { memo, useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, Paper, CircularProgress, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router';
import { deleteDepartment, getAllDepartments, getDepartmentById } from '../../../api/departments/Departments';

function Department() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editId, seteditId] = useState(null);
  const [openEdit, setopenEdit] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    members: ''
  });

  // useEffect(()=>{
  //   getAllDepartments(setData);
  // },[]);

  useEffect(() => {
  const fetchDepartments = async () => {
    setLoading(true);
    const res = await getAllDepartments();
    setData(Array.isArray(res) ? res : []);
    setLoading(false);
  };

  fetchDepartments();
}, []);


  // edit handler
  const handlEdit = (row) => {
    seteditId(row.id);
    setFormData({
      title: row.title,
      description: row.description,
      members: row.members
    });
    setopenEdit(true);
  };

  // input hanlder
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // update
  const handleUpdate = async () => {
    const update = await getDepartmentById(editId, formData);

    setData((prev) =>
      prev.map((row) =>
        row.id === editId
          ? {
              ...row,
              title: update.title,
              description: update.description,
              members: update.members
            }
          : row
      )
    );
    setopenEdit(false);
    seteditId(null);
  };

  // delete
  const handleDelete = async (id) => {
    await deleteDepartment(id);

    setData((prev) => prev.filter((row) => row.id !== id));
  };

  // loading state
  if (loading) {
    return (
      <Box
        sx={{
          background: 'linear-gradient(to bottom right, #ecfdf5, #ffffff, #ecfeff)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      {/* Header */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, lg: 4 },
          py: 2.5,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600 }}>Departments</Typography>
          <Typography sx={{ fontSize: 14, color: '#64748b', mt: 0.5 }}>Manage department members and responsibilities</Typography>
        </Box>

        <Button
          onClick={() => navigate('add')}
          sx={{
            backgroundColor: '#7c3aed',
            color: '#fff',
            px: 2.5,
            py: 1,
            borderRadius: 1,
            fontSize: 14,
            width: { xs: '100%', sm: 'auto' },
            textTransform: 'none',
            '&:hover': { backgroundColor: '#6d28d9', color: '#fff' }
          }}
        >
          + Add Department
        </Button>
      </Box>

      {/* Cards Grid */}
      <Box sx={{ px: { xs: 2, sm: 3, lg: 4 }, py: 4 }}>
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 1, md: 2, lg: 2, xl: 3 }} gap={3}>
          {data.map((dept) => (
            <Grid item xs={1} key={dept.id}>
              <Paper
                elevation={0}
                sx={{
                  border: '1px solid #e5e7eb',
                  borderRadius: 2,
                  p: { xs: 2, sm: 3 },
                  transition: 'box-shadow 0.2s',
                  '&:hover': {
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                  }
                }}
              >
                {/* Card Header */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: { xs: 1.5, sm: 0 },
                    mb: 2
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>{dept.title}</Typography>
                    <Typography sx={{ fontSize: 14, color: '#64748b', mt: 0.5 }}>{dept.description}</Typography>
                  </Box>

                  <Box
                    sx={{
                      fontSize: 14,
                      backgroundColor: '#f1f5f9',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '9999px'
                    }}
                  >
                    {dept.members}
                  </Box>
                </Box>

                {/* Buttons */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      flex: { xs: 1, sm: 'unset' },
                      px: 1.5,
                      py: 1,
                      fontSize: 14,
                      borderRadius: 1,
                      textTransform: 'none',
                      borderColor: '#0c5af6',
                      color: '#000',
                      '&:hover': { backgroundColor: '#5ea5eb' }
                    }}
                  >
                    View Members
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      flex: { xs: 1, sm: 'unset' },
                      px: 1.5,
                      py: 1,
                      fontSize: 14,
                      borderRadius: 1,
                      textTransform: 'none',
                      borderColor: '#16a34a',
                      color: '#15803d',
                      '&:hover': { backgroundColor: '#dcfce7' }
                    }}
                    onClick={() => handlEdit(dept) }
                  >
                    Edit Member
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      flex: { xs: 1, sm: 'unset' },
                      px: 1.5,
                      py: 1,
                      fontSize: 14,
                      borderRadius: 1,
                      textTransform: 'none',
                      borderColor: '#dc2626',
                      color: '#b91c1c',
                      '&:hover': { backgroundColor: '#fee2e2' }
                    }}
                    onClick={()=> handleDelete(dept.id) }
                  >
                    Remove Member
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* edit form */}
        <Dialog
          open={openEdit}
          onClose={() => setopenEdit(false)}
          fullWidth
          maxWidth="sm"
          sx={{
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(250,250,250,0.2)',
              backdropFilter: 'blur(6px)'
            },
            '& .MuiDialog-paper': {
              borderRadius: 12,
              background: 'rgba(250,250,250,0.7)',
              backdropFilter: 'blur(10px)'
            }
          }}
        >
          <DialogTitle>Edit Institute</DialogTitle>

          <DialogContent dividers>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Department title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': {
                      borderColor: '#fb923c'
                    }
                  }
                }}
              />

              <TextField
                label="Department description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                multiline
                rows={3}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': {
                      borderColor: '#fb923c'
                    }
                  }
                }}
              />

              <TextField
                label="Total Members"
                name="members"
                value={formData.members}
                onChange={handleChange}
                type="number"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': {
                      borderColor: '#fb923c'
                    }
                  }
                }}
              />
            </Box>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setopenEdit(false)}>Cancel</Button>
            <Button onClick={handleUpdate} variant="contained">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Department;

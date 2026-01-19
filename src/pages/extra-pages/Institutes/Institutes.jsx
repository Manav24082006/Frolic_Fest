// import React, { useState } from 'react';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import {FormControl, InputLabel } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   SvgIcon
// } from '@mui/material';

// const Institutes = () => {
//   const [projects] = useState([
//     {
//       campus: 'Innovatech University',
//       program: 'RoboFest 2025',
//       scope: 'Robotics challenge & coding Hackathon',
//       reach: '3500+',
//       revenue: '₹8.2cr',
//       timeline: 'Feb 8-12',
//       status: 'planning'
//     },
//     {
//       campus: 'Harmony Arts College',
//       program: 'Rythm & Beats',
//       scope: 'Dance competition and Live Music Nights',
//       reach: '2000+',
//       revenue: '₹4.5cr',
//       timeline: 'Jan 22-25',
//       status: 'Ongoing'
//     },
//     {
//       campus: 'Summit Business Academy',
//       program: 'Laugh and Lead Summit',
//       scope: 'Comedy night and Open Mic performance',
//       reach: '800+',
//       revenue: '₹6.8cr',
//       timeline: 'March 5-6',
//       status: 'Confirmed'
//     },
//     {
//       campus: 'Starlight Arts Academy',
//       program: 'Glow Fest 2025',
//       scope: 'Talent Show',
//       reach: '1200+',
//       revenue: '₹7.5cr',
//       timeline: 'April 10-12',
//       status: 'Completed'
//     }
//   ]);

//   return (
//     <Box
//       sx={{
//         background: 'linear-gradient(to bottom right, #ecfdf5, #ffffff, #ecfeff)',
//         minHeight: '100vh',
//         fontFamily: 'sans-serif'
//       }}
//     >
//       <Box maxWidth="lg" mx="auto" px={{ xs: 2, sm: 3, lg: 4 }} py={8}>
//         {/* Hero section */}
//         <Box textAlign="center" mb={8}>
//           <Box
//             display="inline-flex"
//             alignItems="center"
//             gap={2}
//             px={3}
//             py={1.5}
//             borderRadius={999}
//             mb={3}
//             sx={{
//               background: 'linear-gradient(to right, #10b981, #06b6d4)',
//               boxShadow: 6
//             }}
//           >
//             <SvgIcon sx={{ color: 'white', fontSize: 24 }}>
//               <path
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//               />
//             </SvgIcon>

//             <Typography
//               sx={{
//                 fontSize: '1.5rem',
//                 fontWeight: 700,
//                 color: '#fff',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//               }}
//             >
//               Frolic Institute Collabrations
//             </Typography>
//           </Box>

//           <Typography
//             sx={{
//               fontSize: '1.25rem',
//               color: '#374151',
//               maxWidth: '48rem',
//               mx: 'auto',
//               lineHeight: 1.6
//             }}
//           >
//             Track Frolic's partnership with premier institutes for cultural fest,tech symposiums, and campus events.
//           </Typography>
//         </Box>

//         {/* stats and action */}
//         <Grid container spacing={22} mb={6}>
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 background: 'rgba(255,255,255,0.8)',
//                 backdropFilter: 'blur(4px)',
//                 p: 4,
//                 borderRadius: 4,
//                 boxShadow: 8,
//                 border: '1px solid #d1fae5',
//                 width: '180%'
//               }}
//             >
//               <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#059669' }}>4</Typography>
//               <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Institute partner</Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 background: 'rgba(255,255,255,0.8)',
//                 backdropFilter: 'blur(4px)',
//                 p: 4,
//                 borderRadius: 4,
//                 boxShadow: 8,
//                 border: '1px solid #cffafe',
//                 width: '180%'
//               }}
//             >
//               <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#0891b2' }}>7500+</Typography>
//               <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Total participants</Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 background: 'rgba(255,255,255,0.8)',
//                 backdropFilter: 'blur(4px)',
//                 p: 4,
//                 borderRadius: 4,
//                 boxShadow: 8,
//                 border: '1px solid #ede9fe',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 width: '180%'
//               }}
//             >
//               <Box>
//                 <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#7c3aed' }}>₹28Cr</Typography>
//                 <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Event Revenue</Typography>
//               </Box>

//               <Box
//                 sx={{
//                   width: 48,
//                   height: 48,
//                   background: 'linear-gradient(to right, #a855f7, #ec4899)',
//                   borderRadius: 2,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <SvgIcon sx={{ color: 'white' }}>
//                   <path
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
//                   />
//                 </SvgIcon>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Main table */}
//         <Box
//           sx={{
//             background: 'rgba(255,255,255,0.7)',
//             backdropFilter: 'blur(12px)',
//             borderRadius: 4,
//             boxShadow: 8,
//             border: '1px solid #f3f4f6',
//             overflow: 'hidden'
//           }}
//         >
//           <Box
//             sx={{
//               px: 4,
//               py: 3,
//               borderBottom: '1px solid #f3f4f6',
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//               gap: 2
//             }}
//           >
//             <Box>
//               <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>Frolic Partnerships</Typography>
//               <Typography sx={{ color: '#6b7280' }}>Manage institute collaborations and track event progress</Typography>
//             </Box>

//             <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
//               <FormControl
//                 size="small"
//                 sx={{
//                   minWidth: { xs: '100%', sm: 192 }, // sm:w-48 equivalent
//                   px: 0
//                 }}
//               >
//                 <Select
//                   defaultValue="All Status"
//                   IconComponent={ArrowDropDownIcon}
//                   sx={{
//                     borderRadius: '1rem', // rounded-2xl
//                     px: 2,
//                     py: 1.5,
//                     fontSize: '0.875rem',
//                     fontWeight: 500,
//                     backgroundColor: 'white',
//                     boxShadow: 1,
//                     '& .MuiOutlinedInput-notchedOutline': {
//                       borderColor: 'grey.300'
//                     },
//                     '&:hover .MuiOutlinedInput-notchedOutline': {
//                       borderColor: 'grey.400'
//                     },
//                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                       borderColor: 'success.main',
//                       boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)'
//                     }
//                   }}
//                 >
//                   <MenuItem value="All Status">All Status</MenuItem>
//                   <MenuItem value="Planning">Planning</MenuItem>
//                   <MenuItem value="Ongoing">Ongoing</MenuItem>
//                   <MenuItem value="Confirmed">Confirmed</MenuItem>
//                   <MenuItem value="Completed">Completed</MenuItem>
//                 </Select>
//               </FormControl>

//               <Button
//                 sx={{
//                   px: 4,
//                   py: 1,
//                   color: 'white',
//                   fontWeight: 600,
//                   borderRadius: 3,
//                   background: 'linear-gradient(to right, #10b981, #06b6d4)'
//                 }}
//               >
//                 + New Partnership
//               </Button>
//             </Box>
//           </Box>

//           <TableContainer component={Paper} elevation={0}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ background: 'linear-gradient(to right, #f9fafb, #f3f4f6)' }}>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Institute</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Event Type</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Frolic Role</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Participants</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Revenue</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }}>Timeline</TableCell>
//                   <TableCell sx={{ fontSize: 12, fontWeight: 700 }} align="right">
//                     Actions
//                   </TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {projects.map((project, index) => (
//                   <TableRow
//                     key={index}
//                     sx={{
//                       backgroundColor: index % 2 === 0 ? '#fff' : '#f9fafb',
//                       '&:hover': { backgroundColor: 'rgba(16,185,129,0.08)' }
//                     }}
//                   >
//                     <TableCell sx={{ fontWeight: 600 }}>{project.campus}</TableCell>
//                     <TableCell>{project.program}</TableCell>
//                     <TableCell>{project.scope}</TableCell>
//                     <TableCell sx={{ color: '#059669', fontWeight: 600 }}>{project.reach}</TableCell>
//                     <TableCell sx={{ color: '#7c3aed', fontWeight: 700 }}>{project.revenue}</TableCell>
//                     <TableCell>
//                       <Box
//                         sx={{
//                           px: 1.5,
//                           py: 0.5,
//                           borderRadius: 999,
//                           fontSize: 14,
//                           background: '#f3f4f6',
//                           display: 'inline-block',
//                           width: '105%',
//                         }}
//                       >
//                         {project.timeline}
//                       </Box>
//                     </TableCell>

//                     <TableCell align="right">
//                       <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <IconButton sx={{ color: '#059669' }} title="View">
//                           <VisibilityOutlinedIcon />
//                         </IconButton>

//                         <IconButton sx={{ color: '#2563eb' }} title="Edit">
//                           <EditOutlinedIcon />
//                         </IconButton>

//                         <IconButton sx={{ color: '#dc2626' }} title="Delete">
//                           <DeleteOutlineOutlinedIcon />
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Institutes;



import React, { useEffect, useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CircularProgress, FormControl, InputLabel } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TablePagination from '@mui/material/TablePagination';
import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  SvgIcon
} from '@mui/material';

import { getAllInstitutes } from '../../../api/institutes/Institutes';
import { useNavigate } from 'react-router';

function Institutes() {
  // pagination
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // data fetching
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   getAllInstitutes(setData);
  // },[]);

  const [data, setData] = useState([]);
  useEffect(() => {

    // card view and table data
    const fetchInstitutes = async () => {

      //loading state
      setLoading(true); // it will start to show loading

      getAllInstitutes((apiData) => {
        setData(apiData);

        const totalParticipants = apiData.reduce((sum, item) => sum + parseParticipants(item.Participants), 0);

        const eventRevenue = apiData.reduce((sum, item) => sum + parseRevenueToNumber(item.Revenue), 0);

        setStats({
          institutePartners: new Set(apiData.map((i) => i.id)).size,
          totalParticipants,
          eventRevenue
        });

        // loading state
        setLoading(false); // it will stop loading after data will come

      });

    };

    // initial call
    fetchInstitutes();

    // auto 30 seconds refresh
    const interval = setInterval(fetchInstitutes, 30000);

    // clean up
    return () => clearInterval(interval);
  }, []);

  // navigation
  const navigate = useNavigate();

  // card live
  const [stats, setStats] = useState({
    institutePartners: 0,
    totalParticipants: 0,
    eventRevenue: 0
  });

  // revenue converter
  const parseRevenueToNumber = (value) => {
    if (!value) return 0;

    const str = value.toString().toLowerCase().replace(/\s/g, '');

    if (str.includes('cr')) return parseFloat(str) * 10000000; // 1 Cr = 1 Crore = 10,000,000
    if (str.includes('lakh')) return parseFloat(str) * 100000; // 1 Lakh = 100,000
    if (str.includes('k')) return parseFloat(str) * 1000; // 1k = 1000

    return Number(str) || 0; // fallback
  };

  //  participants strings to numbers
  const parseParticipants = (value) => {
    if (!value) return 0;

    const str = value.toString().toLowerCase().replace(/\s/g, '');

    if (str.includes('k')) return parseFloat(str) * 1000; // 1.2k -> 1200

    return Number(str.replace('+', '')) || 0;
  };

  // Formatter
  const formatRevenue = (amount) =>
    amount >= 1e7
      ? `₹${Math.round(amount / 1e7)}Cr`
      : amount >= 1e5
        ? `₹${Math.round(amount / 1e5)}L`
        : amount >= 1e3
          ? `₹${Math.round(amount / 1e3)}K`
          : `₹${amount}`;

  // loading state
  const [loading, setLoading] = useState(true);

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
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #ecfdf5, #ffffff, #ecfeff)',
        minHeight: '100vh',
        fontFamily: 'sans-serif'
      }}
    >
      <Box maxWidth="lg" mx="auto" px={{ xs: 2, sm: 3, lg: 4 }} py={8}>
        {/* Hero section */}
        <Box textAlign="center" mb={8}>
          <Box
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={3}
            py={1.5}
            borderRadius={999}
            mb={3}
            sx={{
              background: 'linear-gradient(to right, #10b981, #06b6d4)',
              boxShadow: 6
            }}
          >
            <SvgIcon sx={{ color: 'white', fontSize: 24 }}>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </SvgIcon>

            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#fff',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Frolic Institute Collabrations
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '1.25rem',
              color: '#374151',
              maxWidth: '48rem',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Track Frolic's partnership with premier institutes for cultural fest,tech symposiums, and campus events.
          </Typography>
        </Box>

        {/* stats and action */}
        <Grid container spacing={19} mb={6}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(4px)',
                p: 4,
                borderRadius: 4,
                boxShadow: 8,
                border: '1px solid #d1fae5',
                width: '180%'
              }}
            >
              <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#059669' }}>{stats.institutePartners}</Typography>
              <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Institute partner</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(4px)',
                p: 4,
                borderRadius: 4,
                boxShadow: 8,
                border: '1px solid #cffafe',
                width: '180%'
              }}
            >
              <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#0891b2' }}>
                {' '}
                {stats.totalParticipants.toLocaleString()}+
              </Typography>
              <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Total participants</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(4px)',
                p: 4,
                mx: 4,
                borderRadius: 4,
                boxShadow: 8,
                border: '1px solid #ede9fe',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '140%'
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '1.875rem', fontWeight: 700, color: '#7c3aed' }}>
                  {formatRevenue(stats.eventRevenue)}+
                </Typography>
                <Typography sx={{ color: '#4b5563', fontWeight: 500 }}>Event Revenue</Typography>
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <SvgIcon sx={{ color: 'white' }}>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </SvgIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Main table */}
        <Box
          sx={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            boxShadow: 8,
            border: '1px solid #f3f4f6',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              px: 4,
              py: 3,
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 2
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>Frolic Partnerships</Typography>
              <Typography sx={{ color: '#6b7280' }}>Manage institute collaborations and track event progress</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
              <FormControl
                size="small"
                sx={{
                  minWidth: { xs: '100%', sm: 192 }, // sm:w-48 equivalent
                  px: 0
                }}
              >
                <Select
                  defaultValue="All Status"
                  IconComponent={ArrowDropDownIcon}
                  sx={{
                    borderRadius: '1rem', // rounded-2xl
                    px: 2,
                    py: 1.5,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    backgroundColor: 'white',
                    boxShadow: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'grey.300'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'grey.400'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'success.main',
                      boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)'
                    }
                  }}
                >
                  <MenuItem value="All Status">All Status</MenuItem>
                  <MenuItem value="Planning">Planning</MenuItem>
                  <MenuItem value="Ongoing">Ongoing</MenuItem>
                  <MenuItem value="Confirmed">Confirmed</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>

              <Button
                sx={{
                  px: 4,
                  py: 1,
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: 'linear-gradient(to right, #10b981, #06b6d4)'
                }}
                onClick={() => navigate('add')}
              >
                + New Institutes
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper} sx={{ width: 1100 }} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: 'linear-gradient(to right, #f9fafb, #f3f4f6)' }}>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 50 }} align="center">
                    Id
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Institute
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Event Type
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Frolic Role
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Participants
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Revenue
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Timeline
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, fontWeight: 700, width: 100 }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#fff' : '#f9fafb',
                      '&:hover': { backgroundColor: 'rgba(16,185,129,0.08)' }
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600, width: 50 }} align="center">
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, width: 150 }} align="center">
                      {row.Institutes}
                    </TableCell>
                    <TableCell sx={{ width: 150 }} align="center">
                      {row.Event_Type}
                    </TableCell>
                    <TableCell sx={{ width: 150 }} align="center">
                      {row.Frolic_role}
                    </TableCell>
                    <TableCell sx={{ color: '#059669', fontWeight: 600, width: 150 }} align="center">
                      {row.Participants}
                    </TableCell>
                    <TableCell sx={{ color: '#7c3aed', fontWeight: 700 }} align="center">
                      {row.Revenue}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 800,
                          background: '#f3f4f6',
                          display: 'inline-block',
                          width: '105%'
                        }}
                      >
                        {row.Time_Line}
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <IconButton sx={{ color: '#059669' }} title="View">
                          <VisibilityOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ color: '#2563eb' }} title="Edit">
                          <EditOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ color: '#dc2626' }} title="Delete">
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/*  pagination component */}

        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ fontSize: '20px', marginTop: '10px' }}
        />
      </Box>
    </Box>
  );
}

export default Institutes;

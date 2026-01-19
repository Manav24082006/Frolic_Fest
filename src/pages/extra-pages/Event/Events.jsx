// import React from 'react';
// import { Box, Typography, Button, Grid, TextField } from '@mui/material';

// function Events() {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         color: '#fff',
//         background: 'linear-gradient(to bottom right, #4c1d95, #1e3a8a, #312e81)'
//       }}
//     >
//       {/* Hero Section */}
//       <Box component="section" sx={{ pt: 12, pb: 10, textAlign: 'center' }}>
//         <Box sx={{ maxWidth: '56rem', mx: 'auto', px: 3 }}>
//           <Typography
//             sx={{
//               fontSize: { xs: 48, md: 112 },
//               fontWeight: 700,
//               mb: 3,
//               background: 'linear-gradient(to right, #facc15, #ec4899, #a855f7)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent'
//             }}
//           >
//             Magical Event Experiences
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: 20, md: 24 },
//               mb: 4,
//               opacity: 0.9,
//               maxWidth: '42rem',
//               mx: 'auto',
//               lineHeight: 1.6
//             }}
//           >
//             Create unforgettable moments with Frolic. From grand galas to intimate gatherings, we make every event extraordinary.
//           </Typography>

//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', sm: 'row' },
//               gap: 2,
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//           >
//             <Button
//             href='#create'
//               sx={{
//                 px: 6,
//                 py: 2,
//                 fontSize: 18,
//                 fontWeight: 700,
//                 borderRadius: '9999px',
//                 background: 'linear-gradient(to right, #eab308, #ec4899)',
//                 boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   background: 'linear-gradient(to right, #facc15, #f472b6)',
//                   boxShadow: "0 15px 35px rgba(0,0,0,0.5)"
//                 },
//                 transition: "all 0.3s ease",
//               }}
//             >
//               Create Event Now
//             </Button>

//             <Button
//             href='#view_events'
//               sx={{
//                 px: 6,
//                 py: 2,
//                 fontSize: 18,
//                 fontWeight: 700,
//                 borderRadius: '9999px',
//                 border: '2px solid rgba(255,255,255,0.3)',
//                 color: '#fff',
//                 backdropFilter: 'blur(2px)',
//                 '&:hover': {
//                   borderColor: '#facc15',
//                   backgroundColor: 'violet'
//                 }
//               }}
//             >
//               View Events
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//              {/* Upcoming Events */}
//       <Box sx={{ py: 12, background: "rgba(255,255,255,.05)" }} id='view_events'>
//         <Box sx={{ maxWidth: 1100, mx: "auto", px: 3 }}>
//           <Box sx={{ textAlign: "center", mb: 10 }}>
//             <Typography
//               sx={{
//                 fontSize: 48,
//                 fontWeight: 700,
//                 background:
//                   "linear-gradient(to right, #facc15, #ec4899)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent"
//               }}
//             >
//               Upcoming Events
//             </Typography>
//             <Typography sx={{ opacity: 0.9 }}>
//               Discover our magical events waiting for you
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {[
//               ["Singing Night", "Live vocal performances", "Dec 28", "180 spots",
//                 "linear-gradient(to bottom right, rgba(168,85,247,.8), rgba(236,72,153,.8))"],
//               ["Comedy Show", "Stand-up comedy night", "Jan 5", "300 spots",
//                 "linear-gradient(to bottom right, rgba(16,185,129,.8), rgba(234,179,8,.8))"],
//               ["Quiz Night", "Trivia & fun", "Jan 12", "120 spots",
//                 "linear-gradient(to bottom right, rgba(59,130,246,.8), rgba(99,102,241,.8))"],
//               ["Dance Battle", "Dance competition", "Jan 18", "200 spots",
//                 "linear-gradient(to bottom right, rgba(236,72,153,.8), rgba(244,63,94,.8))"],
//               ["Magic Show", "Mind-blowing magic", "Jan 25", "150 spots",
//                 "linear-gradient(to bottom right, rgba(99,102,241,.8), rgba(168,85,247,.8))"]
//             ].map(([title, desc, date, spots, bg], i) => (
//               <Grid item xs={12} md={6} key={i}>
//                 <Box
//                   sx={{
//                     p: 4,
//                     borderRadius: 4,
//                     border: "1px solid rgba(255,255,255,.2)",
//                     background: bg,
//                     transition: ".5s",
//                     "&:hover": {
//                       transform: "scale(1.05)"
//                     }
//                   }}
//                 >
//                   <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
//                     {title}
//                   </Typography>
//                   <Typography sx={{ opacity: 0.9, mb: 2 }}>
//                     {desc}
//                   </Typography>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       mb: 3
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         px: 2,
//                         py: 0.5,
//                         borderRadius: "999px",
//                         background: "#eab308",
//                         fontSize: 12,
//                         fontWeight: 700
//                       }}
//                     >
//                       {date}
//                     </Box>
//                     <Typography sx={{mx:2 ,color: "#facc15", fontWeight: 700 }}>
//                       {spots}
//                     </Typography>
//                   </Box>

//                   <Button
//                     fullWidth
//                     sx={{
//                       py: 2,
//                       borderRadius: 3,
//                       fontWeight: 700,
//                       background:
//                         "linear-gradient(to right, #eab308, #ec4899)"
//                     }}
//                   >
//                     Book Now
//                   </Button>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>





//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: 'linear-gradient(180deg, #3b2f8f 0%, #1e3a8a 60%, #1e3a8a 100%)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: '#fff',
//           px: 2
//         }}
//       >
//         <Box sx={{ width: '100%', maxWidth: 720 }} id='create' >
//           {/* Heading */}
//           <Typography
//             sx={{
//               textAlign: 'center',
//               fontSize: 36,
//               fontWeight: 700,
//               color: '#ff9f43',
//               mb: 1
//             }}
//           >
//             Create Your Event
//           </Typography>

//           <Typography
//             sx={{
//               textAlign: 'center',
//               fontSize: 16,
//               opacity: 0.9,
//               mb: 6
//             }}
//           >
//             Plan your dream event with our intuitive creator
//           </Typography>

//           {/* Glass Card */}
//           <Box
//   sx={{
//     background: 'rgba(255,255,255,0.08)',
//     backdropFilter: 'blur(16px)',
//     borderRadius: '24px',
//     p: 4,
//     border: '1px solid rgba(255,255,255,0.15)',
//     boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
//   }}
// >
//   <Box
//     sx={{
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: 3
//     }}
//   >
//     {/* ROW 1 */}
//     <Box>
//       <Typography sx={{ fontSize: 14, mb: 1 }}>Event Name</Typography>
//       <TextField
//         fullWidth
//         placeholder="e.g. Summer Music Festival"
//         InputProps={{
//           sx: {
//             backgroundColor: 'rgba(255,255,255,0.25)',
//             borderRadius: '14px',
//             color: '#fff'
//           }
//         }}
//       />
//     </Box>

//     <Box>
//       <Typography sx={{ fontSize: 14, mb: 1 }}>Event Date</Typography>
//       <TextField
//         fullWidth
//         placeholder="dd-mm-yyyy"
//         InputProps={{
//           sx: {
//             backgroundColor: 'rgba(255,255,255,0.25)',
//             borderRadius: '14px',
//             color: '#fff'
//           }
//         }}
//       />
//     </Box>

//     {/* ROW 2 */}
//     <Box>
//       <Typography sx={{ fontSize: 14, mb: 1 }}>Venue</Typography>
//       <TextField
//         fullWidth
//         placeholder="e.g. Central Park"
//         InputProps={{
//           sx: {
//             backgroundColor: 'rgba(255,255,255,0.25)',
//             borderRadius: '14px',
//             color: '#fff'
//           }
//         }}
//       />
//     </Box>

//     <Box>
//       <Typography sx={{ fontSize: 14, mb: 1 }}>Capacity</Typography>
//       <TextField
//         fullWidth
//         placeholder="500"
//         InputProps={{
//           sx: {
//             backgroundColor: 'rgba(255,255,255,0.25)',
//             borderRadius: '14px',
//             color: '#fff'
//           }
//         }}
//       />
//     </Box>

//     {/* ROW 3 — FULL WIDTH */}
//     <Box sx={{ gridColumn: '1 / -1' }}>
//       <Typography sx={{ fontSize: 14, mb: 1 }}>Event Description</Typography>
//       <TextField
//         fullWidth
//         multiline
//         rows={4}
//         placeholder="Tell us about your amazing event..."
//         InputProps={{
//           sx: {
//             backgroundColor: 'rgba(255,255,255,0.25)',
//             borderRadius: '14px',
//             color: '#fff'
//           }
//         }}
//       />
//     </Box>

//     {/* ROW 4 — FULL WIDTH */}
//     <Box sx={{ gridColumn: '1 / -1' }}>
//       <Button
//         fullWidth
//         sx={{
//           py: 2,
//           fontSize: 16,
//           fontWeight: 700,
//           borderRadius: '18px',
//           background: 'linear-gradient(90deg, #fbbf24, #fb7185)',
//           color: '#fff',
//           textTransform: 'none',
//           '&:hover': {
//             background: 'linear-gradient(90deg, #facc15, #f472b6)'
//           }
//         }}
//       >
//         🚀 Launch Your Event
//       </Button>
//     </Box>
//   </Box>
// </Box>
//         </Box>
//       </Box>

//       {/* Stats Section (Footer) */}
//       <Box
//         component="section"
//         sx={{
//           py: 10,
//           background: 'linear-gradient(to right, #6b21a8, #1e40af)'
//         }}
//       >
//         <Box sx={{ maxWidth: '72rem', mx: 'auto', px: 4 }}>
//           <Grid container spacing={20} textAlign="center">
//             {[
//               ['500+', 'Events Hosted'],
//               ['25K+', 'Happy Attendees'],
//               ['98%', 'Success Rate'],
//               ['50+', 'Venues Covered']
//             ].map(([value, label], i) => (
//               <Grid item xs={12} md={3} key={i}>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 36, md: 48 },
//                     fontWeight: 700,
//                     color: '#facc15',
//                     mb: 1
//                   }}
//                 >
//                   {value}
//                 </Typography>
//                 <Typography sx={{ fontSize: 20, opacity: 0.9 }}>{label}</Typography>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Events;



























import  { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import { getAllEvents } from '../../../api/events/Events';

function Events() {

  // fetch data
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();



    // useEffect(() => {
    //   getAllEvents(setEvents);
    // }, []);

     useEffect(() => {
      setLoading(true);
    
      getAllEvents((res) => {
        setEvents(Array.isArray(res) ? res : []);
        setLoading(false);
      });
    }, []);

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
    <Box
      sx={{
        minHeight: '100vh',
        color: '#fff',
        background: 'linear-gradient(to bottom right, #4c1d95, #1e3a8a, #312e81)'
      }}
    >
      {/* Hero Section */}
      <Box component="section" sx={{ pt: 12, pb: 10, textAlign: 'center' }}>
        <Box sx={{ maxWidth: '56rem', mx: 'auto', px: 3 }}>
          <Typography
            sx={{
              fontSize: { xs: 48, md: 112 },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(to right, #facc15, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Magical Event Experiences
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 20, md: 24 },
              mb: 4,
              opacity: 0.9,
              maxWidth: '42rem',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Create unforgettable moments with Frolic. From grand galas to intimate gatherings, we make every event extraordinary.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              sx={{
                px: 6,
                py: 2,
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
                borderRadius: '9999px',
                background: 'linear-gradient(to right, #eab308, #ec4899)',
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  background: 'linear-gradient(to right, #facc15, #f472b6)',
                  boxShadow: "0 15px 35px rgba(0,0,0,0.5)"
                },
                transition: "all 0.3s ease",
              }}
              
              onClick={()=> navigate('add')}
            >
              Create Event Now
            </Button>

            <Button
            href='#view_events'
              sx={{
                px: 6,
                py: 2,
                fontSize: 18,
                fontWeight: 700,
                borderRadius: '9999px',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#fff',
                backdropFilter: 'blur(2px)',
                '&:hover': {
                  borderColor: '#facc15',
                  backgroundColor: 'violet'
                }
              }}
            >
              View Events
            </Button>
          </Box>
        </Box>
      </Box>

             {/* Upcoming Events */}
      <Box sx={{ py: 12, background: "rgba(255,255,255,.05)" }} id='view_events'>
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 3 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              sx={{
                fontSize: 48,
                fontWeight: 700,
                background:
                  "linear-gradient(to right, #facc15, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Upcoming Events
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              Discover our magical events waiting for you
            </Typography>
          </Box>



          {/* Card view */}
        <Box sx={{width:'100%' }}>
          <Grid container spacing={4} sx={{mx:-2}}>
  {events.map((event, index) => (
    <Grid item xs={12} sm={6} md={6} key={event.id}>
      <Box
        sx={{
          position: "relative",
          p: 4,
          pt: 5,
          height: "100%",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,.2)",
          background:
            index === 0
              ? "linear-gradient(to bottom right, rgba(168,85,247,.8), rgba(236,72,153,.8))"
              : index === 1
              ? "linear-gradient(to bottom right, rgba(16,185,129,.8), rgba(234,179,8,.8))"
              : index === 2
              ? "linear-gradient(to bottom right, rgba(59,130,246,.8), rgba(99,102,241,.8))"
              : index === 3
              ? "linear-gradient(to bottom right, rgba(236,72,153,.8), rgba(244,63,94,.8))"
              : "linear-gradient(to bottom right, rgba(99,102,241,.8), rgba(168,85,247,.8))",
          transition: ".5s",
          "&:hover": {
            transform: "scale(1.05)"
          }
        }}
      >
        {/* ID Badge */}
        <Box
          sx={{
            position: "absolute",
            top: -12,
            left: -12,
            px: 2,
            py: 0.5,
            borderRadius: "999px",
            background: "#000",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700
          }}
        >
          #{event.id}
        </Box>

        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          {event.title}
        </Typography>

        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {event.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: "999px",
              background: "#eab308",
              fontSize: 12,
              fontWeight: 700
            }}
          >
            {event.date}
          </Box>

          <Typography sx={{ mx: 2, color: "#facc15", fontWeight: 700 }}>
            {event.spots}
          </Typography>
        </Box>

        <Button
          fullWidth
          sx={{
            py: 2,
            mt: 'auto',
            borderRadius: 3,
            fontWeight: 700,
            color: '#fff',
            background:
              "linear-gradient(to right, #eab308, #ec4899)"
          }}
        >
          Book Now
        </Button>
      </Box>
    </Grid>
  ))}
</Grid>
        </Box>


        </Box>
      </Box>





      

      {/* Stats Section (Footer) */}
      <Box
        component="section"
        sx={{
          py: 10,
          background: 'linear-gradient(to right, #6b21a8, #1e40af)'
        }}
      >
        <Box sx={{ maxWidth: '72rem', mx: 'auto', px: 4 }}>
          <Grid container spacing={20} textAlign="center">
            {[
              ['500+', 'Events Hosted'],
              ['25K+', 'Happy Attendees'],
              ['98%', 'Success Rate'],
              ['50+', 'Venues Covered']
            ].map(([value, label], i) => (
              <Grid item xs={12} md={3} key={i}>
                <Typography
                  sx={{
                    fontSize: { xs: 36, md: 48 },
                    fontWeight: 700,
                    color: '#facc15',
                    mb: 1
                  }}
                >
                  {value}
                </Typography>
                <Typography sx={{ fontSize: 20, opacity: 0.9 }}>{label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Events;

// import { useEffect } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';

// import useMediaQuery from '@mui/material/useMediaQuery';
// import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';

// // project imports
// import Drawer from './Drawer';
// import Header from './Header';
// import Footer from './Footer';
// import Loader from 'components/Loader';
// import Breadcrumbs from 'components/@extended/Breadcrumbs';

// import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// // ==============================|| MAIN LAYOUT ||============================== //

// export default function DashboardLayout() {
//   const { menuMasterLoading } = useGetMenuMaster();
//   const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));


//   // hide footer for specific pages
//   const location = useLocation(); 

//   const hideFooterPaths = ['/Institutes/add', '/Departments/add', '/Events/add'];

//   const shouldHideFooter = hideFooterPaths.some((path) =>
//     location.pathname.startsWith(path)
//   );



//   // set media wise responsive drawer
//   useEffect(() => {
//     handlerDrawerOpen(!downXL);
//   }, [downXL]);

//   if (menuMasterLoading) return <Loader />;

//   return (
//     <Box sx={{ display: 'flex', width: '100%' }}>
//       <Header />
//       <Drawer />

//       <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
//         <Toolbar sx={{ mt: 'inherit' }} />
//         <Box
//           sx={{
//             ...{ px: { xs: 0, sm: 2 } },
//             position: 'relative',
//             minHeight: 'calc(100vh - 110px)',
//             display: 'flex',
//             flexDirection: 'column'
//           }}
//         >
//           <Breadcrumbs />
//           <Outlet />
//           {!shouldHideFooter && <Footer />}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

















import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

export default function DashboardLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const location = useLocation();

  // normalize path
  const normalizedPath = location.pathname.replace(/\/$/, '').toLowerCase();

  const hideFooterPaths = ['/institutes/add', '/departments/add', '/events/add'];
  const shouldHideFooter = hideFooterPaths.includes(normalizedPath);

  // responsive drawer
  useEffect(() => {
    handlerDrawerOpen(!downXL);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />

      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: 'inherit' }} />
        <Box
          sx={{
            ...{ px: { xs: 0, sm: 2 } },
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          <Outlet />
          {!shouldHideFooter && <Footer />}
        </Box>
      </Box>
    </Box>
  );
}

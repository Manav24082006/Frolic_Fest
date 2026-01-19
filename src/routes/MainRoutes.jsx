import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import Institutes from '../pages/extra-pages/Institutes/Institutes';
import Department from '../pages/extra-pages/Deparments/Deparments';
import AddInstitute from '../pages/extra-pages/Institutes/AddInstitute';
import AddDepartment from '../pages/extra-pages/Deparments/AddDepartment';
import Events from '../pages/extra-pages/Event/Events';
import AddEvents from '../pages/extra-pages/Event/AddEvents';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'Institutes',
      element: <Institutes/>
    },
    {
      path: 'Departments',
      element: <Department/>
    },
    {
      path: 'Institutes/add',
      element: <AddInstitute/>
    },
    {
      path: 'Departments/add',
      element: <AddDepartment/>
    },
    {
      path: 'Events',
      element: <Events/>
    },
    {
      path: 'Events/add',
      element: <AddEvents/>
    }
  ]
};

export default MainRoutes;

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import EventsListPage from './pages/EventsListPage';
import RegistrationPage from './pages/RegistrationPage';
import ViewPage from './pages/ViewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events" replace />, // Redirect from root to /events
  },
  {
    path: '/events',
    element: <EventsListPage />,
  },
  {
    path: '/register/:id',
    element: <RegistrationPage />,
  },
  {
    path: '/view',
    element: <ViewPage />,
  },
]);

function App() {
  return (
    <div className="m-2 border-2 border-black">
      <h1 className="text-2xl m-4 bold">Events</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

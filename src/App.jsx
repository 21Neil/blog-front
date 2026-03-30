import './App.css';
import { Outlet, ScrollRestoration, useLocation, useRouteError } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import { Stack } from '@mantine/core';
import Footer from './components/Footer/Footer';

function App() {
  const path = useLocation().pathname;
  const error = useRouteError();

  return (
    <Stack gap={0}>
      {path === '/' && error ? <Navbar home={true} /> : <Navbar />}
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Stack>
  );
}

export default App;

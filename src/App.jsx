import './App.css';
import { Outlet, ScrollRestoration, useLocation, useNavigation, useRouteError } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import { LoadingOverlay, Stack } from '@mantine/core';
import Footer from './components/Footer/Footer';

function App() {
  const path = useLocation().pathname;
  const error = useRouteError();
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading'

  return (
    <Stack gap={0}>
      {path === '/' && error ? <Navbar home={true} /> : <Navbar />}
      <Outlet />
      <Footer />
      <ScrollRestoration />
      <LoadingOverlay visible={isNavigating} />
    </Stack>
  );
}

export default App;

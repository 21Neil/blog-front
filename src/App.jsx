import './App.css';
import { Outlet, useLocation } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import { Stack } from '@mantine/core';
import Footer from './components/Footer/Footer';

function App() {
  const path = useLocation().pathname;

  return (
    <Stack gap='0'>
      {path === '/Home' ? <Navbar home={true} /> : <Navbar />}
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default App;

import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import { Stack } from '@mantine/core'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Stack>
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  )
}

export default App

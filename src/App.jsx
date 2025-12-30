import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import { Stack } from '@mantine/core'

function App() {

  return (
    <Stack>
      <Navbar />
      <Outlet />
    </Stack>
  )
}

export default App

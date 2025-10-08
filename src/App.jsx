import { BrowserRouter } from 'react-router'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={Signup} />
      <Route path="/home" Component={Home} />
      <Route path="*" Component={NotFound} />
    </Routes>
    </>
  )
}

export default App

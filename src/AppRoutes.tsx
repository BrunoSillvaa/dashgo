import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { SignIn } from './pages/SignIn'
import { CreateUser } from './pages/Users/create'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/users/create' element={<CreateUser />}/>
    </Routes>
  )
}
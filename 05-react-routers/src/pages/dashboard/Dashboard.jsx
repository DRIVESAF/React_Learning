import { Outlet } from 'react-router-dom'
import {NavLink} from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav className='py-4'>
      <NavLink to="profile" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
        
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard

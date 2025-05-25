import './App.css'
import SideMenu from './components/SideMenu.jsx'
import Home from './pages/Home/Home.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Users from './pages/Users/Users.jsx'
import Logout from './pages/Logout/Logout.jsx'
import { Link, Outlet } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: "", element: <SideMenu />,
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/Settings", element: <Settings /> },
      { path: "/Users", element: <Users /> },
      { path: "/Logout", element: <Logout /> }
    ],
  }
])

function App() {

  return (
    <>
      <div className="flex gap-40">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
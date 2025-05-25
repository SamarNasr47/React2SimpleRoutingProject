import '../App.css'
import { Link, Outlet } from 'react-router-dom'

export default function SideMenu() {
    return (
        <>
            <div className="panel w-1/5 h-dvh bg-blue-950">
                <h1 className="logo text-5xl text-gray-400 text-center p-2">LOGO</h1>
                <ul className="text-white p-3">
                    <li className="item"><Link to="/Home">Home</Link></li>
                    <li className="item"><Link to="/Settings">Settings</Link></li>
                    <li className="item"><Link to="/Users">Users</Link></li>
                    <li className="item"><Link to="/Logout">Logout</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

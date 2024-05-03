import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import './Dashboard.css'
import AdminNavbar from "./AdminNavbar"

const AdminLayout = () => {
    return(
        <>
        <div className="main-container">
            <AdminNavbar/>
            <Outlet/>
        </div>
        
        
        </>
    )
}

export default AdminLayout
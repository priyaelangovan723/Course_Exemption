import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import './Dashboard.css'

const Layout = () => {
    return(
        <>
        <div className="main-container">
            <Sidebar/>
            <Outlet/>
        </div>
        
        
        </>
    )
}

export default Layout
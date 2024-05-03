import React from "react";
import SigninForm from "./Components/SigninForm";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SigninAdmin from "./Components/SigninAdmin";
import AdminDashboard from "./Components/AdminDashboard";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import RequestForm from "./Components/RequestForm";
import YourRequests from "./Components/YourRequests";
import TrackRequest from "./Components/TrackRequest";
import AdminLayout from "./Components/AdminLayout";
import AdminRequests from "./Components/AdminRequests";
import AdminAcceptedreq from "./Components/AdminAcceptedreq";
import ViewFullreq from "./Components/ViewFullreq";
import RejectedReq from "./Components/RejectedReq";
import Analytics from "./Components/Analytics";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <SigninForm/>
    },
    {
      path : "/dashboard",
      element : <Layout/>,
      children: [
        {path:"/dashboard/",element: <Dashboard/>},
        {path:"/dashboard/add-request", element: <RequestForm/>},
        {path:"/dashboard/your-request",element: <YourRequests/>},
        {path:"/dashboard/track-request",element: <TrackRequest/>}
       
      ]
    },
    {
      path : "/admin/signin",
      element : <SigninAdmin/>
    },
    {
      path : "/admin/",
      element : <AdminLayout/>,
      children: [
        {path:"/admin/dashboard",element: <AdminDashboard/>},
        {path:"/admin/view-requests", element: <AdminRequests/>},
        {path:"/admin/accepted-requests", element: <AdminAcceptedreq/>},
        {path:"/admin/view-full-req",element:<ViewFullreq/>},
        {path:"/admin/rejected-requests",element:<RejectedReq/>},
        {path:"/admin/analytics",element:<Analytics/>}
      ]

    },
    
    
  ])
  return(
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/signin" element={<SigninAdmin />} />
      </Routes>
    </BrowserRouter> */}
  <RouterProvider router = {router}/>
  </>
  )
  
}
export default App
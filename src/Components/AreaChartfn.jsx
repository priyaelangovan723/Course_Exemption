'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from "recharts";
const internreport = [
    {
        "id": 8446,
        "Student": "PRIYADHARSHINI E(7376212AD176)-NANDHA INFOTECH-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 4,
        "Year of study": "Second",
        "Special lab": "SLB056-XR STUDIO-PRODUCT DEVELOPMENT",
        "Sector": "Private",
        "Industry Address Line1": "Gandhipuram",
        "City": "Coimbatore",
        "State": "Tamilnadu",
        "Postal Code": 641012,
        "Country": "India",
        "Industry website": "www.nandhainfotech.com",
        "Industry contact details": "info@nandhainfotech.com",
        "IQAC Verification": "Approved"
    },
    {
        "id": 9446,
        "Student": "DHARANI E-NANDHA INFOTECH-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 6,
        "Year of study": "Second",
        "Special lab": "SLB056-XR STUDIO-PRODUCT DEVELOPMENT",
        "Sector": "Private",
        "Industry Address Line1": "Gandhipuram",
        "City": "Coimbatore",
        "State": "Tamilnadu",
        "Postal Code": 641012,
        "Country": "India",
        "Industry website": "www.nandhainfotech.com",
        "Industry contact details": "info@nandhainfotech.com",
        "IQAC Verification": "Approved"
    }
];
const AreaChartfn = () => {
    const privatesec = internreport.filter((user)=>user.Sector === "Private")
    console.log(privatesec.length)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={600} height={400} data={privatesec}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey= {privatesec.length} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Duration" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
    )
}
export default AreaChartfn
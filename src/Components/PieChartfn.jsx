import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const requests = [
    {
        "id": 9446,
        "Student": "PRIYADHARSHINI-SURVEY SPARROW-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 90,
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
        "IQAC Verification": "Approved",
        "rewards": "No",
        "elective chosen": "6",
        "status": "Rejected",
        "timestamp": "4/12/2024, 10:04:02 AM"
    },
    {
        "id": 1005,
        "Student": "PRIYADHARSHINI-GROOTAN-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 90,
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
        "IQAC Verification": "Approved",
        "rewards": "No",
        "elective chosen": "7",
        "status": "Approved",
        "timestamp": "4/12/2024, 10:10:02 PM"
    },
    {
        "id": 1025,
        "Student": "PRIYADHARSHINI-GROOTAN-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 90,
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
        "IQAC Verification": "Approved",
        "rewards": "No",
        "elective chosen": "8",
        "status": "Approved",
        "timestamp": "4/12/2024, 10:10:02 PM"
    },
    {
        "id": 1015,
        "Student": "PRIYADHARSHINI-GROOTAN-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration": 90,
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
        "IQAC Verification": "Approved",
        "rewards": "No",
        "elective chosen": "8",
        "status": "Pending",
        "timestamp": "4/12/2024, 10:10:02 PM"
    }
];

const countRequestsByStatus = requests.reduce((acc, request) => {
    const status = request.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
}, {});
console.log(countRequestsByStatus)
const dataPie = Object.keys(countRequestsByStatus).map(status => ({
    name: status,
    value: countRequestsByStatus[status],
}));

console.log(dataPie)

const COLORS = ['#FF6B6B', '#48BB78', '#3182CE'];

const BarChartComponent = () => {
    return (
        <div >

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={dataPie}
                        cx="50%"
                        cy="60%"
                        outerRadius={105}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {Object.entries(dataPie).map((key, value) => (
                            <Cell key={`cell-${value}`} fill={COLORS[value % COLORS.length]} />
                        ))}
                    </Pie>
                    <text x="50%" y={30} textAnchor="middle" dominantBaseline="middle" fill='lightslategrey'>
                        Request Status
                    </text>
                    <Tooltip />
                    <br></br>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;

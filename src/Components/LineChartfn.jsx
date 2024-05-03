import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './Analytics.css'
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
        "timestamp": "4/11/2024, 10:04:02 AM"
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
        "timestamp": "4/14/2024, 10:10:02 PM"
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
        "status": "Approved",
        "timestamp": "4/13/2024, 10:10:02 PM"
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
        "status": "Approved",
        "timestamp": "4/13/2024, 10:10:02 PM"
    }
];

// Function to parse the timestamp and extract the date component
const parseTimestamp = timestamp => {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

// Grouping requests by date and counting the number of requests for each date
const countRequestsByDate = requests.reduce((acc, request) => {
    const date = parseTimestamp(request.timestamp);
    acc[date] = (acc[date] || 0) + 1;
    return acc;
}, {});

// Transforming the grouped data into an array of objects
const data = Object.keys(countRequestsByDate).map(date => ({
    date,
    requests: countRequestsByDate[date],
}));

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <text x="50%" y={30} textAnchor="middle" dominantBaseline="middle" className='title' fill='lightslategray'>
                    Overview
                </text>
                <XAxis dataKey="date" />
                {/* <YAxis /> */}
                <Tooltip />
                <Area type="monotone" dataKey="requests" stroke="rgb(2,75,122)" fill=" rgb(2,75,122)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;

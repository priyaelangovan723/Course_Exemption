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
  Cell // Import Cell from recharts
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

const countRequestsByElective = requests.reduce((acc, request) => {
  const elective = request["elective chosen"];
  acc[elective] = (acc[elective] || 0) + 1;
  return acc;
}, {});

const data = Object.keys(countRequestsByElective).map((elective, index) => ({
  elective,
  requests: countRequestsByElective[elective],
  color: ['rgb(2,75,122)', 'rgb(68,165,194)', 'rgb(255,174,73)', 'rgb(0,98,204)'][index], // Add more colors as needed
}));

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x="50%" y={30} textAnchor="middle" dominantBaseline="middle" fill='lightslategrey'>
           Elective Requests
        </text>
        <XAxis dataKey="elective" />

        <Tooltip barSize={25} />
        <Legend />
        <Bar dataKey="requests" barSize={35} >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

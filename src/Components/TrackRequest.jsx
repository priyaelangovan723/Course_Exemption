import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Dashboard.css'
import './TrackRequest.css'
import './YourRequests.css'
import './AdminRequests.css'
const TrackRequest = () => {
    const [requests, setRequests] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([])
    const [searchValue, setSearchValue] = useState('');
    
    const [selectedRequestId, setSelectedRequestId] = useState(null);
    const itemsPerPage = 10;
    useEffect(() => {
        const initialData = [{
        "id": 9446,
        "Student": "PRIYADHARSHINI-SURVEY SPARROW-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration(in weeks)": 6,
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
        "timestamp": "4/12/2024, 10:04:02 AM",
        "remarks" : "Please upload correct file"
    }, {
        "id": 1005,
        "Student": "PRIYADHARSHINI-GROOTAN-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration(in weeks)": 6,
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
        "Duration(in weeks)": 6,
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
    },{
        "id": 1015,
        "Student": "PRIYADHARSHINI-GROOTAN-Start Date:2023-01-26 End Date:2023-02-26",
        "Start date": "2023-01-26",
        "End date": "2023-02-26",
        "Duration(in weeks)": 6,
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
    }]
    setRequests(initialData)
        setItems(initialData)
    }, [])
    const searchfn = (e) => {
        const getSearch = e.target.value;
        setSearchValue(getSearch)

        if (getSearch.length > 0) {
            const filteredItems = requests.filter((request) =>
                String(request.id).includes(searchValue)
            );
            setRequests(filteredItems)
        }
        else{
            setRequests(items)
        }
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentRequests = requests.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    


    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    return (
        <>
            <div className="content-container">
                <h1>Track Your Submitted Request</h1>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />

                    <input placeholder="Search here" onChange={searchfn} value={searchValue}></input>
                </div>
                <div className="table1-container">
                    <div className="table-wrapper">
                        <table>
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Student</th>
                                    <th>Duration in weeks</th>

                                    <th>Rewards Claimmed</th>
                                    <th>Elective Chosen</th>
                                    <th>Status</th>
                                    <th>Remarks</th>
                                    <th>Submitted On</th>
                                </tr>
                            </thead>
                            {requests.map((request) => (
                                <>

                                    <tbody>
                                        <tr>
                                            <td>{request.id}</td>
                                            <td>{request.Student}</td>
                                            <td>{request["Duration(in weeks)"]}</td>

                                            <td>{request.rewards}</td>
                                            <td>{request["elective chosen"]}</td>
                                            <div className={request.status==="Approved"? "approved": "rejected"} >
                                                
                                                <td><span id="status-text">{request.status}</span></td>
                                                
                                            </div>
                                            {request.status==="Approved"?
                                            <td>{}</td>:
                                            <td>{request.remarks}</td>
                                            }

                                            <td>{request.timestamp}</td>
                                        </tr>
                                    </tbody>
                                </>
                            ))}
                        </table>
                    </div>
                    <div className="pagination">
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={currentPage === 1 ? "disabled" : "prev"}>Previous</button>

                    <span className="total-pages">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className={currentPage === totalPages ? "disabled" : "next"}>Next</button>
                </div>
                </div>

            </div>
        </>

    )
}
export default TrackRequest
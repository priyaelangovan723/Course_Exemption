import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { useUser } from "./UserContext";
import './Dashboard.css'
import './RequestForm.css'
import axios from "axios";


const RequestForm = () => {
    const [student, setStudent] = useState(null);
    const [rewards, setRewards] = useState('')
    const [elective, setElective] = useState('')
    const navigate = useNavigate();
    const [errors, setErrors] = useState('')
    const [datapass, setDatapass] = useState(null)
    const [file, setFile] = useState(" ");
    
    const [internreport, setReport] = useState([])
    const [request, setRequest] = useState([])
    const location = useLocation()
    const name = location.state?.name
    const [postdata, setPostdata] = useState({
        
              "id": 0,
              "Student": " ",
              "Start date": " ",
              "End date": " ",
              "Duration(in weeks)": 0,
              "Year of study": " ",
              "Special lab": " ",
              "Sector": " ",
              "Industry Address Line1": " ",
              "City": " ",
              "State": " ",
              "Postal Code": 0,
              "Country": " ",
              "Industry website": " ",
              "Industry contact details": " ",
              "IQAC Verification": " ",
              "rewards": " ",
              "elective chosen": " ",
              "status": " ",
              "timestamp": " ",
              "fileData": {
                "id": 0,
                "name": " ",
                "size":0,
                "type": "application/pdf",
                "lastModified": 0,
                "lastModifiedDate": " ",
                "webkitRelativePath": ""
              },
              "remarks": " ",
              "path": " "
            }
          
    )


    console.log(location)
    console.log(name)

    const options = [
        { rlabel: "Yes" },
        { rlabel: "No" }
    ];

    const electives = [
        { "Course No": "6" },
        { "Course No": "7" },
        { "Course No": "8" },
        { "Course No": "9" }
    ]

    const labels = [
        { label: "Student" },
        { label: "Duration(in weeks)" },
        { label: "Industry Address Line1" },
        { label: "City" },
        { label: "State" },
        { label: "Postal Code" },
        { label: "Country" },
        { label: "IQAC Verification" },

    ]



    useEffect(() => {
        axios.get('http://127.0.0.1:3000/get-internreport').
            then(res => {
                console.log("Response data", res.data)
                setReport(res.data)
            })
            .catch(err => console.log(err))

          axios.get('http://127.0.0.1:3000/get-requests').then(res => {
                console.log("Requests", res.data)
                setRequest(res.data)
            })
            .catch(err => console.log(err))
    })
    const newdata = internreport.filter((report) => report.Student.includes(name))
    console.log(newdata)

    const handleSelect = (e) => {
        const selectedstudent = newdata.find(student => student.id === parseInt(e.target.value));
        setStudent(selectedstudent);
        setErrors({ ...errors, Duration: '' })
    };

    const handleRewards = (e) => {
        setRewards(e.target.value)
        setErrors({ ...errors, rewards: '' })
    }

    const handleElective = (e) => {
        setElective(e.target.value)
    }



    useEffect(() => {
        // const obj = { "rewards": rewards, "elective chosen": elective, "status": "in-progress" , "fileData": file};
        // const merged = { ...student, ...obj };
        // console.log(merged);

    }, [student, rewards, elective, file]);



    const addEntry = async (e) => {
        e.preventDefault()
        let err = {}
        if (student["Duration(in weeks)"] < 6) {
            err["Duration(in weeks)"] = "Duration should be atleast 6 weeks."
        }
        if (rewards == "Yes") {
            err.rewards = "This internship is not eligible for course exemption"
        }
        const electiveCheck = internreport.filter((user) => user.Student == student.Student && user.elective == elective && user.status != "Rejected")
        console.log("Elective check is", electiveCheck)
        if (electiveCheck.length > 0) {
            err.elective = "Request already exists"
        }


        const formData = new FormData();

        
        console.log(student.id)
        formData.append("id", student.id);
        formData.append("file", file);
        console.log(student.id, file);

        const result = await axios.post(
            "http://localhost:3000/upload-files",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          let path;
          console.log("Upload result is:",result);
          if (result.data.status == "ok") {
            alert("Uploaded Successfully!!!");
            path = result.data.filepath
            console.log(path)
          }
          

        
        console.log("File name is", file.name)
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        console.log("Time is", currentDateTime);
        const formDataValues = {
            "id": student.id,
            "name": file.name,
            "size": file.size,
            "type": file.type,
            "lastModified": file.lastModified,
            "lastModifiedDate": file.lastModifiedDate,
            "webkitRelativePath": file.webkitRelativePath,
            

        };
        const obj = { "rewards": rewards, "elective chosen": elective, "status": "in-progress", "timestamp": currentDateTime, "fileData": formDataValues, "remarks": " ", "path": path };
        const merged = { ...student, ...obj };
        console.log("Merged is:", merged);
        setDatapass({ ...merged })
        if (file.name == null) {
            err.File = "Please Upload the file"
        }
        if (Object.keys(err).length > 0) {
            setErrors({ ...err })
            return
        }
            setPostdata({...merged})
            const res = await axios.post('http://127.0.0.1:3000/add-request', {merged})
            console.log("Post created:", res.data)

           
        
        navigate('/dashboard/your-request', { state: merged })

    }

    const handleFile = (e) => {

    }
    return (

        <>
            <div className="content-container">
                <h1>Internship Course Exemption Form</h1>
                <form >
                    <table className="form-table">

                        <tbody>

                            {labels.map((labelele) => (
                                labelele.label !== "Duration(in weeks)" ?
                                    <tr key={labels.label}>
                                        <td className="label-cell" id="form-label">{labelele.label}</td>
                                        <td>
                                            {student == null && labelele.label != "Duration(in weeks)" ?
                                                <select className="form-select" onChange={handleSelect}>
                                                    <option value="-" className="dropdown-menu">---</option>
                                                    {newdata.map((option) => (
                                                        <option key={option.id} value={option.id} className="dropdown-menu">{option[labelele.label]}</option>
                                                    ))

                                                    }

                                                </select>

                                                :
                                                <select className="form-select" value={student ? student[labelele.label] : ''} onChange={() => { }}>
                                                    <option value="-" className="dropdown-menu">---</option>
                                                    {student && <option value={student[labelele.label]}>{student[labelele.label]}</option>}
                                                </select>

                                            }




                                        </td>
                                    </tr>
                                    :
                                    <tr>
                                        <td className="label-cell" id="form-label">{labelele.label}</td>
                                        <td>
                                            <select className="form-select" value={student ? student[labelele.label] : ''} onChange={() => { }}>
                                                <option value="-" className="dropdown-menu">---</option>
                                                {student && <option value={student[labelele.label]}>{student[labelele.label]}</option>}
                                            </select>
                                            {errors["Duration(in weeks)"] ? <div id="Error">{errors["Duration(in weeks)"]}</div> : null}
                                        </td>
                                    </tr>
                            ))}
                            <tr>
                                <td className="label-cell" id="form-label">Specify Whether Claimmed Rewards?</td>
                                <td>
                                    <select className="form-select" onChange={handleRewards}>
                                        <option value="-" className="dropdown-menu">---</option>
                                        {options.map((option) => (
                                            <option key={option.id} value={option.rlabel} className="dropdown-menu">{option.rlabel}</option>
                                        ))

                                        }



                                    </select>
                                    {errors.rewards ? <div id="Error">{errors.rewards}</div> : null}
                                </td>

                            </tr>
                            <tr>
                                <td className="label-cell" id="form-label">Choose an elective to exempt</td>
                                <td>
                                    <select className="form-select" onChange={handleElective}>
                                        <option value="-" className="dropdown-menu">---</option>
                                        {electives.map((option) => (
                                            <option key={option.id} value={`${option["Course No"]}`} className="dropdown-menu">{`${option["Course No"]}`}</option>
                                        ))

                                        }



                                    </select>
                                    {errors.elective ? <div id="Error">{errors.elective}</div> : null}
                                </td>


                            </tr>
                            <tr>
                                <td className="label-cell" id="form-label">Upload Document Proof</td>



                                <td>
                                    <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
                                    {errors.File ? <div id="Error">{errors.File}</div> : null}
                                </td>
                            </tr>

                        </tbody>


                    </table>
                </form>
                <div >
                    <button className="form-btn" id="add-entry" onClick={addEntry}>Submit Request</button>


                </div>

                {/* {student && (
                    <div>
                        <h2>Selected Option Details:</h2>
                        <h2>{rewards}</h2>
                        <h3>{elective}</h3>
                        <h4>{student.Duration}</h4>
                        <pre>{JSON.stringify(student, null, 2)}</pre>
                    </div>
                )} */}
            </div>

        </>
    );
};
export default RequestForm
import { useEffect, useState } from "react";
import axios from 'axios';

const AllStudents = () => {
    const [students, setStudents] = useState([])        
    
    useEffect(() => {
    const fetchStudents = async () => {
        const res = await axios.get(`http://localhost:3005/shaybah/students`);
        setStudents(res.data);
    };
    fetchStudents();
    }, [])

    return ( 
        <div className="all-students">
            <h1>Students Catalogue</h1>
            <ul className="student-details">
            {students.map((student) => (
                                        <li key={student._id}>
                                            <p>{student.fullname}</p>
                                            <p>{student.department}</p>
                                            <p>{student.cgpa}</p>
                                            <p>{student.email}</p>
                                        </li>
                                    ))}

            </ul>
        </div>
     );
}
 
export default AllStudents;


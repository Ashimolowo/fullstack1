import { useState } from "react";
import axios from "axios";

const AddStudent = ({ onStudentCreated }) => {
    const [studentDetails, setStudentDetails] = useState({
        fullname: '',
        department: '',
        email: '',
        password: '', // changed to an empty string
        cgpa: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(studentDetails);
        try {
            // Send the studentDetails directly
            const response = await axios.post('http://localhost:3005/shaybah/students', studentDetails);
            onStudentCreated(response.data);
        } catch (error) {
            console.error("Error adding student:", error);
            console.error("Error adding student:", error.toJSON());

        }
    };

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="fullname e.g. Ashimolowo Shaybah Ridwan"
                    value={studentDetails.fullname}
                    onChange={e => setStudentDetails({ ...studentDetails, fullname: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Department e.g. Computer Engineering"
                    value={studentDetails.department}
                    onChange={e => setStudentDetails({ ...studentDetails, department: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="ashimolowo@gmail.com"
                    value={studentDetails.email}
                    onChange={e => setStudentDetails({ ...studentDetails, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={studentDetails.password}
                    onChange={e => setStudentDetails({ ...studentDetails, password: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="CGPA"
                    value={studentDetails.cgpa}
                    onChange={e => setStudentDetails({ ...studentDetails, cgpa: Number(e.target.value) })}
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;

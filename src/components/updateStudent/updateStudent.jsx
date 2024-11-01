import { useState, useEffect } from "react";
import axios from "axios";

const UpdateSudent = ({studentId, onStudentUpdated}) => {
    const [student, setStudent] = useState(null)

    useEffect(() => {
        const fetchStudent = async () => {
            const res = await axios.put(`http://localhost:3005/shaybah/students/&{studentId}`);
            setStudent(res.data);
        };
        fetchStudent();
        }, [studentId]);

        const handleSubmit = async (e) => {
            e.preventDefault();
            const res = await axios.put(`http://localhost:3005/shaybah/students/${studentId}`);

            onStudentUpdated(student)
        }
        if(!student) return `student not found`
    return ( 
      <div>
              <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="fullname e.g.  Ashimolowo Shaybah Ridwan"
                 value={student.fullname}
                 onChange={ e => setStudent({...student, fullname: e.target.value  })} 
                
                 />
                <input type="text" 
                placeholder="computer engineering" 
                value={student.department}
                onChange={ e => setStudent({...student, department: e.target.value  })} 
                />
                <input type="email" name="" id="" 
                placeholder="ashimolowo@gamail.com"
                 value={student.email}
                 onChange={ e => setStudent({...student, email: e.target.value  })}                 
                />
                <input type="password" name="" id="" 
                placeholder="password"
                value={student.password}
                onChange={ e => setStudent({...student, password: e.target.value})}
                />
                <input type="number" 
                placeholder="CGPA"
                value={student.cgpa}
                onChange={ e => setStudent({...student, cgpa: e.target.value  })} 
               
                />
                <button type="submit">Update Student details</button>
            </form>
      </div>
     );
}
 
export default UpdateSudent;


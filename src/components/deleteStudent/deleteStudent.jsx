import axios from 'axios';
const DeleteStudent = ({studentId, onStudentDeleted}) => {
    const handleDelete = async () => {
   await axios.delete(`http://localhost:3005/shaybah/students/${studentId}`);

      onStudentDeleted(studentId)
    }
    
    return ( 
        <div>
            <button onClick={handleDelete}>Delete Student</button>
        </div>
     );
}
 
export default DeleteStudent;

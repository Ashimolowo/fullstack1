import React, { useState } from 'react';
import AllStudents from './components/allstudents/allStudents';
import UpdateSudent from './components/updateStudent/updateStudent';
import AddStudent from './components/addstudent/addStudent';
import DeleteStudent from './components/deleteStudent/deleteStudent';

const App = () => {
  const [studentsUpdated, setStudentsUpdated] = useState(false);
  const [studentIdToUpdate, setStudentIdToUpdate] = useState(null);
  const handleAddStudent = () => setStudentsUpdated(!studentsUpdated);
  const handleUpdateStudent = () => setStudentsUpdated(!studentsUpdated);
  const handleDeleteStudent = () => setStudentsUpdated(!studentsUpdated)


  
  return ( 
    <div>
      <div>
        <AddStudent onStudentCreated = {handleAddStudent} />
        <AllStudents />
        {
          studentIdToUpdate && 
              <UpdateSudent studentId={studentIdToUpdate}
              onStudentUpdated={handleUpdateStudent}
              />
        }
        <DeleteStudent studentId={studentIdToUpdate}
        onStudentDeleted={handleDeleteStudent}/>
      </div>
    </div>
   );
}
 
export default App;


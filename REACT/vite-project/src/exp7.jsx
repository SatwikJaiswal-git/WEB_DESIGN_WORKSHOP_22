import "./Exp7.css";

function Student({ name, course, marks }) {
  return (
    <div className="student-info">
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

function Exp7Student() {
  return (
    <div className="exp7-container">
      <h1>Student Information</h1>
      <Student name="Rahul Sharma" course="Computer Science" marks="85" />
      <Student name="Anita Verma" course="Information Technology" marks="92" />
      <Student name="Rohan Gupta" course="Electronics" marks="78" />
    </div>
  );
}

export default Exp7Student;
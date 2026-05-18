import { useState } from "react";
import "./Exp9.css";

function Exp9Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const newUser = { name, email };
    setUsers([...users, newUser]);
    alert("Registration Successful!");

    // Clear inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="exp9-container">
      <h1>Registration Form</h1>
      
      <div className="form-box">
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Register</button>
      </div>

      <div className="users-box">
        <h2>Registered Users ({users.length})</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exp9Register;
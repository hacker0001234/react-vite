import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../styles/addUser.css"

function AddUser() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/users/add", user);
            console.log("✅ Користувач доданий:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("❌ Помилка під час додавання користувача:", error);
        }
    };

    const redirect = () =>{
    navigate('/users');
    }
    return (
      <div className="form-container">
          <form onSubmit={onSubmit} className="adduser">
              <h1>Adding new user</h1>
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
              <button type="submit" className="add">Add User</button>
              <button className="usersbtn" onClick={redirect}>All users-></button>
          </form>
      </div>
    );
}

export default AddUser;

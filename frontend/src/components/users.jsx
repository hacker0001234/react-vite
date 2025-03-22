import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/users.css"

function AllUsers() {
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log("Error: " + error));
    }, []);

    const handleDelete = async (e) => {
        const id_for_del = e.target.dataset.id;

        try {
            await axios.delete(`http://localhost:8080/users/${id_for_del}`);
            window.location.reload();
        } catch (error) {
            console.log("Error deleting user:", error);
        }
    };

    const redirect = () => {
        navigate("/");
    };

    return (
        <div className="all">
            <h2>Users:</h2>
            <button onClick={redirect}>Add user→</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.id}) </span>
                        <span>User name:</span> {user.name}
                        <span>  User email:</span> {user.email}
                        <span> User password:</span> {user.password}
                        <span className="delete" data-id={user.id} onClick={handleDelete}>Delete</span>
                        <p></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllUsers;

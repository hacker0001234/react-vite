import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from "./components/addUser.jsx";
import Users from "./components/users.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AddUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
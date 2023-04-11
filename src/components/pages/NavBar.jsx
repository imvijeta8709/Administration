import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export default function NavBar() {
    const navigate = useNavigate();

    const logout = () => {
        toast.success("User Logout Successfully",{
            position:"top-right"
          })
        window.localStorage.removeItem('user')
        navigate('/'); //redirect to login page
    }

    return (
        <React.Fragment>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">React Project</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/showuser">Show User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/updateuser">Update User</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={logout}>Logout</span>
                            </li>
                        </ul>
                </div>
            </div>
            </nav>

        </React.Fragment>
    )
}

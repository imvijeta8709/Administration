import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/login.css"
import toast from 'react-hot-toast';

export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        //check if token found redirect to dashboard
        let login = localStorage.getItem('user')
        if (login) {
            navigate('/dashboard')
        }
        else{
            navigate('/')
        }
    }, [])


    const login = () => {
        const emailId = "shivani@gmail.com";
        const paasword = "shivani";

        if (email == emailId && pass == paasword) {
            toast.success("Login Successfully",{
                position:"top-right"
            })
            window.localStorage.setItem("user", (true))
            setEmail("")
            setPass("")
            navigate('/dashboard')
        }
        else {
            toast.error("Invalid Details...",{
                position:"top-right"
            })
            setEmail("")
            setPass("")
            navigate('/')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    console.log(email)
    console.log(pass)
    return (
        <React.Fragment>
            <div id="login" className="col-sm-4">
                <h3 style={{ textAlign: "center" }}><u>Login Here..</u></h3>
                <form>
                    UserName:<br /><input type="email" name="email" placeholder="Enter email or UserName..." className="form-control" value={email}
                        onChange={handleEmail} />
                    Password:<br /><input type="password" name="password" placeholder="Type Password Here..." className="form-control" value={pass}
                        onChange={handlePass} />
                    <input type="button" className="text-light btn btn-primary mt-2 form-control" onClick={login} value="Login" /><br />
                </form>
            </div>
        </React.Fragment>
    )
}
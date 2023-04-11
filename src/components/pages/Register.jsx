import React, { useState } from 'react'
import "../styles/register.css"
import NavBar from './NavBar'
import toast from 'react-hot-toast';


export default function Register() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [gender,setGender]=useState("")
const [status,setStatus]=useState("")



function register(){
let item={name,email,gender,status}

fetch("https://gorest.co.in/public/v2/users",{
method:"POST",
headers:{"Content-Type":"application/json","Authorization":"Bearer d13365ff2216e6f61e8d76bf0ab76c3172cf654f69dbc75be1453be0fabd18c5"},
body:JSON.stringify(item)
}).then((response)=>{
  console.log(response)
  if(response.ok){
    toast.success("User registered Successfully",{
      position:"top-right"
  })
    setName("")
    setEmail("")
    setGender("")
    setStatus("")
  }
  else if(!response.ok){
    return response.text().then(text=>{
      const errorText = JSON.parse(text)
       toast.error(`${errorText[0].field} ${errorText[0].message}`)
    })
  }
}).then((data)=>{
}).catch((Error)=>{
  console.log(Error)
})
}

const statusData=["Active", "Inactive"]
  return (
    <React.Fragment>
      <NavBar/>
      <div id="register" className="col-sm-5">
        <h3 style={{ textAlign: "center" }}><u>Registration page</u></h3>
        <form>
          Name:<br /><input type="text" name="name" placeholder="Enter Your Name..." required className="form-control" 
          onChange={(e)=>setName(e.target.value)} value={name}/>
          Email:<br /><input type="email" name="email" placeholder="Enter Your Email..." className="form-control" 
          onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
          Gender: <input type="radio" id="male" name="gender" value="male"
             className="app-check" onChange={(e)=>setGender(e.target.value)} checked={gender==="male"}/>
            <label for="male">Male</label> &nbsp;
            <input type="radio" id="female" name="gender" value="female"
             className="app-check" onChange={(e)=>setGender(e.target.value)} checked={gender==="female"}/>
            <label for="female">Female</label><br/><br/>
          <select onChange={(e)=>setStatus(e.target.value)} className='form-control' value={status}>
            <option>--Select Option--</option>
            {statusData.map((item)=>{
              return(
                <option value={item}>{item}</option>
              )
            })}

          </select>
          <button className="text-light btn btn-primary my-2" onClick={register} type="button" >Register</button>
        </form>
      </div>
    </React.Fragment>
  )
}

import React, { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/updateuser.css"
import NavBar from "./NavBar"
import toast from 'react-hot-toast';

export default function UpdateUser() {
    
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [gender,setGender]=useState("")
const [status,setStatus]=useState("")
const navigate=useNavigate();

useEffect(()=>{
    let Id=window.localStorage.getItem('Id')
    fetch("https://gorest.co.in/public/v2/users/"+Id,{
        method:"GET",
        headers:{"Content-Type":"application/json","Authorization":"Bearer d13365ff2216e6f61e8d76bf0ab76c3172cf654f69dbc75be1453be0fabd18c5"},
        }).then((response)=>{
          if(response.ok){
            return response.json();
          }
        }).then((data)=>{
          
            setName(data.name)
            setEmail(data.email)
            setGender(data.gender)
            setStatus(data.status)
        }).catch((error)=>{
          console.log(error)
        })
},[])

console.log(status)

function modify(){
let item={name,email,gender,status}
let Id=window.localStorage.getItem('Id')

fetch("https://gorest.co.in/public/v2/users/"+Id,{
method:"PUT",
headers:{"Content-Type":"application/json","Authorization":"Bearer d13365ff2216e6f61e8d76bf0ab76c3172cf654f69dbc75be1453be0fabd18c5"},
body:JSON.stringify(item)
}).then((response)=>{
  if(response.ok){
    toast.success("Data Updated Successfully",{
      position:"top-right"
    })
    setName("")
    setEmail("")
    setGender("")
    setStatus("")
    navigate('/showuser')
    return response.json();
  }
}).then((data)=>{

}).catch((error)=>{
  console.log(error)
})

}
const statusData=["Active", "Inactive"]

  return (
    <React.Fragment>
      <NavBar/>
      <div id="modify" className="col-sm-5">
        <h3 style={{ textAlign: "center" }}><u>Update Data Here..</u></h3>
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
            <select onChange={(e)=>setStatus(e.target.value)} className='form-control'>
            {statusData.map((item)=>{
              return(
                <option value={item.toLowerCase()} selected={item.toLowerCase()===status}>{item}</option>
              )
            })}

          </select>
          <button className="text-light btn btn-primary my-2" onClick={modify} type="button" >Save Updated Data</button>
        </form>
      </div>
    </React.Fragment>
  )
}
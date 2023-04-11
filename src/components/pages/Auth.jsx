import React,{ useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Auth(props) {
    const {Component}=props
    const navigate=useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('user')
        if (!login) {
            navigate('/')
        }
    })


  return (
    <div>
      <Component/>
      </div>
  )
}

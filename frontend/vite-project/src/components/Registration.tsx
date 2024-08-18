import React, { useState } from 'react'
import {handleInput,base_url,setToken} from '../utils/utils'
import { useNavigate } from 'react-router-dom'

interface login{
  showAlert:(msg:String,color:string)=>void,
  setLogged:(value:boolean)=>void
}

export default function Registration({showAlert,setLogged}:login) {
  const[user,setUser]=useState({
    name:"",
    email:"",
    password:"",
})

const navigate = useNavigate()

async function regUser(){
    console.log("user",user)
    let req = await fetch(base_url+'/api/create_user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'json',
        },
        body:JSON.stringify(user)
    })
    let res = await req.json()
    console.log("res",res)
    if (res && res._id){
        console.log("Success")
        showAlert("REGISTRATION SUCCESSFULL","fcgreen")
        setToken(res.token)
        setLogged(true)
        navigate('/home')
    }else{
        console.log("Failure")
        showAlert(res.msg.toUpperCase(),"fcred")
    }
}

  return (
    <>
      <div className="grid place-items-center h-full">
          <div className="border rounded-sm bxsh1 p-5">
              <h4 className="p-4 text-xl">REGISTRATION</h4>
              <div className="flex flex-col items-center justify-center">
                  {/* <label>Input</label> */}
                  <input className="text-center border-b m-4 bg-none text-lg outline-none text-gray-600" type="text" placeholder="Username" name="name" onChange={(e)=>handleInput(e,user,setUser)}/>
                  <input className="text-center border-b m-4 bg-none text-lg outline-none text-gray-600" type="text" placeholder="Email" name="email" onChange={(e)=>handleInput(e,user,setUser)}/>
                  <input className="text-center border-b m-4 text-lg outline-none text-gray-600" type="text" placeholder="Password" name="password" onChange={(e)=>handleInput(e,user,setUser)}/>
                  <button className="button-61 w-24 m-5" role="button" onClick={regUser}>Register</button>
              </div>
          </div>
      </div>
    </>
  )
}

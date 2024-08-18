import { handleInput ,base_url,setToken } from '../utils/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface login{
    showAlert:(msg:String,color:string)=>void,
    setLogged:(value:boolean)=>void
}

export default function Login ({showAlert,setLogged}:login){
    const[user,setUser]=useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate()

    async function loginUser(){
        console.log("user",user)
        let req = await fetch(base_url+'/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'json',
            },
            body:JSON.stringify(user)
        })
        let res = await req.json()
        console.log("res",res)
        if (res && res.msg=="Login Sucessfull"){
            console.log("Success")
            showAlert("LOGIN SUCCESSFULL","fcgreen")
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
                <h4 className="p-4 text-xl">LOG-IN</h4>
                <div className="flex flex-col items-center justify-center">
                    {/* <label>Input</label> */}
                    <input className="text-center border-b m-4 bg-none text-lg outline-none text-gray-600" type="text" placeholder="Email" onChange={(e)=>handleInput(e,user,setUser)} name='email' value={user.email}/>
                    <input className="text-center border-b m-4 text-lg outline-none text-gray-600" type="text" placeholder="Password" onChange={(e)=>handleInput(e,user,setUser)}  name='password' value={user.password}/>
                    <button className="button-61 w-24 m-5" role="button" onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
    </>
    )
}
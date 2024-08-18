import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom";
import {base_url} from './utils/utils'
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const Navigate= useNavigate()
  const [isLoggedIn,setLogged]=useState<boolean>(false)
  const [alert, setAlert] = useState<{
    msg: String;
    color: String;
  }|null>(null)
  console.log("apprender")
  useEffect(()=>{
    console.log("use effect on app")
    checkLoginStatus()
    // let token
    // const fetchToken = async()=>{
    //   token=await checkLoginStatus()
    //   console.log("token",token)
    //   if (token._id){
    //     console.log("set logged true")
    //     setLogged(true)
    //   }else{
    //     setLogged(false)
    //   }
    // }
    // fetchToken()
  },[])

  function showAlert(msg:String,color:String){
    setAlert({
      msg:msg,
      color:color,
    })
    setTimeout(()=>setAlert(null),4000)
  }

  const checkLoginStatus = async function (){
    try {
        let res =await fetch(base_url+'/api/check_login',{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Accept':'json',
                'Authorization': 'Bearer'+localStorage.getItem('token')
            }
        })
        let val = await res.json()
        console.log('check login status',val)
        if (val._id){
            setLogged(true)
        }else{
            setLogged(false)
            Navigate('./login')
        }
        return val
    } catch (error) {
        console.log("check login error",error)
    }

    
  }
  
  return (
    <>
     <div className='flex flex-col h-screen relative'>
      
        <Alert {...{alert}}/>
        <div>
          <Navbar {...{isLoggedIn,setLogged}}/>
        </div>
        <div className='grow'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About {...{checkLoginStatus}}/>}/>
            <Route path='/login' element={<Login {...{showAlert,
              setLogged}}/>}/>
            <Route path='/reg' element={<Registration {...{showAlert,
              setLogged}}/>}/>
          </Routes>
        </div>

     </div>
    </>
  )
}

export default App

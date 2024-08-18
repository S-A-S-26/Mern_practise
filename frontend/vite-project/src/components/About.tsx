import React, { useEffect } from 'react'

export default function About({checkLoginStatus}:{checkLoginStatus:()=>void}) {

  useEffect(()=>{
    checkLoginStatus()
  },[])

  return (
    <div>About</div>
  )
}

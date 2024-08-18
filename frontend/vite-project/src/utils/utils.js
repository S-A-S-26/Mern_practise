
export function handleInput(event,state,setState){
    console.log("event",event,state,setState)
    let name=event.target.name
    let value=event.target.value

    setState({...state,[name]:value})
}

export const base_url='http://localhost:5000'

export function setToken(token){
    localStorage.setItem('token',token)
}

export async function checkLoginStatus(setLogged){
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
        }
        return val
    } catch (error) {
        console.log("check login error",error)
    }

    
}
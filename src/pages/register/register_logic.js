import { useState } from "react"
import { useNavigate } from "react-router"




// handle registeration process
const handleRegisterationFunc =  async (event)=> {
  // create user and save it in localStorage
  const [user, setUser] = useState({
    name: '', surname: '', email: '', password: '', city: '', zip: '', state: ''
  })
  const navigate = useNavigate()
  event.preventDefault()
  const isValidUser = Object.values(user).every(value => value.trim() !== '')
  if(isValidUser){
    setUser(isValidUser)
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/login')
  }else {
    console.log('invalid infos');
  }
}

export  { handleRegisterationFunc }

import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setauthUser] = useAuth()
    const handlelogout = () => {
        try {
            setauthUser({
                ...authUser,
                user: null,
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            window.location.reload()
        } catch (error) {
            toast.error("Error: "+error.message)
        }
    }
  return (
    <div>
        <button className='px-1 py-1  md:px-1  md:py-2  bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
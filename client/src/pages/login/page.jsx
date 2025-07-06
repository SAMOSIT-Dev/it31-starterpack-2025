
import useAuthStore from "@/store/auth.store"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function LoginPage() {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()
    
    const onSubmitHandler = async () => {
        const isLoginSuccess = login(userId, password)
        if (isLoginSuccess) navigate('/tinder')
    }
    
    return (
        <div className="mt-20">
            <input type="text" onChange={(e) => setUserId(e.target.value)} placeholder="Username"/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={onSubmitHandler}>Login</button>
        </div>
    )
}
import { createContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const AuthenticationContext = createContext('');
// export default AuthenticationContext;

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

    const login = async({user, senha}) => {
        const config = {
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }

        const body = {
            user,
            senha
        }

        const { data } = await axios.post('http://localhost:3000/api/login', body, config)
        console.log(data)
        return { data }
    }

    return (
        <AuthenticationContext.Provider value={{ user, accessToken, error, login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
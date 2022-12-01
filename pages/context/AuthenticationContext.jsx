import { createContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const AuthenticationContext = createContext('');

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

        try {
            const { data:accessResponse } = await axios.post('http://localhost:3000/api/login', body, config)
        
            if (accessResponse && accessResponse.user) {
                setUser(accessResponse.user)
            }
            if (accessResponse && accessResponse.access) {
                setAccessToken(accessResponse.access)
            }

            router.push('/Deshboard')

        } catch {
            if (error.response && error.response.data) {
                setError(error.response.data.messege)
                return
            } else if (error.request) {
                setError('Algo deu de errado')
                return
            } else {
                setError(error.response.data.messege)
                return
            }
            console.error('Error', error.message);
            setError('Algo deu de errado')
            return
        }
    }

    const register = async({ email, username, senha }) => {
        const config = {
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }

        const body = {
            username,
            senha
        }

        try {
            await axios.post('http://localhost:8000/auth/users/', body, config)
            // login({username, senha})
        } catch {
            if (error.response && error.response.data) {
                setError(error.response.data.messege)
                return
            } else if (error.request) {
                setError('Algo deu de errado')
                return
            } else {
                setError(error.response.data.messege)
                return
            }
            console.error('Error', error.message);
            setError('Algo deu de errado')
            return
        }
    }

    return (
        <AuthenticationContext.Provider value={{ user, accessToken, error, login, register }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
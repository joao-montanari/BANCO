import { createContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Notiflix from 'notiflix';

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
            const { data:accessResponse } = await axios.post('https://boobank.vercel.app/api/login', body, config)
        
            if (accessResponse && accessResponse.user) {
                setUser(accessResponse.user)
            }
            if (accessResponse && accessResponse.access) {
                setAccessToken(accessResponse.access)
            }

            router.push('/Deshboard')

        } catch(error) {
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

    const register = async({ email, username, senha, nome_completo, data_nascimento, empregado, sexo }) => {
        const config = {
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }

        const body = {
            "email" : email,
            "username" : username,
            "password" : senha,
            "nome_completo" : nome_completo,
            "data_nascimento" : data_nascimento,
            "empregado" : empregado,
            "sexo" : sexo,
        }
        
        console.log('CORPO DO CADASTRO')
        console.log(body)

        try {
            await axios.post('https://boobank.vercel.app/api/register', body, config)
        } catch(error) {
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

        router.push('/')
        Notiflix.Notify.success('Usuario cadastrado com sucesso!')
    }

    return (
        <AuthenticationContext.Provider value={{ user, accessToken, error, login, register }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
import React from 'react'
import { createContext } from 'react';
import { singInRequest } from '../services/auth';
import { setCookie } from 'nookies';
import { useState } from 'react/cjs/react.production.min';
import Router from 'next/router';

type AuthContextType = {
    isAuthenticated : boolean;
}

type SingInData = {
    cpf : string;
    password : string;
}

type User = {
    cpf : string;
    name : string;
    email : string;
    foto_url : string;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    const isAuthenticated = false;

    async function singIn({ cpf, password } : SingInData){
        const { token, user } = await singInRequest({
            cpf,
            password
        })

        setCookie(undefined, 'nextauth.token', token,{
            maxAge: 60 * 60 * 1, // 1 hour
        })

        setUser(user)
        Router.push('/deshboard');
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )   
}
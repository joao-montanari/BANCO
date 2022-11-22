import React from 'react'
import { createContext } from 'react';
import { singInRequest } from '../../services/auth';
import { setCookie } from 'nookies';
import { useState } from 'react';
import Router from 'next/router';

type User = {
    cpf : string;
    name : string;
    email : string;
    foto_url : string;
}

type SingInData = {
    cpf : string;
    password : string;
}

type AuthContextType = {
    isAuthenticated : boolean;
    user : User;
    singIn : (data: SingInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    const isAuthenticated = !!user;

    async function singIn({ cpf, password } : SingInData){
        const { token, user } = await singInRequest({
            cpf,
            password
        })

        setCookie(undefined, 'nextauth.token', token,{
            maxAge: 60 * 60 * 1, // 1 hour
        })

        setUser(user)
        Router.push('/Deshboard');
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )   
}
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import UserInfos from "../components/Dashboard/UserInfos";
import Unload from '../components/Dashboard/Unload';

import { AuthenticationContext } from '../context/AuthenticationContext';

export default function Deshboard(){
    const { user } = useContext(AuthenticationContext);
    const { accessToken } = useContext(AuthenticationContext);
    console.log(user)

    return(
        <>
            <Head>
                <title>BooBank | Deshboard</title>
            </Head>
            {
                user ? (
                    <UserInfos
                        nome = {user.nome_completo}
                        nascimento = {user.data_nacimento}
                        foto = {user.foto}
                        sexo = {user.sexo}
                        empregado = {user.empregado}
                    />
                ) : (
                    <Unload/>
                )
            }
        </>
    )
}
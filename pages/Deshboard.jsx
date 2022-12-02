import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import UserInfos from "../components/Dashboard/UserInfos";
import { AuthenticationContext } from './context/AuthenticationContext';

export default function Deshboard(){
    const { user } = useContext(AuthenticationContext);
    console.log(user)

    return(
        <>
            <Head>
                <title>BooBank | Deshboard</title>
            </Head>
            {
                user ? (
                    <UserInfos
                        nome = {user[0].nome_completo}
                        nascimento = {user[0].data_nacimento}
                        foto = {user[0].foto}
                    />
                ) : (
                    <h1>É necessário realizar cadastro para poder carregar a página</h1>
                )
            }
        </>
    )
}
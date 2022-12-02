import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import UserInfos from "../components/Dashboard/UserInfos";
import Unload from '../components/Dashboard/Unload';
import Styles from '../styles/Dashboard/Dashboard.module.css';
import IconCard from '../components/IconCard';

import { AuthenticationContext } from '../context/AuthenticationContext';

export default function Deshboard(){
    const { user } = useContext(AuthenticationContext);
    const { accessToken } = useContext(AuthenticationContext);
    //console.log(user)

    // const user = {
    //     nome_completo : 'Joao Vitor Montanari da Silva',
    //     data_nacimento : '21/06/2003',
    //     sexo : 'M',
    //     empregado : true
    // }

    return(
        <>
            <Head>
                <title>BooBank | Deshboard</title>
            </Head>
            {
                user ? (
                    <>
                        <UserInfos
                            nome = {user.nome_completo}
                            nascimento = {user.data_nacimento}
                            sexo = {user.sexo}
                            empregado = {user.empregado}
                        />
                        <div className={Styles.container}>
                            <IconCard
                                icon = '/img/icons/coroa.ico'
                                titulo = 'Emprestimo'
                                conteudo = 'Peça o seu emprestimo para o nosso banco agora mesmo, de forma fácil e rápida.'
                            />
                            <IconCard
                                icon = '/img/icons/cartao.ico'
                                titulo = 'Faturas'
                                conteudo = 'Veja as faturas referentes a sua conta, fique por dentro de tudo.'
                            />
                            <IconCard
                                icon = '/img/icons/dinheiro.ico'
                                titulo = 'Transferência'
                                conteudo = 'Transferencias rápidas e seguras, faça o que quiser com o seu dinheiro.'
                            />
                        </div>
                    </>
                ) : (
                    <Unload/>
                )
            }
        </>
    )
}
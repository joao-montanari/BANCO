import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import UserInfos from "../components/Dashboard/UserInfos";
import Unload from '../components/Dashboard/Unload';
import Styles from '../styles/Dashboard/Dashboard.module.css';
import IconCard from '../components/IconCard';

import { AuthenticationContext } from '../context/AuthenticationContext';

export default function Deshboard(){
    const { cliente } = useContext(AuthenticationContext);
    const { usuario } = useContext(AuthenticationContext);
    const { accessToken } = useContext(AuthenticationContext);

    const { me } = useContext(AuthenticationContext);

    useEffect(() => {
        me()
    },[])

    // const cliente = {
    //     nome_completo : 'Joao Montanari',
    //     data_nacimento : '05/08/2003',
    //     sexo : 'M',
    //     empregado : true
    // }

    return(
        <>
            <Head>
                <title>BooBank | Deshboard</title>
            </Head>
            {
                cliente ? (
                    <>
                        <UserInfos
                            nome = {cliente.nome_completo}
                            nascimento = {cliente.data_nacimento}
                            sexo = {cliente.sexo}
                            empregado = {cliente.empregado}
                            cpf = {usuario.username}
                            email = {usuario.email}
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
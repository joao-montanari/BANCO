import Head from 'next/head';

import Catalogo from '../components/AboutUs/Catalogo';
import Kit from '../components/AboutUs/Kit';
import Ajuda from '../components/AboutUs/Ajuda';

export default function AboutUs(){
    return(
        <>
            <Head>
                <title>BooBank | Sobre nós</title>
            </Head>
            <Catalogo/>
            <Kit/>
            <Ajuda/>
        </>
    )
}
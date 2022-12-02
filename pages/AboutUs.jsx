import Head from 'next/head';

import Catalogo from '../components/AboutUs/Catalogo';
import Kit from '../components/AboutUs/Kit';
import Ajuda from '../components/AboutUs/Ajuda';
import Wallpaper from '../components/AboutUs/Wallpaper';

export default function AboutUs(){
    return(
        <>
            <Head>
                <title>BooBank | Sobre nós</title>
            </Head>
            <Wallpaper/>
            <Catalogo/>
            <Kit/>
            <Ajuda/>
        </>
    )
}
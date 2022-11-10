import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/Cabecalho.module.css';

export default function Cabecalho(){
    return(
        <div className={Styles.container}>
            <Image src='/img/logo.png' width={120} height={70}/>
            <ul>
                <li> <Link href='/'> <button>Cartão</button> </Link> </li>
                <li> <Link href='/'> <button>Sobre Nós</button> </Link> </li>
                <li> <Link href='/'> <button>Home</button> </Link> </li>
            </ul>
            <Link href='/'> <button className={Styles.btn}>Quero a minha conta</button> </Link>
        </div>
    )
}
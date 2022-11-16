import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/Cabecalho.module.css';

export default function Cabecalho(){
    return(
        <div className={Styles.container}>
            <Image src='/img/logo.png' width={100} height={100}/>
            <ul>
                <li> <Link href='/cartao'> <button>Cartão</button> </Link> </li>
                <li> <Link href='/AboutUs'> <button>Sobre Nós</button> </Link> </li>
                <li> <Link href='/'> <button>Home</button> </Link> </li>
            </ul>
            <Link href='/'> <button className={Styles.btn}>Quero a minha conta</button> </Link>
        </div>
    )
}
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/Cabecalho.module.css';

export default function Cabecalho(){
    return(
        <div className={Styles.container}>
            <Link href='/'>
                <Image
                    className={Styles.logo}
                    src='/img/logo.png'
                    width={100} 
                    height={100}
                    alt='logo boobank'
                />
            </Link>
            <ul>
                <li> <Link href='/cartao'> <button>Cartão</button> </Link> </li>
                <li> <Link href='/AboutUs'> <button>Sobre Nós</button> </Link> </li>
                <li> <Link href='/Login'> <button>Login</button> </Link> </li>
            </ul>
            <Link href='/Cadastro'> <button className={Styles.btn}>Cadastrar</button> </Link>
        </div>
    )
}
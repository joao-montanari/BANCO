import Styles from '../../styles/cartao/Wallpaper.module.css';

import Link from 'next/link';

export default function Wallpaper(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <h1>O cartão grátis cheio de benefícios para você fazer acontecer</h1>
                <p>É sem anuidade, com Mimos exclusivos e muito mais!</p>
                <Link href='/'><button>Pedir meu cartão</button></Link>
            </div>
            <div className={Styles.faixa}>

            </div>
        </div>
    )
}
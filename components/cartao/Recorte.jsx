import Styles from '../../styles/cartao/Recorte.module.css'

import Image from 'next/image';

export default function Recorte(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Image
                    className={Styles.img}
                    src='/img/pessoas.png'
                    width={700}
                    height={400}
                    alt='imagem pessoas'
                />
            </div>
            <div className={Styles.child}>
                <div className={Styles.content}>
                    <h1>Cartão Boo Visa Internacional</h1>
                    <p>
                        Faça suas compras com facilidade
                        e segurança em qualquer lugar do mundo.
                    </p>
                </div>
            </div>
        </div>
    )
}
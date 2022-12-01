import Styles from '../styles/CartaoFrente.module.css';

import Image from 'next/image';

export default function CartaoFrente(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.content}>
                    <div className={Styles.chip}>
                        <div className={Styles.linha01}></div>
                        <div className={Styles.linha02}></div>
                    </div>
                    <Image
                        className={Styles.img}
                        src='/img/icons/sinal.png'
                        width={60}
                        height={60}
                        alt='icone sinal'
                    />
                </div>
                <div className={Styles.marcaNome}>
                    <Image
                        className={Styles.marca}
                        src='/img/simbolo.png'
                        width={150}
                        height={70}
                        alt = 'simbolo boobank'
                    />
                    <p>
                        João Vitor M. Silva
                    </p>
                </div>
            </div>
            <div className={Styles.lateral}>
                <Image
                    className={Styles.visa}
                    src='/img/visa.png'
                    width={120}
                    height={45}
                    alt = 'visa'
                />
            </div>
        </div>
    )
}
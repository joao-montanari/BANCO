import Styles from '../styles/CartaoDeCredito.module.css';

import Image from 'next/image';

export default function CartaoDeCredito(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.content}>
                    <div className={Styles.chip}>

                    </div>
                    <Image
                        className={Styles.img}
                        src='/img/icons/sinal.ico'
                        width={60}
                        height={60}
                    />
                    <div className={Styles.marcaNome}>

                    </div>
                </div>
            </div>
        </div>
    )
}
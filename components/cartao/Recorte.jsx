import Styles from '../../styles/cartao/Recorte.module.css'

import Image from 'next/image';

export default function Recorte(){
    return(
        <div className={Styles.container}>
            <Image
                src='/img/pessoas.png'
                width={700}
                height={400}
            />
        </div>
    )
}
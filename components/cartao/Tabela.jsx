import Styles from '../../styles/cartao/Tabela.module.css';
import Image from 'next/image';

export default function Tabela(){
    return(
        <div className={Styles.container}>
            <Image
                className={Styles.img}
                src='/img/tabela.png'
                width={1000}
                height={600}
                alt='tabela'
            />
        </div>
    )
}
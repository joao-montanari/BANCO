import Image from 'next/image';
import Styles from '../../styles/Dashboard/Unload.module.css';

export default function Unload(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <Image
                    className={Styles.logo}
                    src='/img/logo-preta.png'
                    width={270}
                    height={250}
                />
                <h1>É preciso fazer login para poder renderizar os itens da página!</h1>
            </div>
        </div>
    )
}
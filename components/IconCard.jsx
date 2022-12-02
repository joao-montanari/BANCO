import Styles from '../styles/IconCard.module.css';

import Image from 'next/image';

export default function IconCard(props){
    return(
        <div className={Styles.container}>
            <div className={Styles.icon}>
                <Image
                    src={props.icon}
                    width={65}
                    height={65}
                />
            </div>
            <h2>{props.titulo}</h2>
            <p>
                {props.conteudo}
            </p>
        </div>
    )
}
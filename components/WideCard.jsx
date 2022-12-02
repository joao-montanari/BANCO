import Styles from '../styles/WideCard.module.css';
import Image from 'next/image';

export default function WideCard(props){
    return(
        <div className={Styles.container}>
            <div className={Styles.icone}>
                <Image
                    className={Styles.img}
                    src={props.icone}
                    width={80}
                    height={80}
                />
            </div>
            <div className={Styles.conteudo}>
                <h1>{props.titulo}</h1>
                <p>
                    {props.texto}
                </p>
            </div>
        </div>
    )
}
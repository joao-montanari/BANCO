import Styles from '../styles/ImageCard.module.css';
import Image from 'next/image';

export default function ImageCard(props){
    return(
        <div className={Styles.container}>
            <Image
                className={Styles.img}
                src={props.image}
                width={300}
                height={200}
            />
            <h1>{props.titulo}</h1>
        </div>
    )
}
import Styles from '../styles/Card.module.css';

export default function Card(props){
    return(
        <div className={Styles.container}>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}
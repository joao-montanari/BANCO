import Styles from '../styles/IconCard.module.css';

export default function IconCard(props){
    return(
        <div className={Styles.container}>
            <div className={Styles.icon}>

            </div>
            <h2>{props.titulo}</h2>
            <p>
                {props.conteudo}
            </p>
        </div>
    )
}
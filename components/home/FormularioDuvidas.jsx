import Styles from '../../styles/home/FormularioDuvidas.module.css';

export default function FormularioDuvidas(){
    return(
        <form className={Styles.container}>
            <h1>Tem alguma dúvida?</h1>
            <p>Nos envie sua pergunta que iremos te respoder via e-mail</p>
            <input type="text" placeholder='Nome'/>
            <input type="email" placeholder='E-mail'/>
            <input type="email" placeholder='Confirmar E-mail'/>
            <textarea placeholder="Pergunta"></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}
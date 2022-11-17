import Styles from '../../styles/Cadastro/Form.module.css';

import Link from 'next/link';

export default function Form(){
    return(
        <form className={Styles.container}>
            <h1>Cadastro</h1>
            <input type="text" placeholder='Nome completo'/>
            <input type="number" placeholder='CPF'/>
            <input type="email" placeholder='E-mail'/>
            <input type="email" placeholder='Repetir E-mail'/>
            <button type='submit'>CONTINUAR</button>
            <a>JÁ SOU CLIENTE</a>
        </form>
    )
}
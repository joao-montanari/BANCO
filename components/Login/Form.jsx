import Styles from '../../styles/Login/Form.module.css';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import Notiflix from 'notiflix';
import { IMaskInput } from "react-imask";

import { useContext, useState } from 'react';

export default function Form(){
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const { login } = useContext(AuthenticationContext);

    function Logar(e){
        e.preventDefault()

        if( user !== "" && senha !== ""){
            let body = {
                "user" : user,
                "senha" : senha
            }
            login({ user, senha })
        } else{
            Notiflix.Notify.failure('Um ou mais campos não foram preenchidos')
        }
    }

    return(
        <form className={Styles.container} onSubmit={Logar}>
            <h1>Login</h1>
            <div className={Styles.content}>
                <IMaskInput
                    className={Styles.inputUpper}
                    value = {user}
                    placeholder='CPF'
                    mask = {'000.000.000-00'}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    className={Styles.inputDown}
                    type="password"
                    value = {senha}
                    placeholder='Senha'
                    name='password'
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <button type='submit'>CONTINUAR</button>
        </form>
    )
}
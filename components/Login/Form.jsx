import Styles from '../../styles/Login/Form.module.css';
import { AuthenticationContext } from '../../pages/context/AuthenticationContext';
import Notiflix from 'notiflix';

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
                <input
                    className={Styles.inputUpper}
                    type="number"
                    value = {user}
                    placeholder='CPF'
                    name='user'
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
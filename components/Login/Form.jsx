import Styles from '../../styles/Login/Form.module.css';

// import { SingIn } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../pages/context/AuthContext';

export default function Form(){
    const { register, handleSubmit } = useForm();
    const { singIn } = useContext(AuthContext);

    async function handleSingIn(data){
        await singIn(data);
    }

    return(
        <form className={Styles.container} onSubmit={handleSubmit(handleSingIn)}>
            <h1>Login</h1>
            <div className={Styles.content}>
                <input
                    {...register('cpf')}
                    className={Styles.inputUpper}
                    type="number"
                    placeholder='CPF'
                    name='cpf'
                />
                <input
                    {...register('password')}
                    className={Styles.inputDown}
                    type="password"
                    placeholder='Senha'
                    autoComplete='current-password'
                    name='password'
                />
            </div>
            <button type='submit'>CONTINUAR</button>
        </form>
    )
}
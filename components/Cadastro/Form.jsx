import Styles from '../../styles/Cadastro/Form.module.css';
import Notiflix from 'notiflix';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '../../pages/context/AuthenticationContext';

export default function Form(){
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confsenha, setConfsenha] = useState('');
    const [estado, setEstado] = useState(true);
    const [empregado, setEmpregado] = useState('');
    const [sexo, setSexo] = useState('');

    const {register} = useContext(AuthenticationContext)

    function Cadastro(e){
        e.preventDefault()

        if(senha === confsenha){
            if (
                senha !== "" &&
                nome !== "" &&
                email !== "" &&
                empregado !== "" &&
                sexo !== "" &&
                nascimento != "" 
            ){
                let body = {
                    "email" : email,
                    "senha" : senha,
                    "username" : cpf,
                    "nome_completo" : nome,
                    "data_nascimento" : nascimento,
                    "empregado" : empregado,
                    "sexo" : sexo,
                }

                register(body)
            } else{
                Notiflix.Notify.failure('Um ou mais campos não foram preenchidos')
            }

        } else{
            Notiflix.Notify.failure('As senhas não condizem')
        }
    }

    return(
        <form className={Styles.container} onSubmit={Cadastro}>
            <h1>Cadastro</h1>
            <div className={Styles.escolha}>
                <h2>Gênero:</h2>
            </div>
            <div className={Styles.escolha}>
                <input
                    type="radio"
                    id='feminino'
                    name='genero'
                    onClick={(e) => setSexo('F')}
                />
                <input
                    type="radio"
                    id='masculino'
                    name='genero'
                    onClick={(e) => setSexo('M')}
                />
                <input
                    type="radio"
                    id='indefinido'
                    name='genero'
                    onClick={(e) => setSexo('I')}
                />
            </div>
            <div className={Styles.escolha}>
                <label>Feminino</label>
                <label>Masculino</label>
                <label>Indefinido</label>
            </div>
            <div className={Styles.content}>
                <input
                    className={Styles.inputUpper}
                    type="number"
                    value = {cpf}
                    placeholder='CPF'
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    type="text"
                    value = {nome}
                    placeholder='Nome completo'
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="date" 
                    value = {nascimento}
                    placeholder='Data de Nascimento'
                    onChange={(e) => setNascimento(e.target.value)}
                />
                <input 
                    type="email" 
                    value = {email}
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    value = {senha}
                    placeholder='Senha'
                    onChange={(e) => setSenha(e.target.value)}
                />
                <input 
                    className={Styles.inputDown} 
                    type="password"
                    value = {confsenha}
                    placeholder='Repetir senha'
                    onChange={(e) => setConfsenha(e.target.value)}
                />
            </div>
            <div className={Styles.escolha}>
                <h2>Você se encontra empregado?</h2>
            </div>
            <div className={Styles.escolha}>
                <input
                    type="radio"
                    id='sim'
                    name='opcao'
                    onClick={(e) => setEmpregado(true)}
                />
                <input
                    type="radio"
                    id='não'
                    name='opcao'
                    onClick={(e) => setEmpregado(false)}
                />
            </div>
            <div className={Styles.escolha}>
                <label>Sim</label>
                <label>Não</label>
            </div>
            <button type='submit'>CONTINUAR</button>
            <Link href='/Login'> JÁ SOU CLIENTE </Link>
        </form>
    )
}

import Styles from '../../styles/Cadastro/Form.module.css';
import Notiflix from 'notiflix';

import Link from 'next/link';
import { useState } from 'react';

export default function Form(){
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confsenha, setConfsenha] = useState('');
    const [estado, setEstado] = useState(true);
    const [empregado, setEmpregado] = useState('');
    const [sexo, setSexo] = useState('');

    function Cadastro(e){
        e.preventDefault()

        if(senha === confsenha){
            if (
                senha !== "" &&
                nome !== "" &&
                cpf !== "" &&
                empregado !== "" &&
                sexo !== "" &&
                nascimento != "" 
            ){
                let bodyCliente = {
                    "nome_completo" : nome,
                    "data_nascimento" : nascimento,
                    "empregado" : empregado,
                    "sexo" : sexo,
                    "foto" : ''
                }
        
                let bodyUsuario = {
                    "cpf" : cpf,
                    "senha" : senha,
                    "estado" : estado
                }
        
                console.log('Corpo do cliente: ')
                console.log(bodyCliente)
                console.log('Corpo do Usuario: ')
                console.log(bodyUsuario)
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
                    type="number" 
                    value = {cpf}
                    placeholder='CPF'
                    onChange={(e) => setCpf(e.target.value)}
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

import Styles from '../../styles/Dashboard/UserInfos.module.css';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserInfos(props){
    const [genero, setGenero] = useState();
    const [empregado, setEmpregado] = useState();

    useEffect(() => {
        if (props.sexo === 'M') {
            setGenero('Masculino');
        } else if (props.sexo === 'F') {
            setGenero('Feminino');
        } else {
            setGenero('Indefinido');
        }

        if (props.empregado === true){
            setEmpregado('Empregado(a)');
        } else {
            setEmpregado('Desempregado(a)');
        }
        
    },[])

    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <h1>{props.nome}</h1>
                <h4>Data de nascimento: {props.nascimento}</h4>
                <h4>Gênero: {genero}</h4>
                <h4>Situação: {empregado}</h4>
                <h4>CPF: {props.cpf}</h4>
                <h4>E-mail: {props.email}</h4>
            </div>
        </div>
    )
}
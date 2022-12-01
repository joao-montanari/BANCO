import Styles from '../../styles/Dashboard/UserInfos.module.css';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserInfos(props){
    const [genero, setGenero] = useState('');

    useEffect(() => {
        if (props.sexo === 'M') {
            setGenero('Masculino')
        } else if (props.sexo === 'F') {
            setGenero('Feminino')
        } else {
            setGenero('Indefinido')
        }

        
    },[])

    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <h1>{props.nome}</h1>
                <h4>Data nascimento: {props.nascimento}</h4>
                <h4>Genero: {genero}</h4>
            </div>
        </div>
    )
}
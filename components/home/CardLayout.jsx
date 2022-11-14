import Styles from '../../styles/GridLayout.module.css';
import Link from 'next/link';

import Card from '../Card';

export default function CardLayout(){
    return(
        <div className={Styles.container}>
            <h1>Uma conta completa para você</h1>
            <div className={Styles.cards}>
                <Card
                    titulo = 'Vantagens exclusivas'
                    texto = 'Teste de texto para poder preencher os card da home do banco, vangens de ter o banco do montanari'
                />
                <Card
                    titulo = 'Pague menos taxas'
                    texto = 'Teste de texto para poder preencher os card da home do banco, vangens de ter o banco do montanari'
                />
                <Card
                    titulo = 'Segurança nos negócios'
                    texto = 'Teste de texto para poder preencher os card da home do banco, vangens de ter o banco do montanari'
                />
            </div>
            <Link href='/'><button>Quero minha conta</button></Link>
        </div>
    )
}
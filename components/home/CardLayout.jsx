import Styles from '../../styles/home/GridLayout.module.css';
import Link from 'next/link';

import Card from '../Card';

export default function CardLayout(){
    return(
        <div className={Styles.container}>
            <h1>Uma conta completa para você</h1>
            <div className={Styles.cards}>
                <Card
                    titulo = 'Pague menos taxas'
                    texto = 'Para poder fazer dos seus sonhos financeiros realidade, sem ter que tirar mais dinhero do bolso'
                />
                <Card
                    titulo = 'Vantagens exclusivas'
                    texto = 'Aqui você encontra vantagens unicas, disponíveis apenas para usuários do BooBank, o banco digital'
                />
                <Card
                    titulo = 'Segurança nos negócios'
                    texto = 'Sem sair de casa você pode realizar as suas operações financeiras, sem dores de cabeça e sem medo'
                />
            </div>
            <Link href='/Cadastro'><button>Quero minha conta</button></Link>
        </div>
    )
}
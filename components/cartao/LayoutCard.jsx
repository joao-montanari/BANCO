import Styles from '../../styles/cartao/LayoutCard.module.css';

import ImageCard from '../ImageCard';

export default function LayoutCard(){
    return(
        <div className={Styles.container}>
            <div>
                <h1>Um banco feito para todo mundo, com vantagens exclusivas para cada idade e necessidade.</h1>
            </div>
            <div className={Styles.child}>
                <ImageCard
                    image = '/img/adolescente.png'
                    titulo = 'Adolescentes'
                    conteudo = 'Tenha uma conta fácil e rápida sem burocracias.'
                />
                <ImageCard
                    image = '/img/adulto.png'
                    titulo = 'Adultos'
                    conteudo = 'Pague as suas contas com agilidade sem sair da casa.'
                />
                <ImageCard
                    image = '/img/idoso.png'
                    titulo = 'Idosos'
                    conteudo = 'Aqui você encontra planos para poder render o seu dinheiro.'
                />
            </div>
        </div>
    )
}
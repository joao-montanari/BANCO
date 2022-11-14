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
                />
                <ImageCard
                    image = '/img/adulto.png'
                    titulo = 'Adultos'
                />
                <ImageCard
                    image = '/img/idoso.png'
                    titulo = 'Idosos'
                />
            </div>
        </div>
    )
}
import Styles from '../../styles/cartao/AreaCards.module.css';

import IconCard from '../IconCard';

export default function AreaCards(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <IconCard
                    titulo = 'Mimos'
                    conteudo = 'Com descontos exclusivos em várias marcas e lojas parceiras.'
                />
                <IconCard
                    titulo = 'Anuidade R$0'
                    conteudo = 'Você não paga nada para ter o seu cartão next cheio de benefícios.'
                />
                <IconCard
                    titulo = 'Internacional'
                    conteudo = 'O cartão next é aceito em qualquer lugar do mundo.'
                />
            </div>
            <div className={Styles.child}>
                <IconCard
                    titulo = 'Vai de Visa'
                    conteudo = 'Serviços de Saque Emergencial, Assistência em Viagens, promoções e descontos em lojas.'
                />
                <IconCard
                    titulo = 'Precisa sair?'
                    conteudo = 'R$10 OFF em viagens na Uber todo mês para ir onde quiser.'
                />
                <IconCard
                    titulo = 'Saques ilimitados'
                    conteudo = 'E gratuitos nos caixas BooBank e Banco24Horas em todo o Brasil.'
                />
            </div>
        </div>
    )
}
import Styles from '../styles/InfosLayout.module.css';

import WideCard from './WideCard';

export default function InfosLayout(){
    return(
        <div className={Styles.container}>
            <h1>No BooBank você faz tudo online e tem vantagens especiais para fazer os planos acontecerem.</h1>
            <div className={Styles.child}>
                <div className={Styles.content}>
                    <WideCard
                        titulo = 'Open Finance'
                        texto = 'O sistema financeiro aberto, seguro e gratuito que chegou no next pra te dar ainda mais autonomia.'
                        icone = '/img/icons/moedas.ico'
                    />
                    <WideCard
                        titulo = 'Cartões Boo'
                        texto = 'Escolha o Visa com as vantagens que mais combinam com você.'
                        icone = '/img/icons/cartao.ico'
                    />
                    <WideCard
                        titulo = 'Pix'
                        texto = 'Um novo jeito de fazer pagamentos a hora que quiser.'
                        icone = '/img/icons/pix.ico'
                    />
                </div>
            </div>
        </div>
    )
}
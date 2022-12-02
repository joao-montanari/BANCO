import Styles from '../../styles/home/LayoutBeneficios.module.css';
import Image from 'next/image';

export default function LayoutBeneficios(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <h1>Faça suas compras nas maiores lojas do país com benefícios exclusivos para quem é Boo.</h1>
                <div className={Styles.icones}>
                    <div className={Styles.card}>
                        <Image
                            src='/img/icons/carrinho.ico'
                            width={100}
                            height={100}
                        />
                        <p>
                            Encontre os melhores produtos nas maiores lojas do país com facilidade e conveniência. Fácil e rápido.
                        </p>
                    </div>
                    <div className={Styles.card}>
                        <Image
                            src='/img/icons/celular.ico'
                            width={100}
                            height={100}
                        />
                        <p>
                            Compre com segurança sem sair do ambiente BooBank. Nós filtramos o que é do seu interesse.
                        </p>
                    </div>
                    <div className={Styles.card}>
                        <Image
                            src='/img/icons/dinheiro.ico'
                            width={100}
                            height={100}
                        />
                        <p>
                            Receba dinheiro de volta em todas as compras. Não se preocupe, a sua segurança sempre está na frente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Styles from '../../styles/cartao/Tabela.module.css';

export default function Tabela(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.esquerda}>
                    <div className={Styles.linhaInv}>
                        
                    </div>
                    <div className={Styles.linha}>
                        <h2>Anuidade</h2>
                        <p>
                            Visa Platinum: Primeiros 5 meses grátis, 
                            após esse período ou Upgrade de cartão, será cobrado R$42,50 por mês.
                        </p>
                    </div>
                    <div className={Styles.linha}>
                        <h2>Descontos progressivos da anuidade</h2>
                        <p>
                            A partir de R$ 2.500,00 em compras você ganha descontos que podem chegar a 100% do valor da anuidade.
                        </p>
                    </div>
                    <div className={Styles.linha}>
                        <h2>Mimos Exclusivos</h2>
                        <p>
                            Descontos especiais na Uber, Cinemark e ainda mais lojas para quem tem cartão de crédito.
                        </p>
                    </div>
                    <div className={Styles.linha}>
                        <h2>Compras Internacionais</h2>
                        <p>
                            Mais praticidade e opções pra comprar onde quiser.
                        </p>
                    </div>
                </div>
                <div className={Styles.coluna}>
                    <div className={Styles.linhaCurtaInv}>
                        <h2>Visa Internacional</h2>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <h3>R$ 0</h3>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <h1> - </h1>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <label> ✓ </label>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <label> ✓ </label>
                    </div>
                </div>
                <div className={Styles.coluna}>
                    <div className={Styles.linhaCurtaInv}>
                        <h2>Visa Platinum</h2>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <h3>R$ 42,50 /mês</h3>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <label> ✓ </label>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <label> ✓ </label>
                    </div>
                    <div className={Styles.linhaCurta}>
                        <label> ✓ </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
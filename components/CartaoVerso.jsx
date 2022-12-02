import Styles from '../styles/CartaoVerso.module.css';

import Image from 'next/image';

export default function CartaoVerso(){
    return(
        <div className={Styles.verso}>
            <p className={Styles.emissao}>
                Emitido pelo BooBank T. S., em caso de perda ou roubo, comunique imediatamente.
            </p>
            <div className={Styles.faixa}></div>
            <div className={Styles.caixote}>
                <div className={Styles.part}>
                    <h2>platinum</h2>
                    <Image
                        src='/img/silver.png'
                        width={150}
                        height={75}
                    />
                </div>
                <div className={Styles.box}>
                    <p>
                        Precisa de uma ajuda agora? Basta abrir o chat no app.
                    </p>
                    <p>
                        meajuda@boobank.com.br | 0800 813 0921
                    </p>
                    <p>
                        Ouvidoria: ouvidoria@boobank.com.br | 0800 813 0921
                    </p>
                </div>
                <div className={Styles.box}>
                    <p>
                        Mastercard Global Service | 0800 892 1671
                    </p>
                    <p>
                        Outside Brazil | 1 636 722 7111
                    </p>
                </div>
            </div>
            <div className={Styles.footer}>
                <h1>5032 9334 3764 9846</h1>
                <div className={Styles.infos}>
                    <div className={Styles.info}>
                        <p>Validade:</p>
                        <h2>02/20</h2>
                    </div>
                    <div className={Styles.emissaoData}>
                        <p>Emissão:</p>
                        <h2>02/17</h2>
                    </div>
                    <div className={Styles.cvv}>
                        <p>CVV:</p>
                        <h2>123</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
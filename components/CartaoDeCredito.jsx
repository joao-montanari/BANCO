import Styles from '../styles/CartaoDeCredito.module.css';

import Image from 'next/image';

export default function CartaoDeCredito(){
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.child}>
                    <div className={Styles.content}>
                        <div className={Styles.chip}>
                            <div className={Styles.linha01}></div>
                            <div className={Styles.linha02}></div>
                        </div>
                        <Image
                            className={Styles.img}
                            src='/img/icons/sinal.png'
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className={Styles.marcaNome}>
                        <Image
                            src='/img/simbolo.png'
                            width={150}
                            height={75}
                        />
                        <p>
                            João Vitor M. Silva
                        </p>
                    </div>
                </div>
                <div className={Styles.lateral}>
                    <Image
                        className={Styles.visa}
                        src='/img/visa.png'
                        width={120}
                        height={45}
                    />
                </div>
            </div>
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
                            height={150}
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
            </div>
        </>
    )
}
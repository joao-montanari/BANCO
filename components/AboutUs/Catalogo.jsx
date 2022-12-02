import Styles from '../../styles/AboutUs/Catalogo.module.css';

import Image from 'next/image';

export default function Catalogo(){
    return(
        <div className={Styles.global}>
            <div className={Styles.container}>
                <div className={Styles.child}>
                    <div className={Styles.content}>
                        <div className={Styles.imagens}>
                            <Image
                                src='/img/icons/coracao.ico'
                                width={40}
                                height={40}
                            />
                            <Image
                                src='/img/icons/leao.ico'
                                width={40}
                                height={40}
                            />
                            <Image
                                src='/img/icons/sorriso.ico'
                                width={40}
                                height={40}
                            />
                            <Image
                                src='/img/icons/bandeira.ico'
                                width={40}
                                height={40}
                            />
                        </div>
                        <p>
                            Nossa missão é atuar numa plataforma de serviços financeiros e não financeiros, 
                            proporcionando experiências fantásticas para transformar a vida das pessoas.
                        </p>
                    </div>
                    <div className={Styles.cont}>
                        <h3>Nosso propósito</h3>
                        <p>
                            Somos um banco, é verdade. Mas somos um banco diferente, que coloca você em primeiro 
                            lugar porque acreditamos que conectar pessoas e sonhos, é o melhor jeito de criar um 
                            mundo mais próspero. E um mundo mais próspero é uma ferramenta poderosa de inclusão e 
                            de transformação.
                        </p>
                    </div>
                    <div className={Styles.cont}>
                        <h3>Nossos valores</h3>
                        <p>
                            Nossos esforços são para fazer a diferença para nossos clientes, ajudando a criar um sistema 
                            mais democrático, inclusivo e que valorize a diversidade. Somos apaixonados por gente e pelo 
                            que fazemos e trabalhamos incansavelmente, com coragem de inovar, utilizando como norte a 
                            simplicidade, a segurança e a transparência.
                        </p>
                    </div>
                </div>
                <div className={Styles.box}>
                    <h1>Nossa excelência é reconhecida em nosso dia a dia</h1>
                    <p>Prêmios</p>
                    <div className={Styles.icons}>
                        <div className={Styles.caixa}>
                            <Image
                            className={Styles.img}
                                src='/img/icons/porco.png'
                                width={75}
                                height={75}
                            />
                            <label><b>EUROMONEY AWARDS</b></label>
                            <p>Melhor Banco Digital da América Latina</p>
                        </div>
                        <div className={Styles.caixa}>
                            <Image
                            className={Styles.img}
                                src='/img/icons/trofeu.png'
                                width={75}
                                height={75}
                            />
                            <label><b>GLOBAL FINANCE</b></label>
                            <p>Melhor Banco Digital do Brasil</p>
                        </div>
                        <div className={Styles.caixa}>
                            <Image
                            className={Styles.img}
                                src='/img/icons/planeta.png'
                                width={75}
                                height={75}
                            />
                            <label><b>LEARNING & PERFORMANCE</b></label>
                            <p>Destaque Nacional Business Digital</p>
                        </div>
                        <div className={Styles.caixa}>
                            <Image
                            className={Styles.img}
                                src='/img/icons/banco.png'
                                width={75}
                                height={75}
                            />
                            <label><b>PRÊMIO RELATÓRIO BANCÁRIO</b></label>
                            <p>Excelência em Aplicativo</p>
                        </div>
                        <div className={Styles.caixa}>
                            <Image
                            className={Styles.img}
                                src='/img/icons/invencao.png'
                                width={75}
                                height={75}
                            />
                            <label><b>INNOVACIÓN FINANCIERA</b></label>
                            <p>1º lugar Banco BooBank com o case Boo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
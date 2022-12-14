import styles from '../styles/Footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Rodape(){
    return(
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.global}>
                    <div className={styles.local}>
                        <div className={styles.interno}>
                            <h1>Baixe o nosso aplicativo</h1>
                            <div className={styles.apps}>
                                <p>
                                    Disponivel no Google Play
                                </p>
                            </div>
                            <div className={styles.apps}>
                                <p>
                                    Disponível na App Store
                                </p>
                            </div>
                        </div>
                        <div className={styles.interno}>
                            <h1 className={styles.TitleRede} >Nos siga nas redes sociais</h1>
                            <ul>
                                Central de Relacionamento 0800 xxx xxxx <br />
                                SAC 0800 xxx xxxx <br />
                                Ouvidoria 0800 xxx xxxx <br />
                                falaboobank@gmail.com <br />
                            </ul>
                            <div className={styles.icons}>
                                <div className={styles.icon}>
                                    <Link href='https://www.youtube.com'>
                                        <Image
                                            className={styles.img}
                                            src='/img/icons/youtube.png'
                                            width={60}
                                            height={60}
                                            alt='icone youtube'
                                        />
                                    </Link>
                                </div>
                                <div className={styles.icon}>
                                    <Link href='https://www.instagram.com'>
                                        <Image
                                            src='/img/icons/instagram.png'
                                            width={60}
                                            height={60}
                                            alt='icone instagram'
                                        />
                                    </Link>
                                </div>
                                <div className={styles.icon}>
                                    <Link href='https://www.github.com'>
                                        <Image
                                            src='/img/icons/github.png'
                                            width={60}
                                            height={60}
                                            alt='icone github'
                                        />
                                    </Link>
                                </div>
                                <div className={styles.icon}>
                                    <Link href='https://www.linkedin.com'>
                                        <Image
                                            src='/img/icons/linkedin.png'
                                            width={60}
                                            height={60}
                                            alt='icone linkedin'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.localBottom}>
                        <p className={styles.text}>
                            BooBank Tecnologia e Serviços Digitais © 2022. <br />
                            Todos os direitos reservados. CPF: nº xxx.xxx.xxx-xx <br />
                            Rua Ficção de 7 Além, 277 - Jardim Peter Pan, São Paulo - SP, xxxxx-xxx <br />
                            O BooBank Tecnologia e Serviços Digitais, Brasil, é uma plataforma digital que atua como correspondente no País de uma instituição financeira, nos termos da Resolução CMN n° 3.954 de 24 de fevereiro de 2011. <br />
                            O BooBank não é uma instituição financeira, de modo que quem realiza as operações de crédito, manutenção de contas e demais atividades financeiras é o JOÃO MONTANARI, inscrito no CPF sob nº xxx.xxx.xxx-xx, com sede na Cidade de Campinas, Vila Rialto, São Bernardo, SP, CEP 13036-210.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Styles from '../../styles/AboutUs/Kit.module.css';

import Image from 'next/image';

export default function Kit(){
    return(
        <div className={Styles.container}>
            <div className={Styles.imagem}>
                <Image
                    src='/img/celular.png'
                    width={400}
                    height={600}
                    alt='img celular boobank'
                />
            </div>
            <div className={Styles.child}>
                <h1>Temos conectividade em nosso DNA</h1>
                <p className={Styles.text}>
                    BooBank é a nossa perspectiva de transformação infinita.
                    Nosso logo representa a infinidade de possibilidades que
                    você tem com o seu dinheiro.
                </p>
                <div className={Styles.logos}>
                    <Image
                        src='/img/logo-branca.png'
                        width={100}
                        height={100}
                        alt='logo branca'
                    />
                    <Image
                        src='/img/logo-preta.png'
                        width={100}
                        height={100}
                        alt='logo preta'
                    />
                    <Image
                        src='/img/logo-verde.png'
                        width={100}
                        height={100}
                        alt='logo verde'
                    />
                </div>
                <p>
                    Somos o BooBank. Um banco 100% digital e gratuito, que nasceu com a missão de oferecer 
                    para todos os brasileiros a oportunidade de ter uma conta e um cartão sem custos, taxas 
                    ou anuidade. Acreditamos que desta maneira mais pessoas terão acesso a uma vida financeira 
                    organizada e a oportunidade de realizar seus sonhos.
                </p>
            </div>
        </div>
    )
}
import Styles from '../../styles/AboutUs/Ajuda.module.css';

export default function Ajuda(){
    return(
        <div className={Styles.container}>
            <h1>Ficou com alguma dúvida?</h1>
            <p>
                Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!
            </p>
            <div className={Styles.child}>
                <hr />
                <h3>O BooBank é seguro para fazer transações financeiras?</h3>
                <p>
                    Muito! Investimos pesado em segurança para o seu dinheiro ficar seguro. 
                    Todas as transações têm validação automática do token e você ainda pode 
                    cadastrar sua biometria, que é a maneira mais segura de sacar nos caixas 
                    eletrônicos. Além disso, contamos com toda a segurança e solidez da organização.
                </p>

                <hr />
                <h3>O BooBank tem gerente?</h3>
                <p>
                    Temos vários especialistas financeiros que estão prontos para te ajudar pelo chat, telefone ou e-mail.
                </p>

                <hr />
                <h3>O BooBank é de algum banco?</h3>
                <p>
                    Não. O Boo é uma somativa. Unimos toda a comodidade de um Banco 100% digital 
                    com solidez e segurança. Estamos sempre evoluindo para proporcionar uma experiência 
                    cada vez melhor aos nossos clientes.
                </p>

                <hr />
                <h3>O BooBank tem agência?</h3>
                <p>
                    O BooBank não possui agência própria, mas se precisar, pode entrar em contato via email ou telefone.
                </p>

                <hr />
                <h3>O que é o BooBank?</h3>
                <p>
                    O BooBank é um Banco 100% digital com tudo o que você precisa.
                    Tem conta-corrente, cartão de crédito e débito, e serviços grátis e ilimitados como: transferências, 
                    Pix e saques nos caixas eletrônicos do BooBank e Rede Banco24Horas e muito mais.
                    No app do Boo, você encontra mimos exclusivos, descontos em parceiros que têm tudo a ver com você. 
                    Além de investimentos, cashBack, vaquinha e outros serviços que vão facilitar o seu dia a dia.
                </p>
            </div>
        </div>
    )
}
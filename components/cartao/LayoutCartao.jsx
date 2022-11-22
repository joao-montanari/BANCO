import Styles from '../../styles/cartao/LayoutCartao.module.css';

import CartaoFrente from '../CartaoFrente';
import CartaoVerso from '../CartaoVerso';

export default function LayoutCartao(){
    return(
        <div className={Styles.container}>
            <h1 className={Styles.titulo}>
                Nosso cartão tem um design inovador e diversas vantagens exclusivas para você fazer acontecer.
            </h1>
            <CartaoFrente/>
            <CartaoVerso/>
        </div>
    )
}
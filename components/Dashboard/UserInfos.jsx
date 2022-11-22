import Styles from '../../styles/Dashboard/UserInfos.module.css';

import Image from 'next/image';

export default function UserInfos(){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.photo}>

                </div>
                <div className={Styles.content}>
                        <h1>João Vitor M. Silva</h1>
                        <h4>365.527.148-40 - Conta Corrente</h4>
                </div>
            </div>
        </div>
    )
}
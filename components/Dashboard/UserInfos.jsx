import Styles from '../../styles/Dashboard/UserInfos.module.css';

import Image from 'next/image';

export default function UserInfos(props){
    return(
        <div className={Styles.container}>
            <div className={Styles.child}>
                <div className={Styles.photo}>
                    {/* <Image src={props.foto} width={100} height={100}/> */}
                </div>
                <div className={Styles.content}>
                        <h1>{props.nome}</h1>
                        <h4>Data nascimento: {props.nascimento}</h4>
                </div>
            </div>
        </div>
    )
}
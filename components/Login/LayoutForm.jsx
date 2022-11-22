import Styles from '../../styles/Login/LayoutForm.module.css';

import Form from './Form';

export default function LayoutForm(){
    return(
        <div className={Styles.container}>
           <Form/>
        </div>
    )
}
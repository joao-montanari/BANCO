import Styles from '../styles/GridLayout.module.css';

import Card from './Card';

export default function GridLayout(){
    return(
        <div className={Styles.container}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
import styles from './card.module.scss';

import CardImage from './cardImage.component';

import CardInfo from './cardInfo.component';


export default function Card() {
    return (

        <div className={styles.card}>

            <CardImage />
            <CardInfo/>

        </div>
    )
  }
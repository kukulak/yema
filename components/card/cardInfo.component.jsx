import styles from './card.module.scss';
import CardBtn from './cardBtn.component';
import CardName from './cardName.component';

export default function CardInfo() {
    return (

        <div className={styles.info}>
            INFO
            <CardBtn/>
            <CardName/>
        </div>
    )
  }
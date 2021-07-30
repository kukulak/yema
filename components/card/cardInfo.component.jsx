import styles from './card.module.scss';
import CardBtn from './cardBtn.component';
import CardName from './cardName.component';



export default function CardInfo({link, name, red, date}) {
    return (

        <div className={styles.info}>
            <CardName name={name} red={red} />
            <CardBtn texto="more on Wikipedia" link={link}/>
        </div>
    )
  }
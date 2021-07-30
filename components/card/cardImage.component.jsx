import styles from './card.module.scss'

export default function CardImage({image}) {
    return (
        <div className={styles.image}>
            <img src={image} alt="" />
        </div>
    )
  }
import styles from './card.module.scss'

// import Link from "next/link"; 

export default function CardBtn({link, texto}) {
    return (


        <div className={styles.btn}>
            

            <a className={styles.btn} href={link} target="_blank" rel="noopener noreferrer">
                { texto }
            </a>

            
        </div>
    )
  }
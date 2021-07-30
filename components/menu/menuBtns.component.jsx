import styles from './menu.module.scss'

import Link from "next/link"; 

export default function MenuBtns({link, texto}) {
    return (


        <div className={styles.btn}>
            

            <Link className={styles.btnInd} href={link} target="_blank" rel="noopener noreferrer">
                { texto }
            </Link>

            {/* <Link href={link}>
            <a>
                more on wikipedia
            </a>
            </Link> */}
        </div>
    )
  }
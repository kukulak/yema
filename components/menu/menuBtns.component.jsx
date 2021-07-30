import styles from './menu.module.scss'

import Link from "next/link"; 

import { useRouter } from 'next/router'


export default function MenuBtns({link, texto}) {

    const router = useRouter()
    const style = {
        order: router.asPath === link ? '0' : '2',
        backgroundColor: router.asPath === link ? 'grey' : '#0e0e0e',
        pointerEvents: router.asPath === link ? 'none' : 'all' , 
    }

    const styleB = {
        order: router.asPath === link ? '0' : '2',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(link)
      }
    

    return (


        <div style={styleB} className={styles.btn}>
            

            <a onClick={handleClick} style={style} className={styles.btnInd} href={link} target="_blank" rel="noopener noreferrer">
                { texto }
            </a>

           
        </div>
    )
  }
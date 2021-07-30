import styles from './acerca.module.scss'

import Text from './acercatext.component'
// import Link from "next/link"; 

export default function Acerca({ ...props }) {
    return (


        <div className={styles.contenedor}>
            
          <Text summary={ props.summary } text={props.text}/>

        </div>
    )
  }
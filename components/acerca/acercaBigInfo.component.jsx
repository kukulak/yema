import styles from './acerca.module.scss'

// import Link from "next/link"; 

export default function BigInfo(props) {
    return (


        <div className={styles.bigInfo}>
                 <p> {props.text} </p> 
                 <p className={styles.moreInfo}>
                     { props.summary }
                 </p>

                 {/* <span> { props.summary }</span> */}
                 
        </div>
    )
  }
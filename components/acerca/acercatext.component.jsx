import styles from './acerca.module.scss'

// import Link from "next/link"; 

export default function Text(props) {
    return (


        <div className={styles.txt}>
                 <p> {props.text} </p> 
                 <p className={styles.person}>
                     { props.summary }
                 </p>

                 {/* <span> { props.summary }</span> */}
                 
        </div>
    )
  }
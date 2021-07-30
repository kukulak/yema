import styles from './acerca.module.scss'



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
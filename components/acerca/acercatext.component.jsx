import styles from './acerca.module.scss'



export default function Text(props) {
    return (


        <div className={styles.txt}>
                 <p> {props.text} </p> 
                 <p className={styles.person}>
                     { props.summary }
                 </p>

                
                 
        </div>
    )
  }
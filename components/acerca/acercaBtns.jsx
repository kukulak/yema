import styles from './acerca.module.scss'



export default function Btns(props) {
    return (


        <div className={styles.btns}>

               
                 <a href={props.source} target="_blank" rel="noopener noreferrer">
                     { props.text }
                     <img src={props.imgLogo} alt="" />
                     
                 </a>

        </div>
    )
  }
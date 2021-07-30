import styles from './menu.module.scss'
import MenuBtns from './menuBtns.component'
import { useRouter } from 'next/router'

// import Link from "next/link"; 

export default function Menu({link}) {

    const router = useRouter()
    const styleMenu = {
        
    }


    return (

        

        <div className={styles.theHead}>

            <div className={styles.logoNombre}>
                <h1 className={styles.title}>
                        spaceX  <br /> <span className={styles.span}> pastLaunches </span> 
                        
                
                </h1>
                <p className={styles.description}>
                
                for
                </p>
                <img src= '/yemaLogo.svg' width="200"></img>
            </div>




            <div style={styleMenu} className={styles.mBtn}>
                
                <MenuBtns texto="Past Launches" link={'/'}/>
                <MenuBtns texto="Company" link={'/company'}/>

            </div>

        </div>
    )
  }
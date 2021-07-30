import styles from './menu.module.scss'
import MenuBtns from './menuBtns.component'
// import Link from "next/link"; 

export default function Menu({link}) {
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


            <div className={styles.mBtn}>
                

                <MenuBtns texto="Company" link={'/company'}/>

                <MenuBtns texto="Past Lounches" link={'/'}/>

                {/* <Link href={link}>
                <a>
                more on wikipedia
                </a>
            </Link> */}
            </div>

        </div>
    )
  }
import styles from './card.module.scss';

import CardImage from './cardImage.component';

import CardInfo from './cardInfo.component';
import CardFecha from './cardFecha.component';
import Tilt from 'react-vanilla-tilt'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
 
  <div>
    You can put whatever you want inside this
  </div>


export default function Card({date, image, link, red, name}) {
    return (
        
      <>
        <BrowserView>

          <Tilt className={styles.tilt} options={{ "glare-prerender": false, "max-glare": 1, glare: true, scale: 12, max: 25 }}>
              <div className={styles.card}>
                  <CardFecha date={date} />
                  <CardImage image={image}/>
                  <CardInfo date={date} link={link} name={name} red={red}/>

              </div>
          </Tilt>

        </BrowserView>

        <MobileView>

  
        <div className={styles.card}>
            <CardFecha date={date} />
            <CardImage image={image}/>
            <CardInfo date={date} link={link} name={name} red={red}/>

        </div>
  
        </MobileView>
        
      </>

    )
  }
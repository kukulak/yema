import styles from './card.module.scss';




export default function CardFecha({date}) {
    // const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const event = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(event.toLocaleDateString('es-ES', options));
    
    return (

        <div className={styles.fecha}>
            {/* INFO */}
            
                <p> 
                    {event.toLocaleDateString('es-ES', options)}
                </p>
        </div>
    )
  }
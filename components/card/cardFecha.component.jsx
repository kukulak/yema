import styles from './card.module.scss';

export default function CardFecha({date}) {
    const event = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };

    
    return (

        <div className={styles.fecha}>
            <p> 
                {event.toLocaleDateString('es-ES', options)}
            </p>
        </div>
    )
  }
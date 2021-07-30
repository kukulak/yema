import styles from './card.module.scss'

export default function CardName({ name, red }) {
    return (
        // className={`${style.basic__button ${css}`} 
        <div className={styles.name}>
          
            <h1 className={red}>
                 {name}</h1>
        <style jsx>{`
            .black{
                color: gray;
                color: rgb(44, 44, 44) !important; 
            }
            
            .red{
                color: rgb(190, 0, 0) !important;
            }
            `}
      </style>

        </div>
    )
  }
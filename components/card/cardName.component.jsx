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
                color: rgb(21, 105, 0) !important;
            }
            
            .red{
                padding: 12px 10px 0 0px;
                color: rgb(160, 10, 10);
                background-color: rgb(90, 10, 10) !important;
                text-align: center;
                border-radius: 4px;
            }
            `}
      </style>

        </div>
    )
  }
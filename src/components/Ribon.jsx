import styles from './Ribon.module.css';


const Ribon = (props) => {

    return (
        <div className={styles.ribon}>
            <h1>{props.mainTitle}</h1>
        </div>
    )
}

export default Ribon
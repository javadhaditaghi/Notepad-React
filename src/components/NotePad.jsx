import Styles from "./NotePad.module.css";


const NotePad = (props) => {
    return (
        <div className={Styles.notePad}>
            <h3>{props.noteTitle}</h3>
            <p>{props.noteContent}</p>


        </div>
    )
}


export default NotePad
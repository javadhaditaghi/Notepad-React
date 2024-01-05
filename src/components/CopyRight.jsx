import Styles from "./CopyRight.module.css"



const CopyRight = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <h6 className={Styles.copyright}>Copyright © {year}</h6>

    )
}


export default CopyRight
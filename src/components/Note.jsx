
import CopyRight from './CopyRight'
import NotePad from './NotePad'
import Ribon from './Ribon'

const Note = () => {
    const baseStyle = {
        margin: `40px`
    }
    return (
        <>
            <Ribon mainTitle={"Keeper"}></Ribon>
            <div style={baseStyle}>
                <NotePad noteTitle={"Note Title"}
                    noteContent={"Take a note..."}></NotePad>
            </div>
            <CopyRight></CopyRight>
        </>

    )
}


export default Note
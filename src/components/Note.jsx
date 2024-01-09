
import CopyRight from './CopyRight'
import NotePad from './NotePad'
import Ribon from './Ribon'
import allNotes from "./content"

const Note = () => {
    const baseStyle = {
        margin: `40px`, display: "flex", justifyContent: 'space-between'
    }
    return (
        <>
            <Ribon mainTitle={"Keeper"}></Ribon>
            <div style={baseStyle}>

                {allNotes.map((noted) => (
                    <NotePad
                        key={noted.key}
                        noteTitle={noted.title}
                        noteContent={noted.content}></NotePad>
                ))}

            </div>
            <CopyRight></CopyRight>
        </>

    )
}


export default Note
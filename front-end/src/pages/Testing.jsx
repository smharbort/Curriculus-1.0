// IMPORT PIECES HERE
import Background from "../components/basic/Background"
import WordBubble from "../components/basic/WordBubble"
import MainContainer from "../components/basic/MainContainer"


// IMPORT COMPONENTS HERE


// TEST PIECE COMPONENT DECLARATIONS WITH TAILWIND HERE


//////////////////////////////////////////////////////

function Testing () {
    return (
        <>
            <Background />
            <MainContainer>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
                <WordBubble>
                    <h1>Nice</h1>
                </WordBubble>
            </MainContainer>
        </>
    )
}


export default Testing
import Background from "../components/basic/Background"
import WordBubble from "../components/basic/WordBubble"

// TEST PIECE COMPONENT DECLARATIONS WITH TAILWIND HERE
const MainContainer = ({ className, children }) => {

    const placeholder = `
        h-full w-full border-solid border-yellow-500 border-4
    `

    return (
        <div className={ className || placeholder }>{ children }</div>
    )
}

/////////////////////////////////////////////////////

function Testing () {
    return (
        <>
            <Background />
            <MainContainer>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
                <WordBubble></WordBubble>
            </MainContainer>
            <div>
                <WordBubble>
                    <h1>Nice</h1>
                </WordBubble>
            </div>
        </>
    )
}


export default Testing
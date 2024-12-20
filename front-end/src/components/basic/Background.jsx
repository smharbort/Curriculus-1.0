import styled from "styled-components"

const placeholder = `linear-gradient(bisque .2em, transparent .2em), linear-gradient(90deg, bisque .5em, transparent .2em)`

const StyledBackground = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.$main || "mediumslateblue"};
    background-image: ${(props) => props.$pattern || placeholder };
    background-size: ${(props) => props.$size || `5em 7em`}
`

const Background = ( props ) => (
    <StyledBackground className="absolute inset-0 z-[-1]" { ...props } />
)

export default Background




/* COMPLICATED VERSION FOR LEARNING PURPOSES

this version of the component uses:
1. Styled-components with props & default values from docs
2. Tailwind CSS
3. Spread operator

*/

/* CODE

const StyledBackground = styled.div`
        height: 100vh;
        width: 100vw;
        background-color: ${(props) => props.$main || "mediumslateblue"};
        background-image: ${(props) => `
            linear-gradient(${ props.$splash || "bisque" } ${ props.$x || ".2em" }, transparent .2em),
            linear-gradient(90deg, ${ props.$splash || "bisque" } ${ props.$y || ".5em" }, transparent .2em)
        `};
        background-size: ${(props) => `${ props.$wide || "5em" } ${ props.$tall || "7em" }`};
`

const Background = ({ className, ...props }) => (
    <StyledBackground className={ className } { ...props } />
)

*/
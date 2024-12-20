const MainContainer = ({ className, children }) => {

    const placeholder = `
        relative min-h-screen max-w-full overflow-auto flex flex-col justify-center items-center
    `

    return (
        <div className={ className || placeholder }>{ children }</div>
    )
}

export default MainContainer
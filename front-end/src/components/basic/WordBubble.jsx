const WordBubble = ({ className, children }) => {
    
    const placeholder = `
        w-60 h-40 m-2 p-2 bg-red-600 bg-opacity-75 shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center
        text-2xl text-yellow-50 break-all
    `

    return (
        <div className={ className || placeholder }>{ children }</div>
)}

export default WordBubble
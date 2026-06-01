import { useEffect, useState } from "react";
import '../styles/Terminal.css'

const srcString = `open about`

const Typewriter = ({
  srcString, 
  minTypingDelay = 50, 
  typingDelayVariation = 200
}) => {
  const [content, setContent] = useState('')
       
  useEffect(() => {
    const cursorPosition = content.length
    const typingDelay = 0|(Math.random()*typingDelayVariation+minTypingDelay)
    
    if(cursorPosition == srcString.length) return
    
    const timer = setTimeout(() => {
      setContent(content+srcString[cursorPosition])
      clearTimeout(timer)
    }, typingDelay)
    
  }, [content])
  
  return <span>{content}<span className="cursor">|</span></span>
}

function Terminal() {


    return (
        <div className="bg-neutral-950 font-mono border-3 border-gray-500">
            <div className="grid text-green-300 text-left p-2"> 
                <div className="col-start-1 row-start-1 w-full">
                    <span className="text-gray-400">luis@portfolio:~$ </span>
                    <Typewriter {...{srcString}} />
            </div>
                <input className="col-start-1 row-start-1 w-full bg-transparent text-white outline-none border-gray-500" />
            </div>
        </div>
    )
}

export default Terminal
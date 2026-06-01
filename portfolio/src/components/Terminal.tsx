import { useEffect, useState } from "react";
import '../styles/Terminal.css';

// 1. Move your list of words here
const WORDS_LIST = ["open about", "open projects", "open contact"];
    type TypewriterProps = {
      srcString?: string;
      onComplete?: () => void;
    };

const Typewriter = ({ srcString = '', onComplete }: TypewriterProps) => {
  const [content, setContent] = useState('');
      
  // Reset the typed content whenever a new word is passed in
  useEffect(() => {
    setContent('');
  }, [srcString]);

  useEffect(() => {
    const cursorPosition = content.length;
    const typingDelay = 50;
    const pauseBeforeNextWord = 1500; // Time (ms) the user can read the completed word
    
    // Check if the current word is fully typed
    if (cursorPosition === srcString.length && srcString.length > 0) {
      if (onComplete) {
        const nextWordTimer = setTimeout(() => {
          onComplete();
        }, pauseBeforeNextWord);
        
        return () => clearTimeout(nextWordTimer);
      }
      return;
    }
    
    // Type the next character
    const timer = setTimeout(() => {
      setContent(content + srcString[cursorPosition]);
    }, typingDelay);
  
    // Clean up the timer properly
    return () => clearTimeout(timer);
  
  }, [content, srcString, onComplete]);
  
  return (
    <span className="text-gray-400">
      {content}
      <span className="cursor">|</span>
    </span>
  );
};

export default function Terminal() {
  // 2. Track which word index we are currently on
  const [wordIndex, setWordIndex] = useState(0);

  const handleWordComplete = () => {
    // Loop back to 0 when reaching the end of the array
    setWordIndex((prevIndex) => (prevIndex + 1) % WORDS_LIST.length);
  };

  return (
    <div className="bg-neutral-950/50 font-mono border-3 border-gray-500">
      <div className="grid text-left p-2"> 
        <div className="col-start-1 row-start-1 w-full">
          <span className="text-green-300">luis@portfolio:~$ </span>
          {/* 3. Pass the active string and the completion trigger */}
          <Typewriter 
            srcString={WORDS_LIST[wordIndex]} 
            onComplete={handleWordComplete} 
          />
        </div>
        <input className="col-start-1 row-start-1 w-full bg-transparent text-white outline-none border-gray-500"/>
      </div>
    </div>
  );
}

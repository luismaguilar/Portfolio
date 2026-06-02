import { useEffect, useState } from "react";
import '../styles/Terminal.css';

const WORDS_LIST = ["open about", "open projects", "open contact"];
    type TypewriterProps = {
      srcString?: string;
      onComplete?: () => void;
    };

const Typewriter = ({ srcString = '', onComplete }: TypewriterProps) => {
  const [content, setContent] = useState('');
      
  useEffect(() => {
    setContent('');
  }, [srcString]);

  useEffect(() => {
    const cursorPosition = content.length;
    const typingDelay = 50;
    const pauseBeforeNextWord = 1500; 
    
    if (cursorPosition === srcString.length && srcString.length > 0) {
      if (onComplete) {
        const nextWordTimer = setTimeout(() => {
          onComplete();
        }, pauseBeforeNextWord);
        
        return () => clearTimeout(nextWordTimer);
      }
      return;
    }
    
    const timer = setTimeout(() => {
      setContent(content + srcString[cursorPosition]);
    }, typingDelay);
  
    return () => clearTimeout(timer);
  
  }, [content, srcString, onComplete]);
  
  return (
    <span className="text-gray-600">
      Try typing....
      {content}
      <span className="cursor">|</span>
    </span>
  );
};

export default function Terminal() {
  const [wordIndex, setWordIndex] = useState(0);

  const handleWordComplete = () => {
    setWordIndex((prevIndex) => (prevIndex + 1) % WORDS_LIST.length);
  };

  return (
    <>
      <div className="bg-gray-500 font-mono border-2 border-gray-500 text-white pl-2">Terminal</div>
      <div className="bg-neutral-950/50 font-mono border-2 border-gray-500">
        <div className="grid text-left p-1">
          <div className="col-start-1 row-start-1 w-full text-gray-600">
            <p>
              <span>
                5:07:40 PM&nbsp;
              </span>
              <span className="text-teal-600">
                [portfolio]&nbsp;
              </span>
              <span>
                Initialized...
              </span>
            </p>
            <Typewriter
              srcString={WORDS_LIST[wordIndex]}
              onComplete={handleWordComplete} />
          </div>
        </div>
        <div className="border-t-3 border-gray-500 p-1 flex">
          <label className="text-teal-400 mr-2">luis@portfolio:~$</label><input className="col-start-1 row-start-1 w-full bg-transparent text-gray-200 outline-none border-gray-500"/>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import logo from '../assets/luisLogo.png';
import '../styles/Menu.css';


function Menu() {
    const items = [{ name: "[Value]" }, { name: "[DocuFill]" }, { name: "[Normal]" }];

    const [mediaItem, setMediaItem] = React.useState(items[0]); // <-- seed initial state
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timerId = setInterval(
        () => setIndex((i) => (i + 1) % items.length), // <-- increment index
        2000
        );
        return () => clearInterval(timerId);
    }, []);

    React.useEffect(() => {
        setMediaItem(items[index]); // <-- update media state when index updates
    }, [index]);

    return (
        <div className="bg-neutral-950/50 font-mono w-fit border-3 border-gray-500 leading-none" >
            <img src={logo} className="object-none pt-10 pr-60 pl-60"></img>
            <br/>
           <div className="p-10 text-gray-700">
                    <button className="btn-menu text-green-300 w-full p-1">
                        <span className='float-left'>[about]</span>
                        <span className="float-right text-gray-400">About Me</span>
                    </button>
                    <button className="btn-menu text-green-300 w-full p-1">
                        <span className='float-left'>[projects]</span>
                            <span className="float-right text-gray-400">
                                Check out  
                                <span className='text-green-300'> {mediaItem.name}</span>
                            </span>
                    </button>

                    <br/>
                    <button className=" btn-menu text-green-300 w-full p-1"><span className="float-left">[contact]</span><span className="float-right text-gray-400">Email me!</span></button>
                </div>
            </div>
    )
}

export default Menu
import logo from '../assets/luisLogo.png';

function Menu() {
    return (
        <div className="bg-neutral-950 font-mono w-fit border-3 border-gray-500" >
            <img src={logo} className="object-none pt-10 pr-60 pl-60"></img>
            <br/>
           <div className="p-10 text-gray-700">
                <div>
                    <button className="text-green-300 text-left">[about]</button><p className="float-right">About Me</p>
                </div>
                <div>
                    <button className="text-green-300">[projects]</button><p className="float-right">Check out! <span>projects</span></p>
                </div>
                <div>
                    <button className="text-green-300">[contact]</button><p className="float-right">Email me!</p>
                </div>
                </div>
            </div>
    )
}

export default Menu
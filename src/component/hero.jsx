import p1 from '../assect/pp2.png'


import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <>
        <div className="text-center">
        <div className="text-center">
        <div className='text-center py-20 '>
        <h2 className="text-amber-300 text-2xl">Hello, I'm</h2>
        <h1 className="text-6xl text-white font-bold py-5">Sylvia Dugah</h1>
        <h3 className="text-white py-3 ">Web Developer</h3>
        <button className="" ><Link to="/CV - Sylvia Lyril.docx.pdf" target="_blank" download className="text-center text-amber-300 bg-slate-700 px-3 py-2 rounded-2xl mt-5">Download Cv</Link></button>
        </div>
        {/* <img className='w-96' src={p1}/> */}
        </div>
       
        </div>
        </>
    )
}
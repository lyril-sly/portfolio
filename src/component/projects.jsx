import { Link } from "react-router-dom"
import p1 from '../asset/p1 (2).jpg'
import p2 from '../asset/p2 (2).jpg'
import p3 from '../asset/p3 (2).jpg'



export default function Projects(){
    return(
        <>
        <div className="bg-slate-800 p-5 mt-10">
            <h1 className="text-4xl text-sky-500 text-center p-10">Projects</h1>
          <div className=" md:flex gap-20  ">
            <div className="bg-slate-700 shadow-lg mt-5 ">
                <img src={p1} alt="" />
                <h2 className="text-white font-bold text-center p-1">Chocolate Landing Page</h2>
                <button className="text-center text-amber-200 bg-slate-700 px-3 py-2 rounded-2xl mt-5 ml-20"><Link to='https://github.com/lyril-sly/Landing-page.git'>Github</Link></button>
                <button className="bg-transparent text-gray-400 font-bold rounded-2xl mt-5 p-2"><Link to=''>Live Demo</Link></button>
            </div>
            <div className="bg-slate-700 shadow-lg mt-5">
                <img src={p2} alt="" />
                <h2 className="text-white font-bold text-center p-1">Agro-Mart</h2>
                <button className="text-center text-amber-200 bg-slate-700 px-3 py-2 rounded-2xl mt-5 ml-20"><Link to='https://github.com/Jade-Alpha/Agble_Ville.git'>Github</Link></button>
                <button className="bg-transparent text-gray-400 font-bold rounded-2xl mt-5 p-2"><Link to='https://ecommerce-app-chi-ruddy.vercel.app/'>Live Demo</Link></button>
            </div>
            <div className="bg-slate-700 shadow-lg mt-5">
                <img src={p3} alt="" />
                <h2 className="text-white font-bold text-center p-1">Movie App</h2>
                <button className="text-center text-amber-200 bg-slate-700 px-3 py-2 rounded-2xl mt-5 ml-20"><Link to='https://github.com/Jade-Alpha/movie-app.git'>Github</Link></button>
                <button className="bg-transparent text-gray-400 font-bold rounded-2xl mt-5 p-2"><Link to='https://movie-app-qtpz.vercel.app/'>Live Demo</Link></button>
            </div>
            </div>  
        </div>
        </>
    )
}
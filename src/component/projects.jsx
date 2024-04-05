import { Link } from "react-router-dom"



export default function Projects(){
    return(
        <>
        <div className="bg-slate-800 p-5 mt-10">
            <h1 className="text-4xl text-sky-500 text-center p-10">Projects</h1>
          <div className="ml-20 md:flex gap-40 ml-40">
            <div className="bg-slate-700 shadow-lg p-10 ">
                <img src='' alt="" />
                <h2 className="text-white font-bold">Chocolate Landing Page</h2>
                <button className="text-center text-amber-300 bg-slate-700 px-3 py-2 rounded-2xl mt-5"><Link to='https://github.com/lyril-sly/Landing-page.git'>Github</Link></button>
                <button className="bg-transparent text-white font-bold rounded-2xl mt-5 p-2"><Link to=''>Live Demo</Link></button>
            </div>
            <div className="bg-slate-700 shadow-lg p-10 ">
                <img src='' alt="" />
                <h2 className="text-white font-bold">Agro-Mart</h2>
                <button className="text-center text-amber-300 bg-slate-700 px-3 py-2 rounded-2xl mt-5"><Link to='https://github.com/Jade-Alpha/Agble_Ville.git'>Github</Link></button>
                <button className="bg-transparent text-white font-bold rounded-2xl mt-5 p-2"><Link to='https://ecommerce-app-chi-ruddy.vercel.app/'>Live Demo</Link></button>
            </div>
            <div className="bg-slate-700 shadow-lg p-10">
                <img src='' alt="" />
                <h2 className="text-white font-bold">Movie App</h2>
                <button className="text-center text-amber-300 bg-slate-700 px-3 py-2 rounded-2xl mt-5"><Link to='https://github.com/Jade-Alpha/movie-app.git'>Github</Link></button>
                <button className="bg-transparent text-white font-bold rounded-2xl mt-5 p-2"><Link to='https://movie-app-qtpz.vercel.app/'>Live Demo</Link></button>
            </div>
            </div>  
        </div>
        </>
    )
}
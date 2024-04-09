import tail from '../assect/tailwind-removebg-preview.png'


export default function Skills(){
    return(

        <>
        <div>
            <h1 className='text-center text-sky-500 text-4xl p-20'>My Skills</h1>
            <div className="md:flex gap-10 text-white text-center justify-around p-5">
                <div className='border border-amber-200 w-96 rounded-2xl  grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
            <h2>HTM</h2>
            <i class="fa-brands fa-html5 text-red text-4xl"></i>
            <h2>Experiance</h2>
            </div>
            <div>
            <h2>CSS</h2>
            <i class="fa-brands fa-css3-alt text-cyan-400 text-4xl"></i>
            <h2>Experiance</h2>
            </div>
            <div>
            <h2>JAVASCRIPT</h2>
            <i class="fa-brands fa-js text-amber-300 text-4xl"></i>
            <h2>Intermediate</h2>
            </div>
            <div>
            <h2>REACT</h2>
            <i class="fa-brands fa-react text-sky-400 text-4xl"></i>
            <h2>Intermediate</h2>
            </div>
            </div>
            <div className='border border-amber-200 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 w-96 mt-5'>
            <div>
            <h2>TAILWIND</h2>
            <img className='w-10 h-10' src={tail} alt="" />
            <h2>Experiance</h2>
            </div>
            <div>
            <h2>NODE JS</h2>
            <i class="fa-brands fa-node text-lime-500 text-4xl"></i>
            <h2>Intermediate</h2>
            </div>
            <div className=''>
            <h2>EXPRESS</h2>
            <i class="fa-brands fa-node text-lime-500 text-4x"></i>
            <h2>Intermediate</h2>
            </div>
            <div>
            <h2>MONGODB</h2>
            <i
              class="fa-brands fa-envira fa-rotate-by text-green-500"
              style={{ rotate: "40deg" }}
            ></i>
            <h2>Intermediate</h2>
            </div>
            </div>
        </div>
        </div>
        
        </>
    )
}
import pp from '../asset/pp2.png'


export default function About(){
    return(
        <>
        <div className=" ">
         
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-800 mt-20 p-5 text-center"> 
          <img className='p-10 drop-shadow-2xl justify-center ' src={pp} /> 
         <div className='p-20 '>
            <h1 className='text-center text-sky-500 text-4xl mr-60'>About Me</h1>
            <p className="text-white w-60 md:text-white p-5 shadow-xl ">With a background in web development and project management, Sylvia is a remarkable person who also has a love of music and travel. My background in project management has given me the ability to plan and carry out projects effectively, as well as to pay close attention to detail. I'm always looking to increase my skill set and keep up with the newest innovations in the rapidly evolving field of digital technology. When I'm not buried in a screen, I like travelling to new places, experiencing novel things, and creating treasured memories. Sylvia is constantly excited to take on new tasks and embrace new adventures because she possesses a blend of creativity, strategic thinking, and a zest for life.!</p>

            </div>
         </div>
         </div> 
        </>
    )
}
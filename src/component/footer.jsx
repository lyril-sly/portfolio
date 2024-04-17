import { Link } from "react-router-dom"
import logo from '../asset/logo (2).png'

export default function Footer(){
    return(
        <>
         <footer className="bg-slate-800 p-5 mt-10 grid grid-cols-1 md:grid-cols-3  P-1">
          <img className='h-10 w-10 justify-center' src={logo} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-3  P-1 text-center">
          <h5 className="text-gray-300 text-2xl font-bold">Follow Me</h5>
          <div className="md:flex gap-10">
            <Link to='https://www.linkedin.com/in/sylvia-dugah-7b8536183/' target="_blank"><i class="fa-brands fa-linkedin text-sky-600 text-4xl justify-center p-2"></i></Link>
            <Link to='https://github.com/lyril-sly' target="_blank"><i class="fa-brands fa-github text-white text-4xl p-2"></i></Link>
            <Link to='' target="_blank"><i class="fa-brands fa-twitter text-white text-4xl p-2"></i></Link>
            <Link to='https://www.instagram.com/afi_lyril/?next=%2F&hl=en' target="_blank"><i class="fa-brands fa-instagram text-orange-400 text-4xl p-2"></i></Link>
            <p className=" md:flex text-gray-500 ">&#169; sly. All rights reserved</p>
            </div>
           
            {/* <Link to='' target="_blank"><i class="fa-brands fa-whatsapp text-green-500 text-4xl"></i></Link> */}
        </div>
      
        </footer>
        </>
    )
}


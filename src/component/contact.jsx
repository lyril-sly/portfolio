// import react speach kit

import { useState } from "react"
// import { BsFacebook } from "react-icons/bs";


export default function Contact(){

    const [test, SetTest] = useState('')
    // const {speck} = useSpeechSynthesis()

    const handleOnClick = () =>{
//   speck ({text:text})
    }
    return(
        <>
        <section id="contact">
        <div className="mt-20">
        <h3 className="text-center text-white p-5">Get In Touch</h3>
        <h1 className="text-center font-bold text-3xl text-sky-500">Contact Me</h1>

        <div className=""> 
            <div className="grid grid-cols-1 md:grid-cols-3 p-5 text-center">
                <div className="bg-transparent  border-solid border-2 border-amber-200 rounded p-1 w-96 mt-5">
                <i class="fa-solid fa-envelope text-4xl text-cyan-600"></i>
                    <h2 className="text-2xl font-bold text-white">Email</h2>
                    <h4 className="text-gray-300">sylvialyril.sl@gmail.com</h4>
                    <a href="sylviadugah@gmail.com" target="_blank" className="text-sky-500">Send a Message</a>
                </div>

                <div className="bg-transparent border-solid border-2 border-amber-200 rounded p-1 w-96 mt-5">
                <i class="fa-solid fa-phone text-4xl text-amber-300"></i>
                <h2 className="text-2xl font-bold text-white">Phone</h2>
               <h2 className="text-gray-300">Let's Talk</h2>
               <p className="text-gray-300">+233 204020455</p>
                </div>
                <div className="bg-transparent border-solid border-2 border-amber-200 rounded p-1 w-96 mt-5 :hover">
                <i class="fa-solid fa-location-dot text-4xl text-amber-300"></i>
                <h2 className="text-2xl font-bold text-white">Address</h2>
                <ul class="footer__data">
            <li className="text-gray-300">Accra - Ghana</li>
            <li className="text-gray-300">Adenta</li>
            
          </ul>
                {/* <a href="https://api.whatsaap.com/send?phone+233248206242" target="_blank" className="text-sky-500">Send a Message</a> */}
                </div>
            </div>
            <div className="p-2">
                {/* <form className="grid grid-rows-4 grid-flow-col gap-4 text-center bg-transparent p-2">
                    <input type="text" className="border-solid border-2 border-amber-200 rounded p-1 w-96 bg-transparent text-gray-200" placeholder="Your full name" required/>
                    <input type="text"  className="border-solid border-2 border-amber-200 rounded  w-96 bg-transparent text-gray-200"  placeholder="Your Email" required/> 
                    <div  className="w-96 text-center bg-transparent">
                    <textarea name="" id="" cols="" rows="" className="w-96 text-cente bg-transparent border-solid border-2 border-amber-200 text-gray-200" onChange={(e) =>{SetTest(e.target.value)}} placeholder="Your Message" required></textarea>
                    </div>
                   <div>
                     <button className="bg-sky-500 text-center rounded-2xl text-white p-3 mr-20">Send Message</button>
                     {/* <button className=""  onClick={() => {handleOnClick()}}>Listen</button> */}

                   </div>
                   

                {/* </form> */} 
            </div>
        </div>
        {/* </div> */}
        </section>
        </>
    )
}
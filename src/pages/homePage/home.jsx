import About from "../../component/about";
import Contact from "../../component/contact";
 import Experience from "../../component/experience";
import Footer from "../../component/footer";
import Hero from "../../component/hero";
import NavBar from "../../component/navbar";
import Projects from "../../component/projects";
import Skills from "../../component/skills";

export default function Home(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <About/>
         <Experience/> 
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}
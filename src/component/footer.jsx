import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <>

        <div className="md:flex gap-10 ml-10">
            <Link><i class="fa-brands fa-linkedin text-sky-600 text-4xl"></i></Link>
            <Link><i class="fa-brands fa-github text-white text-4xl"></i></Link>
            <Link><i class="fa-brands fa-twitter text-white text-4xl"></i></Link>
            <Link><i class="fa-brands fa-instagram text-orange-400 text-4xl"></i></Link>
            <Link><i class="fa-brands fa-whatsapp text-green-500 text-4xl"></i></Link>
        </div>
        <footer className="md: flex text-white">
      <div class="footer__container container grid">
        <div class="footer__content">
          <a href="#" class="footer__logo"> Sylvia Dugah
          </a>
        </div>
        <div className="md:flex">
          <h3 class="footer__title">Our Address</h3>

          <ul class="footer__data">
            <li class="footer__information">Accra - Ghana</li>
            <li class="footer__information">Adenta</li>
            
          </ul>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Conatact Us</h3>

          <ul class="footer__data">
            <li class="footer__information">+233 204020455</li>

            <div class="footer__social">
              
              <a href="https://www.instagram.com/" class="footer__social-link">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://www.twitter.com/" class="footer__social-link">
                <i class="ri-twitter-x-line"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <p class="footer__cpright">&#169; sly. All rights reserved</p>
    </footer>
        
        </>
    )
}


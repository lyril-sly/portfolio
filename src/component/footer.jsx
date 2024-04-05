export default function Footer(){
    return(
        <>
        <footer class="footer section">
      <div class="footer__container container grid">
        <div class="footer__content">
          <a href="#" class="footer__logo"> Sylvia Dugah
          </a>
        </div>
        <div class="footer__content">
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
      <p class="footer__cpright">&#169; D'Angelo. All rights reserved</p>
    </footer>
        
        </>
    )
}


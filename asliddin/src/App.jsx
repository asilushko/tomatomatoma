
import './App.css'
import img2 from './assets/images/qizibola.png'
import img3 from './assets/images/img.png'
import img4 from './assets/images/logo.png'
//header

import img5 from './assets/images/png1.png'
import img6 from './assets/images/png2.png'
import img7 from './assets/images/png3.png'
import img8 from './assets/images/png4.png'
//section1

import img9 from './assets/images/egg.png'
import img10 from './assets/images/saladav.png'
import img11 from './assets/images/toma.png'
//section2

import img12 from './assets/images/povar.png'
import img13 from './assets/images/mask1.png'
import img14 from './assets/images/mask2.png'
import img15 from './assets/images/mask3.png'
//footer

import img16 from './assets/images/logosalad.png'
function App() {


  return (
    <>
 <header>
    <div className='koma'  >
    <img src={img4} alt="" />
   <div className='loo'>
     <p>Home</p>
    <p>Menu</p>
    <p>Services</p>
    <p>Offers</p>
   </div>
 <div className='ooo' >
    <input type="search" />
    <img src={img3} alt="" />
 </div>
    <button>📞Contact</button>
   </div>
 
 </header>

<main>
  <section>
  <div className='rea' >
 <div className='pti' >
   <h1>Dive into Delights Of Delectable <span> Food</span></h1>
    <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate </p>
<div className='o'>
 <div className='kkoo' >
    <button>Order Now</button>  
 <h3><a href="https://youtu.be/tbNu3JTl_kU?list=RDtbNu3JTl_kU">Watch Video</a></h3>
 </div>
</div>
 </div>
<div className='jj' >
  <img src={img2} alt="" />
</div>
  </div>
  </section>
</main>



<div className='ko' >
  
<h3>Customer Favorites</h3>
<h2>Popular Categories</h2>

</div>


<div className='dak' >
  <div className='wee' >
<img src={img5} alt="" />
<h3>Main Dish</h3>
<p>(86 dishes)</p>
</div><div className='wee' >
<img src={img6} alt="" />
<h3>Main Dish</h3>
<p>(55 dishes)</p>
</div><div className='wee' >
<img src={img7} alt="" />
<h3>Main Dish</h3>
<p>(99 dishes)</p>
</div><div className='wee' >
<img src={img8} alt="" />
<h3>Main Dish</h3>
<p>(100 dishes)</p>
</div>
 
</div>

<div className='kko' >
  <p>Special Dishes</p>
  <h2>Standout Dishes From Our Menu</h2>
</div>



<div className='youtubr'  >
    <div class="carwd">
    <div class="heart">❤</div>
<img src={img10} alt="" />
    <h3>Fattoush salad</h3>
    <p>Description of the item</p>
    <div class="bottom">
      <div class="price">$24.99</div>
      <div class="rating">
        <span class="star">★</span> 4.9
      </div>
    </div>
  </div>

  <div class="carwd">
    <div class="heart">❤</div>
<img src={img11} alt="" />
    <h3>Vegetable salad</h3>
    <p>Description of the item</p>
    <div class="bottom">
      <div class="price">$29.99</div>
      <div class="rating">
        <span class="star">★</span> 4.2
      </div>
    </div>
  </div>

  <div class="carwd">
    <div class="heart">❤</div>
<img src={img9} alt="" />
    <h3>Egg vegi salad</h3>
    <p>Description of the item</p>
    <div class="bottom">
      <div class="price">$14.99</div>
      <div class="rating">
        <span class="star">★</span> 3.9
      </div>
    </div>
  </div>

</div>
<section class="testimonial-section">

    <div class="chef">
      <div class="bg-shape"></div>
  <img src={img12} alt="" />
      <div class="label">Our Best Chef 😉</div>
    </div>

    <div class="text">
      <h4>TESTIMONIALS</h4>
      <h2>What Our Customers Say About Us</h2>
      <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

      <div class="feedback">
        <div class="avatars">
          <img src={img13} alt="" />
         <img src={img14} alt="" />
         <img src={img15} alt="" />
        </div>
        <div class="rating">
          Customer Feedback 
          ⭐ <span>4.9</span> (18.6k Reviews)
        </div>
      </div>
    </div>
  </section>
  <div class="container">
   
    <div class="left">
      <h4>OUR STORY & SERVICES</h4>
      <h1>Our Culinary Journey And Services</h1>
      <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, 
         blending culinary artistry with warm hospitality.</p>
      <a href="#" class="btn">Explore</a>
    </div>

    <div class="right">
      <div class="card">
        <img  src={img16} alt="" />
        <i class="fa-solid fa-bowl-food"></i>
        <h3>CATERING</h3>
        <p>Delight your guests with our flavors and presentation</p>
      </div>
      <div class="card">
           <img  src={img16} alt="" />
        <i class="fa-solid fa-clock"></i>
        <h3>FAST DELIVERY</h3>
        <p>We deliver your order promptly to your door</p>
      </div>
      <div class="card">
           <img  src={img16} alt="" />
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>ONLINE ORDERING</h3>
        <p>Explore menu & order with ease using our Online Ordering</p>
      </div>
      <div class="card">
           <img  src={img16} alt="" />
        <i class="fa-solid fa-gift"></i>
        <h3>GIFT CARDS</h3>
        <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
      </div>
    </div>
  </div>


  <footer>
    <div class="footer-col">
      <div class="footer-logo">
        <span>F</span>OODI
      </div>
      <p>Savor the artistry where every dish is a culinary</p>
    </div>

    <div class="footer-col">
      <h4>Useful links</h4>
      <a href="#">About us</a>
      <a href="#">Events</a>
      <a href="#">Blogs</a>
      <a href="#">FAQ</a>
    </div>

    <div class="footer-col">
      <h4>Main Menu</h4>
      <a href="#">Home</a>
      <a href="#">Offers</a>
      <a href="#">Menus</a>
      <a href="#">Reservation</a>
    </div>

    <div class="footer-col">
      <h4>Contact Us</h4>
      <p>example@email.com</p>
      <p>+64 958 248 966</p>
      <p>Social media</p>
    </div>
  </footer>






    </>

  )
}

export default App

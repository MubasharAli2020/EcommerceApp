import React from 'react'
import './Home.css';
import Product from './Product';
import first from './images/first.png';
import second from './images/second.png'
import third from './images/third.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import seven from './images/seven.png'
import eight from './images/eight.png'
import nine from './images/nine.png'
import ten from './images/ten.png'
function Home() {
    return (
        <div className="home">
            {/* <img className="home_banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="no" /> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

  <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/5710153/pexels-photo-5710153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/5710153/pexels-photo-5710153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Shop With Your Friends</h3>
    <p>All you need is here</p>
  </div>
    
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/3858268/pexels-photo-3858268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Shop With Your Friends</h3>
    <p>All you need is here</p>
  </div>   
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Shop With Your Friends</h3>
    <p>All you need is here</p>
  </div>
    
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Shop With Your Friends</h3>
    <p>All you need is here</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <h3>Shop With Your Friends</h3>
    <p>All you need is here</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
           {/* Product */}
          
           <div className="row">
               <div className='col'>
           <Product  
           id={1}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={11.39}
           image={first}
           rating={5}
           product="Digital Camera"
           />
            </div> 
            <div className='col'>
           <Product  
           id={2}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={14.00}
           image={second}
           rating={4}
           product="Red Sneakers"
           />
          </div>
          <div className='col'>
           <Product  
           id={3}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={11.00}
           image={third}
           rating={3}
           product="White Sneakers"
           />
           </div>
            </div>
            <div className="row">
            <div className='col'>
           <Product  
           id={4}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={11.00}
           image={four}
           rating={3}
           product="Women Shoes"
           />
          </div>
          <div className='col'>
           <Product  
           id={5}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={4.56}
           image={five}
           rating={2}
           product="Shoes with Coat"
           />
            </div>
            <div className='col'>
             <Product  
           id={6}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={9.8}
           image={six}
           rating={1}
           product="Classic Watch"
           />
           </div>
           </div>

  <div className="row">
  <div className='col'>
           <Product  
           id={6}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={20.66}
           image={ten}
           rating={5}
           product="Brown Bag"
           />
           </div>
           <div className='col'>
             <Product  
           id={7}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={20.66}
           image={eight}
           rating={5}
           product="Beautiful Perfume"
           />
           </div>
           <div className='col'>
             <Product  
           id={8}
           desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           price={20.66}
           image={nine}
           rating={5}
           product="Perfume"
           />
             </div>
           </div>
          
        </div>
    )
}

export default Home;
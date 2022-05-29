import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer (){
return <div  className="footer">
		 
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5 ">
                <div class="col-lg-4 col-md-6 part">
                    <h5 class="h1 text-white">Shop</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. </p>
                </div>
                <div class="col-lg-2 col-md-6 part">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                    <li class="nav-item active">
  <Link  to="/" class="nav-link px-4" style={{fontWeight:'bold'}}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link  to="/login" class="nav-link px-4" style={{fontWeight:'bold'}}>Login</Link>
      </li>
      <li class="nav-item ">
        <Link to="/register" class="nav-link px-4" style={{fontWeight:'bold'}}>Register</Link>
      </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 part">
                    <h5 class="text-white mb-3 text-center">Social Media</h5>
                    <ul class="list-unstyled text-muted text-center">
                        <li><a href="#"><i class="fa-brands fa-facebook fa-2x px-1"></i><i class="fa-brands fa-instagram fa-2x px-1"></i><i class="fa-brands fa-twitter fa-2x px-1"></i></a></li>
                        {/* <li><a href="#"><i class="fa-brands fa-instagram fa-2x py-2"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter fa-2x py-2"></i></a></li> */}
                        
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 part">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
		</div>
}

export default Footer;

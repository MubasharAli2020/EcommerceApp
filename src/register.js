import React from 'react'
import './register.css';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';
function Register() {
    const onSubmit = (event) => {
		event.preventDefault();
		console.log("submission prevented");
	  };
    return (
        <div className="register">
            <div className='logo'>
            <div className='row'>
                <div className='col'>
                <Link to="/">
           <img className="login__logo" src={logo} alt="" />
       </Link>
                </div>
            </div>
            </div>
            <div id="app">
	<section class="form-container">
		<form onSubmit={onSubmit}>
			<h1>Sign Up</h1>

			<fieldset>
				<div class="name">
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Last Name" />
				</div>

				<div class="email">
					<input type="email" placeholder="Email" />
					<p>You can use letters, numbers and periods</p>
				</div>

				<div class="password">
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Confirm" />
				</div>
			</fieldset>

			<button>Submit</button>
		</form>
	</section>
	<aside></aside>
</div>
         </div>
    )
}

export default Register;

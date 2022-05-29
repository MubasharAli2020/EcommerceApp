import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "./Login.css";
import {auth} from './firebase';
import logo from './images/logo.png';
function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then()
        .catch(e=>alert(e.message));
    }
    const register = (e) => {
         e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then()
        .catch(e=>alert(e.message));
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("submission prevented");
      };
    return (
        <div className="login">
            <div className='logo'>
            <div className='row '>
                <div className='col'>
        <Link to="/">
           <img className="login__logo" src={logo} alt="" />
       </Link>
       </div>
       </div>
       </div>
       <form class="box" action="#" method="post" onSubmit={onSubmit} >
           {/* <div className='logo'>
       <Link to="/">
           <img className="login__logo" src={logo} alt="" />
       </Link>
       </div> */}
    <h1>Login </h1>
    <input type="text" name="" placeholder="UserName" />
    <input type="password" name="" placeholder="Password" />
    <input type="submit" name="" value="Login" />
  </form>


       {/* <div className="card login__container">
           <h1>SignIn</h1>
           <form onSubmit={Login}>
               <h5>Email</h5>
               <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
               <h5>Password</h5>
               <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
               <button className="login__signInButton" type="submit">Sign In</button>
           </form>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
           <button className="login__registerButton" type="button">Create your Amazon Account</button>
       </div> */}
        </div>
       
    )
}

export default Login;

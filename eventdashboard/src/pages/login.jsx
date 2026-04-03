import React from 'react';
import './login.css';

import logoImg from "../assets/LoginPage.png";


const Login = () => {
    return (  <>
    <body className='body'>
        <div className='card'>
        <div class="logo">
      <img src={logoImg} alt="Logo" className="logo"/>
    </div>

    <h1>Admin Login</h1>
    <p class="p">Enter your credentials to access the dashboard</p>

    <form>
      <div class="login-form">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="admin@example.com"/>
      </div>

      <div class="login-form">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="........"/>
      </div>

      <button type="submit" class="login-btn">Login</button>
    </form>


        </div>
    </body>
    </>);
}
 
export default Login;
import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className='log'>
<form >
            <h1>Login form</h1>
            <label>First name</label><br></br>
            <input type="text" placeholder='type a fisrt name' ></input><br></br>
            <label>Last Name</label><br></br>
            <input type="text" placeholder='type a last name ' required ></input><br></br>
            <label>Passsword</label><br></br>
            <input type='password' placeholder=' type Password' ></input><br></br><br></br>
            <button className='button' value="submit">submit</button><br></br>
            <label>or login with</label><br></br>
            <div class="container">
            <a href="#" class="fb btn1">
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook</a>
            <a href="#" class="ba btn1">
            <i class="fa fa-google fa-fw"></i> Login with google</a>

            </div>
            </form>
        </div>
    )
}

export default Navbar

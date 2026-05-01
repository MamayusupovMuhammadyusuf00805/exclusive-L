import React from 'react'
import "./Sign.css"
function Sign() {
  return (
    <div className='signpage'>
        <div className="container">
            <div className="sign">
                <div className="rights">
                    <img src="public/imgs/Side Image(1).png" alt="" />
                </div>
                <div className="lefts">
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                    <form action="">
                        <input type="text" placeholder='Name:'/>
                        <hr />
                        <input type="text" placeholder='Email or Phone Number:'/>
                        <hr />
                        <input type="text" placeholder='Password:'/>
                        <hr />
                    </form>
                    <div className="btnws">
                        <button className='btn1'>Create Account</button>
                        <button className='btnws2'><i class="fa-brands fa-google"></i>Sign up with Google</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign
import React from 'react'
import "./Log.css"
function Log() {
  return (
    <div className='logpage'>
        <div className="container">
            <div className="log">
                <div className="rights">
                    <img src="public/imgs/Side Image(1).png" alt="" />
                </div>
                <div className="left">
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                    <form action="">
                        <input type="text" placeholder='Email or Phone Number:'/>
                        <hr />
                        <input type="text" placeholder='Password:'/>
                        <hr />
                    </form>
                    <div className="bt">
                        <button className='bt1'>Log In</button>
                        <button className='bt2'>Forget Password?</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log
import React from 'react'




function Footer() {
  return (
    <div className='foot'>
        <div className="container">
            <div className="footer">
                <div className="foot1">
                    <h2>Exclusive</h2>
                    <h2>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    <button>Enter your email<i class="fa-solid fa-circle-right"></i></button>
                </div>
                <div className="foot1">
                    <h2>Support</h2>
                    <p>111 Bijoy sarani, Dhaka, </p>
                    <p> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="foot1">
                    <h2>Account</h2>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="foot1">
                    <h2>Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="foot1">
                    <h2>Download App</h2>
                    <p>Save $3 with App New User Only</p>
                    <div className="qr">
                        <img src="public/imgs/Qr Code.png" alt="" />
                        <div className="btw">
                            <button><i class="fa-brands fa-google-play"></i>Get It On</button>
                            <button><i class="fa-brands fa-app-store-ios"></i>Download On The</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='year'>Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  )
}

export default Footer

import footerpayment from "../../assets/img/payment.png"
import "./Footer.scss"
const Footer = () => {
    return (
        <div className='footer'>


            <div className='footer-container'>

                <div className='left'>
                    <div className='left-links'>
                        <span >Categories</span>
                        <ul>
                            <span>Men</span>
                            <span>Women</span>
                            <span>Shoes</span>
                            <span>Accessories</span>
                            <span>New Arrivals</span>
                        </ul>
                    </div>
                    <div className='left-links'>
                        <span>Links</span>
                        <ul>
                            <span>Pages</span>
                            <span>FAQ</span>
                            <span>Stores</span>
                            <span>Compare</span>
                            <span>Cookies</span>
                        </ul>
                    </div>

</div>
                    <div className='right'>
                        <div className="text">
                            <span>About</span>
                            <p> shark store is one of the biggest stores all over the world
                                shark store is welcome You are welcome 
                            </p>
                        </div>

                        <div className="text">
                            <span>Contact</span>
                            <p> You are welcome to contact us on one of ourYou are welcome to
                             contact us
                            </p>
                        </div>
                    </div>


                </div>

            

            <div className='footer-below'>
                <div className='copyright'>
                    <h4>SharkStore</h4>
                <span> &copy; copyright 2023. All rights reserved</span>
                </div >
                <img src={footerpayment} alt='footer-img' />
            </div>
        </div >
    )
}

export default Footer
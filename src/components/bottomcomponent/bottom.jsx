import './bottom.css'
import facebook from './images/facebook.png'
const Bottom = () => {
    return <>
        <div className='bottomTopContainerDiv'>
            <div className='bottomOuterContainerDiv'>
                <div className='avatarContainerDiv'>
                    <h1 className='avatarHeading'>Avatar</h1>
                    <div className='avatarParaContainer'>
                        <p>
                            We are a USA owned company, and we print and ship as many of our products as we can in the USA, including our mugs, tumblers, shirts, hats, hoodies and more. As many as possible are also manufactured in the USA.
                        </p>
                    </div>
                    <div className='addressContainer'>
                        <span className='address'>
                            <h2 className=''>Address</h2>
                            <p>333 3rd Avenue North, St. Petersburg, Florida, United States</p>
                        </span>

                        <span className='phone'>
                            <h2>Phone</h2>
                            <p><a href="">1000000000</a></p>
                            <h2>Email</h2>
                            <p><a href="">payments@smar7apps.com</a></p>
                        </span>
                    </div>
                </div>

                <div className='shopAvatarContainer'>
                    <div className='shopAvatarInnerContainer'>
                        <h2 className='shopAvatar'>Shop Avatar!</h2>
                        <p><a href="">Search</a></p>
                        <p><a href="" alt="">Shop All</a></p>
                        <p><a href="" alt="">About Us</a></p>
                        <p><a href="" alt="">Contact Us</a></p>
                    </div>
                </div>

                <div className='customerServiceContainer'>
                    <div className='customerInnerServiceContainer'>
                        <h2 className='customerServices'>Customer Service</h2>
                        <p><a href="">Contact Us</a></p>
                        <p><a href="">Terms and Conditions</a></p>
                        <p><a href="">Privacy Policy</a></p>
                    </div>
                </div>

                <div className='followUsContainer'>
                    <div className='followUsInnerContainer'>
                        <h2>Follow Us</h2>

                        <p><a href="" className='socialMedial'>
                            <i class="fab fa-facebook-square"></i>
                            Twitter
                        </a>
                        </p>
                        <p><a href="" className='socialMedial'>
                            <i class="fab fa-twitter-square"></i>
                            Twitter</a>
                        </p>
                        <p><a href="" className='socialMedial'>
                            <i class="fab fa-pinterest-square"></i>
                            Pinterest</a>
                        </p>
                        <p><a href="" className='socialMedial'>
                            <i class="fab fa-instagram-square"></i>
                            Instagram</a>

                        </p>
                    </div>
                </div>
            </div>
            <div className='copyright-container'>
                <p>Copyright © 2022, Avatar Powered by Shopify</p>
            </div>
        </div>
    </>
}
export default Bottom;
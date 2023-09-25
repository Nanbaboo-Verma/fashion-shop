import './hero.css'
import hero from './hero.jpg'
import arrow from './arrow.png'
const Hero = () => {
    return <>
        <div className='outerDiv'>
            <div className='innerDiv'>
                <h1 className='imageHeading'>So many ways to express yourself</h1>
                <img src={hero} alt="" className='heroImage' />

                <div className='shopDiv'>
                    <button className='shopButton'>Shope Now
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default Hero;
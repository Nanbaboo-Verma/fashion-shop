import './apparel.css';
import apparel1 from './images/apparel1.jpg';
import apparel2 from './images/apparel2.jpg';
import apparel3 from './images/apparel3.jpg';
import apparel4 from './images/apparel4.jpg';
const Apparel = () => {
    const apparelData = [
        {
            'image': apparel1,
            'data': 'Forget Adulting Go Camp',
            'rupees': '$14.00'
        },
        {
            'image': apparel2,
            'data': 'What Happens at Camp',
            'rupees': '$24.00'
        },
        {
            'image': apparel3,
            'data': 'You will never know',
            'rupees': '$24.00'
        },
        {
            'image': apparel4,
            'data': "Let's Wander Wifi Weak",
            'rupees': '$24.00'
        }
    ]
    return <>
        <h1 className='apparelHeading'>Apparel</h1>
        <div className='apparelInnerDiv'>
            {apparelData.map((items) => {
                return <>
                    <span className='apparelItems'>
                        <img src={items.image} alt="" className='apparelImages' />
                        <p className='apparelData'>{items.data}</p>
                        <p className='apparelRupees'>{items.rupees}</p>
                    </span>
                </>
            })}
        </div>
    </>
}
export default Apparel;
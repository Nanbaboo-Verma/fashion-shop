import './badge.css'
import Usa from './images/USA.png';
import Shopping from './images/Shipping.png'
import Guarantee from './images/Guarantee.png'
const Bage = () => {
    const badge = [
        {
            'image': Usa,
            'data': 'Locally Owned'
        },
        {
            'image': Shopping,
            'data': 'Fast Shipping'
        },
        {
            'image': Guarantee,
            'data': '365 Day Guarantee'
        }
    ];
    return <>
        <div className="badgeDiv">
            {badge.map((value) => {
                return (<>
                    <span
                        className="badgeSpan">
                        <img
                            src={value.image}
                            alt='ShowImage'
                            className='badgeShowIcon'
                        />
                        <p
                            className='badgeDataValue'>
                            {value.data}
                        </p>
                    </span>
                </>)
            })}
        </div>
    </>
}
export default Bage;
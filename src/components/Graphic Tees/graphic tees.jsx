import './graphictees.css';
import graphic1 from './images/graphic1.jpg';
import graphic2 from './images/graphic2.jpg';
import graphic3 from './images/graphic3.jpg';
import graphic4 from './images/graphic4.jpg';
const GraphicTees = () => {
    const graphicData = [
        {
            'image': graphic1,
            'data': 'Making Memories',
            'rupees': '$24.00'
        },
        {
            'image': graphic2,
            'data': 'Willd Soul',
            'rupees': '$24.00'
        },
        {
            'image': graphic3,
            'data': 'Lake Life',
            'rupees': '$24.00'
        },
        {
            'image': graphic4,
            'data': 'Wild Spirite',
            'rupees': '$24.00'
        }
    ]
    return <>
        <h1 className='graphicTeesHeading'>Graphic Tees</h1>
        <div className='graphicInnerDiv'>
            {graphicData.map((items) => {
                return <>
                    <span className='graphicItems'>
                        <img src={items.image} alt="" className='graphicImages' />
                        <p className='graphicData'>{items.data}</p>
                        <p className='graphicRupees'>{items.rupees}</p>
                    </span>
                </>
            })}
        </div>
    </>
}
export default GraphicTees;
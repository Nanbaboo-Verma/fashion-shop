import './collection.css';
import Collection1 from './images/Collection1.jpg';
import Collection2 from './images/Collection2.jpg';
import Collection3 from './images/Collection3.jpg';
import Collection4 from './images/Collection4.jpg';
const CollectionList = () => {
    const collectionData = [
        {
            'image': Collection1,
            'data': 'Graphic Tees'
        },
        {
            'image': Collection2,
            'data': "Men's"
        },
        {
            'image': Collection3,
            'data': "Women's"
        },
        {
            'image': Collection4,
            'data': 'Apparel'
        }
    ]
    return <>
        <h1 className='collectionList'>Collection List</h1>
        <div className='collectionInnerDiv'>
            {collectionData.map((items) => {
                return <>
                    <span className='collectionItems'>
                        <img src={items.image} alt="" className='collectionImage' />
                        <p className='collectionData'>{items.data}
                            <i className='fas fa-arrow-right'></i>
                        </p>

                    </span>
                </>
            })}
        </div>
    </>
}
export default CollectionList;
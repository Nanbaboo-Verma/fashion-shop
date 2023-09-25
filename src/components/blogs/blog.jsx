import ShopNowButton from '../shop now/shopnowbutton';
import './blog.css'
const Blogs = () => {
    return <>
        <div className="blogContainerDiv">
            <span className="leftImageContainer">
                <ShopNowButton />
            </span>
            <span className="righeImageContainer">
                <ShopNowButton />
            </span>
        </div>
    </>
}
export default Blogs;
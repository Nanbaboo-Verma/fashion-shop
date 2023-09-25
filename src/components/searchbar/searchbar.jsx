import './search_bar.css';
import search from './Searchbar.png'
import user from './user.png'
import cart from './cart.png'
const Search = () => {
    return <>
        <div className="searchBatOuterDiv">
            <div className="med-container">
                <div className='searchbarInnerDiv'>
                    <div className='site_logo'>
                        <span>Avatar</span>
                    </div>
                    <div className='search_span'>
                        <input type="text" placeholder='Search' className="search_bar" />
                        <img src={search} alt="" className='search_icon' />
                    </div>
                    <div className='header-account-icons'>
                        <a href="">
                            <img src={user} alt="user" className='account-icon' />
                        </a>
                        <a href="">
                            <img src={cart} alt="user" className='account-icon' />
                        </a>
                        <a href="">
                            <img src={cart} alt="user" className='account-icon' />
                        </a>
                        <a href="">
                            <img src={cart} alt="user" className='account-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex justify-center align-center'>
            <div className="item w-d-25 w-t-50 w-100">1</div>
            <div className="item w-d-25 w-t-50 w-100">2</div>
            <div className="item w-d-25 w-t-50 w-100">2</div>
            <div className="item w-d-25 w-t-50 w-100">2</div>
        </div>

    </>
}
export default Search;
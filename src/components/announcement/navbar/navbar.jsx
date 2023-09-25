import './navbar.css'
const NavBar = () => {
    const navigation = ['Home', 'Shop', 'News', 'Contact Us']
    return <>
        <nav className="nav_bar">
            <ul>
                {navigation.map((items) => {
                    return <>
                        <li><a href='' className='list-items'>{items} </a></li>
                    </>
                })}
            </ul>
        </nav>

    </>
}
export default NavBar;
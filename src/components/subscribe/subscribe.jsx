import './subscribe.css'
const Subscribe = () => {
    return <>
        <div className="subscribeContainer">
            <div className='subscribeInnerContainer'>
                <h1 className="subscribeHeading">Subscribe to our newsletter</h1>
                <p className="subscribeParagraph">Sign up for our newsletter to recieve news, promotions, and annoucements.</p>
                <div className='emailText'>
                    <input type="text" placeholder="Email address" className="emailAddress" />
                    <button className='singUpButton'>Sing Up</button>
                </div>
            </div>
        </div>
    </>
}
export default Subscribe;
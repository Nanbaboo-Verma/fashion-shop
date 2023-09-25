import './latest.css'
import latest1 from './latest1.jpg';
import latest2 from './latest.jpg';
import latest3 from './latest3.jpg';
const Latestblogarticles = () => {
    const latestData = [
        {
            'image': latest1,
            'content1': 'The Graphic Shirt Collection You Never Thought You Needed',
            'content2': "Stop it with the basic T's, life is calling your name. Pick up a fresh new graphic T from our Hot collection.",
            'content3': 'Read more'
        },
        {
            'image': latest2,
            'content1': 'Who Needs Handshakes? Let Your Shirt Be Your Introduction!',
            'content2': "Let's quit the uninteresting shirt game and move on to showing others what we're really into - let your shirt be part of your brand!",
            'content3': 'Read more'
        },
        {
            'image': latest3,
            'content1': 'Empower Your Friends With Personalized Threads This Holiday Season',
            'content2': "Stop guessing what kind of gift to get someone. Browse our designs to make your loved ones smile this holiday season.",
            'content3': 'Read more'
        }
    ]
    return <>
        <div>
            <h1 className='latestHeading'>Latest Blog Articles</h1>
            <div className='latestContainer'>
                {latestData.map((item) => {
                    return (
                        <div className='latestItems'>
                            <img src={item.image} alt="" className='latestImages' />
                            <p className='latestContent1'>{item.content1}</p>
                            <p className='latesContent2'>{item.content2}</p>
                            <p className='latesContent3'>{item.content3}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
}
export default Latestblogarticles;
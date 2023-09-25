import AllCollectionButton from "./allCollectionButton/allcollectionbutton";
import Announcement from "./announcement/announce";
import NavBar from "./announcement/navbar/navbar";
import Apparel from "./apparel/apparel";
import Badge from "./badge/badge";
import Blogs from "./blogs/blog";
import Bottom from "./bottomcomponent/bottom";
import CollectionList from "./collectionlist/collectionlist";
import GraphicTees from "./Graphic Tees/graphic tees";
import Hero from "./hero/hero";
import Latestblogarticles from "./latestarticles/images/latestarticles";
import Search from "./searchbar/searchbar";
import ShopCollectionButton from "./shop collection button/shopCollectionButton";
import Subscribe from "./subscribe/subscribe";
import ViewAllButton from "./view all button/viewallbutton";


const Main = () => {
    return <>
        <Announcement />
        <Search />
        <NavBar />
        <Hero />
        <Badge />
        <CollectionList />
        <AllCollectionButton />
        <GraphicTees />
        <ShopCollectionButton />
        <Apparel />
        <ShopCollectionButton />
        <Blogs />
        <Latestblogarticles />
        <ViewAllButton />
        <Subscribe />
        <Bottom />

    </>
}
export default Main;
import './Home.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";
import FeaturedChart from "../../components/FeaturedChart/FeaturedChart";
import NormalChart from "../../components/NormalChart/NormalChart";
import Tables from "../../components/Table/Table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="home__container">
                <Navbar/>
                <div className="home__widgets">
                    <Widgets type="user"/>
                    <Widgets type="order"/>
                    <Widgets type="earning"/>
                    <Widgets type="balance"/>
                </div>
                <div className="home__charts">
                    <FeaturedChart/>
                    <NormalChart/>
                </div>
                <div className="home__listContainer">
                    <div className="home__listTitle">Latest Transactions </div>
                    <Tables/>
                </div>
            </div>
        </div>
    );
};

export default Home;

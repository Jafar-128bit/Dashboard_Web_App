import './Home.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";

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
            </div>
        </div>
    );
};

export default Home;

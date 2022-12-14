import './New.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const New = () => {
    return (
        <div className="new">
            <Sidebar/>
            <div className="new__container">
                <Navbar/>
            </div>
        </div>
    );
};

export default New;

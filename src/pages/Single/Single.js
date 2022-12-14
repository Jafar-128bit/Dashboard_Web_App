import './Single.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import NormalChart from "../../components/NormalChart/NormalChart";
import Tables from "../../components/Table/Table";

const Single = () => {
    const imgUrl = "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?cs=srgb&dl=pexels-adrienn-1542085.jpg&fm=jpg";
    const itemImgAlt = "profilePic";
    return (
        <div className="single">
            <Sidebar/>
            <div className="single__container">
                <Navbar/>
                <div className="single__top">
                    <div className="single__left">
                        <div className="single__editButton">Edit</div>
                        <h1 className="single__title">Information</h1>
                        <div className="single__item">
                            <img
                                src={imgUrl}
                                alt={itemImgAlt}
                                height="200"
                                className="single__itemImg"
                            />
                            <div className="single__details">
                                <h1 className="single__itemTitle">Jane Doe</h1>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">Email:</span>
                                    <span className="single__itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">Phone:</span>
                                    <span className="single__itemValue">+1 2312 12 14</span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">Address:</span>
                                    <span className="single__itemValue">Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">Country:</span>
                                    <span className="single__itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single__right">
                        <NormalChart aspect={"singleUser"} title={"User Spending (Last 6 Months)"}/>
                    </div>
                </div>
                <div className="single__bottom">
                    <h1 className="single__title">Last Transactions</h1>
                    <Tables/>
                </div>
            </div>
        </div>
    );
};

export default Single;

import './FeaturedChart.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeaturedChart = () => {
    return (
        <div className="featured">
            <div className="featured__top">
                <h1 className="featured__title">Total Revenue</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="featured__bottom">
                <div className="featured__featuredChart">
                    <CircularProgressbar
                        value={70}
                        text={"70%"}
                        strokeWidth={10}
                    />
                </div>
                <p className="featured__title">Total sales made today</p>
                <p className="featured__amount">$420</p>
                <p className="featured__desc">
                    Previous transaction processing. Last payment may not be included.
                </p>
                <div className="featured__summary">
                    <div className="featured__item">
                        <div className="featured__itemTitle">Target</div>
                        <div className="featured__itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="featured__resultAmount">$9.4k</div>
                        </div>
                    </div>
                    <div className="featured__item">
                        <div className="featured__itemTitle">Last Week</div>
                        <div className="featured__itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="featured__resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="featured__item">
                        <div className="featured__itemTitle">Last Month</div>
                        <div className="featured__itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="featured__resultAmount">$5.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedChart;

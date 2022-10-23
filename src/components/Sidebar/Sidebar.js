import './Sidebar.scss';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <span className="sidebar__logo">Jafar Admin</span>
            </div>
            <hr />
            <div className="sidebar__center">
                <ul>
                    <p className="sidebar__title">Main</p>
                    <li> <DashboardCustomizeRoundedIcon className="sidebar__icon"/> <span>Dashboard</span></li>
                    <p className="sidebar__title">List</p>
                    <li> <SupervisedUserCircleRoundedIcon className="sidebar__icon"/> <span>Users</span></li>
                    <li> <ShoppingBagRoundedIcon className="sidebar__icon"/> <span>Products</span></li>
                    <li> <SellRoundedIcon className="sidebar__icon"/> <span>Orders</span></li>
                    <li> <DeliveryDiningRoundedIcon className="sidebar__icon"/> <span>Delivery</span></li>
                    <p className="sidebar__title">Analytics</p>
                    <li> <QueryStatsRoundedIcon className="sidebar__icon"/> <span>Stats</span></li>
                    <li> <CircleNotificationsRoundedIcon className="sidebar__icon"/> <span>Notifications</span></li>
                    <p className="sidebar__title">Service</p>
                    <li> <HealthAndSafetyRoundedIcon className="sidebar__icon"/> <span>System Health</span></li>
                    <li> <FormatListBulletedRoundedIcon className="sidebar__icon"/> <span>Logs</span></li>
                    <li> <SettingsRoundedIcon className="sidebar__icon"/> <span>Settings</span></li>
                    <p className="sidebar__title">User</p>
                    <li> <AccountBoxRoundedIcon className="sidebar__icon"/> <span>Profile</span></li>
                    <li> <ExitToAppRoundedIcon className="sidebar__icon"/> <span>Log Out</span></li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__colorOption">
                    <NightlightRoundedIcon className="sidebar__icon"/>
                </div>
                <div className="sidebar__colorOption">
                    <LightModeRoundedIcon className="sidebar__icon" style={{color:'white'}}/>
                </div>
                {/*<div className="sidebar__colorOption"></div>*/}
            </div>
        </div>
    );
};

export default Sidebar;

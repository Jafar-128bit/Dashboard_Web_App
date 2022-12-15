import './New.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import {useState} from "react";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs, title}) => {
    const [file, setFile] = useState("");
    return (
        <div className="new">
            <Sidebar/>
            <div className="new__container">
                <Navbar/>
                <div className="new__top">
                    <h1>{title}</h1>
                </div>
                <div className="new__bottom">
                    <div className="new__left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""/>
                    </div>
                    <div className="new__right">
                        <form>
                            <div className="new__formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="new__icon"/>
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{display: "none"}}
                                />
                            </div>
                            {
                                inputs.map(input => (
                                    <div className="new__formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder}/>
                                    </div>
                                ))
                            }
                            <button type="button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;

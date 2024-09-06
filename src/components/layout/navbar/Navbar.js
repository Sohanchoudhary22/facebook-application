import "./navbar.scss"
import { IoIosSearch } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { PiVideo } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiFacebookgaming } from "react-icons/si";

import { FaPlusCircle } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

function Navbar (){
    return(
        <div className="navbar">
            <div className="first_container">
               <div className="img">
                <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yD/r/5D8s-GsHJlJ.png" alt="facebook"></img>
                </div>
               <div className="search">
               <IoIosSearch className="IoIoSearch"/>
               <input type="text" placeholder="Search facebook"/>
               </div>
            </div>

            <div className="second_container">
            <a href=""><TiHome/></a>
            <a href=""><PiVideo/></a>
            <a href=""><CiShop/></a>
            <a href=""><IoPeopleCircleOutline/></a>
            <a href=""><SiFacebookgaming/></a>
            </div>

            <div className="third_container">
                <div className="profile_name">
                   <img src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIJfjZjnzkPpWwPffQ_5bOArlv3zQht0YJw7R7Pmq3ee8&oe=66E693D1&_nc_sid=5e03e0&_nc_cat=104" alt="profile photo"></img>
                   <p>profile name</p>
                </div>
                
                <div className="symbol_button">
                <a href=""><FaPlusCircle/></a>
                <a href=""><FaFacebookMessenger/></a>
                <a href=""><IoIosNotifications/></a>

                <select>
                    <option value="" key=""></option>
                    <option value="" key=""v>Post</option>
                    <option value="" key="">Events</option>
                    <option value="" key="">Reels</option>
                </select>
                </div>
            </div>

        </div>
    )
}
export default Navbar;
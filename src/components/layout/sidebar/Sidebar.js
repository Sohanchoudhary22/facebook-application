import "./sidebar.scss"
import { PiVideoFill } from "react-icons/pi";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { WiTime4 } from "react-icons/wi";

import { BiDotsHorizontalRounded } from "react-icons/bi";

const SidebarData ={
   side1:[
       {
        lable:<img src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIJfjZjnzkPpWwPffQ_5bOArlv3zQht0YJw7R7Pmq3ee8&oe=66E693D1&_nc_sid=5e03e0&_nc_cat=104"/>,
        name:"Sohan lal",
       },
       {
         lable:<PiVideoFill/>,
         name:"Watch"
       },
       {
        lable:<RiCalendarEventFill/>,
        name:"Events"
      },
      {
        lable:<FaUserFriends/>,
        name:"Frients"
      },
      {
        lable:<WiTime4/>,
        name:"Memories"
      },
   ],

   side2:[
     {
        img:"https://ouch-cdn2.icons8.com/A2RldSeQRySN9sNT289KcBOGOGS3UKpeBrF7e2Rxu-w/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzEx/L2FkNzMxZTRjLTA3/YmUtNDk0Ny1iZDZi/LTFlNGM2N2VkOGQy/Yi5wbmc.png",
        name:"Undiscovered Eats"
     },
     {
        img:"https://photo-cdn2.icons8.com/nDajIMs8rGCVTEZA00MCXFrvH5TEg7-aWmXC4RG6W04/rs:fit:1429:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8wM2U4NGNjNDA3/YjE0MDkxOTFjZGFh/NmJjMTRmNWNlYi5q/cGc.jpg",
        name:"Weekend Trips"
     },
     {
        img:"https://image.shutterstock.com/image-vector/virtual-relationships-online-dating-social-260nw-777064027.jpg",
        name:"Jasper's Market"
     },
     {
        img:"https://photo-cdn2.icons8.com/6bVEga64_Y3Vorvxd15XBLEUYaL2Nuzcn-BqmrsRmtM/rs:fit:576:267/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8xY2RjMDNlMDY0/OTY0ZmEzODBkOWUy/NjExMjVkNjZhNC5q/cGc.webp",
        name:"Red Table Talk Group"
     },
     {
        img:"https://photo-cdn2.icons8.com/d0TchkE9ffuSUQ97TgN4Va1-hjPM75QzK7JMjCmMno8/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi80YzQ1NWY2NGE3/NDM0MjkwYjI4YmI4/MmNiYzcxZTgyYi5q/cGc.webp",
        name:"Best Hidden Hiking Trails"
     },
   ]
    }

function Sidebar (){
    return (
        <div className="sidebar">
        <div className="sidebar_child1">
            {SidebarData.side1.map((ele)=>{
                return(
                <div className="sidebar_logo">
                <label>{ele.lable}</label>
                 <p className="p">{ele.name}</p>
                   </div>
                )
            })}
            <div className="button_div"><button>See more</button></div>
        </div>
            
        <hr/>

        <div className="sidebar_child2">
             <div>
                <h3>Shortcuts</h3>
                <BiDotsHorizontalRounded/>
             </div>
            {SidebarData.side2.map((ele) =>{
               
            })}
        </div>

        </div>
    )
}
export default Sidebar;
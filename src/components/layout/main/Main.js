import "./main.scss";
import { MdPhotoLibrary } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";

import { FiMoreHorizontal } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const MainData = {
  storyData: [
    {
      username: "Add your story",
      userprofilepic:
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
      storytype: "image",
      storyurl:
        "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/117574169_171003451253114_3994144849682101938_n.jpg?ccb=11-4&oh=01_Q5AaIEEqPAo-_pzAqbH4a5slrKceq2-qrXxkl64PBLGuU7Wu&oe=66ED1686&_nc_sid=5e03e0&_nc_cat=111",
    },
    {
      username: "Sohan lal",
      userprofilepic:
        "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIJfjZjnzkPpWwPffQ_5bOArlv3zQht0YJw7R7Pmq3ee8&oe=66E693D1&_nc_sid=5e03e0&_nc_cat=104",
      storytype: "image",
      storyurl:
        "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/458495546_496034246689125_5995996971261324579_n.jpg?ccb=11-4&oh=01_Q5AaIOYEq2YO76siQozZ7Gmh637gKKEpx0ilDr-WnD2EKLUy&oe=66ED4145&_nc_sid=5e03e0&_nc_cat=100",
    },
    {
      username: "Ashok",
      userprofilepic:
        "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIBGZpdSK8nIkYE1fXSNJrq8eyxqFLHTlXJMr4N2cGCWI&oe=66EBABAE&_nc_sid=5e03e0&_nc_cat=102",
      storytype: "video",
      storyurl: "https://cdn.pixabay.com/video/2024/03/31/206294_large.mp4",
    },
    {
      username: "Jitu",
      userprofilepic:
        "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/425133203_1056998419164113_1034292659839679219_n.jpg?ccb=11-4&oh=01_Q5AaIMyGauYx5l1Vy90BPiswkEWy6DDDYArAosY6T7YQHktQ&oe=66ED143F&_nc_sid=5e03e0&_nc_cat=107",
      storytype: "image",
      storyurl:
        "https://e1.pxfuel.com/desktop-wallpaper/938/413/desktop-wallpaper-50-romantic-love-couple-with-quotes-for-whatsapp-dp-profile-pic-stylish-couple.jpg",
    },
    {
      username: "Prince",
      userprofilepic:
        "https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
      storytype: "video",
      storyurl:
        "https://videos.pexels.com/video-files/5896379/5896379-uhd_1440_2560_24fps.mp4",
    },
    {
      username: "Mahi",
      userprofilepic:
        "https://images.deccanherald.com/deccanherald%2F2024-03%2Fb90c47e5-cec9-4f7b-b7c4-14ac433ef089%2FMS_Dhoni_s_new_look_ahead_of_IPL__11_.jpg?rect=0%2C0%2C540%2C720",
      storytype: "image",
      storyurl:
        "https://images.news18.com/ibnlive/uploads/2024/07/untitled-design-2024-07-06t185226.317-2024-07-0b441cf3942f5e6fd9b1f32895302a16.jpg?impolicy=website&width=640&height=480",
    },
  ],

  cardData: [
    {
      username: "Sohan lal",
      userpic:
        "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIJ-NPfidhWdZaXiDJZ_0h6otTrr_-XeloLrBPp5oa86x&oe=66EE7CD1&_nc_sid=5e03e0&_nc_cat=104",
      more: <FiMoreHorizontal />,
      time: "1 hrs",
      icon: <FaUserFriends />,
      postType: "image",
      line: "तरस गये श्याम जी आपके दीदार को दिल फिर भी आपका ही इंतजार करता है,जो हर रोज आपका दीदार तो करता है। //जय श्री श्याम//",
      post: "https://images.news9live.com/wp-content/uploads/2023/11/Untitled-design-2023-11-23T100259.740.jpg?w=1200&enlarge=true",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Kamlesh Kumar",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "1 hrs",
      icon: <FaUserFriends />,
      postType: "video",
      line: "Beautiful Nature",
      post: "https://cdn.pixabay.com/video/2021/01/28/63283-506369737_tiny.mp4",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Akhilesh Kumar",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "1 hrs",
      icon: <FaUserFriends />,
      postType: "video",
      line: "Birds flying in sky",
      post: "https://cdn.pixabay.com/video/2022/04/12/113679-698820563_tiny.mp4",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Manoj Kumar",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "1 hrs",
      icon: <FaUserFriends />,
      postType: "image",
      line: "Hawa Mahal , Jaipur",
      post: "https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/524/hawa-mahal1-1684300063.webp",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Sitaram",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "1 hrs",
      icon: <FaUserFriends />,
      postType: "image",
      line: "My Lovely babe's",
      post: "https://media.gettyimages.com/id/1387123666/photo/woman-carrying-her-baby-girl-at-home.jpg?s=612x612&w=gi&k=20&c=KPnvptbwWNyOrzQHCrYDEVLfNiQMlQYbOM_YxfF9uTw=",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Suresh Kumar",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "3 hrs",
      icon: <FaUserFriends />,
      postType: "image",
      line: "A cute young couple lie together on the beach",
      post: "https://www.shutterstock.com/shutterstock/photos/124800508/display_1500/stock-photo-portrait-of-beautiful-young-couple-sitting-on-the-board-of-lake-124800508.jpg",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Manish Kumar",
      userpic:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      more: <FiMoreHorizontal />,
      time: "40 min",
      icon: <FaUserFriends />,
      postType: "image",
      line: "My beautiful babes",
      post: "https://preview.redd.it/paint-and-sip-night-with-my-lovely-babe-v0-yb7hp7aej6qa1.jpg?width=1080&crop=smart&auto=webp&s=d5acaebc5fb020f4e3846b32a2cce45aa905edf4",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Kanishka ",
      userpic:
        "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      more: <FiMoreHorizontal />,
      time: "2 hrs",
      icon: <FaUserFriends />,
      postType: "video",
      line: " Super Slow Motion shot of a mother and her little daughter running in the meadow at sunset. Rear-view tracking shot.",
      post: "https://media.istockphoto.com/id/497375361/video/super-mother-and-daughter-running-to-the-sun.mp4?s=mp4-640x640-is&k=20&c=7RwPyzlurnRxyriCTKqzFMqgT6XrqIHNScD9C9esT38=",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
    {
      username: "Mahaveer Prasad ",
      userpic:
        "https://media-bom2-3.cdn.whatsapp.net/v/t61.24694-24/440792581_483358924176381_6967703305494803500_n.jpg?ccb=11-4&oh=01_Q5AaINFNMIvoI0CFasOEiEFurLZrnTNR7C784LhBXjLw-PN4&oe=66EBBA95&_nc_sid=5e03e0&_nc_cat=110",
      more: <FiMoreHorizontal />,
      time: "15 min",
      icon: <FaUserFriends />,
      postType: "video",
      line: " A cute young couple lie together on the beach and gaze out at a beautiful sunset. Close up slow motion shot.",
      post: "https://media.istockphoto.com/id/473037733/video/couple-gaze-at-sunset.mp4?s=mp4-640x640-is&k=20&c=lYUO7jSpEUfCwNQRriJF9gHCe5Bn6iDfIbE-7cPYVmo=",
      like: <AiOutlineLike />,
      comment: <FaRegComment />,
      sent: <FaWhatsapp />,
      share: <RiShareForwardLine />,
    },
  ],

  contact: [
    {
      id: "arvind",
      status:"online",
      name: "Arvind Kumar",
      image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
    },
    {
      id: "kamlesh",
      name: "Kamlesh Kumar",
      image: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
      status: "online",
      
    },
    {
      id: "akhilesh",
      name: "Akhilesh Kumar",
      status: "offline",
      image: "https://e1.pxfuel.com/desktop-wallpaper/938/413/desktop-wallpaper-50-romantic-love-couple-with-quotes-for-whatsapp-dp-profile-pic-stylish-couple.jpg",
    },
    {
      id: "vikram",
      name: "Vikram Singh",
      status: "offline",
      image: "https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg"
    },
    {
      id: "manoj",
      name: "Manoj Kumar",
      status: "online",
      image: "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaIEMAKxFCaIBlujOMti9L6V3Yqg4qXuHxP7oelEGcHlVw&oe=66E423E9&_nc_sid=5e03e0&_nc_cat=105",
    },
    {
      id: "Mahesh",
      name: "Mahesh Kumar",
      status: "online",
      image: "https://media-bom2-3.cdn.whatsapp.net/v/t61.24694-24/454260834_490910543542552_7815600429311699277_n.jpg?ccb=11-4&oh=01_Q5AaIFRKpdxKNX9B9pT2t-MJtz-tZl1kYxeqenz8zF5izX-y&oe=66EFDD38&_nc_sid=5e03e0&_nc_cat=106",
    },
    {
      id: "sitaram",
      name: "Sitaram",
      status: "offline",
      image: "https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg",
    },
    {
      id: "rahul",
      name: "Rahul Kumar",
      status: "offline",
      image: "https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
    },
    {
      id: "suresh",
      name: "Suresh Kumar",
      status: "online",
      image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
    },
    {
      id: "manish",
      name: "Manish Kumar",
      status: "offline",
      image: "https://pps.whatsapp.net/v/t61.24694-24/353200948_1400717373994591_740200217901489981_n.jpg?ccb=11-4&oh=01_Q5AaIEyNqkpASOBLJdbDD2ociJ-bsrTt-UlDb7agO7DEDX_0&oe=66EFE274&_nc_sid=5e03e0&_nc_cat=108",
    },
    {
      id: "mukesh",
      status:"online",
      name: "Mukesh Kumar",
      image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
    },
    {
      id: "nilam",
      status:"offline",
      name: "Neelam",
      image: "https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp",
    },
    {
      id: "nidhi",
      status:"online",
      name: "Nidhi",
      image: "https://cdn4.sharechat.com/compressed_gm_40_img_724387_d110bd8_1698681721588_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=588_sc.jpg",
    },
    {
      id: "prachi",
      status:"online",
      name: "Prachi",
      image: "https://cdn4.sharechat.com/img_1599842794_194217_9001cdd_1663260840440_sc.jpg?tenant=sc&referrer=feed-service&f=440_sc.jpg",
    },
  ],
};

function Main() {
  return (
    <div className="main">
      <div className="main_child1">
        <div className="story-section">
          {MainData.storyData.map((ele) => {
            return ele.storytype === "image" ? (
              <div className="story-card" key={ele.username}>
                <img src={ele.storyurl} alt="name" className="story-img" />
                <p className="span-name">{ele.username}</p>
                <img
                  src={ele.userprofilepic}
                  alt="profle"
                  className="profile-pic"
                />
              </div>
            ) : ele.storytype === "video" ? (
              <div className="story-card" key={ele.username}>
                <video width="120" height="180" autoPlay muted loop>
                  <source src={ele.storyurl} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                <p className="span-name">{ele.username}</p>
                <img
                  src={ele.userprofilepic}
                  alt="profle"
                  className="profile-pic"
                />
              </div>
            ) : null;
          })}
        </div>

        <div className="search_section">
          <div className="search_child1">
            <img
              src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIJfjZjnzkPpWwPffQ_5bOArlv3zQht0YJw7R7Pmq3ee8&oe=66E693D1&_nc_sid=5e03e0&_nc_cat=104"
              alt="sohan"
            />
            <input
              type="search"
              placeholder="What's on your mind. Sohan lal?"
            />
          </div>

          <div className="search_child2">
            <div className="photo">
              <MdPhotoLibrary className="photo_lib" />
              <p>Photo/Video</p>
            </div>

            <div className="photo">
              <FaUserTag className="photo_lib1" />
              <p>Tag Friends</p>
            </div>

            <div className="photo">
              <MdLocalActivity className="photo_lib2" />
              <p>Feeling/Activity</p>
            </div>
          </div>
        </div>

        <div className="card_section">
          {MainData.cardData.map((el) =>
            el.postType === "image" ? (
              <div key={el.username} className="post-detail">
                <div className="main-detail-post">
                  <div className="post-head">
                    <img src={el.userpic} alt="post" className="userimg" />
                    <div className="main-detail-post-info">
                      <div className="user-head">
                        <p>{el.username}</p>
                        <span className="p_tag">{el.time} </span>
                        <span className="p_tag1">{el.icon}</span>
                      </div>
                        <h4 className="more-icon">{el.more}</h4>
                    </div>
                  </div>
                  <div className="post-img">
                    <label>{el.line}</label>
                    <img src={el.post} alt="post" />
                  </div>
                  <div className="like-post">
                    <p>{el.like} <span>Like</span></p>
                    <p>{el.comment} <span>Comment</span></p>
                    <p>{el.sent} <span>Send</span></p>
                    <p>{el.share} <span>Share</span>
                    </p>
                  </div>
                </div>
              </div>
            ) 
            : el.postType === "video" ? (
              <div key={el.username} className="post-detail">
                <div className="main-detail-post">
                  <div className="post-head">
                    <img src={el.userpic} alt="post" className="userimg" />
                    <div className="main-detail-post-info">
                      <div className="user-head">
                        {" "}
                        <p>{el.username}</p>
                        <span className="p_tag">{el.time} </span>
                        <span className="p_tag1">{el.icon}</span>
                      </div>
                      <div>
                        <h4 className="more-icon">{el.more}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="post-img">
                    <label>{el.line}</label> <br />
                    <video  controls autoPlay muted loop>
                      <source src={el.post} type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                  <div className="like-post">
                    <p>{el.like} <span>Like</span></p>
                    <p>{el.comment} <span>Comment</span></p>
                    <p>{el.sent} <span>Send</span></p>
                    <p>{el.share} <span>Share</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="main_child2">

        <div className="sponser">
             <h3>Sponsered</h3>
             <div className="sponser_child">
                <img src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png" alt="kkll"/>
                <div className="sponser_pizza">
                  <h4>Lebo's Pizza</h4>
                  <p>This is the full, unaccelerated record of the World Giga Pizza Eating Championship held at the Beer Festival.</p>
                  <img src="https://jaipurbeat.com/wp-content/uploads/2017/08/wood-fired-pizza.jpg" alt="pizza"/>
                </div>
             </div>
        </div>
        <hr/>

        <div className="birthday">
          <h3>Birthdays</h3>
          <div className="birthday_child">
            <img src="https://www.freeiconspng.com/thumbs/birthday-gift-png/blue-birthday-gift-png-3.png" alt="birthday"/>
            <p><b>Manoj,Mukesh Kumar</b> and <b>2 others</b> have birthday today</p>
          </div>
          
        </div>
        <hr/>

        <div className="contact">
          <div className="contact_head">
             <h3>Contacts</h3>
             <div className="contact_icon">
               <IoIosSearch />
               <BsThreeDots />
             </div>
          </div>
          <div className="contact_status">
            {MainData.contact.map((el) => (
               el.status==="online" ?(
                 <li key={el.name}>
                 <img src={el.image} alt="pic" />
                 <FaCircle className="status" /> 
                 <p>{el.name}</p>               
               </li>
               )
               :el.status==="offline"? (
                 <li key={el.name}>
                 <img src={el.image} alt="pic" />
                 <p>{el.name}</p> </li>
              ):null
            )
        )
    };
      </div>
        </div>
      </div>
    </div>
  );
}
export default Main;

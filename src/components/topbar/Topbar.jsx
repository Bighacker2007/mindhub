import "./topbar.css";
import {
  Search,
  Person2Rounded,
  Notifications,
  Chat,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MindHaven</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for chats and videos"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person2Rounded />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

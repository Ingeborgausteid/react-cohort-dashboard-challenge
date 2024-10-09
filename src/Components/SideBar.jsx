import { Box } from "@mui/material";
import "../App.css";
import HomeIcon from "../assets/home-icon.svg";
import ProfileIcon from "../assets/profile-icon.svg";

function SideBar() {
  return (
    <aside>
      <Box className="sidebar-item">
        <div>
          <img src={HomeIcon} alt="home icon"/>
          <h4 className="font-colour">Home</h4>
        </div>
      </Box>

      <Box className="sidebar-item">
        <div>
          <img src={ProfileIcon} alt="profile icon" />
          <h4 className="font-colour">Profile</h4>
        </div>
      </Box>
    </aside>
  );
}

export default SideBar;
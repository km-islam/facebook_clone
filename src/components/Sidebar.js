import React from "react";
import SidebarRow from "./SidebarRow";
import "../styles/Sidebar.css";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="COVID-19 Information Center" Icon={AddBoxIcon} />
      <SidebarRow title="Pages" Icon={EmojiFlagsOutlinedIcon} />
      <SidebarRow title="Friends" Icon={PeopleAltOutlinedIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryOutlinedIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontOutlinedIcon} />
      <SidebarRow title="See more" Icon={KeyboardArrowDownOutlinedIcon} />
    </div>
  );
}

export default Sidebar;

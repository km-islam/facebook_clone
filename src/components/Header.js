import React from "react";
import fbLogo from "../assets/images/facebook-logo-2019.png";
import classes from "../styles/Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReduceCapacityOutlinedIcon from "@mui/icons-material/ReduceCapacityOutlined";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MessageIcon from "@mui/icons-material/Message";
import { useStateValue } from "./StateProvider";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <img src={fbLogo} alt="Facebook" className={classes.logo} />
        <div className={classes.header_input}>
          <SearchIcon fontSize="large" color="action" />
          <input type="text" placeholder="Search Facebook " />
        </div>
      </div>
      <div className={classes.header_middle}>
        <div className={classes.header_option}>
          <HomeIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            className={classes.header_option_item}
          />
        </div>
        <div className={classes.header_option}>
          <PeopleAltOutlinedIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            className={classes.header_option_item}
          />
        </div>
        <div className={classes.header_option}>
          <FlagOutlinedIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            className={classes.header_option_item}
          />
        </div>
        <div className={classes.header_option}>
          <OndemandVideoOutlinedIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            className={classes.header_option_item}
          />
        </div>
        <div className={classes.header_option}>
          <ReduceCapacityOutlinedIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            className={classes.header_option_item}
          />
        </div>
      </div>
      <div className={classes.header_right}>
        <div className={classes.header_info}>
          <div className={classes.profile_info}>
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
          </div>
          <IconButton>
            <AppsOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <MessageIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <NotificationsIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;

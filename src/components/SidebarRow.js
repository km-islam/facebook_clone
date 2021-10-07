import React from "react";
import Avatar from "@mui/material/Avatar";
import classes from "../styles/Sidebarrow.module.css";

function SidebarRow(props) {
  const { title, src, Icon } = props;
  return (
    <div className={classes.sidebar_row}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;

import React from "react";
import styles from "./footer.module.css";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/LibraryBooks";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import FileIcon from "@mui/icons-material/InsertDriveFile";
import GroupIcon from "@mui/icons-material/Group";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h2>SciAstra</h2>
        <h3>&copy; AciAstra</h3>
        <ul>
          <li>
            <HomeIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Home</a>
          </li>
          <li>
            <BookIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Our Courses</a>
          </li>
          <li>
            <ChatIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Blog</a>
          </li>
          <li>
            <FileIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Free Materials</a>
          </li>
          <li>
            <GroupIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Our Team</a>
          </li>
          <li>
            <PhoneIcon style={{ fontSize: "1.5rem", color: "white" }} />
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      <ul>
        <li>SciAstra Education Pvt Ltd,</li>
        <li> Bhubaneswar, Odisha</li>
      </ul>
      <p>support@sciastra.com</p>
      <div className={styles.icons}>
        <FacebookIcon
          style={{ fontSize: "1.5rem", color: "white", marginRight: "50px" }}
        />
        <InstagramIcon
          style={{ fontSize: "1.5rem", color: "white", marginRight: "50px" }}
        />
        <YouTubeIcon
          style={{ fontSize: "1.5rem", color: "white", marginRight: "50px" }}
        />
        <i class="fa-brands fa-discord"></i>
      </div>
    </div>
  );
};

export default Footer;

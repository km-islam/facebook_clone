import React from "react";
import Contact from "./Contact";
import IconButton from "@mui/material/IconButton";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../styles/Contacts.css";
function Contacts() {
  return (
    <div className="contacts">
      <div className="contact_top">
        <h3>Contacts</h3>
        <div className="contact_left">
          <div className="contact_top_option">
            <IconButton>
              <VideoCameraFrontIcon />
            </IconButton>
          </div>
          <div className="contact_top_option">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div className="contact_top_option">
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <Contact
        title="Kamrul Islam"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-1/c0.23.160.160a/p160x160/200524634_863119787917655_4215862765475365353_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEieAqR_QkQy1M6oOGkLw8dGGzQe_9jlOgYbNB7_2OU6HYOoA8lUw-RV4kOq7hBsGKEde3-lKLoJz1wvrVC3r_8&_nc_ohc=cU1MRZvo7bIAX9Pq2qC&tn=pBCynF_5F6pXiuDj&_nc_ht=scontent.fdac31-1.fna&oh=6ce8875ada918fd5a5dab4837a77a306&oe=61822492"
      />
      <Contact
        title="Mizan"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-1/c0.21.200.200a/p200x200/240795450_2875080752744852_1989247241130648825_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEURexQtHCZS91kXk_Ifd4D0ua3H1r_9hzS5rcfWv_2HPwUUK4UDEEmNyZNKEiR4nkVGl1sy_XaKD1SEeekHiyD&_nc_ohc=NmGN9FyyvGAAX_9mYj5&_nc_ht=scontent.fdac31-1.fna&oh=12ccab0d7175bf95e3cf0bf07d2013e8&oe=6161C015"
      />
      <Contact
        title="Hafizur Rahman"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/68527475_174871007011007_3540723652448223232_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE400I_uWcLlv5tK-N3CvXT-GKv1rwgMoL4Yq_WvCAygkG0kYZY4_wM86l8nXFDZerpmSIGTViucusz6_w0f9I9&_nc_ohc=pDKEHiSn6WEAX_XtPi5&_nc_ht=scontent.fdac31-1.fna&oh=dabb464a4ae5548e7197e2b37466855c&oe=61810805"
      />
      <Contact
        title="Abu Sayed"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/120328406_361640031655470_5778667646333827508_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeG7zAk8YLOCs7C7pMNAGySgx29dufNbIDjHb12581sgOMgFK3eM2zydrOE6FUu_4Zp4t2dDsHJlGSDnFMuzT9RU&_nc_ohc=rEgrW-sTl4sAX8o8Yjo&_nc_ht=scontent.fdac31-1.fna&oh=9ce79ccef680cbea401c32cd18d564b1&oe=6182CCED"
      />
      <Contact
        title="Mijanur Mir"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.18169-9/20245785_1704104403225752_815183008680470545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE7eSb2IlnfkHZi18_dSpoaRiVu4wCkRydGJW7jAKRHJ8eNpHvJg_qcgvFKZe4mhaF08lqLnw_drKGmGy4vR5ar&_nc_ohc=bvN4zegzm8gAX813pty&_nc_ht=scontent.fdac31-1.fna&oh=2dd706ffc9051c80ea8bf306751a291b&oe=61835E94"
      />
      <Contact
        title="SM Nazmul Haque Nayune"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/240903228_1976707385839663_7280866253779073747_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGZewCq_3olc5l5uuErvd7A15mIJqTM85fXmYgmpMzzlyO-Rq6BdoY-90TkXyb7Hq2tQYATZR5Bh4VBuWXLUFkg&_nc_ohc=qKat8510PA4AX_0Ces8&tn=pBCynF_5F6pXiuDj&_nc_ht=scontent.fdac31-1.fna&oh=d5db95b19d02bc2104a000a7449f6bd7&oe=618233FD"
      />
      <Contact
        title="Noman Sheik"
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/125846643_1006342983221235_6616356402759615433_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEN73U3Hu-KpVJHlaRx0kvlynzanFPsltPKfNqcU-yW00Qjtmm2u_kDyr8Ar7d6HaflwgHstTz7Os7ffZcJhad7&_nc_ohc=Hqxvp9XSYRYAX-cUrj9&_nc_ht=scontent.fdac31-1.fna&oh=ed61ef0e2de6a8b6fa0cf9dfa18ee6f5&oe=6184404A"
      />
    </div>
  );
}

export default Contacts;

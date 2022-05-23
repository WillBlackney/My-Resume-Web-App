import "./topbar.scss";
import { Person, Mail, CloudDownload } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const downloadResumePDF = () => {
    console.log("downloading resume...");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            William Blackney.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+45 51800027</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>william.blackney@hotmail.com</span>
          </div>
          <div className="itemContainer">
            <CloudDownload className="icon" />
            <span onClick={downloadResumePDF}>Download My Resume</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

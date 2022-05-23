import "./topbar.scss";
import {
  Person,
  Mail,
  CloudDownload,
  LinkedIn,
  GitHub,
} from "@material-ui/icons";
import { saveAs } from "file-saver";
import resumePDF from "../../assets/Will_Blackney_Resume_2022.pdf";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const downloadResumePDF = () => {
    console.log("downloading resume...");
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
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

            <a href={resumePDF} target="_blank">
              My Resume
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />

            <a
              href="https://www.linkedin.com/in/william-blackney-a4a4b878/"
              target="_blank"
            >
              My LinkedIn
            </a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />

            <a href="https://github.com/WillBlackney" target="_blank">
              My Github
            </a>
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

import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
} from "../../projectsData";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardImage,
  CCardSubtitle,
  CCardLink,
} from "@coreui/react";
import { GitHub, LiveTv } from "@material-ui/icons";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "game",
      title: "Games",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <CCard style={{ width: "20rem" }}>
            <CCardBody>
              <div className="item">
                <img src={`assets/${d.img}.png`} alt="" />
                <h3>{d.title}</h3>
              </div>
              <h4>{d.title} </h4>

              {d.liveLink !== "" ? (
                <div className="linkContainer">
                  <LiveTv className="icon" />
                  <a href={d.liveLink}>Live Demo</a>
                </div>
              ) : (
                <></>
              )}

              {d.githubLink !== "" ? (
                <div className="linkContainer">
                  <GitHub className="icon" />
                  <a href={d.githubLink}>Github Repo</a>
                </div>
              ) : (
                <></>
              )}
            </CCardBody>
          </CCard>
        ))}

        {/*
        {data.map((d) => (
          <div className="item">
            <img src={`assets/${d.img}.png`} alt="" />
            <h3>{d.title}</h3>
            <span> Github Link</span>
            <span> Live Link</span>
          </div>
        ))}
        */}
      </div>
    </div>
  );
}

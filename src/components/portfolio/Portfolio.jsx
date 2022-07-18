import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  allPortfolio,
} from "../../projectsData";
import { CCard, CCardBody } from "@coreui/react";
import { GitHub, LiveTv } from "@material-ui/icons";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
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
      case "all":
        setData(allPortfolio);
        break;
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
        {data
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((d) => (
            <CCard style={{ width: "20rem", marginBottom: "2rem" }}>
              <CCardBody>
                <div className="item">
                  <img src={`assets/${d.img}.png`} alt="" />
                  <h3>{d.title}</h3>
                </div>
                <h4>{d.title} </h4>

                {d.liveLink !== "" ? (
                  <div className="linkContainer">
                    <LiveTv className="icon" />
                    <a href={d.liveLink} target="_blank">
                      Live Demo
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                {d.githubLink !== "" ? (
                  <div className="linkContainer">
                    <GitHub className="icon" />
                    <a href={d.githubLink} target="_blank">
                      Github Repo
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </CCardBody>
            </CCard>
          ))}
      </div>
    </div>
  );
}

import React from "react";
import "./workExperience.scss";
import sgiLogo from "../../assets/sgi_logo.png";
import vrLogo from "../../assets/Viking_Roo_Logo_Square.png";
function WorkExperience() {
  const data = [
    {
      id: 1,
      companyName: "Viking Roo",
      roleName: "Founder + Leader Developer",
      dateRange: "June 2023 - Ongoing",
      companyLogo: "assets/Viking_Roo_Logo_Square.jfif",
      desc: [
        "- Project manager and Unity developer of the company's flagship game: 'We Are Gladiators'.",
        "- Managing a team of employees and cofounders.",
        "- Responsible for community management, business management and marketing.",
      ],
    },
    {
      id: 2,
      companyName: "Serious Games Interactive",
      roleName: "Game Developer",
      dateRange: "Aug 2022 - Ongoing",
      companyLogo: "assets/sgi_logo.jfif",
      desc: [
        "- Creating educational games with Unity for a wide variety of platforms and demographics.",
        "- Builing front end web applications and games with React and Vue.js.",
      ],
    },
    {
      id: 3,
      companyName: "Unity Technologies",
      roleName: "Student QA Developer",
      dateRange: "Oct 2021 - July 2022",
      companyLogo: "assets/unity_logo.jfif",
      desc: [
        "- Creating games using ECS/DOTS with a team of student developers.",
        "- Reporting bugs and useability concerns to the relevant developers/teams within Unity.",
        "- Contributing sample projects and learning materials to the 'Learn DOTS' ecosystem at Unity",
      ],
    },
    {
      id: 4,
      companyName: "Walor",
      roleName: "Frontend Web Developer Intern",
      dateRange: "Jan 2022 - April 2022",
      companyLogo: "assets/walor_logo.jfif",
      desc: [
        "- Front end development with React + Typescript.",
        "- Contributed to the companies flagship web app product.",
        "- Testing and QA.",
      ],
    },
    {
      id: 5,
      companyName: "Oticon Medical",
      roleName: "Student Game Developer",
      dateRange: "Jan 2021 - Oct 2021",
      companyLogo: "assets/oticon_logo.jfif",
      desc: [
        "- Building mobile games with Unity for users with cochlear implants and hearing disabilities.",
        "- Game design + project managment.",
        "- Coaching and management of project interns",
      ],
    },

    {
      id: 6,
      companyName: "Parkbird",
      roleName: "Front Mobile + Web Developer",
      dateRange: "July 2020 - November 2020",
      companyLogo: "assets/parkbird_logo.jfif",
      desc: [
        "- Front end web development with React.",
        "- Mobile development with React Native.",
        "- Created the company's admin tool web app for managing bookings.",
        "- Contributed to the company flag ship mobile app.",
      ],
    },
  ];

  return (
    <div className="workExperience" id="workExperience">
      <h1>Work Experience</h1>
      <div className="container">
        <>
          <div className="card">
            <div className="cardLeftContent">
              <img src={vrLogo} className="companyLogo" alt=""></img>
            </div>
            <div className="cardRightContent">
              <h2 className="cardCompanyName">{data[0].companyName}</h2>
              <h3 className="cardRoleTitle">{data[0].roleName}</h3>
              <p className="cardDateRange">{data[0].dateRange}</p>

              {data[0].desc.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
        </>

        <>
          <div className="card">
            <div className="cardLeftContent">
              <img src={sgiLogo} className="companyLogo" alt=""></img>
            </div>
            <div className="cardRightContent">
              <h2 className="cardCompanyName">{data[1].companyName}</h2>
              <h3 className="cardRoleTitle">{data[1].roleName}</h3>
              <p className="cardDateRange">{data[1].dateRange}</p>

              {data[1].desc.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
        </>

        {data.map((d) =>
          d.id != 1 && d.id != 2 ? (
            <>
              <div className="card">
                <div className="cardLeftContent">
                  <img src={d.companyLogo} className="companyLogo" alt=""></img>
                </div>
                <div className="cardRightContent">
                  <h2 className="cardCompanyName">{d.companyName}</h2>
                  <h3 className="cardRoleTitle">{d.roleName}</h3>
                  <p className="cardDateRange">{d.dateRange}</p>

                  {d.desc.map((item) => {
                    return <p>{item}</p>;
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}

export default WorkExperience;

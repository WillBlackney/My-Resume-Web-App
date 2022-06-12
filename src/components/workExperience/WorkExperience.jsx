import React from "react";
import "./workExperience.scss";
function WorkExperience() {
  const data = [
    {
      id: 1,
      companyName: "Unity Technologies",
      roleName: "Student QA Developer",
      dateRange: "Oct 2021 - Present",
      companyLogo: "assets/unity_logo.jfif",
      desc: "- Creating games with ECS/DOTS in 4-6 week sprints with a team of student developers. \n - Reporting bugs and useability concerns to the relevant developers/teams within Unity. \n- Contributing sample projects and learning materials to the 'Learn DOTS' ecosystem at Unity",
    },
  ];
  return (
    <div className="workExperience" id="workExperience">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <>
            <div className="card">
              <div className="cardLeftContent">
                <img src={d.companyLogo} className="companyLogo" alt=""></img>
              </div>
              <div className="cardRightContent">
                <h2 className="cardCompanyName">{d.companyName}</h2>
                <h3 className="cardRoleTitle">{d.roleName}</h3>
                <p>{d.dateRange}</p>
                <textarea className="cardDescription">{d.desc}</textarea>
              </div>
            </div>
            {/*
          <div className={"card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>*/}
          </>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;

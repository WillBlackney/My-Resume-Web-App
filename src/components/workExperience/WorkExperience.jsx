import React from "react";
import "./workExperience.scss";
function WorkExperience() {
  const data = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
        {data.map((d) => (
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
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;

import React from 'react'

export const Skills = () => {
  
  const [state] = React.useState([
        {
          id: 1,
          icon: "",
          heading: "Name",
          text: "Gabriel Lovera",
        },
        {
          id: 2,
          icon: "",
          heading: "Phone",
          text: "3564 651447",
        },
        {
          id: 3,
          icon: "",
          heading: "Email",
          text: "gabrielloveraa@gmail.com",
        }
      ]);
    return (
      <div className="skills">
        <div className="container">
          <div className="skills__header">
            <div className="common">
              <h3 className="heading">SKILLS</h3>
              <h1 className="mainHeader">My skills</h1>
              <p className="mainContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis nihil sequi facere ab dolorem odit.
              </p>
              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((Info) => (
                <div className="col-4 bgMain">
                  <div className="skills__box">
                    <p>{Info.icon}</p>
                    <div className="skills__box-header">{Info.heading}</div>
                    <div className="skills__box-p">{Info.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;
import React from 'react'
import { AiFillEnvironment,AiFillPhone,AiOutlineMail,AiFillCalendar,AiTwotoneBook,AiOutlineIdcard } from "react-icons/ai";

export const About = () => {
  
  const [state] = React.useState([
        {
          id: 1,
          icon: <AiOutlineIdcard />,
          heading: "Name:",
          text: "Gabriel Lovera",
        },
        {
          id: 2,
          icon: <AiFillPhone />,
          heading: "Phone:",
          text: "3564 651447",
        },
        {
          id: 3,
          icon: <AiOutlineMail/>,
          heading: "Email:",
          text: "gabrielloveraa@gmail.com",
        },
        {
          id: 3,
          icon: <AiFillCalendar />,
          heading: "Age:",
          text: "24 años",
        },
        {
          id: 3,
          icon: <AiFillEnvironment/>,
          heading: "Location:",
          text: "San Francisco - Córdoba",
        },
        {
          id: 3,
          icon: <AiTwotoneBook />,
          heading: "Language:",
          text: "Spanish and Middle Inglish",
        }
      ]);
    return (
      <div className="about">
        <div className="container">
          <div className="main__header">
            <div className="common">
            <a name="About"></a>
              <h3 className="heading">ABOUT</h3>
              <h1 className="mainHeader">More Information</h1>
              <p className="mainContent">
                Basic information about me
              </p>
              <div className="commonBorder"></div>
            </div>
            
            <div className="row bgMain">
              {state.map((Info) => (
                <div className="col-4 bgMain">
                  <div className="about__box">
                    <div className="commonIcons">{Info.icon}</div>
                    <div className="about__box-header">{Info.heading}</div>
                    <div className="about__box-p">{Info.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a name="Skill"></a>
      </div>
    );
}

export default About;
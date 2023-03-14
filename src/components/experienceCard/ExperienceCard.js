import React from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid ${theme.accentColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });
  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(-50%, -50%)",
            }}
            src="..\..\src\assests\images\b.png"
            alt="JUst image"
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {experience["title"]}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {experience["company"]}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {experience["duration"]}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {experience["duration"].map((sentence) => {
              return (
                <p className="content-list" style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href="google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ExperienceCard;

// import React from "react";
// import "./ExperienceCard.css";

// function ExperienceCard(props) {
//   const experience = props.experience;
//   const theme = props.theme;
//   return (
//     <div
//       className="experience-card"
//       style={{
//         border: `1px solid ${experience["color"]}`,
//         backgroundColor: theme.imageDark,
//       }}
//     >
//       <div className="experience-card-logo-div">
//         <img
//           className="experience-card-logo"
//           src={require(`../../assests/images/${experience["logo_path"]}`)}
//           alt=""
//         />
//       </div>
//       <div className="experience-card-body-div">
//         <div className="experience-card-header-div">
//           <div className="experience-card-heading-left">
//             <h3 className="experience-card-title" style={{ color: theme.text }}>
//               {experience["title"]}
//             </h3>
//             <p
//               className="experience-card-company"
//               style={{ color: theme.secondaryText }}
//             >
//               <a
//                 href={experience["company_url"]}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {experience["company"]}
//               </a>
//             </p>
//           </div>
//           <div className="experience-card-heading-right">
//             <p
//               className="experience-card-duration"
//               style={{ color: theme.secondaryText }}
//             >
//               {experience["duration"]}
//             </p>
//             <p
//               className="experience-card-location"
//               style={{ color: theme.secondaryText }}
//             >
//               {experience["location"]}
//             </p>
//           </div>
//         </div>
//         <p
//           className="experience-card-description"
//           style={{ color: theme.text }}
//         >
//           {experience["description"]}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ExperienceCard;

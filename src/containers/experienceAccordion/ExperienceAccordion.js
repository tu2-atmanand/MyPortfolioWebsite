import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Fade } from "react-reveal";
import { experience } from "../../portfolio.js";

function ExperienceAccordion(props) {
  const theme = props.theme;
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Experiences
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {experience.sections.map((experience) => {
          return <ExperienceCard experience={experience} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceAccordion;

// import React from "react";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
// // import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion";
// import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

// function ExperienceAccordion(props) {
//   const theme = props.theme;
//   return (
//     <div className="experience-accord">
//       <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
//         <Accordion onChange={({ expanded }) => console.log(expanded)}>
//           {props.sections.map((section) => {
//             return (
//               <Panel
//                 className="accord-panel"
//                 title={section["title"]}
//                 key={section["title"]}
//               >
//                 {section["experiences"].map((experience) => {
//                   return (
//                     <ExperienceCard experience={experience} theme={theme} />
//                   );
//                 })}
//               </Panel>
//             );
//           })}
//         </Accordion>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default ExperienceAccordion;

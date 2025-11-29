import SectionTitle from "../SectionTitle/SectionTitle";
import Expertise from "../Skills/skill/Expertise";
const Skills = () => {
  return (
    <section id="skills" className="w-full pt-10 pb-20 px-2 ">
      <SectionTitle
        heading={"my Skills"}
        subHeading={"i have worked with these Technologies:"}
      ></SectionTitle>

      <div className=" ">
        <Expertise></Expertise>
      </div>
    </section>
  );
};

export default Skills;

import SectionTitle from "../SectionTitle/SectionTitle";
import Expertise from "./skill/expertise";

const Skills = () => {
    return (
        <section id="skills" className="w-full pt-10 pb-20 px-2 ">

            <SectionTitle
               heading={"my Skills are..."}
               subHeading={"i have worked with these Technologies:"}
            ></SectionTitle>

            <div className="flex items-center justify-center  ">
                <Expertise></Expertise>
            </div>
        </section>
    );
};

export default Skills;
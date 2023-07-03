import SectionTitle from "../SectionTitle/SectionTitle";
import './Resume.css'
import ResumeCard from "./ResumeCard";
const Resume = () => {
    return (
        <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
            <SectionTitle
                heading={"my resume"}
            >

            </SectionTitle>
            <div>
                <ul className="w-full grid grid-cols-4 gap-4">
                    <li className="resume-li">Education</li>
                    <li className="resume-li">Experience</li>
                    <li className="resume-li">Professional Skills</li>
                    <li className="resume-li">Projects</li>
                </ul>
            </div>
            <div className="ml-5 w-full h-[1000px] border-l-8 border-red-600">
                <ResumeCard></ResumeCard>
            </div>


        </section>
    );
};

export default Resume;
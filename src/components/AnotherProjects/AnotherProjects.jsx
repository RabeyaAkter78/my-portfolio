import { useEffect, useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import './AnotherProjects.css'
const AnotherProjects = () => {
    const [projectsInfo, setProjectsInfo] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjectsInfo(data);
            });
    }, []);
    return (
        <div className="projects-cards py-10 px-5 md:px-0 mt-5 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-between gap-14">


            {
                projectsInfo?.map((data, index) =>
                    <div key={index} className="cardd">
                        <img src={data.image} alt="" />

                        <div className="text-content px-2 ">
                            <h2 className='projects-h2 font-bold'> {data.heading} </h2>
                            <p>{data.sub_heading}</p>
                        </div>

                        <div className='show-site-card px-4'>
                            <p className='text-left'> <span className='font-bold'>Techonologis</span> : {data.techonologis} </p>
                            <div className='flex justify-evenly mx-auto w-8/12  mt-1'>
                                <a href={data.liveLink} className='cursor-pointer font-semibold hover:text-red-800 duration-500 flex  justify-center text-red-500 drop-shadow-lg items-center ' > <FaEye className='text-xl me-1'></FaEye> Live Link </a>
                                <a href={data.gitLink} className='cursor-pointer font-semibold hover:text-red-800 duration-500  justify-center text-red-500 drop-shadow-lg items-center flex' > <FaGithub className='text-xl me-1'></FaGithub> Git Link </a>
                            </div>

                        </div>

                    </div>

                )
            }



        </div>
    );
};

export default AnotherProjects;
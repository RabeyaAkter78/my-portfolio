import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";
import img1 from '../../assets/images/projects/danceAcademy/1.png';
const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProjects')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            }

            )
    }, [])


    return (
        <div>
            <SectionTitle
                subHeading={"visit my projects and keep your feedback..."}
                heading={"My Projects"}
            ></SectionTitle>
            <div data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-6 items-center md:ml-16 lg:ml-2 ">
                {projects.map(data => <div key={data._id}
                >

                    <div className="card w-72 h-80  md:w-96 md:h-96 bg-slate-400  rounded-lg shadow-2xl bg-gradient-to-r from-transparent via-transparent to-neutral-700  group-hover:bg-gradient-to-b hover:from-gray-500 hover:bg-gray-700 transition-colors duration-1000">
                        <figure>
                            <img src={data.image} alt="Project Image" className="rounded-xl w-full h-auto object-cover group-hover:scale-x-150 duration-300 cursor-pointer" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-white">Name: {data.heading}</p>
                            <p className="text-white">Description: {data.sub_heading}</p>
                            {/* <p className="text-white">Technologies: {data.technologies}</p> */}

                            <div className="card-actions flex">

                                <a href={data.liveLink}>
                                    <button className='tooltip btn btn-outline border-0 border-b-4 border-black  border-l-2 shadow-md shadow-2xl shadow-black text-sky-950' data-tip="Live-preview"><FaRegArrowAltCircleUp></FaRegArrowAltCircleUp></button>
                                </a>



                                <a href={data.client}>
                                    <button className='tooltip btn btn-outline border-0 border-b-4 border-black  border-l-2 shadow-md shadow-2xl shadow-black text-sky-950' data-tip="Client-side"><FaGithub></FaGithub></button>
                                </a>

                                <a href={data.server}>
                                    <button className='tooltip btn btn-outline border-0 border-b-4 border-black  border-l-2 shadow-md shadow-2xl shadow-black text-sky-950' data-tip="Server-side"><FaGithub></FaGithub></button>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>)}


            </div>



        </div>
    );
};

export default AllProjects;
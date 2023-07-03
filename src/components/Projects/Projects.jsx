import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from '../../assets/images/projects/danceAcademy/1.png';
import img2 from '../../assets/images/projects/danceAcademy/p2.png'
import img3 from '../../assets/images/projects/danceAcademy/p-3 (1).png';
import {  FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";
// import { useEffect, useState } from "react";
import './Projects.css';
const Projects = () => {
// TODO: THE PROJECTS MUST HAVE TO DYNAMIC;

// const [projectsInfo,setProjectsInfo]=useState([]);

// useEffect(() => {
//     fetch('projects.json')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             setProjectsInfo(data);
//         })
// }
//     , [])

    return (
<div id="projects" className="w-full pt-10 pb-20 px-2" >
            <SectionTitle
                subHeading={"visit my projects and keep your feedback..."}
                heading={"My Projects"}
            ></SectionTitle>


            <div data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
           className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-6 items-center md:ml-16 lg:ml-2">
                <div className="card w-72 h-80  md:w-96 md:h-96 bg-slate-400 px-2 lg:px-4 py-3 lg:py-4 rounded-lg shadow-2xl bg-gradient-to-r from-transparent via-transparent to-neutral-700  group-hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000">
                    <figure>
                        <img src={img1} alt="Shoes" className="rounded-xl w-full h-auto object-cover group-hover:scale-x-150 duration-300 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className="text-black">A full stack project of an e-learning platform.</p>
                        <div className="card-actions flex">

                            <a href="https://dance-academy-72a3f.web.app/">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2 shadow shadow-md shadow-2xl shadow-black text-sky-950' data-tip="Live-preview"><FaRegArrowAltCircleUp></FaRegArrowAltCircleUp></button>
                            </a>



                            <a href="https://github.com/RabeyaAkter78/dance-academy-client">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2 shadow shadow-md shadow-2xl shadow-black text-sky-950' data-tip="Client-side"><FaGithub></FaGithub></button>
                            </a>

                            <a href="https://github.com/RabeyaAkter78/dance-academt-server">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2  shadow-2xl shadow-black text-sky-950' data-tip="Server-side"><FaGithub></FaGithub></button>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="card w-72 h-80  md:w-96 md:h-96 bg-slate-400 px-2 lg:px-4 py-3 lg:py-4 rounded-lg shadow-2xl bg-gradient-to-r from-transparent via-transparent to-neutral-700  group-hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000">
                    <figure>
                        <img src={img2} alt="Shoes" className="rounded-xl w-full h-auto  object-cover group-hover:scale-110 duration-300 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className="text-black" >This is a virtual Toy store website</p>
                        <div className="card-actions flex">

                            <a href="https://kidolls-client.web.app/">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2   shadow-2xl shadow-black text-sky-950' data-tip="Live-preview"><FaRegArrowAltCircleUp></FaRegArrowAltCircleUp></button>
                            </a>

                            <a href="https://github.com/RabeyaAkter78/kidolls-client">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2 shadow-2xl shadow-black text-sky-950' data-tip="Client-side"><FaGithub></FaGithub></button>
                            </a>
                            <a href="https://github.com/RabeyaAkter78/kidolls-server">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2  shadow-2xl shadow-black text-sky-950' data-tip="Server-side"><FaGithub></FaGithub></button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="card w-72 h-80  md:w-96 md:h-96 bg-slate-400 px-2 lg:px-4 py-3 lg:py-4 rounded-lg shadow-2xl bg-gradient-to-r from-transparent via-transparent to-neutral-700  group-hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000">
                    <figure className="">
                        <img src={img3} alt="Shoes" className="rounded-xl w-full h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className="text-black">This is a Cooking website</p>
                        <div className="card-actions flex">

                            <a href="https://the-chefs-pantry-client.web.app/">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2  shadow-2xl shadow-black text-sky-950' data-tip="Live-preview"><FaRegArrowAltCircleUp></FaRegArrowAltCircleUp></button>
                            </a>

                            <a href="https://github.com/RabeyaAkter78/the-chefs-pantry-client">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2  shadow-2xl shadow-black text-sky-950' data-tip="Client-side"><FaGithub></FaGithub></button>
                            </a>


                            <a href="https://github.com/RabeyaAkter78/the-chefs-pantry-server">
                                <button className='tooltip btn btn-outline border-0 border-b-4 border-l-2  shadow-2xl shadow-black text-sky-950' data-tip="Server-side"><FaGithub></FaGithub></button>
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>


       
    );
};

export default Projects;


 

//         <div  id="projects" className="projects-cards py-10 px-5 md:px-0 mt-5 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-between gap-14">

//         <SectionTitle
//             subHeading={"visit my projects and keep your feedback..."}
//             heading={"My Projects"}
//         ></SectionTitle>

        
// {
// projectsInfo?.map((data, index) =>
//     <div key={index} className="cardd">
//         <img src={data.image} alt="" />

//         <div className="text-content px-2 ">
//             <h2 className='projects-h2 font-bold'> {data.heading} </h2>
//             <p>{data.sub_heading}</p>
//         </div>

//         <div className='show-site-card px-4'>
//             <p className='text-left'> <span className='font-bold'>Techonologis</span> : {data.techonologis} </p>
//             <div className='flex justify-evenly mx-auto w-8/12  mt-1'>
//                 <a href={data.liveLink}  className='cursor-pointer font-semibold hover:text-red-800 duration-500 flex  justify-center text-red-500 drop-shadow-lg items-center ' > <FaEye className='text-xl me-1'></FaEye> Live Link </a>

//                 <a href={data.gitLink}  className='cursor-pointer font-semibold hover:text-red-800 duration-500  justify-center text-red-500 drop-shadow-lg items-center flex' > <FaGithub className='text-xl me-1'></FaGithub> Git Link </a>

//             </div>

//         </div>

//     </div>

// )
// }



// </div>

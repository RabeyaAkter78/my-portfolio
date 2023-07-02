import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/images/projects/danceAcademy/contact.jpg'
import { FaFacebook, FaLinkedin, } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_752yot8', 'template_d4qqvbq', form.current, '5_yiMAnfYPHBXCqBp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className="w-full pt-10 pb-20 px-2 border-b-[1px] border-b-black">

            <SectionTitle
                subHeading={"Contact"}
                heading={"COntact With me"}
            ></SectionTitle>
            <div className="w-full  ">
                <div className="w-full h-auto flex justify-between ">
                    <div className="w-[35%] h-full bg-gradient-to-r from-slate-700 to-slate-950 p-2 shadow-2xl flex flex-col gap-8 justify-center">
                        <img className="rounded-lg " src={img} alt="" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-white">Rabeya Akter</h3>
                            <p className="text-lg font-normal text-gray-400">Bagerhat,Bangladesh.</p>

                            <p className="text-base text-gray-400 flex items-center gap-2"
                            > Phone: <span className="text-yellow-50">+88 01969-687876</span></p>
                            <p className="text-base text-gray-400 flex items-center gap-2"
                            > Email: <span className="text-yellow-50">rabeyaakter7876@gmail.com</span></p>
                            <div >
                                <h2 className="underline text-base uppercase mb-4">Find Me In</h2>
                                <h3 className=" text-white">Feel Free to Contact Me</h3>
                                <div className="flex  gap-4">
                                    <a href="https://web.facebook.com/profile.php?id=100067773861189">
                                        <span className="w-16 h-16 bg-black hover:text-blue-600 hover:bg-black bg-opacity-25 text-gray-200 text-xl inline-flex justify-center items-center rounded-lg"><FaFacebook></FaFacebook></span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/rabeya-akter-52662622a/">
                                        <span className="w-16 h-16 bg-black hover:text-blue-600 hover:bg-black bg-opacity-25 text-gray-200 text-xl inline-flex justify-center items-center rounded-lg"><FaLinkedin></FaLinkedin></span>
                                    </a>
                                   

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="w-[60%] h-full py-10 bg-gradient-to-r from-slate-700 to-slate-950 shadow-2xl flex flex-col gap-8 p-8 rounded-lg">
                        <form ref={form} onSubmit={sendEmail} className="w-full" >
                            <div className="flex gap-10 mb-4">
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase">Your Name</p>
                                    <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none" type="text" name="from_name" required />
                                </div>
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase">phone number</p>
                                    <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none" type="text" />
                                </div>
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Email</p>
                                <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-4 " type="email" name="user_email" required/>
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Subject</p>
                                <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10" type="text" required/>
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Message</p>
                                <textarea className="w-full h-48 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10" name="message" />
                            </div>
                            <div>
                                <input className='w-full  rounded-lg  border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10 btn btn-outline border-0 border-b-4 border-l-2  shadow-md shadow-2xl shadow-black ' type="submit" value="Send"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Contact;
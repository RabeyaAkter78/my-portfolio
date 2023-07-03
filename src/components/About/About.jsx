import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/images/projects/danceAcademy/a.png'
const About = () => {
  return (
    <section id="about" className="  pt-10 pb-20  border-b-[1px] border-b-black">
      <SectionTitle
        heading={"About me"}
      ></SectionTitle>

      {/* <div data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >

        <div className="bg-base-200 shadow-2xl shadow-black w-full flex justify-center items-center gap-6  ">

          <div>
            <img src={img} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="">
            <p className="py-6"><span className="text-2xl font-bold" >Myself</span> Hi, I'm Rabeya Akter From Bagerhat,Bangladesh.I am a creative web developer with expertise in React JS, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS. I enjoy crafting engaging and user-friendly websites.I hold a Diploma in Computer Engineering from Gopalganj Polytechnic Institute and can communicate fluently in Bangla and English, and have a basic understanding of Hindi. Let's create something amazing together!</p>

            <p className="py-6"><span className="text-2xl font-bold" >Projects </span> With six months of hands-on experience as a front-end developer specializing in the MERN stack, I have successfully completed over <span className="text-3xl font bold">20+</span> projects. These projects highlight my expertise in creating impactful user interfaces using React. Please explore the projects section for a closer look at my work.</p>

            <p className="py-6"><span className="text-2xl font-bold" >Contact </span>   Let's connect! Reach me at Phone: <span className="text-lg font-bold">+88 01969 687876</span> or Email:<span className="text-lg font-bold"> rabeyaakter7876@gmail.com</span> . Looking forward to engaging in fruitful discussions and potential collaborations. </p>
          </div>


        </div>
      </div> */}


      <div className="w-ful h-auto grid grid-cols-1 ">

        <div data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >

          <div className="flex justify-center items-center relative">
            <img className='w-72 items-center rounded-full border-0 border-b-8  border-b-black  shadow-2xl shadow-gray-500 z-10 mb-4' src={img} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="90"
          data-aos-duration="1500"

          className="card p-16 rounded-lg border-0 border-b-2 border-b-neutral-800 shadow-2xl shadow-gray-500 ">
          <p className="py-6"><span className="text-2xl font-bold" >Myself</span> Hi, I'm Rabeya Akter From Bagerhat,Bangladesh.I am a creative web developer with expertise in React JS, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS. I enjoy crafting engaging and user-friendly websites.I hold a Diploma in Computer Engineering from Gopalganj Polytechnic Institute and can communicate fluently in Bangla and English, and have a basic understanding of Hindi. Let's create something amazing together!</p>

          <p className="py-6"><span className="text-2xl font-bold" >Projects </span> With six months of hands-on experience as a front-end developer specializing in the MERN stack, I have successfully completed over <span className="text-3xl font bold">20+</span> projects. These projects highlight my expertise in creating impactful user interfaces using React. Please explore the projects section for a closer look at my work.</p>

          <p className="py-6"><span className="text-2xl font-bold" >Contact </span>   Let's connect! Reach me at Phone: <span className="text-lg font-bold">+88 01969 687876</span> or Email:<span className="text-lg font-bold"> rabeyaakter7876@gmail.com</span> . Looking forward to engaging in fruitful discussions and potential collaborations. </p>
        </div>
      </div>


    </section>
  );
};

export default About;
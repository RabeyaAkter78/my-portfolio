import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/images/projects/danceAcademy/a.png'
const About = () => {
  return (
    <section id="about" className="  pt-10 pb-20  border-b-[1px] border-b-black">
      <SectionTitle
        heading={"About me"}
      ></SectionTitle>

      <div className="w-ful grid grid-cols-1 ">
        <div className="flex justify-center items-center relative">
          <img className='w-72 items-center rounded-full border-0 border-b-8  border-b-black  shadow-2xl shadow-gray-500 z-10 mb-4' src={img} alt="" />
        </div>
        <div className="card h-96 p-16 rounded-lg border-0 border-b-2 border-b-neutral-800 shadow-2xl shadow-gray-500 ">
          <h3 className="text-md font-sans text-yellow-50"> <em><span className="text-6xl font-bold">H</span></em>ello!
            <br />
            I'm Rabeya Akter From Bagerhat,Bangladesh.I am a creative web developer with expertise in React JS, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS. I enjoy crafting engaging and user-friendly websites. With strong time management and teamwork skills, I thrive in collaborative environments. I'm a quick learner and always stay updated with industry trends. Familiarity with Express JS, MongoDB, and Firebase adds to my versatility. I also have experience with Node JS. Proficient in GitHub, Netlify, Vercel, Figma, VS Code, and Chrome Dev Tools, I streamline my development process. I hold a Diploma in Computer Engineering from Gopalganj Polytechnic Institute and can communicate fluently in Bangla and English, and have a basic understanding of Hindi. Let's create something amazing together!</h3>
        </div>
      </div>


    </section>
  );
};

export default About;
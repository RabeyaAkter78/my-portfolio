import SectionTitle from "../SectionTitle/SectionTitle";

const Experience = () => {
  return (
    <section className="mb-16" data-aos="fade-up" data-aos-delay="100">
        <SectionTitle heading="Experience" />

      <div className="space-y-6 text-lg leading-relaxed">
        <div className="shadow-lg p-6 rounded-xl border-l-4 border-orange-400">
          <h4 className="text-xl font-semibold mb-1">
            Frontend Developer – Sparktech Agency
          </h4>
          <p className="text-sm text-gray-400 italic">Aug 2024 – Present</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>
              Gained 1 year of hands-on experience developing scalable web apps
              using modern frontend stacks.
            </li>
            <li>
              Worked extensively with{" "}
              <strong>
                Next.js, React.js, TypeScript, Redux Toolkit, Tailwind CSS,
                ShadCN UI
              </strong>
              , and <strong>Ant Design</strong>.
            </li>
            <li>
              Completed and delivered <strong>25+ frontend projects</strong>{" "}
              ranging from landing pages to full-scale web applications.
            </li>
            <li>
              Delivered pixel-perfect, responsive, and accessible UIs for both
              desktop and mobile devices.
            </li>
            <li>Applied Git/GitHub for version control.</li>
          </ul>
        </div>

        {/* <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-pink-500">
          <h4 className="text-xl font-semibold mb-1">Freelance Web Developer</h4>
          <p className="text-sm text-gray-600 italic">2021 – 2022</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>
              Delivered 20+ fully responsive and dynamic web applications for clients across diverse industries.
            </li>
            <li>
              Specialized in turning Figma/PSD designs into interactive and maintainable React applications.
            </li>
            <li>
              Communicated directly with clients, gathered requirements, and delivered projects on time with attention to detail.
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;

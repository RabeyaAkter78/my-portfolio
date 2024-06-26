
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="flex flex-col gap-4 mb-14 p-4">
            <h3 className="text-xl font-light  tracking-wide uppercase">{subHeading}</h3>
            <h2 className="text-4xl font-bold capitalize text-orange-500">{heading}</h2>
        <hr className="w-1/2 border-b border-b-orange-400" />
        </div>
    );
};

export default SectionTitle;
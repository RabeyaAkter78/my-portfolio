
const ResumeCard = () => {
    return (
        <div className="w-full h-1/3 bg-sky-600">
            <div className="w-10 h-[6px] mt-16 relative bg-red-800  ">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 ">
                    <span className="w-3 h-3 rounded-full bg-white inline-flex group-hover:bg-red-950 duration-300"></span>

                </span>

            </div>
            <div></div>
        </div>
    );
};

export default ResumeCard;
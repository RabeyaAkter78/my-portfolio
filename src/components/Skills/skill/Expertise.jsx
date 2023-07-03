import { useEffect, useState } from "react";

const Expertise = () => {
    const [expertise, setExpertise] = useState([]);


    useEffect(() => {
        fetch('expertise.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setExpertise(data);
            })
    }
        , [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-6">
                {
                    expertise.map(data => <div key={data._id}
                    >
                        <div className="w-52 h-48 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black rounded flex flex-col justify-center items-center">
                            <div className="w-1/2">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-0 group-hover:scale-125 rounded-lg" src={data.image} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-500  "></div>
                            <div className=" absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-6">
                                <h1 className="font-serif  text-3xl font-bold pb-28 text-black">{data.title}</h1>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Expertise;

// group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70
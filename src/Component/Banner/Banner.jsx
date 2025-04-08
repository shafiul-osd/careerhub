import user from "../../assets/user.png"
const Banner = () => {
    return (
        <div className="flex gap-4 mt-2 items-center">
            <div>
                <h2 className="text-6xl font-bold">One Step <br /> Closer To Your <span className="text-indigo-400">Dreem Job</span></h2>
                <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-[#7e90fe] p-2 rounded-lg text-white mt-2">Get Started</button>
            </div>
            <div>
                <img className="ml-10" src={user}alt="" />
            </div>
        </div>
    );
};

export default Banner;
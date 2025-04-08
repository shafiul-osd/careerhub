import user from "../../assets/user.png"
const Banner = () => {
    return (
        <div className="flex gap-4 mt-2 items-center">
            <div>
                <h2 className="text-6xl font-bold">One Step <br /> Closer To Your <span className="text-indigo-400">Dreem Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img className="" src={user}alt="" />
            </div>
        </div>
    );
};

export default Banner;
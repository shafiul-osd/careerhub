import { MdOutlineAddLocation } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const Job = ({job}) => {

    const {logo,jobTitle,companyname,location,salary,remoteoronsite,jobtype} = job

    return (
        <div className="border border-gray-200 p-8 rounded-lg">
            <div>
            <img className="w-20 h-16" src={logo} alt="" />
            <h2>{jobTitle}</h2>
            <h3>{companyname}</h3>
            <div className="flex gap-2 text-sm">
                <button className="border border-gray-400 px-2 py-1 rounded-lg">{remoteoronsite}</button>
                <button className="border border-gray-400 px-2 py-1 rounded-lg">{jobtype}</button>
            </div>
            {/* location ar salery flex korar div ayta */}
            <div className="flex items-center gap-4">
                {/* Location er div ayta */}
                <div className="flex items-center">
                    <span><MdOutlineAddLocation /></span>
                    <h2>{location}</h2>
                </div>
                {/* salary div ayta */}
                <div className="flex items-center">
                    <span><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine></span>
                    <h2>salary:{salary}</h2>
                </div>

            </div>
            <button className="bg-[#5465ce] p-2 rounded-lg text-white">View Details</button>
            </div>
        </div>
    );
};

export default Job;
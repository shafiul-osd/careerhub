
import { AiTwotoneAccountBook } from "react-icons/ai";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillDribbbleSquare } from "react-icons/ai";
import { AiFillBilibili } from "react-icons/ai";
const CatagoryList = () => {
    return (
        <div>
           <div className="text-center mt-10">
           <h2 className="font-bold text-2xl">Job Category List</h2>
           <p className="text-sm text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
            <div className="grid grid-cols-4 gap-4 ml-12 mt-10">
                <div className="bg-gray-100 p-8 rounded-lg">
                <p><AiTwotoneAccountBook /></p>
                <h2>Account & Finance</h2>
                <p>300 Jobs Available</p>
                </div>
                {/* 2nd div ayta */}
                <div className="bg-gray-100 p-8 rounded-lg">
                    <p><AiFillAlipayCircle></AiFillAlipayCircle></p>
                    <h2>Creative Design</h2>
                    <p>100+ Jobs Available</p>
                </div>
                {/* 3rd div ayta */}
                <div className="bg-gray-100 p-8 rounded-lg">
                    <p><AiFillDribbbleSquare></AiFillDribbbleSquare></p>
                    <h2>Marketing & Sales</h2>
                    <p>150 Jobs Available</p>
                </div>
                {/* 4th div ayta and last part */}
                <div className="bg-gray-100 p-8 rounded-lg">
                    <p><AiFillBilibili></AiFillBilibili></p>
                    <h2>Engineering Job</h2>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CatagoryList;
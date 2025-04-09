import Banner from "./Banner/Banner";
import CatagoryList from "./CatagoryList/CatagoryList";
import Featuredjobs from "./Featuredjobs/Featuredjobs";


const Statistics = () => {
    return (
        <div className="px-10">
          <Banner></Banner>
          <CatagoryList></CatagoryList>
          <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Statistics;

import Banner from "../../Components/Shared/Banner";
import Offer from "../../Components/Shared/Offer";
import UsedApp from "../../Components/UsedApp/UsedApp";
import About from "../About/About";



const Home = () => {
   
    return (
        <div>
            <Banner/>
            <About/>
            <Offer/>
            <UsedApp/>
        </div>
    );
};

export default Home;
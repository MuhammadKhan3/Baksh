import HomeHeader from "./homeHeader";
import NavigationMenu from "../../components/navigationMenu";
import Property from "../../components/properties";
import Header from "../../components/header";
import HomeContent from "./homeContent";
import BottomNavigation from "../../components/bottomNavigation";
const Home=()=>{
    return (
    <div className="flex flex-col relative h-screen   mb:h-[92.7vh]   w-full" >
        <HomeHeader/>
        <HomeContent/>        
        <div className="block sm:hidden">
          <BottomNavigation/>
        </div>
    </div>
        )
}
export default Home;
import { Outlet } from "react-router-dom";
import DeskNav from "./DashBoardNav/DeskNav";
import MobileNav from "./DashBoardNav/MobileNav";


const Dashboard = () => {

    return (
    <div className=''>
          <div className="grid grid-cols-6 ">
              <div className="min-h-screen rounded-lg col-span-1">
                  <div>
                      <DeskNav className="hidden lg:block" />
                      <MobileNav className="block lg:hidden" />
                  </div>
              </div>

              <div className="min-h-screen bg-gray-100 col-span-5">
                  <Outlet />
              </div>
          </div>
      </div> 
    );
};

export default Dashboard;


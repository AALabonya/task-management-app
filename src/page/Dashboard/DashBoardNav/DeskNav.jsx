
import { NavLink } from "react-router-dom";
import { FaHome, FaEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';

const DeskNav = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className='hidden lg:block'>
                <div className="flex h-screen flex-col justify-between border-e">
                    <div className="px-4 py-6">
                        <span className="grid place-content-center rounded-lg text-xs text-gray-600">
                          <img src="https://i.postimg.cc/13Nzyzw4/logooooooooooooooooooo11.jpg" alt="" className="w-20 rounded-full" />
                        </span>

                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-start items-center"><NavLink to="/dashboard/userDashboard">
                                <div className="flex items-center gap-2 mb-5 mt-6">
                                    <FaHome />{user && user.displayName ? user.displayName : ''} <small className="text-[10px]">[Task]</small>
                                   
                                </div></NavLink></li>

                            <li><NavLink to="/dashboard/createNewTask">
                                <div className="flex items-center gap-2 mb-5"><FaEdit />
                                    Add Task</div></NavLink></li>
                            <li><NavLink to="/dashboard/seePreviousTask">
                                <div className="flex items-center gap-2 mb-5">
                                    <BiSkipPreviousCircle />
                                  Previous Tasks</div></NavLink></li>

                            <li onClick={logOut}><NavLink to="/signIn ">
                                <div className="flex items-center gap-2 mb-5 "><CiLogout />
                                    Logout</div></NavLink></li>
                            <div className="border border-gray-700"></div>
                            <li><NavLink to="/">
                                <div className="flex items-center gap-2 mb-5 mt-10">
                                    <FaHome />
                                    Home</div></NavLink></li>
                            <li><NavLink to="/about">
                                <div className="flex items-center gap-2 mb-5 mt-10">
                                    <FcAbout />
                                    About</div></NavLink></li>
                        </ul>
                    </div>

                    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                           
                                <img src={user?.photoURL} alt="" className="rounded-full w-12" /> 

                            <div>
                                <p className="text-xs">
                                    <strong className="block font-medium">{user && user.displayName ? user.displayName : ''}</strong>

                                    <span> {user && user.email ? user.email : ''}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeskNav;
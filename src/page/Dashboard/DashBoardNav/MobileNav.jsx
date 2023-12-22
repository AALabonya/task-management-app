import { Link } from 'react-router-dom'
import { FaHome, FaEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FaChalkboardUser } from "react-icons/fa6";
import useAuth from '../../../hooks/useAuth';
const MobileNav = () => {
    const { logOut } = useAuth()
    return (
        <div className='block lg:hidden'>
            <div className="flex h-screen w-full flex-col justify-between border-e">
                <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center">
                        <span className="grid place-content-center rounded-lg text-xs text-gray-600">
                            <img src="https://i.postimg.cc/13Nzyzw4/logooooooooooooooooooo11.jpg" alt="" className="w-8 rounded-full" />
                        </span>
                    </div>

                    <div className="border-t border-gray-100">
                        <div className="px-2">
                            <div className="py-4">
                                <Link
                                    to="/dashboard/userDashboard"
                                    className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                                >
                                    <FaChalkboardUser />
                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                       Profile
                                    </span>
                                </Link>
                            </div>

                            <ul className="space-y-1 border-t border-gray-100 pt-4">
                                <li>
                                    <Link
                                        to="/dashboard/createNewTask"
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <FaEdit />

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Add Task
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href=""
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <BiSkipPreviousCircle />

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            previous task
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        onClick={logOut}
                                        to="/signIn "
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <CiLogout />

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Logout
                                        </span>
                                    </Link>
                                </li>
                                <div className="border border-gray-700"></div>
                                <li>
                                    <Link
                                        href=""
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <FaHome />

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <FcAbout />

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            About
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                    <form action="/logout">
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>

                            <span
                                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                            >
                                Logout
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default MobileNav;
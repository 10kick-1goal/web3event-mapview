import { Link, Outlet } from "react-router-dom";

const Header = () =>{
    return (
        <div className="w-full h-12 px-[50px] flex gap-[50px] items-center bg-slate-400">
            <div>
                <h1 className=" text-lime-300 font-bold text-2xl">Web3Event</h1>
            </div>
            <div className="flex gap-[30px] text-white">
                <Link className="p-3 hover:bg-slate-800" to="/explore/event">Explore</Link>
                <Link className="p-3 hover:bg-slate-800" to="/map">Map</Link>
            </div>
        </div>
    );
};
 export default Header;
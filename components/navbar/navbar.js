import Brand from "./brand";
import NavList from "./navList";

export default function Navbar() {
    return (
        <div className='px-6 py-4 flex justify-between w-full items-center'>
            <Brand />
            <NavList />
        </div>
    )
}
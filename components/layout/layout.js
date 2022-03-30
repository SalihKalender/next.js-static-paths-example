import Navbar from "../navbar/navbar";

export default function Layout({children}) {
    return (
        <div className='w-full m-0 p-0'>
            <Navbar />
            {children}
        </div>
    )
}
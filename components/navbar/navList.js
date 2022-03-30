import Link from 'next/link'

export default function NavList() {
    return (
        <ul className='flex'>
            <li className='flex align-middle justify-center'>
                <Link href='/'>
                    <a className='no-underline text-white py-3 px-6 bg-pink-700 text-xl rounded-l-xl hover:bg-pink-900 hover:shadow-xl'>Home</a>
                </Link>
            </li>
            <li className='flex align-middle justify-center'>
                <Link href='/posts'>
                    <a className='no-underline text-white py-3 px-6 bg-pink-700 text-xl hover:bg-pink-900 hover:shadow-xl'>Posts</a>
                </Link>
            </li>
            <li className='flex align-middle justify-center'>
                <a className='no-underline text-white py-3 px-6 bg-pink-700 text-xl rounded-r-xl hover:bg-pink-900 hover:shadow-xl cursor-pointer'>Contact</a>
            </li>
        </ul>
    )
}
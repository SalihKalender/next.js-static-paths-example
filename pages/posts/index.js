import Link from 'next/link'
export default function Posts({posts}) {
    return (
        <div className='w-full p-10 flex flex-wrap'>
            {
                posts.map((post, index) => (
                        <Link href={`http://localhost:3000/posts/${post.id}`} className='text-purple-400 font-bold cursor-pointer' key={index}>
                            <div className='flex flex-col justify-between items-center p-5 bg-gray-200 rounded-lg m-3 w-56 h-80 hover:bg-gray-400 cursor-pointer'>
                                <h4 className='font-bold text-base text-blue-500 self-start text-left'>
                                    {post.title}
                                </h4>
                                <p className='leading-6	italic text-sm'>
                                    {post.body}
                                </p>
                            </div>
                        </Link>
                ))
            }
        </div>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await res.json();
        return {
            props: {
                posts: data
            }
        }
    } catch (err) {
        console.log(err)
    }
}
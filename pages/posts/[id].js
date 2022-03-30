export default function PostDetail({post}) {
    return (
        <div className='ml-10 mt-10'>
            <h1 className='text-2xl font-bold'>
                {post.title}
            </h1>
            <p className='text-lg w-1/4'>
                {post.body}
            </p>
        </div>
    )
}

export async function getStaticPaths({params}) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const posts = await res.json()
        const paths = posts.map(post => (
            {params: {id: post.id.toString()}}
        ))
        return {
            paths,
            fallback: false
        }
    }
    catch (e) {
        console.log(e)
    }
}

export async function getStaticProps({params}) {
    const id = params.id.toString()
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await res.json()
        console.log(post.title)
        return {
            props: {
                post
            }
        }
    }
    catch(err) {
        console.log(err)
    }
}

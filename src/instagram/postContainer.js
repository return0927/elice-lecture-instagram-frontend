import Post from './post';

function PostContainer({ posts }) {
    return (<>
        {posts.map(post => <Post post={post}></Post>)}
    </>);
}

export default PostContainer;

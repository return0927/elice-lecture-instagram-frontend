function Post({ post }) {
    const { id, content, authorName } = post;
    return (
        <div>
            <img style={{ maxWidth: 200 }} src={`http://api.elice.enak.kr/post/${id}/attachment`}></img>
            <p>Photo by {authorName} - {content}</p>
        </div>
    );
}

export default Post;

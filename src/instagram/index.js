import axios from "axios";
import { useEffect, useState } from "react";
import PostContainer from "./postContainer";
import PostInput from "./postInput";

function InstagramApp() {
    const [posts, setPosts] = useState(undefined);

    useEffect(() => {
        async function fetch() {
            return (await axios.get("http://api.elice.enak.kr/post")).data;
        }

        fetch().then(data => setPosts(data));
    }, []);

    if (!posts) return <div>Loading...</div>
    return (<div>
        <PostInput />
        <PostContainer posts={posts} />
    </div>);
}

export default InstagramApp;

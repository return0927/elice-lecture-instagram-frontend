import axios from "axios";
import { useState } from "react";

function PostInput() {
    const [authorName, setAuthorName] = useState('');
    const [content, setContent] = useState('');
    const [attachment, setAttachment] = useState(undefined);

    function createPost(event) {
        event.preventDefault();

        async function sender() {
            const formData = new FormData();

            formData.set("authorName", authorName);
            formData.set("content", content);
            formData.set("attachment", attachment);

            return await axios({
                method: "POST",
                data: formData,
                url: "http://api.elice.enak.kr/post/",
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }

        sender().then(console.log);
    }

    // content, authorName, attachment
    return (<form onSubmit={createPost}>
        <input type={"text"} name="authorName" placeholder="작성자 이름"
            value={authorName} onChange={(e) => setAuthorName(e.target.value)}
        ></input>
        <input type={"text"} name="content" placeholder="내용"
            value={content} onChange={(e) => setContent(e.target.value)}
        ></input>
        <input type="file" name="attachment"
            onChange={(e) => setAttachment(e.target.files[0])}
        ></input>
        <button type="submit">제출</button>
    </form>);
}

export default PostInput;

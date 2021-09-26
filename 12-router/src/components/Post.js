import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Post = (props) => {
    const id = props.match.params.post_id
    const [post, setPost] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(res.data)
            setPost(res.data)
        })();
    }, []);
    return (
        <div className="card">
            <h5 className="card-header">{post.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default Post

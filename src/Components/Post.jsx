import Home from "./Home";
import loveImage from '../assets/love.png'
import '../App.css'
import { useEffect,useState} from "react";
import { Link } from "react-router-dom";
const Post = ({post,handleDelete,handleLike}) => {
    const [likeCount,setLikeCount] = useState(0)
    const clickLike = () => {
        handleLike(post)
        setLikeCount(likeCount+1)
    };
    useEffect(()=>{
            console.log(post.like);
    },[likeCount])
    return (
        <>
            <div className="post">
            <p>{post.create_at}</p>
                {/* <p>Post on {`${post.created_at.getMonth()}/${post.created_at.getDate()}/${post.created_at.getFullYear()}`}</p> */}
                <Link to={`/post/${post.postID}`}>{post.title}</Link>
                <div className="like">
                <p>{post.like}</p>
                <button><img src={loveImage} onClick={clickLike} /></button>
                </div>
            </div>
        </>
    )
}

export default Post;
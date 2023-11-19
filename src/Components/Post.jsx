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
                <p>Post on {`${post.date.getMonth()}/${post.date.getDate()}/${post.date.getFullYear()}`}</p>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
                <div className="like">
                <p>{post.like}</p>
                <button><img src={loveImage} onClick={clickLike} /></button>
                </div>
            </div>
        </>
    )
}

export default Post;
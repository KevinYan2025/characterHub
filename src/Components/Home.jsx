import Post from "./Post"
import '../App.css'
import { useEffect, useState } from "react"
import doraemon from '../assets/doraemon2.gif'
const Home = ({posts,setPosts,setShowCreate}) => {
    const showCreate = () => {setShowCreate(true)}
    showCreate()
    const handleLike = (post) => {
        post.like += 1;
    };

    const handleDelete = (deletePost) => {
        setPosts((prevPosts)=> prevPosts.filter((post) => post !== deletePost))
    }
    
    useEffect(() => {
            console.log('posts update success');
    },[posts])
    return (
        <>
            <div className="home">
                <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                            <Post post={post}  handleLike={handleLike}/>
                    </li>
                ))}
                </ul>
                <img src={doraemon} alt="" autoPlay loop />
            </div>
        </>
    )
}

export default Home;
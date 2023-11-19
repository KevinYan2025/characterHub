import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../client';
const PostForm = ({posts,setPosts}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    // If editPostId is provided, set the form fields based on the post to edit
    if (params.id) {
      const postToEdit = posts.find((post) => post.id === params.id);
      if (postToEdit) {
        setTitle(postToEdit.title);
        setDescription(postToEdit.description);
      }
    }
  }, [params.id, posts]);

   
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(params.id){
             // If editing, update the existing post
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === params.id
                    ? { ...post, title: title, description: description }
                    : post
                )
            )
        } else {
            setPosts((prevPosts) => [
                ...prevPosts,{
                    id:uuidv4(),
                    date:new Date(),
                    title:title,
                    description:description,
                    like:0
            }
            ])
        }
        navigate('/')
    }
    return (
        <>
            <div className="postForm">
                <form>
                    <label>Title:
                        <input type="text" name='title' value={title} onChange={handleTitle}/>
                    </label>

                    <label>Description:
                        <input type="text" name='description' value={description} onChange={handleDescription}/>
                    </label>

                    <label>
                        <input type="submit" value="submit" onClick={handleSubmit}/>
                    </label>

                </form>
            </div>
        </>
    )
}

export default PostForm;
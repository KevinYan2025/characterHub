import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../client';
const PostForm = ({posts,setPosts,setShowCreate}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()
  const params = useParams()
  const showCreate = () => {setShowCreate(false)}
  showCreate()
  useEffect(() => {
    // If editPostId is provided, set the form fields based on the post to edit
    if (params.id) {
      const postToEdit = posts.find((post) => post.postID === params.id);
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
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(params.id){
             // If editing, update the existing post

            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.postID === params.id
                    ? { ...post, title: title, description: description }
                    : post
                )
            )
            const {data,error} = 
                    await supabase
                        .from('Posts')
                        .update({title,description})
                        .eq('postID',params.id)
            if (error) {
                console.log("fail to update post",error);
            } else {
                console.log("successfully update post");
            }
        } else {

            const { data, error } = 
                    await supabase
                        .from('Posts')
                        .insert([
                            { title: title,
                             description: description,
                            postID:uuidv4(),
                        created_at:new Date()},
                        ])
                        .select()
            if (error) {
                console.log("Fail to insear post",error);
            } else {
                console.log(data);
            }
            setPosts((prevPosts) => [
                ...prevPosts,{
                    postID:uuidv4(),
                    created_at:new Date(),
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
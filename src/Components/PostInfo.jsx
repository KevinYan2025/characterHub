import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { supabase } from "../client"
const PostInfo = ({posts,handleDelete}) => {
    const navigate = useNavigate()
    const params = useParams()
    const findPostById = () =>  posts.find(post => post.postID === params.id)
    const post = findPostById()
    const onDelete = async () => {
        const {error} = await supabase
                            .from('Posts')
                            .delete()
                            .eq('postID',params.id)
        handleDelete(post)

         navigate('/')
    }
    const editPost = () => {navigate(`/post/edit/${params.id}`)}

    return (
            <>
                <div className="postInfo">
                    <Link to='/'>Go back</Link>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.create_at}</p>
                    {/* <p>Post on {`${post.created_at.getMonth()}/${post.created_at.getDate()}/${post.created_at.getFullYear()}`}</p> */}
                    <button onClick={editPost}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </>

    )
}

export default PostInfo;
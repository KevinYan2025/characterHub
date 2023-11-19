import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const PostInfo = ({posts,handleDelete}) => {
    const navigate = useNavigate()
    const params = useParams()
    const findPostById = () =>  posts.find(post => post.id === params.id)
    const post = findPostById()
    const onDelete = () => {
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
                    <p>Post on {`${post.date.getMonth()}/${post.date.getDate()}/${post.date.getFullYear()}`}</p>
                    <button onClick={editPost}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </>

    )
}

export default PostInfo;
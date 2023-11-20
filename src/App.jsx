import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from './Components/Header'
import Post from './Components/Post'
import Home from './Components/Home'
import PostForm from './Components/PostForm'
import PostInfo from './Components/PostInfo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from './client'
import './App.css'

function App() {
  const [showCreate,setShowCreate] = useState(false)
  const [posts,setPosts]= useState([{}])
  useEffect(()=> {
    const fetchPosts = async() => {
      try {
        let { data: Posts, error } = await supabase
        .from('Posts')
        .select('*')
        if (!error) {
          setPosts(Posts)
          console.log('successfully fectch posts',posts);
        } else {
          console.log("Fail to fetch posts. ",error);
        }
      } catch (error) {
            console.log("Fail to fetch posts. ",error);
      }
    }
    fetchPosts()
  },[])
  // const [posts,setPosts]= useState([
  //   {postID:uuidv4(),
  //     created_at:new Date(),
  //   title:"who is your favarite founding father",
  //   description:'sdasdas asd asd wasd asd as das',
  //   like:0
  //   },    
  //   {postID:uuidv4(),
  //     created_at:new Date(),
  //       title:"who is the best programmer",
  //       description:'Zhixiang Yan is the best programmer!',
  //       like:0
  //       }])
    

        const handleDelete = (deletePost) => {
          setPosts((prevPosts)=> prevPosts.filter((post) => post !== deletePost))
      }
  return (
    <>
      <BrowserRouter>
      <Header showCreate={showCreate}/>
          <Routes>
            <Route path='/' index={true} element={<Home posts={posts} setPosts={setPosts} setShowCreate={setShowCreate}/>}></Route>
              <Route path='/post/new'  element={<PostForm posts={posts} setPosts={setPosts} setShowCreate={setShowCreate}/>}/>
              <Route path='/post/edit/:id'  element={<PostForm posts={posts} setPosts={setPosts} setShowCreate={setShowCreate}/>}/>
              <Route path='/post/:id'  element={<PostInfo posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

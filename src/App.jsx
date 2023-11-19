import { useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from './Components/Header'
import Post from './Components/Post'
import Home from './Components/Home'
import PostForm from './Components/PostForm'
import PostInfo from './Components/PostInfo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [posts,setPosts]= useState([
    {id:uuidv4(),
      date:new Date(),
    title:"who is your favarite founding father",
    description:'sdasdas asd asd wasd asd as das',
    like:0
    },    
    {id:uuidv4()
      ,date:new Date(),
        title:"who is the best programmer",
        description:'Zhixiang Yan is the best programmer!',
        like:0
        }])

        const handleDelete = (deletePost) => {
          setPosts((prevPosts)=> prevPosts.filter((post) => post !== deletePost))
      }
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' index={true} element={<Home posts={posts} setPosts={setPosts}/>}></Route>
              <Route path='/post/new'  element={<PostForm posts={posts} setPosts={setPosts}/>}/>
              <Route path='/post/edit/:id'  element={<PostForm posts={posts} setPosts={setPosts}/>}/>
              <Route path='/post/:id'  element={<PostInfo posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

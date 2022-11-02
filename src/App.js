import React, { useState } from "react";
// import { ReactDOM } from "react";
// import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'JavaScript 1 ',desc:'Путь к React'},
    {id:2,title:'JavaScript 2',desc:'Путь к React'},
    {id:3,title:'JavaScript 3',desc:'Путь к React'}
  ])

  return (
    <div className="App">
      
    
      <PostList posts = {posts} title = 'Список постов' key = {posts.id}/>
 
    </div>
  );
}

export default App;

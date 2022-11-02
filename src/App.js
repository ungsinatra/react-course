import React, { useState } from "react";
// import { ReactDOM } from "react";
// import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button /Mybutton";
import MyInput from "./components/UI/Input/MyInput";
import './styles/App.css';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'JavaScript 1 ',desc:'Путь к React'},
    {id:2,title:'JavaScript 2',desc:'Путь к React'},
    {id:3,title:'JavaScript 3',desc:'Путь к React'}
  ])


  const [title,setTitle] = useState('');
  const [decs,setDesc] = useState('');

  const titleHandler = (evt) => {
    setTitle(evt.target.value);
  }

  const decsHandler = (evt) => {
    setDesc(evt.target.value)
    console.log(decs)
  }

  return (
    <div className="App">
      <form>
      <MyInput 
        type = 'text' 
        value = {title} 
        placeholder="Название поста"
        onChange = {titleHandler}
      
      />
      <MyInput 
      value = {decs}
      type = 'text' 
      placeholder="Описание поста" 
      onChange = {decsHandler}
      />  
      <MyButton  type="button">Создать пост</MyButton>
      </form>

    
      <PostList posts = {posts} title = 'Список постов' key = {posts.id}/>
 
    </div>
  );
}

export default App;

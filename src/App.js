import React, { useState } from "react";
import { ReactDOM } from "react";
import NameForm from "./components/form/NameForm";
// import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Greating from "./components/testsss/Greating";
import LoginControl from "./components/testsss/LoginControl";
import MyButton from "./components/UI/button /Mybutton";
import MyInput from "./components/UI/Input/MyInput";
import './styles/App.css';


function App() {
  // const [posts,setPosts] = useState([
  //   {id:1,title:'JavaScript 1 ',desc:'Путь к React'},
  //   {id:2,title:'JavaScript 2',desc:'Путь к React'},
  //   {id:3,title:'JavaScript 3',desc:'Путь к React'}
  // ])


  // const [title,setTitle] = useState('');
  // const [desc,setDesc] = useState('');

  // const titleHandler = (evt) => {
  //   setTitle(evt.target.value);
  // }

  // const decsHandler = (evt) => {
  //   setDesc(evt.target.value)
  // }


  // const addPost = (evt) => {
  //   evt.preventDefault();
  //   const newPost = {
  //     id:Date.now(),
  //     title,
  //     desc
  //   }

  //   console.log(newPost);
  //   setPosts([...posts,newPost]);
  //   setTitle('');
  //   setDesc('');

  // }

  // return (
    
  //   <div className="App">
  //     <form>
  //     <MyInput 
  //       type = 'text' 
  //       value = {title} 
  //       placeholder="Название поста"
  //       onChange = {titleHandler}
      
  //     />
  //     <MyInput 
  //     value = {desc}
  //     type = 'text' 
  //     placeholder="Описание поста" 
  //     onChange = {decsHandler}
  //     />  
  //     <MyButton   onClick = {addPost} type="submit">Создать пост</MyButton>
  //     </form>

    
  //     <PostList posts = {posts} title = 'Список постов' key = {posts.id}/>
 
  //   </div>
  // );

  return(
    <div>
      <NameForm />
    </div>
  )
}

export default App;

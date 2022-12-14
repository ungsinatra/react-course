import React from "react";

const PostItem = (props) => {
  console.log(props)
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <h1 className="post__title">{props.post.desc}</h1>
      </div>
      <div className="post__buttons">
        <button className="post__del-btn">Удалить</button>
      </div>
    </div>
  );
};


export default PostItem
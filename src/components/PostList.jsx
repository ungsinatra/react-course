import React from "react";
import PostItem from "./PostItem";


const PostList = ({ posts, title }) => {

    return (
        <div>
            <h1 className="header__title">{title}</h1>
            {posts.map((post,index) => {
                return <PostItem number = {index + 1} post={post} key={post.id} />
            })}
        </div>
    )

}

export default PostList;
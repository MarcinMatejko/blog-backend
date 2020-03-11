import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Post = ({ post }) => {
  const { deletePost } = useContext(GlobalContext);
  return (
    <div className="post">
      <h3 className="post-title">{post.title}<span><button className="delete-btn" onClick={() => deletePost(post._id)}>Usuń post</button></span></h3>
      <p>{post.text}</p>
      <p>Autor: <span className="post-author">{post.author}</span></p>
    </div>
  )
}

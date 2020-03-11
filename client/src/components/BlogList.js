import React, { useContext, useEffect } from 'react';
import { Post } from './Post';

import { GlobalContext } from '../context/GlobalState';

export const BlogList = () => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  return (
    <div>
      <h2>Wszystkie posty</h2>
      <div>
        {posts.map(post => (<Post key={post._id} post={post}/>))}
      </div>
    </div>
  )
}

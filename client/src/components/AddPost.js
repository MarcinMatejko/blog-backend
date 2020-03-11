import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const { addPost } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newPost = {
      title,
      text,
      author
    };
    
    addPost(newPost);
  }

  return (
    <div>
      <h2>Dodaj nowy post</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Autor:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Podaj autora posta" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Tytuł:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Podaj tytuł posta" />
        </div>
        <div className="form-control">
        <label htmlFor="text">Treść:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Dodaj treść twojego posta" />
        </div>
        
        <button className="btn">Dodaj post</button>
      </form>
    </div>
  )
}

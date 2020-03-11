import React from 'react';
import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { AddPost } from './components/AddPost';
import { Footer } from './components/Footer';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
        <div className="container">
          <BlogList />
          <AddPost />
          <Footer />
        </div>
    </GlobalProvider>
  );
}

export default App;

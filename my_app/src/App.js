import './App.css';
import React, { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token 6ecbf7a33df9f5c3b05594b3854b8857072be67a'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))
  }, [])


  return (
    <div className="container App">
      <h1>Django-React</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import { useCookies } from 'react-cookie'

function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token] = useCookies(['mytoken'])


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))
  }, [])





  const editBtn = (article) => {
    setEditArticle(article)
  }

  const deleteBtn = (article) => {
    const new_articles = articles.filter((old_article) => {
      if (old_article.id === article.id) {
        return false
      } else {
        return true
      }

    })
    setArticles(new_articles)
  }

  const updateInfo = (article) => {
    const new_articles = articles.map((old_article) => {
      if (old_article.id === article.id) {
        return article
      }
      else {
        return old_article
      }
    })
    setArticles(new_articles)
  }

  const insertedInfo = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const articleForm = () => {
    setEditArticle({ title: '', description: '' })
  }

  return (
    <div className="container App">
      <div className="row">
        <div className="col">
          <h1>Django-React</h1>
          <br />
        </div>
        <div className="col">
          <button onClick={articleForm} className="btn btn-primary">Insert Article</button>
        </div>

      </div>



      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn} />
      {editArticle ? <Form article={editArticle} updateInfo={updateInfo} insertedInfo={insertedInfo} /> : null}

    </div>
  );
}

export default App;

import React from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'

function ArticleList(props) {
    const [token] = useCookies(['mytoken'])

    const editBtn = (article) => {
        props.editBtn(article)
    }

    const deleteBtn = (article) => {
        APIService.deleteArticle(article.id, token['mytoken'])
            .then(() => props.deleteBtn(article))

    }

    return (
        <div>
            {props.articles && props.articles.map((article) => {
                return (
                    <div key={article.id} className="article-list">

                        <h3 >{article.title}</h3>
                        <p>{article.description}</p>

                        <button onClick={() => editBtn(article)} className="btn btn-success">Update</button>
                        <button onClick={() => deleteBtn(article)} className="btn btn-danger">Delete</button>
                        <hr />
                    </div>

                )
            }
            )}

        </div >

    )

}

export default ArticleList





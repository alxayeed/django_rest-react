import React from 'react'

function ArticleList(props) {
    return (
        <div>

            {props.articles && props.articles.map((article) => {
                return <div key={article.id} className="article-list">
                    <h3 >{article.title}</h3>
                    <p>{article.description}</p>
                    <hr />
                </div>
            })}
        </div>
    )
}

export default ArticleList

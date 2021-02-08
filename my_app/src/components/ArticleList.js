import React from 'react'
import APIService from '../APIService'

function ArticleList(props) {

    const editBtn = (article) => {
        props.editBtn(article)
    }

    const deleteBtn = (article) => {
        APIService.deleteArticle(article.id)
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


// return (
//     <div>

//         {props.articles && props.articles.map((article) => {
//             return (

//                     <h3 >{article.title}</h3>
//                     <p>{article.description}</p>

//                     

//                         <div>
//                             <button className="btn btn-danger">Delete</button>
//                         </div>
//                         <hr />




